import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import towDaddyLogo from "@/assets/towdaddy-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/coverage-areas", label: "Coverage Areas" },
    { to: "/pricing", label: "Pricing" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <header className="bg-background border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <img 
              src={towDaddyLogo} 
              alt="TowDaddy Logo" 
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">TowDaddy</h1>
              <p className="text-xs md:text-sm text-tow-red font-medium">24/7 Emergency</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-tow-red transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="towRed" size="sm">
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between pb-6 border-b">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={towDaddyLogo} 
                      alt="TowDaddy Logo" 
                      className="h-8 w-8"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-foreground">TowDaddy</h2>
                      <p className="text-xs text-tow-red font-medium">24/7 Emergency</p>
                    </div>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="sm">
                      <X className="h-4 w-4" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Mobile Menu Navigation */}
                <nav className="flex flex-col space-y-4 pt-6 flex-1">
                  {navigationLinks.map((link) => (
                    <SheetClose asChild key={link.to}>
                      <Link
                        to={link.to}
                        className="text-foreground hover:text-tow-red transition-colors font-medium py-2 px-3 rounded-md hover:bg-muted"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  
                  {/* Mobile Contact Button */}
                  <div className="pt-4 border-t mt-auto">
                    <SheetClose asChild>
                      <Link to="/contact" className="block">
                        <Button variant="towRed" className="w-full">
                          Contact Us
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;