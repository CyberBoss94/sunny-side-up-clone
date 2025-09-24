import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CoverageAreasSection from "@/components/CoverageAreasSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import RelatedPages from "@/components/RelatedPages";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TowDaddy",
    "url": "https://towdaddy.ca",
    "logo": "https://towdaddy.ca/assets/towdaddy-logo.png",
    "description": "Professional 24/7 towing service across Ontario",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-TOW-DADDY",
      "contactType": "emergency",
      "availableLanguage": "English"
    },
    "areaServed": "Ontario, Canada",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Towing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Emergency Towing",
            "description": "Round-the-clock emergency towing service across Ontario"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="TowDaddy - 24/7 Emergency Towing Across Ontario | Professional Flatbed Service"
        description="Need reliable towing in Ontario? TowDaddy provides 24/7 emergency flatbed towing, roadside assistance, and vehicle recovery. Licensed, insured, and professional service across Ontario."
        keywords="emergency towing Ontario, 24/7 towing service, flatbed towing, roadside assistance Ontario, vehicle recovery, professional towing, licensed towing service"
        structuredData={structuredData}
      />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <CoverageAreasSection />
        <RelatedPages currentPage="/" />
        <Footer />
      </main>
    </>
  );
};

export default Index;
