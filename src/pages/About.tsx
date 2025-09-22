import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { 
  Shield, 
  Award, 
  Users, 
  Truck, 
  Clock, 
  MapPin,
  Phone,
  Star,
  CheckCircle
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "10,000+", label: "Vehicles Rescued", icon: <Truck className="h-8 w-8" /> },
    { number: "24/7", label: "Hours Available", icon: <Clock className="h-8 w-8" /> },
    { number: "50+", label: "Cities Covered", icon: <MapPin className="h-8 w-8" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="h-8 w-8" /> }
  ];

  const values = [
    {
      icon: <Shield className="h-12 w-12 text-tow-red mb-4" />,
      title: "Safety First",
      description: "Every operation prioritizes the safety of our customers, their vehicles, and our team members."
    },
    {
      icon: <Clock className="h-12 w-12 text-tow-red mb-4" />,
      title: "Rapid Response",
      description: "We understand emergencies can't wait. Our average response time is under 30 minutes."
    },
    {
      icon: <Star className="h-12 w-12 text-tow-red mb-4" />,
      title: "Professional Excellence",
      description: "Licensed, trained, and equipped professionals delivering superior service quality."
    },
    {
      icon: <Users className="h-12 w-12 text-tow-red mb-4" />,
      title: "Customer Care",
      description: "Building trust through transparent communication and reliable service delivery."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-bg text-hero-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About TowDaddy
              <span className="block text-tow-red">Ontario's Trusted Towing Service</span>
            </h1>
            <p className="text-xl mb-8 text-hero-foreground/90 max-w-3xl mx-auto">
              Founded on the principles of safety, reliability, and customer care, TowDaddy has been Ontario's 
              premier towing service provider for over 15 years, helping thousands of motorists get back on the road.
            </p>
            <Button variant="towRed" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Us: (647) 949-7729
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-tow-red mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                TowDaddy was founded with a simple mission: to provide the safest, most reliable towing 
                service across Ontario. What started as a small family operation has grown into the 
                province's most trusted name in emergency roadside assistance.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We've built our reputation on three core principles: using only flatbed towing (no hooks), 
                maintaining 24/7 availability, and treating every customer's vehicle as if it were our own.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-tow-red mr-3" />
                  <span className="text-foreground">Licensed and insured across Ontario</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-tow-red mr-3" />
                  <span className="text-foreground">Certified professional operators</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-tow-red mr-3" />
                  <span className="text-foreground">Modern fleet of flatbed tow trucks</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-tow-red mr-3" />
                  <span className="text-foreground">GPS tracking and dispatch system</span>
                </div>
              </div>
            </div>
            <div className="bg-hero-bg p-8 rounded-lg text-hero-foreground">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose TowDaddy?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-tow-red mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Flatbed Only Policy</h4>
                    <p className="text-hero-foreground/80 text-sm">
                      We never use hooks or chains. Every vehicle is safely loaded onto our flatbed trucks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-tow-red mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">True 24/7 Service</h4>
                    <p className="text-hero-foreground/80 text-sm">
                      Real people answer our phones around the clock, every day of the year.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-tow-red mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Trained Professionals</h4>
                    <p className="text-hero-foreground/80 text-sm">
                      All operators are certified and undergo continuous training on safety protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every interaction and ensure we deliver 
              the highest quality service to every customer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center bg-service-card border-service-border">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-bg text-hero-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience the TowDaddy Difference
          </h2>
          <p className="text-xl mb-8 text-hero-foreground/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust TowDaddy for their towing 
            and roadside assistance needs across Ontario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="towRed" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (647) 949-7729
            </Button>
            <Button variant="outline" size="lg" className="bg-background/10 border-hero-foreground/30 text-hero-foreground hover:bg-background/20">
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;