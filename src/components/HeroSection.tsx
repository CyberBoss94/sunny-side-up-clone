import { Button } from "@/components/ui/button";
import { Phone, Clock, ShieldCheck, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroTowing from "@/assets/hero-towing.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-background" aria-label="Hero introduction">
      <div className="relative min-h-[100svh] md:min-h-[88vh] flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src={heroTowing}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
        />

        {/* Mobile: dark gradient bottom-up for legibility. Desktop: left fade. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30 md:bg-gradient-to-r md:from-background md:via-background/80 md:to-transparent" />

        {/* Play button — desktop only */}
        <button
          type="button"
          aria-label="Play intro video"
          className="hidden lg:flex absolute right-[8%] top-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-background/95 items-center justify-center shadow-2xl hover:scale-105 transition-transform z-10 ring-4 ring-tow-yellow/50"
        >
          <Play className="h-7 w-7 text-tow-yellow fill-tow-yellow ml-1" />
        </button>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 md:py-24">
          <div className="max-w-2xl text-white md:text-foreground">
            <p className="text-tow-yellow font-bold tracking-[0.2em] text-xs sm:text-sm md:text-base mb-4 sm:mb-6 uppercase">
              24/7 Emergency Towing Service
            </p>
            <h1 className="font-extrabold leading-[1.05] tracking-tight text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl mb-5 sm:mb-8 drop-shadow-lg md:drop-shadow-none">
              Got into trouble?
              <span className="block">We can help.</span>
            </h1>
            <p className="text-white/90 md:text-muted-foreground text-base sm:text-lg md:text-xl max-w-lg mb-8 sm:mb-10 leading-relaxed">
              TowDaddy is Ontario's trusted flatbed towing company. Clean trucks,
              professional drivers, and fast response — any time, day or night.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-tow-yellow hover:bg-tow-yellow-hover text-foreground font-bold text-base px-8 h-14 rounded-none shadow-xl w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://request.towdaddy.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a tow
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white md:border-foreground text-white md:text-foreground hover:bg-white hover:text-foreground md:hover:bg-foreground md:hover:text-background bg-transparent font-bold text-base px-8 h-14 rounded-none w-full sm:w-auto"
                asChild
              >
                <Link to="/services">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow striped trust bar */}
      <div
        className="relative bg-tow-yellow"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, hsl(var(--tow-yellow)) 0 28px, hsl(var(--tow-yellow-hover)) 28px 56px)",
        }}
      >
        <div className="container mx-auto px-4 py-5 sm:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-4">
            <a
              href="tel:+16474240433"
              className="flex items-center justify-center sm:justify-start md:justify-center gap-3 sm:gap-4 group"
            >
              <span className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-foreground flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-tow-yellow" />
              </span>
              <span className="font-bold text-foreground text-base sm:text-lg group-hover:underline">
                (647) 424-0433
              </span>
            </a>
            <div className="flex items-center justify-center sm:justify-start md:justify-center gap-3 sm:gap-4">
              <span className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-foreground flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-tow-yellow" />
              </span>
              <span className="font-bold text-foreground text-base sm:text-lg">
                Fast 30-min response
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start md:justify-center gap-3 sm:gap-4">
              <span className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-foreground flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5 text-tow-yellow" />
              </span>
              <span className="font-bold text-foreground text-base sm:text-lg">
                No hidden fees
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
