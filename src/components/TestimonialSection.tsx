import { Quote } from "lucide-react";
import ceoImage from "@/assets/testimonial-ceo.png";

const TestimonialSection = () => {
  return (
    <section
      className="bg-foreground text-background py-16 sm:py-20 lg:py-24"
      aria-label="Founder testimonial"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Yellow card with portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm aspect-[3/4] bg-tow-yellow rounded-md overflow-hidden">
              {/* Diagonal stripe accents */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, transparent 0 60px, hsl(var(--tow-yellow-hover)) 60px 80px)",
                }}
                aria-hidden="true"
              />
              <img
                src={ceoImage}
                alt="Olaf Rogers, CEO and founder of TowDaddy"
                width={768}
                height={1024}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Quote */}
          <div className="lg:col-span-7">
            <span
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-tow-yellow mb-6"
              aria-hidden="true"
            >
              <Quote className="h-5 w-5 text-foreground fill-foreground" />
            </span>
            <blockquote>
              <p className="font-bold leading-tight tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] mb-8 text-background">
                Give us a call and we'll provide you with emergency battery jump
                start or replacement immediately.
              </p>
              <footer className="not-italic">
                <p className="font-bold text-base sm:text-lg text-background">
                  Olaf Rogers
                </p>
                <p className="text-sm sm:text-base text-background/60 mt-1">
                  CEO, founder
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
