import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, CheckCircle2 } from "lucide-react";

const CTA_BG = "https://mgx-backend-cdn.metadl.com/generate/images/170285/2026-03-23/848de146-7a9b-4aae-9883-d38b852e7efb.png";

const trustLogos = [
    "Frame Blox",
    "Supa Blox",
    "Hype Blox",
    "Ultra Blox",
    "Ship Blox",
    "Core Blox",
];

export default function CTAAndBeta() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        businessName: "",
        website: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", email: "", businessName: "", website: "" });
    };

    const inputClasses =
        "w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white font-jakarta text-sm text-prodoria-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-prodoria-purple/40 focus:border-prodoria-purple/40 transition-all duration-200";

    return (
        <>
            {/* Social Proof / Trust Section */}
            <section className="py-16 px-6 bg-[#F8FAFC] border-t border-gray-100">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-jakarta text-sm text-prodoria-slate mb-8"
                    >
                        Trusted by modern businesses building for the future of search
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {trustLogos.map((logo) => (
                            <div
                                key={logo}
                                className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 shadow-sm font-jakarta text-sm font-medium text-prodoria-slate"
                            >
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-prodoria-orange/30 to-prodoria-purple/30" />
                                {logo}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 md:py-32 px-6 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={CTA_BG}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-prodoria-orange/80 via-prodoria-pink/80 to-prodoria-purple/80" />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-jakarta text-sm font-medium text-white/80 italic mb-4"
                    >
                        No stress, just flow.
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-jakarta font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight"
                    >
                        Ready to Be Found
                        <br />
                        by AI?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-jakarta text-base md:text-lg text-white/90 mt-5 max-w-lg mx-auto"
                    >
                        Start optimizing your AI visibility today. Join the beta and be among the first to harness the power of GEO, AEO, and LLM optimization.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-8"
                    >
                        <button
                            onClick={() =>
                                document
                                    .getElementById("beta-form")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-prodoria-dark font-jakarta font-semibold text-sm hover:bg-white/90 hover:shadow-xl transition-all duration-300"
                        >
                            Join Beta Program <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Beta Signup Form */}
            <section id="beta-form" className="py-20 md:py-28 px-6 bg-[#F8FAFC]">
                <div className="max-w-xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10"
                    >
                        <div className="text-center mb-8">
                            <h2 className="font-jakarta font-bold text-2xl md:text-3xl text-prodoria-dark">
                                Join the Beta
                            </h2>
                            <p className="font-jakarta text-sm text-prodoria-slate mt-2">
                                Be among the first to experience AI-powered visibility optimization.
                            </p>
                        </div>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center py-8 gap-3"
                            >
                                <CheckCircle2 className="w-12 h-12 text-green-500" />
                                <p className="font-jakarta font-semibold text-lg text-prodoria-dark">
                                    You're on the list!
                                </p>
                                <p className="font-jakarta text-sm text-prodoria-slate">
                                    We'll be in touch soon.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="font-jakarta text-xs font-medium text-prodoria-slate mb-1.5 block">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label className="font-jakarta text-xs font-medium text-prodoria-slate mb-1.5 block">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        required
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label className="font-jakarta text-xs font-medium text-prodoria-slate mb-1.5 block">
                                        Business Name
                                    </label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        placeholder="Your Company"
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label className="font-jakarta text-xs font-medium text-prodoria-slate mb-1.5 block">
                                        Website
                                    </label>
                                    <input
                                        type="url"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        placeholder="https://yourcompany.com"
                                        className={inputClasses}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-prodoria-orange via-prodoria-pink to-prodoria-purple text-white font-jakarta font-semibold text-sm hover:opacity-90 hover:shadow-lg transition-all duration-300 mt-2"
                                >
                                    <Send className="w-4 h-4" /> Submit Application
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-prodoria-dark py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Brand */}
                        <div>
                            <h3 className="font-jakarta font-bold text-xl text-white mb-3">
                                PRODORIA
                            </h3>
                            <p className="font-jakarta text-sm text-gray-400 leading-relaxed">
                                Engineering visibility for the AI era.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="font-jakarta font-semibold text-sm text-white mb-4">
                                Navigation
                            </h4>
                            <div className="flex flex-col gap-2.5">
                                <a
                                    href="#features"
                                    className="font-jakarta text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    Features
                                </a>
                                <a
                                    href="#how-it-works"
                                    className="font-jakarta text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    How It Works
                                </a>
                                <a
                                    href="#schema-generator"
                                    className="font-jakarta text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    Schema Generator
                                </a>
                                <a
                                    href="#beta-form"
                                    className="font-jakarta text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    Join Beta
                                </a>
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-jakarta font-semibold text-sm text-white mb-4">
                                Contact
                            </h4>
                            <div className="flex flex-col gap-2.5">
                                <a
                                    href="mailto:hello@prodoria.com"
                                    className="font-jakarta text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    hello@prodoria.com
                                </a>
                                <p className="font-jakarta text-sm text-gray-400">
                                    About
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="font-jakarta text-xs text-gray-500">
                            © 2026 PRODORIA. All rights reserved.
                        </p>
                        <p className="font-jakarta text-xs text-gray-500">
                            Built for the future of search.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}