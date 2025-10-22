import { Shield, Users, Clock, Award } from "lucide-react";

const TrustBarSection = () => {
  const trustMetrics = [
    {
      icon: Users,
      value: "5,000+",
      label: "Happy Customers"
    },
    {
      icon: Clock,
      value: "< 30 Min",
      label: "Average Response"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Licensed & Insured"
    },
    {
      icon: Award,
      value: "15+ Years",
      label: "Experience"
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-r from-tow-red/5 to-tow-red/10 border-y border-service-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-tow-red mx-auto mb-2 sm:mb-3" />
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  {metric.value}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;
