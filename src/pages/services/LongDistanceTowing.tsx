import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import RelatedPages from "@/components/RelatedPages";
import QuickLinks from "@/components/QuickLinks";
import { 
  Route, 
  MapPin, 
  Shield, 
  Truck,
  Phone,
  CheckCircle,
  Star,
  Clock
} from "lucide-react";

const LongDistanceTowing = () => {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Long Distance Towing", url: "/services/long-distance-towing" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Long Distance Towing Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TowDaddy",
      "url": "https://towdaddy.ca"
    },
    "description": "Professional long distance towing service with cross-province transport, real-time tracking, and secure loading across Canada",
    "areaServed": "Canada",
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": "(647) 424-0433",
      "serviceUrl": "https://towdaddy.ca/contact"
    },
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "CAD",
        "price": "2.50"
      }
    }
  };

  const features = [
    "Cross-Province Transport - Coast to coast coverage",
    "Real-Time GPS Tracking - Monitor your vehicle's location",
    "Secure Loading & Transport - Professional equipment",
    "Insurance Coverage - Comprehensive protection",
    "Door-to-Door Service - Pickup and delivery",
    "Damage-Free Handling - Expert care throughout"
  ];

  const benefits = [
    {
      icon: <MapPin className="h-8 w-8 text-tow-red" />,
      title: "Coast to Coast Coverage",
      description: "We provide long distance towing services across all Canadian provinces, from Ontario to British Columbia and everywhere in between."
    },
    {
      icon: <Clock className="h-8 w-8 text-tow-red" />,
      title: "Real-Time Updates",
      description: "GPS tracking allows you to monitor your vehicle's location throughout the journey with regular status updates."
    },
    {
      icon: <Shield className="h-8 w-8 text-tow-red" />,
      title: "Full Insurance Protection",
      description: "Your vehicle is fully covered during transport with comprehensive insurance protection for complete peace of mind."
    },
    {
      icon: <Truck className="h-8 w-8 text-tow-red" />,
      title: "Professional Equipment",
      description: "Modern flatbed trucks and secure tie-down systems ensure your vehicle is transported safely without any damage."
    }
  ];

  const commonRoutes = [
    "Toronto to Vancouver",
    "Ontario to Alberta",
    "Toronto to Montreal",
    "Hamilton to Calgary",
    "Ottawa to Winnipeg",
    "London to Halifax"
  ];

  return (
    <>
      <SEO 
        title="Long Distance Towing Toronto & GTA | Move Your Car Across Ontario & Canada | TowDaddy"
        description="Moving your car across Ontario or Canada? We tow it safe. GPS tracking. Door-to-door service. From $2.50/km. Call now!"
        keywords="long distance towing Toronto GTA, cross province towing, vehicle transport Canada Ontario, long haul towing, inter-provincial towing Toronto"
        canonicalUrl="https://towdaddy.ca/services/long-distance-towing"
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
                <Route className="h-16 w-16 text-tow-red mx-auto mb-6" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Long Distance Towing
                  <span className="block text-tow-red">Reliable Transport Across Canada</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-hero-foreground/90">
                  Need to transport your vehicle across provinces? Our long-distance towing service ensures 
                  safe, secure transport with real-time tracking and professional handling coast to coast.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button variant="towRed" size="lg" className="text-sm sm:text-base" asChild>
                    <a href="tel:+16474240433">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Call: (647) 424-0433
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="bg-background/10 border-hero-foreground/30 text-hero-foreground hover:bg-background/20 text-sm sm:text-base">
                    <a href="https://request.towdaddy.ca/" target="_blank" rel="noopener noreferrer">Get Distance Quote</a>
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
                    Professional Long Distance Vehicle Transport
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    Whether you're relocating, buying a vehicle from another province, or need specialized 
                    transport for a non-running vehicle, our{" "}
                    <Link to="/services/vehicle-recovery" className="text-tow-red hover:underline font-medium" title="Professional vehicle transport and recovery">
                      long distance towing service
                    </Link>{" "}
                    provides reliable door-to-door transportation across Canada. Starting from{" "}
                    <Link to="/coverage/toronto" className="text-tow-red hover:underline font-medium" title="Long distance towing from Toronto">
                      Toronto
                    </Link>{" "}
                    or{" "}
                    <Link to="/coverage/hamilton" className="text-tow-red hover:underline font-medium" title="Hamilton long distance transport">
                      Hamilton
                    </Link>, we can transport your vehicle anywhere in Canada.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    Our experienced drivers use modern flatbed trucks equipped with GPS tracking, 
                    allowing you to monitor your vehicle's progress throughout the journey. We handle 
                    everything from pickup to delivery with professional care. For local moves, consider our{" "}
                    <Link to="/services/emergency-towing" className="text-tow-red hover:underline font-medium" title="Local emergency towing service">
                      local emergency towing
                    </Link>.
                  </p>
                  <div className="bg-tow-red/10 p-4 sm:p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Star className="h-5 w-5 text-tow-red mr-2" />
                      <span className="font-semibold text-foreground">$2.50 per kilometer</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Competitive rates with no hidden fees. Get a detailed quote by 
                      <Link to="/contact" className="text-tow-red hover:underline ml-1">contacting us today</Link>.
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

              {/* Benefits Grid */}
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                  Why Choose Our Long Distance Service?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Professional vehicle transport with the features and reliability you need for long distance moves.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="p-6 sm:p-8 bg-service-card border-service-border hover:shadow-lg transition-shadow">
                    <div className="flex items-start mb-4">
                      {benefit.icon}
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground ml-3">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                ))}
              </div>

              {/* Common Routes */}
              <div className="bg-hero-bg text-hero-foreground p-6 sm:p-8 rounded-lg">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    Popular Long Distance Routes
                  </h3>
                  <p className="text-hero-foreground/80 max-w-2xl mx-auto">
                    We regularly service these routes and many more across Canada. 
                    Check our <Link to="/coverage-areas" className="text-tow-red hover:underline">coverage areas</Link> for complete service zones.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {commonRoutes.map((route, index) => (
                    <div key={index} className="bg-background/10 p-3 rounded-md text-center">
                      <span className="text-hero-foreground font-medium">{route}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <QuickLinks variant="services" />
              <QuickLinks variant="info" />
            </div>
          </div>

          <RelatedPages currentPage="/services/long-distance-towing" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LongDistanceTowing;