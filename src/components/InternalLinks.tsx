import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface InternalLink {
  to: string;
  text: string;
  description?: string;
}

interface InternalLinksProps {
  title: string;
  links: InternalLink[];
  className?: string;
}

const InternalLinks = ({ title, links, className = "" }: InternalLinksProps) => {
  return (
    <div className={`bg-muted/30 p-6 rounded-lg ${className}`}>
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      <div className="space-y-3">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="flex items-center justify-between p-3 bg-background rounded-md hover:bg-tow-red/5 transition-colors group"
          >
            <div className="flex-1">
              <span className="text-foreground font-medium group-hover:text-tow-red transition-colors">
                {link.text}
              </span>
              {link.description && (
                <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
              )}
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-tow-red transition-colors ml-2" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InternalLinks;