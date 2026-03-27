import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, businessName, website } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Prodoria Beta <noreply@prodoria.com>', // ← fixed
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
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ message: 'Failed to send email', error });
    }

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ message: 'Unexpected error', error: String(err) });
  }
}