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

        {/* Flowing Timeline Steps */}
        <div className="max-w-4xl mx-auto relative">
          {/* Dotted connecting line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-16 bottom-16">
            <div className="w-px h-full border-l-2 border-dotted border-muted-foreground/30"></div>
          </div>
          
          {steps.map((step, index) => {
          const IconComponent = step.icon;
          const isEven = index % 2 === 0;
          const isLast = index === steps.length - 1;
          return <div key={index} className={`relative mb-8 sm:mb-12 lg:mb-16 ${isLast ? 'mb-0' : ''}`}>
                <div className="flex items-center">
                  {isEven ?
              // Step on left, number on right
              <>
                      <div className="w-5/12 pr-4 sm:pr-6 lg:pr-8">
                        <div className="bg-primary rounded-full p-4 sm:p-5 lg:p-6 relative">
                          <div className="absolute -right-4 sm:-right-5 lg:-right-6 top-1/2 transform -translate-y-1/2">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-background rounded-full flex items-center justify-center shadow-lg border-2 sm:border-3 lg:border-4 border-primary">
                              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                            </div>
                          </div>
                          <div className="pr-6 sm:pr-7 lg:pr-8 text-background">
                            <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2">
                              {step.title}
                            </h3>
                            <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-2/12 flex justify-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg relative z-10">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-background rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-5/12 pl-4 sm:pl-6 lg:pl-8 flex items-center">
                        <div className="text-lg sm:text-2xl lg:text-4xl font-bold text-primary">
                          STEP
                        </div>
                        <div className="text-2xl sm:text-4xl lg:text-6xl font-bold text-primary/60 ml-1 sm:ml-2">
                          {step.number.padStart(2, '0')}
                        </div>
                      </div>
                    </> :
              // Number on left, step on right
              <>
                      <div className="w-5/12 pr-4 sm:pr-6 lg:pr-8 flex items-center justify-end">
                        <div className="text-lg sm:text-2xl lg:text-4xl font-bold text-primary text-right">
                          STEP
                        </div>
                        <div className="text-2xl sm:text-4xl lg:text-6xl font-bold text-primary/60 ml-1 sm:ml-2">
                          {step.number.padStart(2, '0')}
                        </div>
                      </div>
                      <div className="w-2/12 flex justify-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg relative z-10">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-background rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-5/12 pl-4 sm:pl-6 lg:pl-8">
                        <div className="bg-muted rounded-full p-4 sm:p-5 lg:p-6 relative">
                          <div className="absolute -left-4 sm:-left-5 lg:-left-6 top-1/2 transform -translate-y-1/2">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-background rounded-full flex items-center justify-center shadow-lg border-2 sm:border-3 lg:border-4 border-muted">
                              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                            </div>
                          </div>
                          <div className="pl-6 sm:pl-7 lg:pl-8">
                            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground mb-1 sm:mb-2">
                              {step.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>}
                </div>
              </div>;
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
    </section>;
};
export default ProcessSection;