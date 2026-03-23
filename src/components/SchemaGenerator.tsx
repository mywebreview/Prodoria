import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Code2 } from "lucide-react";

interface FormData {
    businessName: string;
    website: string;
    description: string;
    phone: string;
    address: string;
    socialLinks: string;
}

const initialFormData: FormData = {
    businessName: "",
    website: "",
    description: "",
    phone: "",
    address: "",
    socialLinks: "",
};

export default function SchemaGenerator() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [copied, setCopied] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const generateSchema = useCallback(() => {
        const socials = formData.socialLinks
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);

        const schema: Record<string, unknown> = {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: formData.businessName || "Your Business Name",
            url: formData.website || "https://yourbusiness.com",
            description:
                formData.description || "A brief description of your business.",
            ...(formData.phone && { telephone: formData.phone }),
            ...(formData.address && {
                address: {
                    "@type": "PostalAddress",
                    streetAddress: formData.address,
                },
            }),
            ...(socials.length > 0 && { sameAs: socials }),
        };

        return JSON.stringify(schema, null, 2);
    }, [formData]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(generateSchema());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = generateSchema();
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const inputClasses =
        "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-jakarta text-sm text-prodoria-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-prodoria-purple/40 focus:border-prodoria-purple/40 transition-all duration-200";

    return (
        <section id="schema-generator" className="py-20 md:py-28 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="font-jakarta text-sm font-semibold text-prodoria-purple uppercase tracking-wider mb-3">
                        Free Tool
                    </p>
                    <h2 className="font-jakarta font-bold text-3xl md:text-4xl lg:text-5xl text-prodoria-dark">
                        JSON-LD Schema Generator
                    </h2>
                    <p className="font-jakarta text-base text-prodoria-slate mt-4 max-w-lg mx-auto">
                        Generate structured data markup for your business in seconds. Help AI systems understand and recommend you.
                    </p>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#F8FAFC] rounded-2xl p-6 md:p-8 border border-gray-100"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Code2 className="w-5 h-5 text-prodoria-purple" />
                            <h3 className="font-jakarta font-semibold text-lg text-prodoria-dark">
                                Business Details
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="font-jakarta text-xs font-medium text-prodoria-slate mb-1.5 block">
                                    Business Name *
                                </label>
                                <input
                                    type="text"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    placeholder="e.g. PRODORIA"
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label className="font-jakarta text-xs font-medium text-prodoria-slate mb-1.5 block">
                                    Website URL *
                                </label>
                                <input
                                    type="url"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    placeholder="e.g. https://prodoria.com"
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label className="font-jakarta text-xs font-medium text-prodoria-slate mb-1.5 block">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Brief description of your business..."
                                    rows={3}
                                    className={`${inputClasses} resize-none`}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="font-jakarta text-xs font-medium text-prodoria-slate mb-1.5 block">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label className="font-jakarta text-xs font-medium text-prodoria-slate mb-1.5 block">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="123 Main St, City"
                                        className={inputClasses}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="font-jakarta text-xs font-medium text-prodoria-slate mb-1.5 block">
                                    Social Links (comma separated)
                                </label>
                                <input
                                    type="text"
                                    name="socialLinks"
                                    value={formData.socialLinks}
                                    onChange={handleChange}
                                    placeholder="https://twitter.com/..., https://linkedin.com/..."
                                    className={inputClasses}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Code Output */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="bg-[#1E1E2E] rounded-2xl p-6 md:p-8 h-full flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <span className="text-gray-400 text-xs font-mono ml-2">
                                        schema.json
                                    </span>
                                </div>
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-jakarta font-medium transition-colors duration-200"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="w-3.5 h-3.5" /> Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-3.5 h-3.5" /> Copy Code
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Code */}
                            <div className="flex-1 overflow-auto">
                                <pre className="text-sm font-mono leading-relaxed">
                                    <code className="text-gray-300">
                                        {`<script type="application/ld+json">\n${generateSchema()}\n</script>`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}