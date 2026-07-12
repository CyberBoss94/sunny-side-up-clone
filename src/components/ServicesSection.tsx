import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      image: "https://i.postimg.cc/YCK8gbBn/accidentfull.png",
      title: "EMERGENCY TOWING",
      subtitle: "Get help in minutes, any time",
      description: "Stuck on the road? We're here 24/7. Our trucks find you fast with GPS tracking. Most customers get help in under 30 minutes.",
      features: ["Available 24/7", "GPS tracked trucks", "30-min average response"]
    },
    {
      image: "https://i.postimg.cc/ydV3LgBd/Untitled-design777.png",
      title: "ROADSIDE ASSISTANCE", 
      subtitle: "Fix common problems on the spot",
      description: "Flat tire? Dead battery? Locked out? Our trained techs come to you with the right tools. We get you back on the road fast.",
      features: ["Jump-start dead batteries", "Change flat tires", "Unlock car doors"]
    },
    {
      image: "https://i.postimg.cc/fLbqRK6H/acidnnnnn.jpg",
      title: "VEHICLE RECOVERY",
      subtitle: "Pull your car from tough spots", 
      description: "Car stuck in a ditch, mud, or snow? We pull vehicles out safely from any spot. Our team uses winches and special gear to protect your car.",
      features: ["Pull cars from ditches", "Extract from mud or snow", "Winch service available"]
    },
    {
      image: "https://i.postimg.cc/vZp5VBRW/8.png",
      title: "LONG DISTANCE TOWING",
      subtitle: "Move your car across Ontario",
      description: "Moving across the province? We tow your car safely to any Ontario city. Track your vehicle's location in real-time during transport.",
      features: ["Tow anywhere in Ontario", "Track your car live", "Secure tie-down system"]
    },
    {
      image: "https://i.postimg.cc/g0KSq5Vc/TOWDADDY-f.png",
      title: "PROFESSIONAL VEHICLE RESCUE",
      subtitle: "Expert care for all vehicles",
      description: "We handle every type of vehicle with care. Luxury cars, work fleets, or dealer stock—our team treats each one with respect and skill.",
      features: ["Luxury car specialists", "Fleet towing service", "Pro-grade equipment"]
    },
    {
      image: "https://i.postimg.cc/Y0p6Cy5Z/2.png",
      title: "MOTORCYCLE TOWING",
      subtitle: "Move bikes safely",
      description: "Your bike needs special care. We use motorcycle trailers and soft tie-downs. Your bike arrives scratch-free, every time.",
      features: ["Bike-only trailers", "Soft tie-down straps", "Zero-scratch guarantee"]
    },
    {
      image: "https://i.postimg.cc/c1h1j4m0/comm.jpg",
      title: "COMMERCIAL TOWING",
      subtitle: "Keep your business moving",
      description: "Business vehicle down? We get it back fast. Priority service for commercial clients. Set up a business account for faster billing.",
      features: ["Manage your fleet", "Priority dispatch", "Easy business billing"]
    },
    {
      image: "https://i.postimg.cc/5935RbvV/3.png",
      title: "EXTREME TERRAIN VEHICLE RESCUE",
      subtitle: "Rescue from rough terrain",
      description: "Stuck off-road in the wilderness? Our trucks go where others can't. Mountains, forests, or remote trails—we reach you and pull you out.",
      features: ["Off-road rescue trucks", "Mountain recovery", "Remote area access"]
    },
    {
      image: "https://i.postimg.cc/W3BL2r3p/CLASSIC-CAR-WITH-a.jpg",
      title: "SPECIALIZED TOWING",
      subtitle: "Custom care for unique vehicles",
      description: "Classic car? Custom build? Special equipment? We adapt our service to fit your needs. Tell us what you have, we'll move it safely.",
      features: ["Classic car experts", "Modified vehicle transport", "Custom towing solutions"]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-tow-red font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Complete Towing & Roadside Help
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            Fast Response · GPS Tracked · Available 24/7
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            We offer professional towing across Ontario, day or night. 
            Check our <Link to="/pricing" className="text-tow-red hover:underline font-medium">pricing</Link>, 
            view <Link to="/coverage-areas" className="text-tow-red hover:underline font-medium">coverage areas</Link>, or 
            visit our <Link to="/faq" className="text-tow-red hover:underline font-medium">FAQ</Link> for quick answers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden bg-white border border-red-300 rounded-xl hover:shadow-lg transition-shadow">
              {/* Service Image */}
              <div className="relative h-40 sm:h-48 w-full">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <p className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {service.title}
                </p>
                <p className="text-gray-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                  {service.subtitle}
                </p>
                <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-tow-red rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <Button variant="towRed" className="w-full text-sm sm:text-base py-2 sm:py-3">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    <a href="tel:+16479497729" className="hover:text-tow-red transition-colors">Call Now</a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm" asChild>
                    <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}>
                      Learn More About {service.title.charAt(0) + service.title.slice(1).toLowerCase()}
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;