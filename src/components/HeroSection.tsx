import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, Clock, MapPin, Shield } from "lucide-react";
import heroTowing from "@/assets/hero-towing.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-bg text-hero-foreground min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroTowing})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block">24/7 Towing Across Ontario</span>
            <span className="block text-tow-red">– TowDaddy</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-hero-foreground/90 max-w-2xl leading-relaxed">
            Safe flatbed towing and emergency roadside help across Ontario — no hooks, just care. 
            Serving you anywhere in the province.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Button 
              variant="towRed" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
            >
              Request a Tow →
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto bg-background/10 border-hero-foreground/30 text-hero-foreground hover:bg-background/20"
            >
              View Services
            </Button>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <Card className="p-4 sm:p-5 lg:p-6 bg-service-card/95 backdrop-blur-sm border-service-border">
              <div className="text-center">
                <Truck className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-tow-red mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold text-card-foreground mb-1 sm:mb-2 text-sm sm:text-base">Flatbed Only</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">No hooks, safer transport</p>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 lg:p-6 bg-service-card/95 backdrop-blur-sm border-service-border">
              <div className="text-center">
                <Clock className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-tow-red mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold text-card-foreground mb-1 sm:mb-2 text-sm sm:text-base">24/7 Service</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Always available</p>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 lg:p-6 bg-service-card/95 backdrop-blur-sm border-service-border">
              <div className="text-center">
                <MapPin className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-tow-red mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold text-card-foreground mb-1 sm:mb-2 text-sm sm:text-base">Ontario-Wide</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Province coverage</p>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 lg:p-6 bg-service-card/95 backdrop-blur-sm border-service-border">
              <div className="text-center">
                <Shield className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-tow-red mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold text-card-foreground mb-1 sm:mb-2 text-sm sm:text-base">Licensed & Insured</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Professional service</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;