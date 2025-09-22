import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import towDaddyLogo from "@/assets/towdaddy-logo.png";

const Footer = () => {
  return (
    <footer className="bg-hero-bg text-hero-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <img 
                src={towDaddyLogo} 
                alt="TowDaddy Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold">TowDaddy</h3>
                <p className="text-xs sm:text-sm text-tow-red">24/7 Emergency</p>
              </div>
            </div>
            <p className="text-hero-foreground/80 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Safe flatbed towing and emergency roadside help across Ontario — no hooks, just care.
            </p>
            <Button variant="towRed" size="lg" className="w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Call Now: (647) 949-7729
            </Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Our Services</h4>
            <ul className="space-y-2 text-hero-foreground/80 text-sm sm:text-base">
              <li>Emergency Towing</li>
              <li>Roadside Assistance</li>
              <li>Vehicle Recovery</li>
              <li>Long Distance Towing</li>
              <li>Motorcycle Towing</li>
              <li>Commercial Towing</li>
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Coverage Areas</h4>
            <div className="flex items-start space-x-2 mb-3 sm:mb-4">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-tow-red mt-0.5 flex-shrink-0" />
              <div className="text-hero-foreground/80">
                <p className="font-medium text-sm sm:text-base">Ontario-Wide Service</p>
                <p className="text-xs sm:text-sm">All cities and remote areas</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-tow-red mt-0.5 flex-shrink-0" />
              <div className="text-hero-foreground/80">
                <p className="font-medium text-sm sm:text-base">24/7 Availability</p>
                <p className="text-xs sm:text-sm">Always ready to help</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-tow-red flex-shrink-0" />
                <span className="text-hero-foreground/80 text-sm sm:text-base">(647) 949-7729</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-tow-red flex-shrink-0" />
                <span className="text-hero-foreground/80 text-sm sm:text-base">info@towdaddy.ca</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-tow-red mt-0.5 flex-shrink-0" />
                <span className="text-hero-foreground/80 text-sm sm:text-base">Serving all of Ontario</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-hero-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-hero-foreground/60 text-xs sm:text-sm text-center md:text-left mb-4 md:mb-0">
            © 2024 TowDaddy. All rights reserved. Licensed & Insured Professional Towing Service.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-hero-foreground/60">
            <a href="#" className="hover:text-tow-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-tow-red transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-tow-red transition-colors">License Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;