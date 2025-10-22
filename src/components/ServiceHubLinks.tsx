import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";

export interface ServiceLink {
  to: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: "emergency" | "transport" | "specialty" | "support";
}

interface ServiceHubLinksProps {
  title?: string;
  subtitle?: string;
  services: ServiceLink[];
  className?: string;
}

const ServiceHubLinks = ({ 
  title = "Related Services", 
  subtitle = "Explore our comprehensive towing and roadside assistance solutions",
  services,
  className = "" 
}: ServiceHubLinksProps) => {
  return (
    <section className={`py-12 sm:py-16 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.to}
                className="group block"
                title={service.title}
              >
                <Card className="h-full p-6 bg-service-card border-service-border hover:shadow-lg hover:border-tow-red/20 transition-all duration-200">
                  <div className="flex items-start mb-4">
                    <IconComponent className="h-8 w-8 text-tow-red flex-shrink-0" />
                    <div className="ml-3 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-tow-red transition-colors mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-tow-red font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceHubLinks;
