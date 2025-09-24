import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import RelatedPages from "@/components/RelatedPages";
import QuickLinks from "@/components/QuickLinks";
import { 
  Truck, 
  Clock, 
  MapPin, 
  Shield, 
  Phone,
  CheckCircle,
  Star
} from "lucide-react";

const EmergencyTowing = () => {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Emergency Towing", url: "/services/emergency-towing" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Towing Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TowDaddy",
      "url": "https://towdaddy.ca"
    },
    "description": "24/7 emergency towing service with GPS tracking and rapid response times across Ontario",
    "areaServed": "Ontario, Canada",
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": "(647) 949-7729",
      "serviceUrl": "https://towdaddy.ca/contact"
    },
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "CAD",
        "price": "95.00"
      }
    }
  };

  const features = [
    "24/7 Availability - Day or night, we're ready",
    "GPS Tracking - Real-time location updates",
    "Rapid Response - Average 30-minute arrival",
    "Professional Equipment - Modern flatbed trucks",
    "Licensed & Insured - Full coverage protection",
    "Damage-Free Towing - Secure vehicle handling"
  ];

  const serviceAreas = [
    "Toronto", "Mississauga", "Brampton", "Hamilton", 
    "Ottawa", "London", "Windsor", "Kitchener"
  ];

  return (
    <>
      <SEO 
        title="24/7 Emergency Towing Service Ontario | Fast Response - TowDaddy"
        description="Professional emergency towing service available 24/7 across Ontario. GPS tracking, rapid response, licensed operators. Starting at $95. Call (647) 949-7729"
        keywords="emergency towing Ontario, 24/7 towing service, fast towing, roadside emergency, flatbed towing, tow truck near me"
        canonicalUrl="https://towdaddy.ca/services/emergency-towing"
        pageType="service"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      
      <div className="min-h-screen">
        <div className="container mx-auto px-4 pt-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <main>
          {/* Hero Section */}
          <section className="bg-hero-bg text-hero-foreground py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <Truck className="h-16 w-16 text-tow-red mx-auto mb-6" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  24/7 Emergency Towing
                  <span className="block text-tow-red">Swift Assistance When You Need It</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-hero-foreground/90">
                  Stranded on the road? Our emergency towing service operates around the clock with GPS tracking 
                  and rapid response times. Professional, licensed operators across Ontario.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button variant="towRed" size="lg" className="text-sm sm:text-base" asChild>
                    <a href="tel:+16479497729">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Emergency: (647) 949-7729
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="bg-background/10 border-hero-foreground/30 text-hero-foreground hover:bg-background/20 text-sm sm:text-base">
                    <Link to="/contact">Get Instant Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Service Details */}
          <section className="py-12 sm:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                    Professional Emergency Towing
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    When your vehicle breaks down unexpectedly, every minute counts. Our emergency towing service 
                    ensures you're never left stranded, with professional operators standing by 24/7 to provide 
                    immediate assistance across Ontario.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    Whether you're dealing with an accident, mechanical failure, or roadside emergency, our GPS-equipped 
                    fleet can locate and reach you quickly. We specialize in damage-free towing using modern flatbed 
                    trucks and professional equipment.
                  </p>
                  <div className="bg-tow-red/10 p-4 sm:p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Star className="h-5 w-5 text-tow-red mr-2" />
                      <span className="font-semibold text-foreground">Starting at $95</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Transparent pricing with no hidden fees. See our full 
                      <Link to="/pricing" className="text-tow-red hover:underline ml-1">pricing guide</Link> for details.
                    </p>
                  </div>
                </div>

                <div>
                  <Card className="p-6 sm:p-8 bg-service-card border-service-border">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                      Service Features
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-tow-red mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>

              {/* Service Guarantee */}
              <div className="bg-hero-bg text-hero-foreground p-6 sm:p-8 rounded-lg mb-12 sm:mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
                  <div>
                    <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-tow-red mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Fast Response</h3>
                    <p className="text-hero-foreground/80 text-sm sm:text-base">Average arrival time under 30 minutes</p>
                  </div>
                  <div>
                    <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-tow-red mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Fully Licensed</h3>
                    <p className="text-hero-foreground/80 text-sm sm:text-base">Licensed, insured, and bonded professionals</p>
                  </div>
                  <div>
                    <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-tow-red mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Ontario Wide</h3>
                    <p className="text-hero-foreground/80 text-sm sm:text-base">Serving all major cities and remote areas</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                  Emergency Towing Service Areas
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our emergency towing service covers all major Ontario cities and remote areas. 
                  Check our <Link to="/coverage-areas" className="text-tow-red hover:underline">complete coverage map</Link> for detailed service zones.
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {serviceAreas.map((area, index) => (
                    <span key={index} className="bg-tow-red/10 text-tow-red px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <QuickLinks variant="emergency" />
              <QuickLinks variant="services" />
            </div>
          </div>

          <RelatedPages currentPage="/services/emergency-towing" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default EmergencyTowing;