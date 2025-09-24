import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import RelatedPages from "@/components/RelatedPages";
import QuickLinks from "@/components/QuickLinks";
import { 
  Bike, 
  Shield, 
  Truck, 
  Wrench,
  Phone,
  CheckCircle,
  Star,
  AlertCircle
} from "lucide-react";

const MotorcycleTowing = () => {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Motorcycle Towing", url: "/services/motorcycle-towing" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Motorcycle Towing Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TowDaddy",
      "url": "https://towdaddy.ca"
    },
    "description": "Professional motorcycle towing service with specialized trailers, secure tie-downs, and damage prevention across Ontario",
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
        "price": "120.00"
      }
    }
  };

  const features = [
    "Specialized Motorcycle Trailers - Purpose-built equipment",
    "Secure Tie-Down Systems - Professional restraints",
    "Damage Prevention Protocols - Expert handling techniques",
    "All Bike Types Welcome - Cruisers, sport bikes, touring, dirt bikes",
    "24/7 Availability - Emergency motorcycle towing",
    "Experienced Operators - Trained in motorcycle handling"
  ];

  const bikeTypes = [
    {
      icon: <Bike className="h-8 w-8 text-tow-red" />,
      title: "Sport Bikes",
      description: "Careful handling of high-performance sport motorcycles with low clearance and aerodynamic fairings."
    },
    {
      icon: <Truck className="h-8 w-8 text-tow-red" />,
      title: "Cruisers & Touring",
      description: "Specialized equipment for large touring bikes and heavy cruisers with saddlebags and accessories."
    },
    {
      icon: <Wrench className="h-8 w-8 text-tow-red" />,
      title: "Dirt Bikes & ATVs",
      description: "Off-road vehicle towing with appropriate tie-down points and protective measures for dirt bikes and ATVs."
    },
    {
      icon: <Shield className="h-8 w-8 text-tow-red" />,
      title: "Classic & Vintage",
      description: "White-glove service for classic and vintage motorcycles with extra care and protection during transport."
    }
  ];

  const safetyFeatures = [
    "Soft-loop tie-downs to prevent scratching",
    "Wheel chocks for secure positioning",
    "Protective padding for fairings and tanks",
    "Multiple anchor points for stability",
    "Weather protection covers available",
    "Loading ramp systems for safe loading"
  ];

  return (
    <>
      <SEO 
        title="Professional Motorcycle Towing Ontario | Specialized Bike Transport - TowDaddy"
        description="Expert motorcycle towing service across Ontario. Specialized trailers, secure tie-downs, damage prevention for all bike types. Starting at $120. Call (647) 949-7729"
        keywords="motorcycle towing Ontario, bike towing, motorcycle transport, sport bike towing, cruiser towing, motorcycle breakdown"
        canonicalUrl="https://towdaddy.ca/services/motorcycle-towing"
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
                <Bike className="h-16 w-16 text-tow-red mx-auto mb-6" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Professional Motorcycle Towing
                  <span className="block text-tow-red">Specialized Bike Transport</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-hero-foreground/90">
                  Motorcycle towing requires special care and equipment. Our bike-specific trailers and 
                  trained operators ensure your motorcycle is transported safely without damage.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button variant="towRed" size="lg" className="text-sm sm:text-base" asChild>
                    <a href="tel:+16479497729">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Call: (647) 949-7729
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="bg-background/10 border-hero-foreground/30 text-hero-foreground hover:bg-background/20 text-sm sm:text-base">
                    <Link to="/contact">Get Bike Towing Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Service Overview */}
          <section className="py-12 sm:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                    Expert Motorcycle Transport Service
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    Motorcycles require specialized towing equipment and techniques that differ significantly 
                    from standard vehicle towing. Our motorcycle towing service uses purpose-built trailers 
                    and professional tie-down systems designed specifically for two-wheeled vehicles.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    Whether your bike has broken down, been in an accident, or you need transport for 
                    purchase or service, our trained operators handle every motorcycle with the care 
                    and expertise it deserves.
                  </p>
                  <div className="bg-tow-red/10 p-4 sm:p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Star className="h-5 w-5 text-tow-red mr-2" />
                      <span className="font-semibold text-foreground">Starting at $120</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Competitive motorcycle towing rates - view our complete 
                      <Link to="/pricing" className="text-tow-red hover:underline ml-1">pricing guide</Link>.
                    </p>
                  </div>
                </div>

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

              {/* Motorcycle Types */}
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                  All Motorcycle Types Welcome
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Our specialized equipment and experienced operators can safely transport any type of motorcycle or ATV.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {bikeTypes.map((type, index) => (
                  <Card key={index} className="p-6 sm:p-8 bg-service-card border-service-border hover:shadow-lg transition-shadow">
                    <div className="flex items-start mb-4">
                      {type.icon}
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground ml-3">
                        {type.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {type.description}
                    </p>
                  </Card>
                ))}
              </div>

              {/* Safety Features */}
              <div className="bg-hero-bg text-hero-foreground p-6 sm:p-8 rounded-lg">
                <div className="text-center mb-6">
                  <AlertCircle className="h-12 w-12 text-tow-red mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    Damage Prevention & Safety Features
                  </h3>
                  <p className="text-hero-foreground/80 max-w-2xl mx-auto">
                    Our motorcycle towing service prioritizes the protection of your bike throughout the entire transport process.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {safetyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-tow-red mr-3 flex-shrink-0" />
                      <span className="text-hero-foreground text-sm sm:text-base">{feature}</span>
                    </div>
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

          <RelatedPages currentPage="/services/motorcycle-towing" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MotorcycleTowing;