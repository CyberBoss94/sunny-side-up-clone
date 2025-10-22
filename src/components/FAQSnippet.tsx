import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface FAQSnippetProps {
  question: string;
  answer: string;
  linkText?: string;
  linkUrl?: string;
}

const FAQSnippet = ({ question, answer, linkText, linkUrl }: FAQSnippetProps) => {
  return (
    <Card className="p-4 sm:p-6 bg-service-card border-service-border hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 sm:gap-4">
        <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 text-tow-red flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
            {question}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-3">
            {answer}
          </p>
          {linkText && linkUrl && (
            <Link 
              to={linkUrl} 
              className="text-sm font-medium text-tow-red hover:underline"
            >
              {linkText} →
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FAQSnippet;