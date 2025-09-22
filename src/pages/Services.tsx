import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { 
  Truck, 
  Wrench, 
  Mountain, 
  Route, 
  Shield, 
  Bike, 
  Building2, 
  Car,
  TreePine,
  Star,
  Clock,
  MapPin,
  Phone
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-16 w-16 text-tow-red mb-6" />,
      title: "EMERGENCY TOWING",
      subtitle: "Swift assistance 24/7",
      description: "Our emergency towing service operates around the clock, ensuring you're never stranded. With GPS tracking and rapid response times, we locate and assist you within minutes of your call.",
      features: ["24/7 Availability", "GPS Tracking", "Rapid Response", "Professional Equipment"],
      price: "Starting at $95"
    },
    {
      icon: <Wrench className="h-16 w-16 text-tow-red mb-6" />,
      title: "ROADSIDE ASSISTANCE", 
      subtitle: "Quick aid for common issues",
      description: "From flat tires to dead batteries, our roadside assistance covers all common vehicle problems. Our certified technicians carry professional equipment to get you back on the road quickly.",
      features: ["Battery Jump Start", "Flat Tire Change", "Lockout Service", "Fuel Delivery"],
      price: "Starting at $75"
    },
    {
      icon: <Mountain className="h-16 w-16 text-tow-red mb-6" />,
      title: "VEHICLE RECOVERY",
      subtitle: "Skilled vehicle retrieval", 
      description: "Specialized in recovering vehicles from difficult situations including ditches, mud, snow, and accident scenes. Our recovery specialists use advanced equipment for safe extraction.",
      features: ["Accident Recovery", "Off-Road Retrieval", "Winch Services", "Heavy Duty Recovery"],
      price: "Starting at $150"
    },
    {
      icon: <Route className="h-16 w-16 text-tow-red mb-6" />,
      title: "LONG DISTANCE TOWING",
      subtitle: "Reliable transport offer",
      description: "Need to transport your vehicle across provinces? Our long-distance towing service ensures safe, secure transport with real-time tracking and professional handling.",
      features: ["Cross-Province Transport", "Real-Time Tracking", "Secure Loading", "Insurance Coverage"],
      price: "$2.50/km"
    },
    {
      icon: <Shield className="h-16 w-16 text-tow-red mb-6" />,
      title: "PROFESSIONAL VEHICLE RESCUE",
      subtitle: "Expert vehicle retrieval",
      description: "Our professional rescue team handles complex situations requiring specialized expertise. From luxury vehicles to commercial fleets, we provide expert care and handling.",
      features: ["Luxury Vehicle Care", "Commercial Fleet", "Specialized Equipment", "Trained Operators"],
      price: "Quote on Request"
    },
    {
      icon: <Bike className="h-16 w-16 text-tow-red mb-6" />,
      title: "MOTORCYCLE TOWING",
      subtitle: "Specialized bike transport",
      description: "Motorcycle towing requires special care and equipment. Our bike-specific trailers and trained operators ensure your motorcycle is transported safely without damage.",
      features: ["Specialized Trailers", "Secure Tie-Downs", "Damage Prevention", "All Bike Types"],
      price: "Starting at $120"
    },
    {
      icon: <Building2 className="h-16 w-16 text-tow-red mb-6" />,
      title: "COMMERCIAL TOWING",
      subtitle: "Business vehicle assistance",
      description: "Supporting businesses with fleet management and commercial vehicle towing. We understand the urgency of keeping your business operations running smoothly.",
      features: ["Fleet Management", "Priority Service", "Business Accounts", "24/7 Support"],
      price: "Custom Rates"
    },
    {
      icon: <Car className="h-16 w-16 text-tow-red mb-6" />,
      title: "VEHICLE TRANSPORT",
      subtitle: "Safe and secure vehicle relocation",
      description: "Professional vehicle transport service for dealerships, auctions, and private customers. Multi-car carriers and enclosed trailers available for premium protection.",
      features: ["Multi-Car Transport", "Enclosed Trailers", "Dealership Service", "Auction Transport"],
      price: "Starting at $200"
    },
    {
      icon: <TreePine className="h-16 w-16 text-tow-red mb-6" />,
      title: "EXTREME TERRAIN VEHICLE RESCUE",
      subtitle: "Skilled retrieval from rugged landscapes",
      description: "Specialized in recovering vehicles from challenging terrain including mountains, forests, and remote areas. Our off-road recovery vehicles can reach where others can't.",
      features: ["Off-Road Capability", "Mountain Rescue", "Remote Access", "4x4 Recovery"],
      price: "Starting at $200"
    },
    {
      icon: <Star className="h-16 w-16 text-tow-red mb-6" />,
      title: "SPECIALIZED TOWING",
      subtitle: "Custom vehicle transport",
      description: "Custom solutions for unique towing needs including classic cars, modified vehicles, and specialty equipment. We adapt our service to meet your specific requirements.",
      features: ["Classic Car Care", "Modified Vehicles", "Custom Solutions", "White Glove Service"],
      price: "Quote on Request"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-bg text-hero-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Towing Services
              <span className="block text-tow-red">Across Ontario</span>
            </h1>
            <p className="text-xl mb-8 text-hero-foreground/90">
              Comprehensive towing and roadside assistance services available 24/7. 
              Professional, licensed, and fully insured for your peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="towRed" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (647) 949-7729
              </Button>
              <Button variant="outline" size="lg" className="bg-background/10 border-hero-foreground/30 text-hero-foreground hover:bg-background/20">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From emergency roadside assistance to specialized vehicle transport, 
              we have the expertise and equipment to handle any situation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 bg-service-card border-service-border hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-tow-red font-medium text-lg mb-4">
                    {service.subtitle}
                  </p>
                  <div className="bg-tow-red/10 text-tow-red px-4 py-2 rounded-full inline-block font-semibold">
                    {service.price}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 text-center">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-tow-red rounded-full mr-3" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="towRed" className="flex-1">
                    Call Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Get Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Service Guarantee */}
          <div className="mt-20 bg-hero-bg text-hero-foreground p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Clock className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-hero-foreground/80">Average response time under 30 minutes</p>
              </div>
              <div>
                <Shield className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Fully Licensed</h3>
                <p className="text-hero-foreground/80">Licensed, insured, and bonded professionals</p>
              </div>
              <div>
                <MapPin className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Ontario Wide</h3>
                <p className="text-hero-foreground/80">Serving all cities and remote areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;