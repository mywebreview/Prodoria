import { motion } from "framer-motion";
import { Search, Code2, BarChart3, Sparkles, Globe, Zap } from "lucide-react";

const features = [
    {
        icon: Search,
        title: "AI Search Optimization",
        description: "Optimize your content to appear in AI-powered search results and recommendation engines.",
    },
    {
        icon: Code2,
        title: "Schema Structuring",
        description: "Automatically generate structured data that helps AI understand and recommend your business.",
    },
    {
        icon: BarChart3,
        title: "Answer Engine Ranking",
        description: "Track and improve your positioning in answer engines like ChatGPT, Perplexity, and Google AI.",
    },
    {
        icon: Sparkles,
        title: "LLM Visibility",
        description: "Ensure your brand is visible and accurately represented across large language models.",
    },
    {
        icon: Globe,
        title: "Multi-Platform Reach",
        description: "Expand your presence across Google, Bing, ChatGPT, and emerging AI search platforms.",
    },
    {
        icon: Zap,
        title: "Real-Time Insights",
        description: "Get instant analytics on how AI systems perceive and recommend your business.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeatureCards() {
    return (
        <section id="features" className="py-20 md:py-28 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="font-jakarta text-sm font-semibold text-prodoria-pink uppercase tracking-wider mb-3">
                        Features
                    </p>
                    <h2 className="font-jakarta font-bold text-3xl md:text-4xl lg:text-5xl text-prodoria-dark">
                        Everything You Need for
                        <br />
                        <span className="bg-gradient-to-r from-prodoria-orange via-prodoria-pink to-prodoria-purple bg-clip-text text-transparent">
                            AI Visibility
                        </span>
                    </h2>
                </motion.div>

                {/* Feature Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="group relative p-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Gradient hover effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-prodoria-orange/5 via-prodoria-pink/5 to-prodoria-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-prodoria-orange/10 via-prodoria-pink/10 to-prodoria-purple/10 flex items-center justify-center mb-5">
                                    <feature.icon className="w-6 h-6 text-prodoria-pink" />
                                </div>
                                <h3 className="font-jakarta font-semibold text-lg text-prodoria-dark mb-2">
                                    {feature.title}
                                </h3>
                                <p className="font-jakarta text-sm text-prodoria-slate leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}