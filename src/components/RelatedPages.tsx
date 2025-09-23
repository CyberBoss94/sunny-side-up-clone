import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Phone, Star, Truck, Wrench, HelpCircle, Users, DollarSign } from "lucide-react";

interface RelatedPage {
  to: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

interface RelatedPagesProps {
  currentPage: string;
  className?: string;
}

const allPages: RelatedPage[] = [
  {
    to: "/services",
    title: "Professional Towing Services",
    description: "Complete range of emergency towing, roadside assistance, and vehicle recovery services across Ontario.",
    icon: <Truck className="h-6 w-6" />,
    category: "services"
  },
  {
    to: "/about",
    title: "About TowDaddy",
    description: "Learn about our 15+ years of experience, safety-first approach, and commitment to customer service.",
    icon: <Users className="h-6 w-6" />,
    category: "company"
  },
  {
    to: "/contact",
    title: "Contact & Emergency Help",
    description: "Get immediate assistance 24/7 or request quotes for planned services. Multiple contact options available.",
    icon: <Phone className="h-6 w-6" />,
    category: "contact"
  },
  {
    to: "/pricing",
    title: "Transparent Pricing",
    description: "View our upfront pricing for all services. No hidden fees, fair rates for emergency and scheduled towing.",
    icon: <DollarSign className="h-6 w-6" />,
    category: "pricing"
  },
  {
    to: "/coverage-areas",
    title: "Ontario Coverage Areas",
    description: "See our complete service coverage across Ontario including major cities, highways, and remote areas.",
    icon: <MapPin className="h-6 w-6" />,
    category: "coverage"
  },
  {
    to: "/faq",
    title: "Frequently Asked Questions",
    description: "Quick answers to common questions about our towing services, pricing, coverage, and emergency procedures.",
    icon: <HelpCircle className="h-6 w-6" />,
    category: "support"
  }
];

// Define related pages for each current page
const relatedPageMapping: Record<string, string[]> = {
  "/": ["/services", "/contact", "/pricing", "/coverage-areas"],
  "/services": ["/pricing", "/coverage-areas", "/contact", "/about"],
  "/about": ["/services", "/contact", "/pricing", "/faq"],
  "/contact": ["/services", "/pricing", "/coverage-areas", "/faq"],
  "/pricing": ["/services", "/contact", "/coverage-areas", "/about"],
  "/coverage-areas": ["/services", "/pricing", "/contact", "/about"],
  "/faq": ["/services", "/contact", "/pricing", "/about"]
};

const RelatedPages = ({ currentPage, className = "" }: RelatedPagesProps) => {
  const relatedPagePaths = relatedPageMapping[currentPage] || [];
  const relatedPages = allPages.filter(page => relatedPagePaths.includes(page.to));

  if (relatedPages.length === 0) return null;

  return (
    <section className={`py-12 sm:py-16 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            Related Information
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Explore more about our services and how we can help you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {relatedPages.map((page, index) => (
            <Card key={index} className="p-6 bg-service-card border-service-border hover:shadow-lg transition-all duration-300 group">
              <Link to={page.to} className="block">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-tow-red/10 text-tow-red group-hover:bg-tow-red group-hover:text-primary-foreground transition-colors">
                    {page.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-tow-red transition-colors mb-2">
                      {page.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-3 leading-relaxed">
                      {page.description}
                    </p>
                    <div className="flex items-center text-tow-red font-medium text-sm">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPages;