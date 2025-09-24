import React from 'react';
import { ArrowRight } from 'lucide-react';

interface InternalLinkData {
  href: string;
  title: string;
  description: string;
}

interface SEOInternalLinksProps {
  // Single link mode
  href?: string;
  title?: string;
  description?: string;
  showArrow?: boolean;
  
  // Multiple links mode
  links?: InternalLinkData[];
  sectionTitle?: string;
  subtitle?: string;
  className?: string;
  gridCols?: 1 | 2 | 3;
}

// Default internal links data for TowDaddy
const defaultInternalLinks: InternalLinkData[] = [
  {
    href: "/coverage-areas",
    title: "Ontario Coverage Areas",
    description: "See our complete service coverage across Ontario including major cities, highways, and remote areas."
  },
  {
    href: "/services/emergency-towing",
    title: "Flatbed & Emergency Towing",
    description: "24/7 emergency flatbed towing service for cars, trucks, and motorcycles across Ontario."
  },
  {
    href: "/services/roadside-assistance",
    title: "Roadside Assistance",
    description: "Professional roadside help including jump starts, tire changes, lockouts, and fuel delivery."
  },
  {
    href: "/services/vehicle-recovery",
    title: "Vehicle Transport & Recovery",
    description: "Safe vehicle recovery from accidents, ditches, and challenging terrain with specialized equipment."
  },
  {
    href: "/about",
    title: "About TowDaddy",
    description: "Learn about our professional towing company, experienced team, and commitment to reliable service."
  },
  {
    href: "/contact",
    title: "Contact & Service Requests",
    description: "Get in touch for immediate towing assistance or schedule your vehicle transport service."
  }
];

// Single Link Component
const SEOInternalLink = ({ 
  href, 
  title, 
  description, 
  showArrow = true,
  className = ""
}: { href: string; title: string; description: string; showArrow?: boolean; className?: string }) => {
  return (
    <a 
      href={href} 
      className={`block group p-4 rounded-lg bg-background border border-border hover:border-tow-red/20 hover:bg-muted/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-tow-red focus:ring-offset-2 ${className}`}
      role="link"
      aria-describedby={`desc-${href.replace(/[^a-zA-Z0-9]/g, '')}`}
    >
      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-tow-red transition-colors mb-2">
        {title}
      </h3>
      <p 
        id={`desc-${href.replace(/[^a-zA-Z0-9]/g, '')}`}
        className="text-muted-foreground text-sm sm:text-base mb-3 leading-relaxed"
      >
        {description}
      </p>
      {showArrow && (
        <span className="flex items-center text-tow-red font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
          Learn more 
          <ArrowRight className="ml-1 h-4 w-4" />
        </span>
      )}
    </a>
  );
};

const SEOInternalLinks = ({ 
  // Single link props
  href,
  title,
  description,
  showArrow = true,
  
  // Multiple links props
  links = defaultInternalLinks,
  sectionTitle = "Explore Our Services",
  subtitle = "Discover our comprehensive towing and roadside assistance solutions across Ontario",
  className = "",
  gridCols = 2
}: SEOInternalLinksProps) => {
  // Single link mode
  if (href && title && description) {
    return (
      <SEOInternalLink
        href={href}
        title={title}
        description={description}
        showArrow={showArrow}
        className={className}
      />
    );
  }

  // Multiple links mode
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2", 
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  };

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {(sectionTitle || subtitle) && (
          <div className="text-center mb-8">
            {sectionTitle && (
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {sectionTitle}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className={`grid ${gridColsClass[gridCols]} gap-6`}>
          {links.map((link, index) => (
            <SEOInternalLink
              key={`${link.href}-${index}`}
              href={link.href}
              title={link.title}
              description={link.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOInternalLinks;