import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import RelatedPages from "@/components/RelatedPages";
import QuickLinks from "@/components/QuickLinks";
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
  const breadcrumbs = [{ name: "About", url: "/about" }];
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "TowDaddy",
      "description": "Professional towing service with 15+ years experience serving Ontario",
      "foundingDate": "2009",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Ontario",
        "addressCountry": "Canada"
      },
      "serviceArea": "Ontario, Canada",
      "knowsAbout": ["Emergency Towing", "Roadside Assistance", "Vehicle Recovery"],
      "hasCredential": "Licensed and Insured Towing Service"
    }
  };

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
    <>
      <SEO 
        title="About TowDaddy - Toronto's Trusted Towing Company | 15+ Years Serving GTA & Ontario"
        description="Meet TowDaddy. 15+ years helping drivers in Toronto, GTA, and Ontario. Safe flatbed towing, 24/7 help, licensed pros. We treat your car like our own."
        keywords="about TowDaddy, Toronto towing company, GTA towing service, professional towing Toronto, licensed towing Ontario, flatbed towing specialists, Scarborough Vaughan towing"
        canonicalUrl="https://towdaddy.ca/about"
        pageType="website"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      <div className="min-h-screen">
        <div className="container mx-auto px-4 pt-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      <main>
        {/* Hero Section */}
        <section className="bg-hero-bg text-hero-foreground py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              About TowDaddy
              <span className="block text-tow-red">Toronto & GTA's Trusted Towing Team</span>
            </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-hero-foreground/90 max-w-3xl mx-auto leading-relaxed">
                We started TowDaddy to help drivers. For 15+ years, we've towed thousands of cars across Toronto, the GTA, and Ontario.
                We use safe flatbed trucks. No hooks. No damage. Just help when you need it.
                See our <Link to="/services" className="text-tow-red hover:underline">towing services</Link> and 
                <Link to="/coverage-areas" className="text-tow-red hover:underline">coverage areas</Link>.
              </p>
            <Button variant="towRed" size="lg" className="text-sm sm:text-base" asChild>
              <a href="tel:+16479497729">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Help Now: (647) 949-7729
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-tow-red mb-3 sm:mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                How TowDaddy Started
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                We started small. One family. One goal: help Toronto drivers safely.
                No hooks. No damage. Just care.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Now we're Toronto's trusted towing team. We work 24/7. We use flatbed trucks only. We treat your car right.
                See our <Link to="/services" className="text-tow-red hover:underline">towing services</Link>, 
                check our <Link to="/pricing" className="text-tow-red hover:underline">fair prices</Link>, or 
                <Link to="/contact" className="text-tow-red hover:underline">call us now</Link> for help.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-tow-red mr-3 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">Licensed and insured across Ontario</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-tow-red mr-3 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">Certified professional operators</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-tow-red mr-3 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">Modern fleet of flatbed tow trucks</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-tow-red mr-3 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">GPS tracking and dispatch system</span>
                </div>
              </div>
            </div>
            <div className="bg-hero-bg p-6 sm:p-8 rounded-lg text-hero-foreground">
              <p className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Why Choose TowDaddy?</p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-tow-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-2 text-sm sm:text-base">Flatbed Only Policy</p>
                    <p className="text-hero-foreground/80 text-xs sm:text-sm leading-relaxed">
                      We never use hooks or chains. Every vehicle is safely loaded onto our flatbed trucks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-tow-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-2 text-sm sm:text-base">True 24/7 Service</p>
                    <p className="text-hero-foreground/80 text-xs sm:text-sm leading-relaxed">
                      Real people answer our phones around the clock, every day of the year.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-tow-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-2 text-sm sm:text-base">Trained Professionals</p>
                    <p className="text-hero-foreground/80 text-xs sm:text-sm leading-relaxed">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every interaction and ensure we deliver 
              the highest quality service to every customer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-4 sm:p-6 text-center bg-service-card border-service-border">
              <div className="flex justify-center mb-3 sm:mb-4">
                  {value.icon}
                </div>
                <p className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                  {value.title}
                </p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-hero-bg text-hero-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Experience the TowDaddy Difference
          </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-hero-foreground/90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust TowDaddy for their towing 
              and roadside assistance needs across Ontario. Have questions? Check our 
              <Link to="/faq" className="text-tow-red hover:underline">FAQ page</Link> or 
              view our <Link to="/coverage-areas" className="text-tow-red hover:underline">service coverage map</Link>.
            </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="towRed" size="lg" className="text-sm sm:text-base" asChild>
              <a href="tel:+16479497729">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Help Now: (647) 949-7729
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-background/10 border-hero-foreground/30 text-hero-foreground hover:bg-background/20 text-sm sm:text-base">
              Request Quote
            </Button>
          </div>
        </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <QuickLinks variant="services" />
        </div>

        <RelatedPages currentPage="/about" />
        <Footer />
      </main>
    </div>
    </>
  );
};

export default About;