import { motion } from "framer-motion";
import { Database, MessageSquare, Eye } from "lucide-react";

const HOW_IT_WORKS_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/170285/2026-03-23/358d3147-09a4-441f-a698-569fd794e36e.png";

const steps = [
    {
        number: "01",
        icon: Database,
        title: "Structure Your Data",
        subtitle: "GEO",
        description: "We analyze and structure your business data with schema markup that AI systems can easily parse and understand.",
    },
    {
        number: "02",
        icon: MessageSquare,
        title: "Optimize for Answers",
        subtitle: "AEO",
        description: "Your content is optimized to directly answer the questions users ask AI assistants and search engines.",
    },
    {
        number: "03",
        icon: Eye,
        title: "Get Recommended by AI",
        subtitle: "LLM Visibility",
        description: "Watch as AI systems begin recommending your business to users searching for solutions you provide.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 md:py-28 px-6 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto">
                {/* Top Split Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    {/* Left - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="font-jakarta text-sm font-semibold text-prodoria-purple uppercase tracking-wider mb-3">
                            Why It Works
                        </p>
                        <h2 className="font-jakarta font-bold text-3xl md:text-4xl lg:text-5xl text-prodoria-dark leading-tight">
                            Built for AI Search.
                            <br />
                            Designed for{" "}
                            <span className="bg-gradient-to-r from-prodoria-orange via-prodoria-pink to-prodoria-purple bg-clip-text text-transparent">
                                Visibility.
                            </span>
                        </h2>
                        <p className="font-jakarta text-base text-prodoria-slate mt-5 leading-relaxed max-w-md">
                            Our platform doesn't just optimize for traditional search — it ensures your business is discoverable by the next generation of AI-powered search and recommendation engines.
                        </p>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-prodoria-purple/20 via-prodoria-pink/20 to-prodoria-orange/20 rounded-3xl blur-2xl scale-105" />
                        <img
                            src={HOW_IT_WORKS_IMAGE}
                            alt="AI Search Visualization"
                            className="relative w-full rounded-3xl shadow-lg"
                        />
                    </motion.div>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="relative group"
                        >
                            {/* Connector line */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-prodoria-pink/30 to-prodoria-purple/30" />
                            )}

                            <div className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="font-jakarta text-xs font-bold text-prodoria-pink bg-prodoria-pink/10 px-3 py-1 rounded-full">
                                        {step.number}
                                    </span>
                                    <span className="font-jakarta text-xs font-semibold text-prodoria-slate uppercase tracking-wider">
                                        {step.subtitle}
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-prodoria-orange/10 to-prodoria-purple/10 flex items-center justify-center mb-4">
                                    <step.icon className="w-5 h-5 text-prodoria-purple" />
                                </div>
                                <h3 className="font-jakarta font-semibold text-lg text-prodoria-dark mb-2">
                                    {step.title}
                                </h3>
                                <p className="font-jakarta text-sm text-prodoria-slate leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}