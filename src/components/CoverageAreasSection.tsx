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
    <section className="relative w-full min-h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${coverageHeroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 lg:py-0 min-h-[500px] sm:h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-white text-center lg:text-left order-1 lg:order-1">
              <p className="text-tow-red font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-2 sm:mb-3 lg:mb-4">
                Ontario-Wide Coverage
              </p>
              
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 lg:mb-6 leading-[1.1] sm:leading-tight">
                We Cover All of
                <span className="block text-tow-red mt-1 sm:mt-0">Ontario</span>
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-7 lg:mb-8 text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                From bustling city centers to remote rural highways, TowDaddy provides reliable towing and roadside assistance across every corner of Ontario. No matter where you are, help is just a call away.
              </p>

              {/* Major Regions Grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-7 lg:mb-8 max-w-md mx-auto lg:mx-0">
                {majorRegions.map((region, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-tow-red rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm lg:text-base text-white/90 font-medium">{region}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
                <Button 
                  size="lg" 
                  className="bg-tow-red hover:bg-tow-red-hover text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Emergency: (647) 949-7729
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4"
                >
                  View Coverage Map
                </Button>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-5 lg:gap-6 order-2 lg:order-2">
              {coverageStats.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-center hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-tow-red rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                      {item.stat}
                    </div>
                    
                    <div className="text-base sm:text-lg lg:text-xl font-semibold text-tow-red mb-1 sm:mb-2">
                      {item.label}
                    </div>
                    
                    <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed">
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