import { motion } from "framer-motion";
import { Layers, Target, LineChart } from "lucide-react";

const features = [
    {
        icon: Layers,
        title: "Structured Data Optimization",
        description: "Automatically generate and maintain JSON-LD, Schema.org markup, and structured data that AI systems rely on.",
    },
    {
        icon: Target,
        title: "AI Answer Positioning",
        description: "Position your content as the definitive answer when AI assistants respond to relevant queries.",
    },
    {
        icon: LineChart,
        title: "Search Visibility Tracking",
        description: "Monitor your brand's visibility across traditional and AI-powered search platforms in real time.",
    },
];

export default function BigStatement() {
    return (
        <section className="relative py-20 md:py-28 px-6 overflow-hidden">
            {/* Soft gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-prodoria-orange/5 via-prodoria-pink/5 to-prodoria-purple/5" />

            <div className="relative max-w-6xl mx-auto">
                {/* Big Statement - Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    {/* Left - Big Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="font-jakarta font-bold text-4xl md:text-5xl lg:text-6xl text-prodoria-dark leading-tight">
                            Designed to
                            <br />
                            Make You{" "}
                            <span className="bg-gradient-to-r from-prodoria-orange via-prodoria-pink to-prodoria-purple bg-clip-text text-transparent">
                                Visible
                            </span>
                            <br />
                            <span className="italic font-normal text-prodoria-slate">
                                With Less Effort.
                            </span>
                        </h2>
                    </motion.div>

                    {/* Right - Image + Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-prodoria-orange/20 via-prodoria-pink/20 to-prodoria-purple/20 rounded-3xl blur-xl scale-105" />
                            <img
                                src="../public/side2.webp"
                                alt="AI Visibility Features"
                                className="relative w-full rounded-3xl shadow-lg"
                            />
                        </div>
                        <p className="font-jakarta text-base text-prodoria-slate leading-relaxed">
                            Our platform combines generative engine optimization, answer engine optimization, and LLM visibility into one seamless workflow — so you can focus on your business while AI does the discovery.
                        </p>
                    </motion.div>
                </div>

                {/* 3 Feature Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow duration-300">
                                <feature.icon className="w-6 h-6 text-prodoria-purple" />
                            </div>
                            <h3 className="font-jakarta font-semibold text-lg text-prodoria-dark mb-2">
                                {feature.title}
                            </h3>
                            <p className="font-jakarta text-sm text-prodoria-slate leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}