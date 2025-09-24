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
      "telephone": "+16479497729",
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
        title="TowDaddy - 24/7 Emergency Towing Toronto, Scarborough, Vaughan | Ontario Roadside Assistance"
        description="Professional towing services in Toronto, Scarborough, Thornhill, and Vaughan. 24/7 emergency flatbed towing, roadside assistance, and vehicle recovery across Ontario. Licensed and insured."
        keywords="Toronto towing, Scarborough towing, Thornhill towing, Vaughan towing, Ontario towing services, Toronto roadside assistance, emergency towing Toronto, flatbed towing Ontario"
        canonicalUrl="https://towdaddy.ca/"
        pageType="website"
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
