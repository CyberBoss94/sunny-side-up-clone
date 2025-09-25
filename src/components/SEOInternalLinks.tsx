import React from 'react';

interface InternalLinkData {
  href: string;
  title: string;
  description: string;
}

interface SEOInternalLinksProps {
  links?: InternalLinkData[];
  sectionTitle?: string;
  subtitle?: string;
  className?: string;
  gridCols?: 1 | 2 | 3;
  currentPage?: string;
  showSchema?: boolean;
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
    title: "Professional Emergency Towing",
    description: "24/7 emergency flatbed towing service for cars, trucks, and motorcycles across Ontario."
  },
  {
    href: "/services/roadside-assistance",
    title: "Roadside Assistance Services",
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

// Related pages mapping for different current pages
const relatedPagesMapping: Record<string, string[]> = {
  "/": ["/services/emergency-towing", "/coverage-areas", "/about", "/contact"],
  "/services": ["/services/emergency-towing", "/services/roadside-assistance", "/services/vehicle-recovery", "/coverage-areas"],
  "/services/emergency-towing": ["/services/roadside-assistance", "/services/vehicle-recovery", "/coverage-areas", "/contact"],
  "/services/roadside-assistance": ["/services/emergency-towing", "/services/vehicle-recovery", "/coverage-areas", "/contact"],
  "/services/vehicle-recovery": ["/services/emergency-towing", "/services/roadside-assistance", "/coverage-areas", "/contact"],
  "/coverage-areas": ["/services/emergency-towing", "/services/roadside-assistance", "/about", "/contact"],
  "/about": ["/services/emergency-towing", "/coverage-areas", "/contact"],
  "/contact": ["/services/emergency-towing", "/coverage-areas", "/about"]
};

const SEOInternalLink = ({ 
  href, 
  title, 
  description, 
  className = ""
}: { href: string; title: string; description: string; className?: string }) => {
  return (
    <a 
      href={href} 
      className={`block group p-4 rounded-lg bg-background border border-border hover:border-tow-red/20 hover:bg-muted/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-tow-red focus:ring-offset-2 ${className}`}
      title={title}
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
      <span className="flex items-center text-tow-red font-medium text-sm">
        Learn more →
      </span>
    </a>
  );
};

const SEOInternalLinks = ({ 
  links,
  sectionTitle = "Related Pages",
  subtitle = "Explore more of our professional towing and roadside assistance services",
  className = "",
  gridCols = 2,
  currentPage = "/",
  showSchema = true
}: SEOInternalLinksProps) => {
  // Get related links based on current page or use provided links
  const relatedLinks = links || 
    (relatedPagesMapping[currentPage] || relatedPagesMapping["/"])
      .map(href => defaultInternalLinks.find(link => link.href === href))
      .filter(Boolean) as InternalLinkData[];

  if (relatedLinks.length === 0) return null;

  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2", 
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  };

  // Schema.org SiteNavigationElement
  const schemaData = showSchema ? {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": sectionTitle,
    "url": `https://towdaddy.ca${currentPage}`,
    "hasPart": relatedLinks.map(link => ({
      "@type": "SiteNavigationElement",
      "name": link.title,
      "description": link.description,
      "url": `https://towdaddy.ca${link.href}`
    }))
  } : null;

  return (
    <>
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
      <nav aria-label="Related pages" className={`py-12 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {sectionTitle}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
          
          <div className={`grid ${gridColsClass[gridCols]} gap-6`}>
            {relatedLinks.map((link, index) => (
              <SEOInternalLink
                key={`${link.href}-${index}`}
                href={link.href}
                title={link.title}
                description={link.description}
              />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default SEOInternalLinks;