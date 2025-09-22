import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import towDaddyLogo from "@/assets/towdaddy-logo.png";

const Footer = () => {
  return (
    <footer className="bg-hero-bg text-hero-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={towDaddyLogo} 
                alt="TowDaddy Logo" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-xl font-bold">TowDaddy</h3>
                <p className="text-sm text-tow-red">24/7 Emergency</p>
              </div>
            </div>
            <p className="text-hero-foreground/80 mb-4">
              Safe flatbed towing and emergency roadside help across Ontario — no hooks, just care.
            </p>
            <Button variant="towRed" size="lg">
              <Phone className="w-4 h-4 mr-2" />
              Call Now: (647) 949-7729
            </Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-hero-foreground/80">
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
            <h4 className="text-lg font-semibold mb-4">Coverage Areas</h4>
            <div className="flex items-start space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-tow-red mt-0.5" />
              <div className="text-hero-foreground/80">
                <p className="font-medium">Ontario-Wide Service</p>
                <p className="text-sm">All cities and remote areas</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Clock className="w-5 h-5 text-tow-red mt-0.5" />
              <div className="text-hero-foreground/80">
                <p className="font-medium">24/7 Availability</p>
                <p className="text-sm">Always ready to help</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-tow-red" />
                <span className="text-hero-foreground/80">(647) 949-7729</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-tow-red" />
                <span className="text-hero-foreground/80">info@towdaddy.ca</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-tow-red mt-0.5" />
                <span className="text-hero-foreground/80">Serving all of Ontario</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-hero-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-hero-foreground/60 text-sm">
            © 2024 TowDaddy. All rights reserved. Licensed & Insured Professional Towing Service.
          </p>
          <div className="flex space-x-6 text-sm text-hero-foreground/60 mt-4 md:mt-0">
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