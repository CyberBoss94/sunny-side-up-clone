import React from 'react';

interface SEOInternalLinkProps {
  href: string;
  title: string;
  description: string;
  className?: string;
}

const SEOInternalLink = ({ 
  href, 
  title, 
  description, 
  className = ""
}: SEOInternalLinkProps) => {
  return (
    <a 
      href={href} 
      className={`block group ${className}`}
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
      <span className="flex items-center text-tow-red font-medium text-sm">
        Learn more →
      </span>
    </a>
  );
};

export default SEOInternalLink;