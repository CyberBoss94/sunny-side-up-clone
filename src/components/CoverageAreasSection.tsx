import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import coverageHeroImage from "@/assets/coverage-areas-hero.jpg";

const CoverageAreasSection = () => {
  const coverageStats = [
    {
      icon: Navigation,
      stat: "400+",
      label: "Highways Covered",
      description: "Complete coverage of Ontario's highway network"
    },
    {
      icon: MapPin,
      stat: "50+",
      label: "Cities Served",
      description: "From Toronto to Thunder Bay and everywhere between"
    },
    {
      icon: Clock,
      stat: "24/7",
      label: "Always Available",
      description: "Round-the-clock emergency towing services"
    }
  ];

  const majorRegions = [
    "Greater Toronto Area",
    "Eastern Ontario",
    "Southwestern Ontario", 
    "Northern Ontario",
    "Golden Horseshoe",
    "Central Ontario"
  ];

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${coverageHeroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white text-center lg:text-left">
              <p className="text-tow-red font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-2 sm:mb-3 lg:mb-4">
                Ontario-Wide Coverage
              </p>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                We Cover All of
                <span className="block text-tow-red">Ontario</span>
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 lg:mb-8 text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                From bustling city centers to remote rural highways, TowDaddy provides reliable towing and roadside assistance across every corner of Ontario. No matter where you are, help is just a call away.
              </p>

              {/* Major Regions Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {majorRegions.map((region, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-tow-red rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-white/90">{region}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="bg-tow-red hover:bg-tow-red-hover text-white font-semibold">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Emergency: (647) 949-7729
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  View Coverage Map
                </Button>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {coverageStats.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 sm:p-8 text-center hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-tow-red rounded-full flex items-center justify-center">
                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                      {item.stat}
                    </div>
                    
                    <div className="text-lg sm:text-xl font-semibold text-tow-red mb-2">
                      {item.label}
                    </div>
                    
                    <p className="text-sm sm:text-base text-white/80">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tow-red via-red-500 to-tow-red" />
    </section>
  );
};

export default CoverageAreasSection;