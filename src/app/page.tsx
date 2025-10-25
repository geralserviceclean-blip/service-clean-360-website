import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}