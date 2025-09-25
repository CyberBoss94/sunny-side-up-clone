import { Metadata } from 'next'
import { LocalBusiness, WithContext } from 'schema-dts'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
  pageType?: 'website' | 'article' | 'service'
}

export function generateMetadata({
  title = "TowDaddy - 24/7 Towing Across Ontario",
  description = "Professional 24/7 towing service across Ontario. Safe flatbed towing, emergency roadside assistance, and vehicle recovery. Licensed, insured, and no hooks - just care.",
  keywords = "towing, roadside assistance, emergency towing, Ontario, flatbed towing, vehicle recovery, 24/7 towing, professional towing service",
  ogImage = "/towdaddy-logo.png",
  canonicalUrl,
  pageType = "website"
}: SEOProps): Metadata {
  const currentUrl = canonicalUrl || 'https://towdaddy.ca'
  
  return {
    title,
    description,
    keywords,
    authors: [{ name: 'TowDaddy' }],
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    verification: {
      google: 'DXAnNjx39dtKveHHB5lYegUIhHt24unWhZoA5RYlCoE'
    },
    alternates: {
      canonical: currentUrl
    },
    openGraph: {
      title,
      description,
      type: pageType,
      url: currentUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - TowDaddy Logo`
        }
      ],
      siteName: 'TowDaddy',
      locale: 'en_CA'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      site: '@towdaddy',
      creator: '@towdaddy'
    },
    other: {
      'geo.region': 'CA-ON',
      'geo.placename': 'Toronto, Scarborough, Thornhill, Vaughan, Ontario',
      'geo.position': '43.6532;-79.3832',
      'ICBM': '43.6532, -79.3832',
      'theme-color': '#E53E3E',
      'msapplication-TileColor': '#E53E3E'
    }
  }
}

export function generateLocalBusinessSchema(): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TowDaddy Towing Services",
    "url": "https://towdaddy.ca",
    "logo": "https://towdaddy.ca/towdaddy-logo.png",
    "image": "https://towdaddy.ca/towdaddy-logo.png",
    "description": "Professional 24/7 towing and roadside assistance services across Ontario",
    "telephone": "+16479497729",
    "email": "info@towdaddy.ca",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA",
      "addressRegion": "ON", 
      "addressLocality": "Toronto"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.6532",
      "longitude": "-79.3832"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": [
      { "@type": "Place", "name": "Toronto" },
      { "@type": "Place", "name": "Scarborough" },
      { "@type": "Place", "name": "Thornhill" },
      { "@type": "Place", "name": "Vaughan" },
      { "@type": "Place", "name": "Mississauga" },
      { "@type": "Place", "name": "Brampton" },
      { "@type": "Place", "name": "Hamilton" },
      { "@type": "Place", "name": "Ottawa" },
      { "@type": "Place", "name": "London" },
      { "@type": "Place", "name": "Ontario" }
    ],
    "serviceType": [
      "Towing",
      "Roadside Assistance", 
      "Vehicle Recovery",
      "Flatbed Towing",
      "Emergency Towing",
      "Motorcycle Towing",
      "Long Distance Towing"
    ],
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
            "description": "24/7 emergency towing service across Ontario"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roadside Assistance",
            "description": "Professional roadside assistance including battery jumps, tire changes, lockouts"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vehicle Recovery",
            "description": "Safe vehicle recovery from accidents and off-road situations"
          }
        }
      ]
    },
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "CAD"
  }
}