import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { 
  Truck, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle,
  DollarSign,
  Shield,
  Wrench,
  Route,
  Star
} from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      title: "Emergency Roadside",
      subtitle: "Quick fixes on the spot",
      price: "$75",
      period: "Base Rate",
      icon: <Wrench className="h-12 w-12 text-tow-red mb-4" />,
      features: [
        "Jump start service",
        "Flat tire change", 
        "Lockout assistance",
        "Basic troubleshooting",
        "30-minute response time",
        "Licensed technicians"
      ],
      popular: false
    },
    {
      title: "Local Towing",
      subtitle: "Safe flatbed transport",
      price: "$95",
      period: "Up to 10km",
      icon: <Truck className="h-12 w-12 text-tow-red mb-4" />,
      features: [
        "Flatbed towing only",
        "Up to 10km distance",
        "GPS tracked service",
        "Licensed & insured",
        "24/7 availability",
        "No hidden fees"
      ],
      popular: true
    },
    {
      title: "Long Distance",
      subtitle: "Province-wide transport",
      price: "$2.50",
      period: "Per kilometer",
      icon: <Route className="h-12 w-12 text-tow-red mb-4" />,
      features: [
        "Secure flatbed transport",
        "Real-time tracking", 
        "Cross-province service",
        "Insurance coverage",
        "Professional handling",
        "Transparent pricing"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    { service: "Motorcycle Towing", price: "$120", description: "Specialized bike transport equipment" },
    { service: "Vehicle Recovery (Basic)", price: "$150", description: "Ditch, mud, or snow extraction" },
    { service: "Heavy Duty Recovery", price: "$250+", description: "Complex recovery operations" },
    { service: "Winch Service", price: "$125", description: "Professional winching operations" },
    { service: "Fuel Delivery", price: "$85", description: "Emergency fuel service + cost of fuel" },
    { service: "Battery Service", price: "$95", description: "Jump start or battery replacement" },
    { service: "Commercial Towing", price: "Custom", description: "Fleet rates available - call for quote" },
    { service: "Classic Car Transport", price: "Custom", description: "White-glove specialty vehicle service" }
  ];

  const factors = [
    {
      icon: <Clock className="h-8 w-8 text-tow-red" />,
      title: "Time of Service",
      description: "Standard rates 6AM-6PM weekdays. Premium rates evenings, weekends, and holidays."
    },
    {
      icon: <MapPin className="h-8 w-8 text-tow-red" />,
      title: "Distance & Location", 
      description: "Base rate includes first 10km. Additional distance charged per kilometer."
    },
    {
      icon: <Truck className="h-8 w-8 text-tow-red" />,
      title: "Vehicle Type",
      description: "Standard rates for cars/SUVs. Motorcycles, trucks, and specialty vehicles may vary."
    },
    {
      icon: <Shield className="h-8 w-8 text-tow-red" />,
      title: "Complexity",
      description: "Simple tows at base rate. Recovery operations priced based on equipment and time required."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-bg text-hero-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transparent Pricing
              <span className="block text-tow-red">No Hidden Fees</span>
            </h1>
            <p className="text-xl mb-8 text-hero-foreground/90">
              Fair, upfront pricing for all towing and roadside assistance services. 
              Know what you'll pay before we arrive - no surprises, no hidden charges.
            </p>
            <Button variant="towRed" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Quote: (647) 949-7729
            </Button>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Service Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service that fits your needs. All prices include professional service, 
              licensed operators, and full insurance coverage.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`p-8 bg-service-card border-service-border relative ${tier.popular ? 'ring-2 ring-tow-red' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-tow-red text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {tier.subtitle}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-tow-red">{tier.price}</span>
                    <span className="text-muted-foreground ml-2">{tier.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-tow-red mr-3" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={tier.popular ? "towRed" : "outline"} 
                  className="w-full"
                >
                  Call for Service
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Additional Services & Rates
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized services with transparent pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 bg-service-card border-service-border flex justify-between items-center">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {service.service}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="text-right ml-4">
                  <span className="text-2xl font-bold text-tow-red">
                    {service.price}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Affects Pricing?
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding our pricing structure helps you know what to expect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {factors.map((factor, index) => (
              <Card key={index} className="p-6 text-center bg-service-card border-service-border">
                <div className="flex justify-center mb-4">
                  {factor.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {factor.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {factor.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-hero-bg text-hero-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Star className="h-16 w-16 text-tow-red mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Our Pricing Promise
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <DollarSign className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No Hidden Fees</h3>
                <p className="text-hero-foreground/80">
                  The price we quote is the price you pay. No surprise charges or add-ons.
                </p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Upfront Quotes</h3>
                <p className="text-hero-foreground/80">
                  Get a clear price quote before service begins. No work without your approval.
                </p>
              </div>
            </div>
            
            <p className="text-xl mb-8 text-hero-foreground/90">
              Need a custom quote for commercial accounts, fleet services, or specialty transport? 
              Our team will work with you to create a fair pricing plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="towRed" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call: (647) 949-7729
              </Button>
              <Button variant="outline" size="lg" className="bg-background/10 border-hero-foreground/30 text-hero-foreground hover:bg-background/20">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;