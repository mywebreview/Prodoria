import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import type { Plugin, Connect } from 'vite'
import type { IncomingMessage, ServerResponse } from 'http'

function sendEmailPlugin(resendApiKey: string): Plugin {
  return {
    name: 'send-email-dev',
    configureServer(server) {
      server.middlewares.use(
        '/api/sendEmail',
        async (req: IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
          if (req.method !== 'POST') return next()

          let body = ''
          req.on('data', (chunk: Buffer) => { body += chunk.toString() })
          req.on('end', async () => {
            try {
              const { name, email, phone, businessName, website } = JSON.parse(body)

              if (!name || !email) {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ message: 'Name and email are required.' }))
                return
              }

              const apiRes = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${resendApiKey}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  from: 'Prodoria Beta <prodoria@prodoria.com>',
                  to: ['hello@prodoria.com'],
                  subject: `New Beta Application from ${name}`,
                  html: `
                    <h2>New Beta Application</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                    <p><strong>Business Name:</strong> ${businessName || 'Not provided'}</p>
                    <p><strong>Website:</strong> ${website || 'Not provided'}</p>
                  `,
                }),
              })

              if (!apiRes.ok) {
                const err = await apiRes.json()
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ message: 'Failed to send email', error: err }))
                return
              }

              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ message: 'Email sent successfully!' }))
            } catch (err) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ message: 'Unexpected error', error: String(err) }))
            }
          })
        }
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss(), sendEmailPlugin(env.RESEND_API_KEY)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
