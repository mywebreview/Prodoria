import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import HowItWorks from "@/components/HowItWorks";
import BigStatement from "@/components/BigStatement";
import SchemaGenerator from "@/components/SchemaGenerator";
import CTAAndBeta from "@/components/CTAAndBeta";

export default function Index() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] font-jakarta">
            <Hero />
            <FeatureCards />
            <HowItWorks />
            <BigStatement />
            <SchemaGenerator />
            <CTAAndBeta />
        </div>
    );
}