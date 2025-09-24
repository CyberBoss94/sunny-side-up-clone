import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  breadcrumbs?: Array<{ name: string; url: string }>;
  pageType?: "website" | "article" | "service";
}

const SEO = ({
  title = "TowDaddy - 24/7 Towing Across Ontario",
  description = "Professional 24/7 towing service across Ontario. Safe flatbed towing, emergency roadside assistance, and vehicle recovery. Licensed, insured, and no hooks - just care.",
  keywords = "towing, roadside assistance, emergency towing, Ontario, flatbed towing, vehicle recovery, 24/7 towing, professional towing service",
  canonicalUrl,
  ogImage = "https://towdaddy.ca/assets/towdaddy-logo-Bw97cD2y.png",
  structuredData,
  breadcrumbs,
  pageType = "website"
}: SEOProps) => {
  const currentUrl = canonicalUrl || `${window.location.origin}${window.location.pathname}`;
  
  // Organization structured data (main site identity)
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TowDaddy",
    "url": "https://towdaddy.ca",
    "logo": "https://towdaddy.ca/assets/towdaddy-logo-Bw97cD2y.png",
    "description": "Professional 24/7 towing service across Ontario",
    "telephone": "+16479497729",
    "email": "info@towdaddy.ca",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Ontario",
      "addressCountry": "Canada"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.6532",
      "longitude": "-79.3832"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "serviceArea": {
      "@type": "State",
      "name": "Ontario"
    },
    "sameAs": [
      "https://twitter.com/towdaddy",
      "https://www.instagram.com/towdaddy"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Towing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Towing",
            "description": "24/7 emergency towing service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roadside Assistance",
            "description": "Professional roadside assistance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vehicle Recovery",
            "description": "Safe vehicle recovery service"
          }
        }
      ]
    },
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "CAD"
  };

  // Website structured data (for homepage mainly)
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TowDaddy",
    "url": "https://towdaddy.ca",
    "description": "Professional 24/7 towing service across Ontario",
    "publisher": {
      "@type": "Organization",
      "name": "TowDaddy",
      "logo": "https://towdaddy.ca/assets/towdaddy-logo-Bw97cD2y.png"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://towdaddy.ca/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${window.location.origin}${crumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="TowDaddy" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - TowDaddy Logo`} />
      <meta property="og:site_name" content="TowDaddy" />
      <meta property="og:locale" content="en_CA" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${title} - TowDaddy Logo`} />
      <meta name="twitter:site" content="@towdaddy" />
      <meta name="twitter:creator" content="@towdaddy" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#E53E3E" />
      <meta name="msapplication-TileColor" content="#E53E3E" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      
      {/* Website Structured Data (for homepage) */}
      {window.location.pathname === '/' && (
        <script type="application/ld+json">
          {JSON.stringify(websiteData)}
        </script>
      )}
      
      {/* Custom Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;