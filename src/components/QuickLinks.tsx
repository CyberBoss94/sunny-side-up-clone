import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, MapPin, Clock, Star, Shield } from "lucide-react";

interface QuickLinksProps {
  variant?: "emergency" | "services" | "info";
  className?: string;
}

const QuickLinks = ({ variant = "emergency", className = "" }: QuickLinksProps) => {
  const renderEmergencyLinks = () => (
    <div className={`bg-tow-red/10 border border-tow-red/20 rounded-lg p-4 sm:p-6 ${className}`}>
      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 flex items-center">
        <Phone className="h-5 w-5 mr-2 text-tow-red" />
        Need Immediate Help?
      </h3>
      <div className="space-y-3">
        <Button variant="towRed" size="lg" className="w-full text-sm sm:text-base" asChild>
          <a href="tel:+16474240433">
            <Phone className="h-4 w-4 mr-2" />
            Emergency: (647) 424-0433
          </a>
        </Button>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/services">View Services</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/coverage-areas">Service Areas</Link>
          </Button>
        </div>
      </div>
    </div>
  );

  const renderServiceLinks = () => (
    <div className={`bg-muted/50 rounded-lg p-4 sm:p-6 ${className}`}>
      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
        Popular Services
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link 
          to="/services#emergency" 
          className="flex items-center p-3 bg-background rounded-md hover:bg-tow-red/5 transition-colors group"
        >
          <Clock className="h-4 w-4 text-tow-red mr-2" />
          <span className="text-sm font-medium group-hover:text-tow-red">24/7 Emergency Towing</span>
        </Link>
        <Link 
          to="/services#roadside" 
          className="flex items-center p-3 bg-background rounded-md hover:bg-tow-red/5 transition-colors group"
        >
          <Shield className="h-4 w-4 text-tow-red mr-2" />
          <span className="text-sm font-medium group-hover:text-tow-red">Roadside Assistance</span>
        </Link>
        <Link 
          to="/services#recovery" 
          className="flex items-center p-3 bg-background rounded-md hover:bg-tow-red/5 transition-colors group"
        >
          <Star className="h-4 w-4 text-tow-red mr-2" />
          <span className="text-sm font-medium group-hover:text-tow-red">Vehicle Recovery</span>
        </Link>
        <Link 
          to="/pricing" 
          className="flex items-center p-3 bg-background rounded-md hover:bg-tow-red/5 transition-colors group"
        >
          <MessageSquare className="h-4 w-4 text-tow-red mr-2" />
          <span className="text-sm font-medium group-hover:text-tow-red">Get Price Quote</span>
        </Link>
      </div>
    </div>
  );

  const renderInfoLinks = () => (
    <div className={`bg-background border border-border rounded-lg p-4 sm:p-6 ${className}`}>
      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
        Quick Information
      </h3>
      <div className="space-y-3">
        <Link 
          to="/coverage-areas" 
          className="flex items-center justify-between p-3 bg-muted/30 rounded-md hover:bg-tow-red/5 transition-colors group"
        >
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-tow-red mr-2" />
            <span className="text-sm font-medium group-hover:text-tow-red">Ontario Coverage Map</span>
          </div>
        </Link>
        <Link 
          to="/faq" 
          className="flex items-center justify-between p-3 bg-muted/30 rounded-md hover:bg-tow-red/5 transition-colors group"
        >
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 text-tow-red mr-2" />
            <span className="text-sm font-medium group-hover:text-tow-red">Common Questions</span>
          </div>
        </Link>
        <Link 
          to="/about" 
          className="flex items-center justify-between p-3 bg-muted/30 rounded-md hover:bg-tow-red/5 transition-colors group"
        >
          <div className="flex items-center">
            <Shield className="h-4 w-4 text-tow-red mr-2" />
            <span className="text-sm font-medium group-hover:text-tow-red">Why Choose TowDaddy</span>
          </div>
        </Link>
      </div>
    </div>
  );

  switch (variant) {
    case "emergency":
      return renderEmergencyLinks();
    case "services":
      return renderServiceLinks();
    case "info":
      return renderInfoLinks();
    default:
      return renderEmergencyLinks();
  }
};

export default QuickLinks;