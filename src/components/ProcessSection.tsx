import { Phone, MapPin, Truck, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      icon: Phone,
      title: "Submit Your Tow Request",
      description: "Include name, contact, vehicle details, issue, and live GPS location for quick dispatch."
    },
    {
      number: "2",
      icon: MapPin,
      title: "Get Matched With a Tow Truck Driver",
      description: "Our dispatch system assigns the closest flatbed driver to your location immediately."
    },
    {
      number: "3",
      icon: Truck,
      title: "Track Your Driver in Real Time",
      description: "View live ETA, location map, and service status through our tracking system."
    },
    {
      number: "4",
      icon: CheckCircle,
      title: "Receive Service & Get Back on the Road",
      description: "Our certified flatbed operator confirms arrival and provides professional assistance."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
            How it All Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Need help? Whether it's a dead battery or accident recovery, TowDaddy makes Ontario-wide towing simple.
          </p>
        </div>

        {/* Responsive Timeline */}
        <div className="relative max-w-md mx-auto md:max-w-4xl">
          {/* Vertical connecting line */}
          <div className="absolute left-5 w-0.5 h-full bg-primary/20 top-0 md:left-1/2 md:-translate-x-1/2" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative flex md:grid md:grid-cols-2 md:gap-10 items-start mb-12 last:mb-0">
                {/* === Timeline Dot & Icon (Position changes with screen size) === */}
                <div className={`absolute left-0 top-1 md:relative md:flex ${isEven ? 'md:justify-end md:order-2' : 'md:justify-start md:order-1'}`}>
                  <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-lg border-2 border-primary z-10">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* === Content Card === */}
                <div className={`w-full ml-16 md:ml-0 p-6 rounded-lg ${isEven ? 'md:order-1 bg-primary text-background' : 'md:order-2 bg-muted'}`}>
                  {/* Mobile Title & Step */}
                  <div className="md:hidden mb-2">
                    <p className="text-sm font-bold opacity-70">STEP {step.number}</p>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                  </div>
                  {/* Desktop Title */}
                  <h3 className="hidden md:block text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{step.description}</p>
                </div>

                {/* === Desktop Step Number === */}
                <div className={`hidden md:flex items-center ${isEven ? 'md:order-2 justify-start' : 'md:order-1 justify-end'}`}>
                  <div className="font-bold text-primary">
                    <span className="text-4xl">STEP</span>
                    <span className="text-6xl text-primary/60 ml-2">{step.number.padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Availability Notice */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center bg-background border border-border rounded-full px-6 py-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Available 24/7, 365 Days a Year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;