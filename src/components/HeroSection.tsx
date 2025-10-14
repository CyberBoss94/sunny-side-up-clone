import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, Clock, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroTowing from "@/assets/hero-towing.jpg";

const HeroSection = () => {
  return <section className="relative bg-hero-bg text-hero-foreground min-h-screen flex items-center" aria-label="Hero introduction">
      {/* Background Image */}
      <img 
        src={heroTowing}
        alt="" 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        fetchPriority="high"
        loading="eager"
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-2xl mb-6 leading-tight font-bold lg:text-5xl mb:text-4xl ">
            24/7 Towing Across Ontario
            <span className="block text-tow-red">– TowDaddy</span>
          </h1>
          
          <p className="text-xl mb-8 text-hero-foreground/90 max-w-3xl md:text-2xl text-left">
            Safe flatbed towing and emergency roadside help across Ontario — no hooks, just care. 
            Serving you anywhere in the province.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="towRed" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">Request a Tow →</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/10 border-hero-foreground/30 text-hero-foreground hover:bg-background/20" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <Card className="p-6 bg-service-card/95 backdrop-blur-sm px-0 py-[12px]">
              <div className="text-center">
                <Truck className="h-8 w-8 text-tow-red mx-auto mb-3" />
                <p className="font-semibold text-card-foreground mb-2">Flatbed Only</p>
                <p className="text-sm text-muted-foreground">No hooks, safer transport</p>
              </div>
            </Card>

            <Card className="p-6 bg-service-card/95 backdrop-blur-sm border-service-border px-0">
              <div className="text-center">
                <Clock className="h-8 w-8 text-tow-red mx-auto mb-3" />
                <p className="font-semibold text-card-foreground mb-2">24/7 Service</p>
                <p className="text-sm text-muted-foreground">Always available</p>
              </div>
            </Card>

            <Card className="p-6 bg-service-card/95 backdrop-blur-sm border-service-border px-0">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-tow-red mx-auto mb-3" />
                <p className="font-semibold text-card-foreground mb-2">Ontario-Wide</p>
                <p className="text-sm text-muted-foreground">Province coverage</p>
              </div>
            </Card>

            <Card className="p-6 bg-service-card/95 backdrop-blur-sm border-service-border px-0 py-[25px]">
              <div className="text-center">
                <Shield className="h-8 w-8 text-tow-red mx-auto mb-3" />
                <p className="font-semibold text-card-foreground mb-2">Licensed & Insured</p>
                <p className="text-sm text-muted-foreground">Professional service</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;