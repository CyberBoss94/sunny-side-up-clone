import React from 'react';
import SEOInternalLink from './SEOInternalLink';

interface InternalLinkData {
  href: string;
  title: string;
  description: string;
}

interface SEOInternalLinksProps {
  links?: InternalLinkData[];
  title?: string;
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

const SEOInternalLinks = ({ 
  links = defaultInternalLinks,
  title = "Explore Our Services",
  subtitle = "Discover our comprehensive towing and roadside assistance solutions across Ontario",
  className = "",
  gridCols = 2
}: SEOInternalLinksProps) => {
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2", 
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  };

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-8">
            {title && (
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {title}
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