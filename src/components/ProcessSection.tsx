import { Card } from "@/components/ui/card";
import { Phone, MapPin, Truck, CheckCircle } from "lucide-react";
const ProcessSection = () => {
  const steps = [{
    number: "1",
    icon: Phone,
    title: "Submit Your Tow Request",
    description: "Include name, contact, vehicle details, issue, and live GPS location for quick dispatch."
  }, {
    number: "2",
    icon: MapPin,
    title: "Get Matched With a Tow Truck Driver",
    description: "Our dispatch system assigns the closest flatbed driver to your location immediately."
  }, {
    number: "3",
    icon: Truck,
    title: "Track Your Driver in Real Time",
    description: "View live ETA, location map, and service status through our tracking system."
  }, {
    number: "4",
    icon: CheckCircle,
    title: "Receive Service & Get Back on the Road",
    description: "Our certified flatbed operator confirms arrival and provides professional assistance."
  }];

  return <section className="py-12 sm:py-16 lg:py-20 bg-background">
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

        {/* Timeline Steps */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border"></div>
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className={`relative mb-16 lg:mb-20 ${isEven ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:justify-between`}>
                {/* Content Side */}
                <div className={`lg:w-5/12 ${isEven ? 'lg:text-right lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle & Icon */}
                <div className="flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 my-8 lg:my-0">
                  <div className="relative">
                    {/* Numbered Circle */}
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Icon Side */}
                <div className={`lg:w-5/12 flex justify-center ${isEven ? 'lg:justify-start lg:pl-16' : 'lg:justify-end lg:pr-16'}`}>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Availability Notice */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-background border border-border rounded-full px-6 py-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Available 24/7, 365 Days a Year</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProcessSection;