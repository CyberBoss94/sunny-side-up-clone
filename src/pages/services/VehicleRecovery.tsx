import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import RelatedPages from "@/components/RelatedPages";
import QuickLinks from "@/components/QuickLinks";
import { 
  Mountain, 
  Zap, 
  Shield, 
  Truck,
  Phone,
  CheckCircle,
  Star,
  AlertTriangle
} from "lucide-react";

const VehicleRecovery = () => {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Vehicle Recovery", url: "/services/vehicle-recovery" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vehicle Recovery Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TowDaddy",
      "url": "https://towdaddy.ca"
    },
    "description": "Professional vehicle recovery service for accident scenes, off-road retrieval, and winch services across Ontario",
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
        "price": "150.00"
      }
    }
  };

  const services = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-tow-red" />,
      title: "Accident Recovery",
      description: "Professional accident scene management and vehicle recovery. We work with insurance companies and emergency services to safely clear accident scenes."
    },
    {
      icon: <Mountain className="h-8 w-8 text-tow-red" />,
      title: "Off-Road Retrieval",
      description: "Specialized equipment for recovering vehicles stuck in ditches, mud, snow, or other challenging off-road situations."
    },
    {
      icon: <Zap className="h-8 w-8 text-tow-red" />,
      title: "Winch Services",
      description: "Heavy-duty winching equipment for complex recovery situations. Safe extraction from difficult positions without vehicle damage."
    },
    {
      icon: <Truck className="h-8 w-8 text-tow-red" />,
      title: "Heavy Duty Recovery",
      description: "Specialized recovery for commercial vehicles, RVs, and heavy equipment using professional-grade recovery vehicles."
    }
  ];

  const features = [
    "24/7 Emergency Response",
    "Professional Recovery Equipment",
    "Trained Recovery Specialists",
    "Insurance Company Approved",
    "Damage-Free Recovery Methods",
    "Heavy Duty Winching Capability"
  ];

  const situations = [
    "Vehicle rolled over or on its side",
    "Stuck in deep mud or snow",
    "Fallen into ditches or embankments",
    "Accident scene clearance",
    "Off-road vehicle extraction",
    "Complex recovery situations"
  ];

  return (
    <>
      <SEO 
        title="Professional Vehicle Recovery Toronto, Vaughan, Scarborough | Accident, Off-Road, Winch Services Ontario"
        description="Expert vehicle recovery service in Toronto, Scarborough, Thornhill, Vaughan and across Ontario. Accident recovery, off-road retrieval, winch services, heavy duty recovery."
        keywords="vehicle recovery Toronto, accident recovery Vaughan, off-road recovery Scarborough, winch service Thornhill, heavy duty recovery Ontario, rollover recovery Toronto"
        canonicalUrl="https://towdaddy.ca/services/vehicle-recovery"
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
                <Mountain className="h-16 w-16 text-tow-red mx-auto mb-6" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Professional Vehicle Recovery
                  <span className="block text-tow-red">Skilled Vehicle Retrieval</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-hero-foreground/90">
                  Specialized in recovering vehicles from difficult situations including ditches, mud, snow, 
                  and accident scenes. Our recovery specialists use advanced equipment for safe extraction.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button variant="towRed" size="lg" className="text-sm sm:text-base" asChild>
                    <a href="tel:+16479497729">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Emergency: (647) 949-7729
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="bg-background/10 border-hero-foreground/30 text-hero-foreground hover:bg-background/20 text-sm sm:text-base">
                    <Link to="/contact">Get Recovery Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Recovery Services */}
          <section className="py-12 sm:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                  Expert Vehicle Recovery Services
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  When standard towing isn't enough, our specialized recovery team handles complex situations 
                  requiring advanced equipment and expertise.
                </p>
                <div className="bg-tow-red/10 p-4 sm:p-6 rounded-lg mt-6 max-w-md mx-auto">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-5 w-5 text-tow-red mr-2" />
                    <span className="font-semibold text-foreground">Starting at $150</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complex recoveries quoted individually - <Link to="/contact" className="text-tow-red hover:underline">contact us</Link> for estimate
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {services.map((service, index) => (
                  <Card key={index} className="p-6 sm:p-8 bg-service-card border-service-border hover:shadow-lg transition-shadow">
                    <div className="flex items-start mb-4">
                      {service.icon}
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground ml-3">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </Card>
                ))}
              </div>

              {/* Recovery Expertise */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                    Advanced Recovery Capabilities
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    Vehicle recovery requires specialized knowledge, equipment, and techniques. Our recovery team 
                    has extensive experience in complex situations where{" "}
                    <Link to="/services/emergency-towing" className="text-tow-red hover:underline font-medium" title="Standard emergency towing services">
                      standard towing methods
                    </Link>{" "}
                    aren't sufficient. From accident scenes to off-road extractions, we handle the most challenging recovery situations across{" "}
                    <Link to="/coverage-areas" className="text-tow-red hover:underline font-medium" title="Ontario-wide recovery service areas">
                      Ontario
                    </Link>.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    We use heavy-duty winches, specialized rigging equipment, and recovery vehicles designed for 
                    challenging terrain. Our operators are trained in safe recovery techniques to minimize 
                    vehicle damage during extraction. For immediate assistance, check our{" "}
                    <Link to="/pricing" className="text-tow-red hover:underline font-medium" title="Vehicle recovery pricing information">
                      recovery service rates
                    </Link>.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="towRed" asChild>
                      <Link to="/services/emergency-towing">Emergency Towing</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/about">Meet Our Team</Link>
                    </Button>
                  </div>
                </div>

                <Card className="p-6 sm:p-8 bg-service-card border-service-border">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                    Recovery Situations We Handle
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {situations.map((situation, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-tow-red mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-sm sm:text-base">{situation}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Features */}
              <Card className="p-6 sm:p-8 bg-hero-bg text-hero-foreground">
                <div className="text-center mb-6">
                  <Shield className="h-12 w-12 text-tow-red mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    Professional Recovery Features
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-tow-red mr-3 flex-shrink-0" />
                      <span className="text-hero-foreground text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <QuickLinks variant="emergency" />
              <QuickLinks variant="services" />
            </div>
          </div>

          <RelatedPages currentPage="/services/vehicle-recovery" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default VehicleRecovery;