import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const floatingCards = [
    { label: "AI Search Optimization", delay: 0 },
    { label: "Schema Structuring", delay: 0.2 },
    { label: "Answer Engine Ranking", delay: 0.4 },
];

export default function Hero() {
    const scrollToBeta = () => {
        document.getElementById("beta-form")?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToHowItWorks = () => {
        document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#F8FAFC]">
            {/* Navbar */}
            <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
                <img src="../public/logo-black.png" alt="Prodoria Logo" className="w-28" />
                <div className="hidden md:flex items-center gap-8 font-jakarta text-sm font-medium text-prodoria-slate">
                    <a href="#features" className="hover:text-prodoria-dark transition-colors">Features</a>
                    <a href="#how-it-works" className="hover:text-prodoria-dark transition-colors">How It Works</a>
                    <a href="#schema-generator" className="hover:text-prodoria-dark transition-colors">Schema Generator</a>
                    <a href="#beta-form" className="hover:text-prodoria-dark transition-colors">Contact</a>
                </div>
                <button
                    onClick={scrollToBeta}
                    className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-prodoria-dark text-prodoria-dark text-sm font-jakarta font-semibold !bg-transparent hover:bg-prodoria-dark hover:text-white transition-all duration-300"
                >
                    Join Beta <ArrowRight className="w-4 h-4" />
                </button>
            </nav>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 pt-12 pb-8 md:pt-20 md:pb-16">
                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-jakarta text-sm md:text-base font-medium text-prodoria-slate italic mb-4"
                >
                    Your AI Visibility, in Perfect Rhythm.
                </motion.p>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-jakarta font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-prodoria-dark leading-tight max-w-4xl"
                >
                    Work Smarter.
                    <br />
                    Get Recommended by AI.
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-jakarta text-base md:text-lg text-prodoria-slate max-w-xl mt-6 leading-relaxed"
                >
                    PRODORIA helps your business show up in Google, ChatGPT, and the next generation of search.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-8"
                >
                    <button
                        onClick={scrollToBeta}
                        className="flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-prodoria-dark text-prodoria-dark font-jakarta font-semibold text-sm !bg-transparent hover:bg-prodoria-dark hover:text-white transition-all duration-300"
                    >
                        Join Beta Program <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                        onClick={scrollToHowItWorks}
                        className="flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-gray-300 text-prodoria-slate font-jakarta font-medium text-sm !bg-transparent hover:border-prodoria-dark hover:text-prodoria-dark transition-all duration-300"
                    >
                        See How It Works
                    </button>
                </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative z-10 flex justify-center px-6 pb-20"
            >
                <div className="relative w-full max-w-4xl">
                    {/* Gradient glow behind image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-prodoria-orange/30 via-prodoria-pink/30 to-prodoria-purple/30 rounded-3xl blur-3xl scale-105" />

                    {/* Main image */}
                    <img
                        src="../public/hero.webp"
                        alt="PRODORIA AI Visibility Platform"
                        className="relative w-full rounded-3xl shadow-2xl"
                    />

                    {/* Floating Cards */}
                    {floatingCards.map((card, i) => (
                        <motion.div
                            key={card.label}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 + card.delay }}
                            className={`absolute hidden md:flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-white/50 font-jakarta text-sm font-medium text-prodoria-dark ${i === 0
                                ? "top-8 -left-8 lg:-left-16"
                                : i === 1
                                    ? "top-1/2 -right-6 lg:-right-14 -translate-y-1/2"
                                    : "bottom-12 -left-4 lg:-left-12"
                                }`}
                            style={{
                                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                                animationDelay: `${i * 0.3}s`,
                            }}
                        >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-prodoria-orange to-prodoria-pink" />
                            {card.label}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Background gradient decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-prodoria-orange/10 via-prodoria-pink/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-prodoria-purple/10 via-prodoria-pink/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}