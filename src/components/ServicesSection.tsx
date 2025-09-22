import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      image: "https://i.postimg.cc/YCK8gbBn/accidentfull.png",
      title: "EMERGENCY TOWING",
      subtitle: "Swift assistance 24/7",
      description: "Our emergency towing service operates around the clock, ensuring you're never stranded. With GPS tracking and rapid response times, we locate and assist you within minutes of your call.",
      features: ["24/7 Availability", "GPS Tracking", "Rapid Response"]
    },
    {
      image: "https://i.postimg.cc/ydV3LgBd/Untitled-design777.png",
      title: "ROADSIDE ASSISTANCE", 
      subtitle: "Quick aid for common issues",
      description: "From flat tires to dead batteries, our roadside assistance covers all common vehicle problems. Our certified technicians carry professional equipment to get you back on the road quickly.",
      features: ["Battery Jump Start", "Flat Tire Change", "Lockout Service"]
    },
    {
      image: "https://i.postimg.cc/fLbqRK6H/acidnnnnn.jpg",
      title: "VEHICLE RECOVERY",
      subtitle: "Skilled vehicle retrieval", 
      description: "Specialized in recovering vehicles from difficult situations including ditches, mud, snow, and accident scenes. Our recovery specialists use advanced equipment for safe extraction.",
      features: ["Accident Recovery", "Off-Road Retrieval", "Winch Services"]
    },
    {
      image: "https://i.postimg.cc/vZp5VBRW/8.png",
      title: "LONG DISTANCE TOWING",
      subtitle: "Reliable transport offer",
      description: "Need to transport your vehicle across provinces? Our long-distance towing service ensures safe, secure transport with real-time tracking and professional handling.",
      features: ["Cross-Province Transport", "Real-Time Tracking", "Secure Loading"]
    },
    {
      image: "https://i.postimg.cc/g0KSq5Vc/TOWDADDY-f.png",
      title: "PROFESSIONAL VEHICLE RESCUE & TRANSPORT",
      subtitle: "Expert care for every situation",
      description: "From roadside recoveries to safe long-distance relocation, our professional team provides specialized expertise and premium handling for all vehicle types. Whether it’s a high-value luxury car, a commercial fleet, or multiple units for a dealership, we ensure secure, damage-free service every time..",
      features: ["Luxury Vehicle Care & Enclosed Trailers", "Commercial Fleet Recovery & Transport", "Specialized Equipment for Complex Situations"]
    },
    {
      image: "https://i.postimg.cc/Y0p6Cy5Z/2.png",
      title: "MOTORCYCLE TOWING",
      subtitle: "Specialized bike transport",
      description: "Motorcycle towing requires special care and equipment. Our bike-specific trailers and trained operators ensure your motorcycle is transported safely without damage.",
      features: ["Specialized Trailers", "Secure Tie-Downs", "Damage Prevention"]
    },
    {
      image: "https://i.postimg.cc/c1h1j4m0/comm.jpg",
      title: "COMMERCIAL TOWING",
      subtitle: "Business vehicle assistance",
      description: "Supporting businesses with fleet management and commercial vehicle towing. We understand the urgency of keeping your business operations running smoothly.",
      features: ["Fleet Management", "Priority Service", "Business Accounts"]
    },
    {
      image: "https://i.postimg.cc/5935RbvV/3.png",
      title: "EXTREME TERRAIN VEHICLE RESCUE",
      subtitle: "Skilled retrieval from rugged landscapes",
      description: "Specialized in recovering vehicles from challenging terrain including mountains, forests, and remote areas. Our off-road recovery vehicles can reach where others can't.",
      features: ["Off-Road Capability", "Mountain Rescue", "Remote Access"]
    },
    {
      image: "https://i.postimg.cc/W3BL2r3p/CLASSIC-CAR-WITH-a.jpg",
      title: "SPECIALIZED TOWING",
      subtitle: "Custom vehicle transport",
      description: "Custom solutions for unique towing needs including classic cars, modified vehicles, and specialty equipment. We adapt our service to meet your specific requirements.",
      features: ["Classic Car Care", "Modified Vehicles", "Custom Solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-tow-red font-semibold text-sm uppercase tracking-wider mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            24/7 Rapid Response with GPS Tracking
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ONTARIO ROADSIDE ASSISTANCE
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional towing and roadside assistance services available 24/7 across Canada. 
            Scroll to explore our comprehensive service offerings.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              {/* Service Image */}
              <div className="relative h-48 w-full">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-tow-red rounded-full mr-3" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="towRed" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;