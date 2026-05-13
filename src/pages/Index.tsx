import HeroSection from "@/components/HeroSection";
import TrustBarSection from "@/components/TrustBarSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import CoverageAreasSection from "@/components/CoverageAreasSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import RelatedPages from "@/components/RelatedPages";
import LiveTrackingBanner from "@/components/LiveTrackingBanner";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TowDaddy",
    "url": "https://towdaddy.ca",
    "logo": "https://towdaddy.ca/towdaddy-logo.png",
    "description": "Professional 24/7 towing service across Ontario",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+16474240433",
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
        title="TowDaddy | 24/7 Emergency Towing in Toronto & GTA"
        description="24/7 emergency towing in Toronto & the GTA. Flatbed trucks, fast response, safe transport. Call TowDaddy any time for help."
        keywords="Toronto towing, Scarborough towing, Thornhill towing, Vaughan towing, Ontario towing services, Toronto roadside assistance, emergency towing Toronto, flatbed towing Ontario, GTA towing, Hamilton towing"
        canonicalUrl="https://towdaddy.ca/"
        pageType="website"
        structuredData={structuredData}
      />
      <LiveTrackingBanner />
      <main className="min-h-screen" role="main">
        <HeroSection />
        <TrustBarSection />
        <ServicesSection />
        <ProcessSection />
        <GoogleReviewsSection />
        <CoverageAreasSection />
        <RelatedPages currentPage="/" />
        <Footer />
      </main>
    </>
  );
};

export default Index;
