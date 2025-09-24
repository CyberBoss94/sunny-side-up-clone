import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SEOInternalLinkProps {
  href: string;
  title: string;
  description: string;
  showArrow?: boolean;
  className?: string;
}

const SEOInternalLink = ({ 
  href, 
  title, 
  description, 
  showArrow = true,
  className = ""
}: SEOInternalLinkProps) => {
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

export default SEOInternalLink;