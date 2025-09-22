import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import towDaddyLogo from "@/assets/towdaddy-logo.png";

const Header = () => {
  return (
    <header className="bg-background border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={towDaddyLogo} 
              alt="TowDaddy Logo" 
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground">TowDaddy</h1>
              <p className="text-sm text-tow-red font-medium">24/7 Emergency</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-foreground hover:text-tow-red transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-foreground hover:text-tow-red transition-colors">
              About
            </Link>
            <Link to="/coverage-areas" className="text-foreground hover:text-tow-red transition-colors">
              Coverage Areas
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-tow-red transition-colors">
              Pricing
            </Link>
            <Link to="/faq" className="text-foreground hover:text-tow-red transition-colors">
              FAQ
            </Link>
            <Link to="/contact">
              <Button variant="towRed" size="sm">
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;