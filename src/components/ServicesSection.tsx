import { Link } from "react-router-dom";
import { Truck, Bike, MapPin, LifeBuoy, BadgePercent, ChevronsRight } from "lucide-react";

const ServicesSection = () => {
  const cards = [
    {
      icon: LifeBuoy,
      title: "Emergency towing service",
      description:
        "Stuck on the road? We answer 24/7. Our flatbed trucks find you fast and get your car moving safely.",
      to: "/services/emergency-towing",
    },
    {
      icon: Truck,
      title: "Car towing service",
      description:
        "We use clean, modern flatbed trucks. No hooks, no scrapes — just safe transport for your car.",
      to: "/services/vehicle-recovery",
    },
    {
      icon: Bike,
      title: "Motorcycle towing",
      description:
        "Bike-only trailers and soft tie-downs. Your motorcycle arrives without a single scratch.",
      to: "/services/motorcycle-towing",
    },
    {
      icon: MapPin,
      title: "Long distance towing",
      description:
        "Moving across Ontario? We tow your vehicle anywhere in the province with live tracking.",
      to: "/services/long-distance-towing",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 md:py-28 bg-secondary/40 overflow-hidden"
      aria-label="Our towing services"
    >
      {/* Decorative tire-tread pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p className="text-muted-foreground font-bold tracking-[0.25em] text-xs md:text-sm uppercase mb-5">
            Our Services
          </p>
          <h2 className="text-foreground font-extrabold leading-[1.1] tracking-tight text-3xl md:text-5xl mb-6">
            We transport your vehicle
            <br className="hidden md:block" /> safely and efficiently
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            TowDaddy is a fully-equipped towing company available 24/7. We deliver
            fast, friendly, and reliable service across Ontario — every day of the year.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Top-left large white card */}
          <FeatureCard
            className="lg:col-span-3"
            icon={cards[0].icon}
            title={cards[0].title}
            description={cards[0].description}
            to={cards[0].to}
          />

          {/* Top-right yellow promo card */}
          <Link
            to="/pricing"
            className="lg:col-span-3 group relative bg-tow-yellow rounded-xl p-8 md:p-10 hover:shadow-xl transition-shadow flex flex-col"
          >
            <span className="absolute top-6 right-6 bg-foreground text-tow-yellow text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded">
              Limited Offer
            </span>
            <BadgePercent className="h-12 w-12 text-foreground mb-6" strokeWidth={1.75} />
            <h3 className="text-foreground font-extrabold text-2xl md:text-3xl mb-3 leading-tight">
              25% off emergency road service
            </h3>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6 max-w-md">
              A welcome offer for new customers. Save on your first call and see why
              drivers across Ontario trust TowDaddy.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 font-bold text-foreground group-hover:gap-3 transition-all">
              View pricing
              <ChevronsRight className="h-5 w-5" />
            </span>
          </Link>

          {/* Bottom row: three equal white cards */}
          {cards.slice(1).map((c) => (
            <FeatureCard
              key={c.title}
              className="lg:col-span-2"
              icon={c.icon}
              title={c.title}
              description={c.description}
              to={c.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, to, className = "" }: FeatureCardProps) => (
  <Link
    to={to}
    className={`group bg-card rounded-xl p-8 md:p-10 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col ${className}`}
  >
    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-tow-yellow/15">
      <Icon className="h-7 w-7 text-tow-yellow" strokeWidth={1.75} />
    </div>
    <h3 className="text-foreground font-extrabold text-xl md:text-2xl mb-3 leading-tight">
      {title}
    </h3>
    <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground group-hover:gap-3 transition-all">
      Learn about {title.toLowerCase()}
      <ChevronsRight className="h-4 w-4" />
    </span>
  </Link>
);

export default ServicesSection;
