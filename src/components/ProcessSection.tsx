import { Card } from "@/components/ui/card";
import { Phone, MapPin, Truck, CheckCircle } from "lucide-react";
const ProcessSection = () => {
  const steps = [{
    number: "1",
    icon: Phone,
    title: "Submit Your Tow Request",
    description: "Include name, contact, vehicle details, issue, and live GPS location."
  }, {
    number: "2",
    icon: MapPin,
    title: "Get Matched With a Tow Truck Driver",
    description: "Our dispatch system assigns the closest flatbed driver."
  }, {
    number: "3",
    icon: Truck,
    title: "Track Your Driver in Real Time",
    description: "View live ETA, location map, and service status."
  }, {
    number: "4",
    icon: CheckCircle,
    title: "Receive Service & Get Back on the Road",
    description: "Our certified flatbed operator will confirm your request and help safely."
  }];
  return <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-tow-red font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Professional Towing Process
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            How to Request Our Towing Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto px-4">
            Need help? Whether it's a dead battery or accident recovery, TowDaddy makes Ontario-wide towing simple. Follow these 4 easy steps to request professional service.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {steps.map((step, index) => {
          const IconComponent = step.icon;
          return <Card key={index} className="relative p-6 bg-background border-2 border-red-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-tow-red/50 py-[16px] my-0">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-tow-red to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="sm:text-xl font-bold text-foreground mb-3 leading-tight text-sm">
                    {step.title}
                  </h3>
                  <p className="sm:text-base text-muted-foreground leading-relaxed text-center text-xs">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-tow-red to-red-600 rounded-full" />
              </Card>;
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