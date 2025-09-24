import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import coverageHeroImage from "@/assets/coverage-areas-hero.jpg";
const CoverageAreasSection = () => {
  const coverageStats = [{
    icon: Navigation,
    stat: "400+",
    label: "Highways Covered",
    description: "Complete coverage of Ontario's highway network"
  }, {
    icon: MapPin,
    stat: "50+",
    label: "Cities Served",
    description: "From Toronto to Thunder Bay and everywhere between"
  }, {
    icon: Clock,
    stat: "24/7",
    label: "Always Available",
    description: "Round-the-clock emergency towing services"
  }];
  const majorRegions = ["Greater Toronto Area", "Eastern Ontario", "Southwestern Ontario", "Northern Ontario", "Golden Horseshoe", "Central Ontario"];
  return <section className="relative w-full min-h-[500px] py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${coverageHeroImage})`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
            
            {/* Left Content */}
            <div className="text-white order-1 lg:order-1">
              <p className="text-tow-red font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
                Ontario-Wide Coverage
              </p>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                We Cover All of
                <span className="block text-tow-red">Ontario</span>
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 text-white/90 leading-relaxed">
                From bustling city centers to remote rural highways, TowDaddy provides reliable towing and roadside assistance across every corner of Ontario. No matter where you are, help is just a call away.
              </p>

              {/* Major Regions Grid - Mobile Optimized */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                {majorRegions.map((region, index) => <div key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-tow-red rounded-full mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm lg:text-base text-white/90 leading-tight">{region}</span>
                  </div>)}
              </div>
              
              <div className="flex flex-col gap-2 sm:gap-3">
                <Button size="default" className="bg-tow-red hover:bg-tow-red-hover text-white font-semibold text-sm sm:text-base w-full sm:w-auto">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  <a href="tel:+16479497729" className="hover:text-tow-red transition-colors">Emergency: (647) 949-7729</a>
                </Button>
                <Button variant="outline" size="default" className="border-white/30 hover:border-white/50 text-sm w-full sm:w-auto text-teal-500 bg-neutral-50 sm:text-base">Book Request</Button>
              </div>
            </div>

            {/* Right Stats - 2 Column Grid */}
            <div className="order-2 lg:order-2">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {coverageStats.map((item, index) => {
                const IconComponent = item.icon;
                return <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 text-center hover:bg-white/15 transition-all duration-300">
                      <div className="flex justify-center mb-2 sm:mb-3 lg:mb-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-tow-red rounded-full flex items-center justify-center">
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white" />
                        </div>
                      </div>
                      
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                        {item.stat}
                      </div>
                      
                      <div className="text-xs sm:text-sm lg:text-base font-semibold text-tow-red mb-1 sm:mb-2 leading-tight">
                        {item.label}
                      </div>
                      
                      <p className="text-xs sm:text-sm text-white/80 leading-tight">
                        {item.description}
                      </p>
                    </div>;
              })}
              </div>
              
              {/* Third stat takes full width on mobile */}
              <div className="mt-3 sm:mt-4 lg:hidden">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-tow-red rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                    24/7
                  </div>
                  
                  <div className="text-xs sm:text-sm font-semibold text-tow-red mb-1 sm:mb-2 leading-tight">
                    Always Available
                  </div>
                  
                  <p className="text-xs sm:text-sm text-white/80 leading-tight">
                    Round-the-clock emergency towing services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tow-red via-red-500 to-tow-red" />
    </section>;
};
export default CoverageAreasSection;