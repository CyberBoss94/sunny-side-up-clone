import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CoverageAreasSection from "@/components/CoverageAreasSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <CoverageAreasSection />
      <Footer />
    </div>
  );
};

export default Index;
