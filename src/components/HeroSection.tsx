import { Button } from "@/components/ui/button";
import { Phone, Clock, ShieldCheck, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroTowing from "@/assets/hero-towing.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-background" aria-label="Hero introduction">
      <div className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src={heroTowing}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        {/* Left fade overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 md:via-background/70 to-transparent" />

        {/* Play button center-right */}
        <button
          type="button"
          aria-label="Play intro video"
          className="hidden md:flex absolute right-[10%] top-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-background/95 items-center justify-center shadow-2xl hover:scale-105 transition-transform z-10 ring-4 ring-tow-yellow/40"
        >
          <Play className="h-7 w-7 text-tow-yellow fill-tow-yellow ml-1" />
        </button>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <p className="text-tow-yellow font-bold tracking-[0.2em] text-sm md:text-base mb-6 uppercase">
              24/7 Emergency Towing Service
            </p>
            <h1 className="text-foreground font-extrabold leading-[1.05] tracking-tight text-5xl md:text-7xl mb-8">
              Got into trouble?
              <span className="block">We can help.</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              TowDaddy is Ontario's trusted flatbed towing company. Clean trucks,
              professional drivers, and fast response — any time, day or night.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-tow-yellow hover:bg-tow-yellow-hover text-foreground font-bold text-base px-8 h-14 rounded-none shadow-lg"
                asChild
              >
                <a
                  href="https://request.towdaddy.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Call us now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent font-bold text-base px-8 h-14 rounded-none"
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
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            <a
              href="tel:+16474240433"
              className="flex items-center justify-center gap-4 group"
            >
              <span className="h-12 w-12 rounded-full bg-foreground flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-tow-yellow" />
              </span>
              <span className="font-bold text-foreground text-lg group-hover:underline">
                (647) 424-0433
              </span>
            </a>
            <div className="flex items-center justify-center gap-4">
              <span className="h-12 w-12 rounded-full bg-foreground flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-tow-yellow" />
              </span>
              <span className="font-bold text-foreground text-lg">
                Fast 30-min response
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="h-12 w-12 rounded-full bg-background flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5 text-tow-yellow" />
              </span>
              <span className="font-bold text-foreground text-lg">
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
