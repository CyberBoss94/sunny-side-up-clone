import { Phone, MapPin, Truck, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Submit Your Tow Request",
      description: "Include name, contact, vehicle details, issue, and live GPS location for quick dispatch.",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      number: "02", 
      icon: MapPin,
      title: "Get Matched With a Tow Truck Driver",
      description: "Our dispatch system assigns the closest flatbed driver to your location immediately.",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      number: "03",
      icon: Truck, 
      title: "Track Your Driver in Real Time",
      description: "View live ETA, location map, and service status through our tracking system.",
      gradient: "from-slate-600 to-slate-700"
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Receive Service & Get Back on the Road", 
      description: "Our certified flatbed operator confirms arrival and provides professional assistance.",
      gradient: "from-slate-700 to-slate-800"
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

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto">
          {/* Dotted connecting line - Desktop only */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full">
            <div className="w-px h-full border-l-2 border-dotted border-muted-foreground/30 ml-0.5"></div>
          </div>
          
          <div className="relative space-y-8 lg:space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 relative">
                        <div className="w-12 h-12 bg-primary rounded-full border-4 border-muted-foreground/20 flex items-center justify-center relative z-10">
                          <div className="w-3 h-3 bg-background rounded-full"></div>
                        </div>
                      </div>
                      <div className="text-sm font-bold text-primary tracking-wider">
                        STEP {step.number}
                      </div>
                    </div>
                    
                    <div className={`bg-gradient-to-r ${step.gradient} rounded-full p-6 relative ml-6`}>
                      <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="w-5 h-5 text-slate-600" />
                        </div>
                      </div>
                      <div className="pl-8 text-white">
                        <h3 className="text-lg font-bold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed opacity-90">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden lg:flex items-center relative">
                    {isEven ? (
                      // Content on left, step number on right
                      <>
                        <div className="w-5/12 pr-8">
                          <div className={`bg-gradient-to-r ${step.gradient} rounded-full p-6 relative`}>
                            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <IconComponent className="w-5 h-5 text-slate-600" />
                              </div>
                            </div>
                            <div className="pr-8 text-white">
                              <h3 className="text-lg font-bold mb-2">
                                {step.title}
                              </h3>
                              <p className="text-sm leading-relaxed opacity-90">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="w-2/12 flex justify-center">
                          <div className="w-4 h-4 bg-primary rounded-full border-4 border-muted-foreground/20 relative z-10"></div>
                        </div>
                        
                        <div className="w-5/12 pl-8 flex items-center">
                          <div className="text-2xl font-bold text-muted-foreground/60 mr-2">STEP</div>
                          <div className="text-5xl font-bold text-primary">
                            {step.number}
                          </div>
                        </div>
                      </>
                    ) : (
                      // Step number on left, content on right  
                      <>
                        <div className="w-5/12 pr-8 flex items-center justify-end">
                          <div className="text-2xl font-bold text-muted-foreground/60 mr-2">STEP</div>
                          <div className="text-5xl font-bold text-primary">
                            {step.number}
                          </div>
                        </div>
                        
                        <div className="w-2/12 flex justify-center">
                          <div className="w-4 h-4 bg-primary rounded-full border-4 border-muted-foreground/20 relative z-10"></div>
                        </div>
                        
                        <div className="w-5/12 pl-8">
                          <div className={`bg-gradient-to-r ${step.gradient} rounded-full p-6 relative`}>
                            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <IconComponent className="w-5 h-5 text-slate-600" />
                              </div>
                            </div>
                            <div className="pl-8 text-white">
                              <h3 className="text-lg font-bold mb-2">
                                {step.title}
                              </h3>
                              <p className="text-sm leading-relaxed opacity-90">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
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