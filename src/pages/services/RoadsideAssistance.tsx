import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import RelatedPages from "@/components/RelatedPages";
import QuickLinks from "@/components/QuickLinks";
import { 
  Wrench, 
  Battery, 
  Zap, 
  Key, 
  Fuel,
  Phone,
  CheckCircle,
  Star
} from "lucide-react";

const RoadsideAssistance = () => {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Roadside Assistance", url: "/services/roadside-assistance" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roadside Assistance Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TowDaddy",
      "url": "https://towdaddy.ca"
    },
    "description": "24/7 roadside assistance including battery jump start, flat tire change, lockout service, and fuel delivery across Ontario",
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
        "price": "75.00"
      }
    }
  };

  const services = [
    {
      icon: <Battery className="h-8 w-8 text-tow-red" />,
      title: "Battery Jump Start",
      description: "Dead battery? Our certified technicians carry professional-grade jump starters and can get your vehicle running quickly and safely."
    },
    {
      icon: <Wrench className="h-8 w-8 text-tow-red" />,
      title: "Flat Tire Change",
      description: "Professional tire changing service with proper tools and safety equipment. We'll get you back on the road with your spare tire."
    },
    {
      icon: <Key className="h-8 w-8 text-tow-red" />,
      title: "Vehicle Lockout Service",
      description: "Locked out of your car? Our trained technicians use professional tools to safely unlock your vehicle without damage."
    },
    {
      icon: <Fuel className="h-8 w-8 text-tow-red" />,
      title: "Emergency Fuel Delivery",
      description: "Run out of gas? We'll deliver fuel directly to your location to get you to the nearest gas station safely."
    }
  ];

  const features = [
    "24/7 Service Availability",
    "Professional Equipment & Tools",
    "Certified Technicians",
    "Fast Response Times",
    "Damage-Free Service",
    "Transparent Pricing"
  ];

  return (
    <>
      <SEO 
        title="24/7 Roadside Assistance Ontario | Battery, Tire, Lockout Service - TowDaddy"
        description="Professional roadside assistance available 24/7 across Ontario. Battery jump start, flat tire change, lockout service, fuel delivery. Starting at $75. Call (647) 949-7729"
        keywords="roadside assistance Ontario, battery jump start, flat tire change, lockout service, fuel delivery, car trouble help"
        canonicalUrl="https://towdaddy.ca/services/roadside-assistance"
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
                <Wrench className="h-16 w-16 text-tow-red mx-auto mb-6" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  24/7 Roadside Assistance
                  <span className="block text-tow-red">Quick Aid for Common Issues</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-hero-foreground/90">
                  From flat tires to dead batteries, our roadside assistance covers all common vehicle problems. 
                  Certified technicians with professional equipment across Ontario.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button variant="towRed" size="lg" className="text-sm sm:text-base">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Call Now: (647) 949-7729
                  </Button>
                  <Button variant="outline" size="lg" asChild className="bg-background/10 border-hero-foreground/30 text-hero-foreground hover:bg-background/20 text-sm sm:text-base">
                    <Link to="/contact">Get Quick Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 sm:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                  Complete Roadside Assistance Services
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our certified technicians are equipped to handle the most common roadside emergencies. 
                  Fast, professional service when you need it most.
                </p>
                <div className="bg-tow-red/10 p-4 sm:p-6 rounded-lg mt-6 max-w-md mx-auto">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-5 w-5 text-tow-red mr-2" />
                    <span className="font-semibold text-foreground">Starting at $75</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Transparent pricing - see our <Link to="/pricing" className="text-tow-red hover:underline">complete price list</Link>
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

              {/* Why Choose Our Roadside Assistance */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                    Why Choose TowDaddy Roadside Assistance?
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    When you're dealing with car trouble, you need reliable help fast. Our roadside assistance 
                    service combines professional expertise with rapid response times to get you back on the road quickly.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    Our certified technicians carry professional-grade equipment and have extensive experience 
                    handling all types of roadside emergencies. We're available 24/7 across Ontario.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="towRed" asChild>
                      <Link to="/about">Learn About Our Team</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/coverage-areas">View Service Areas</Link>
                    </Button>
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
            </div>
          </section>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <QuickLinks variant="emergency" />
              <QuickLinks variant="info" />
            </div>
          </div>

          <RelatedPages currentPage="/services/roadside-assistance" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RoadsideAssistance;