import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  AlertTriangle,
  Truck,
  Users,
  Building2
} from "lucide-react";

const Contact = () => {
  const breadcrumbs = [{ name: "Contact", url: "/contact" }];
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "TowDaddy",
      "telephone": "+1-647-949-7729",
      "email": "info@towdaddy.ca",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-647-949-7729",
        "contactType": "emergency",
        "areaServed": "Ontario, Canada",
        "availableLanguage": "English",
        "hoursAvailable": "Mo-Su 00:00-23:59"
      }
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="h-12 w-12 text-tow-red mb-4" />,
      title: "Emergency Hotline",
      subtitle: "Available 24/7 for immediate assistance",
      details: "(647) 949-7729",
      action: "Call Now",
      primary: true
    },
    {
      icon: <Mail className="h-12 w-12 text-tow-red mb-4" />,
      title: "Email Support",
      subtitle: "General inquiries and service questions",
      details: "info@towdaddy.ca",
      action: "Send Email",
      primary: false
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-tow-red mb-4" />,
      title: "Online Quote",
      subtitle: "Get pricing for planned services",
      details: "Fill out our form below",
      action: "Request Quote",
      primary: false
    }
  ];

  const serviceTypes = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-tow-red" />,
      title: "Emergency Services",
      description: "Accidents, breakdowns, roadside assistance - immediate response needed",
      contact: "Call (647) 949-7729 immediately"
    },
    {
      icon: <Truck className="h-8 w-8 text-tow-red" />,
      title: "Scheduled Towing",
      description: "Planned vehicle transport, dealership services, auction pickups",
      contact: "Call or email for scheduling"
    },
    {
      icon: <Building2 className="h-8 w-8 text-tow-red" />,
      title: "Commercial Accounts",
      description: "Fleet services, business accounts, municipal contracts",
      contact: "Email for custom quotes"
    },
    {
      icon: <Users className="h-8 w-8 text-tow-red" />,
      title: "General Inquiries",
      description: "Questions about services, coverage areas, or pricing information",
      contact: "Call, email, or use contact form"
    }
  ];

  return (
    <>
      <SEO 
        title="Contact TowDaddy - 24/7 Emergency Towing | Get Quote & Assistance"
        description="Contact TowDaddy for 24/7 emergency towing across Ontario. Call (647) 949-7729 for immediate assistance or request a quote for planned services."
        keywords="contact TowDaddy, emergency towing phone, towing quote, roadside assistance contact, 24/7 towing Ontario"
        canonicalUrl="https://towdaddy.lovable.app/contact"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      <div className="min-h-screen">
        <div className="container mx-auto px-4 pt-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      <main>
        {/* Hero Section */}
        <section className="bg-hero-bg text-hero-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In Touch
              <span className="block text-tow-red">We're Here to Help</span>
            </h1>
            <p className="text-xl mb-8 text-hero-foreground/90">
              Need immediate roadside assistance? Have questions about our <Link to="/services" className="text-tow-red hover:underline">services</Link>? 
              Check our <Link to="/faq" className="text-tow-red hover:underline">FAQ page</Link> for quick answers or 
              our professional team is available 24/7 to provide support when you need it most.
            </p>
            
            {/* Emergency CTA */}
            <div className="bg-tow-red/20 border-2 border-tow-red rounded-lg p-6 mb-8">
              <AlertTriangle className="h-8 w-8 text-tow-red mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">Emergency Assistance</h3>
              <p className="mb-4 text-hero-foreground/90">
                Stranded or in an emergency? Don't wait - call now for immediate help
              </p>
              <Button variant="towRed" size="lg" className="text-lg px-8">
                <Phone className="w-6 h-6 mr-2" />
                Call Emergency: (647) 949-7729
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How to Reach Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple ways to connect - choose what works best for your situation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`p-8 text-center bg-service-card border-service-border ${method.primary ? 'ring-2 ring-tow-red' : ''}`}>
                <div className="flex justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {method.subtitle}
                </p>
                <p className="text-lg font-semibold text-foreground mb-6">
                  {method.details}
                </p>
                <Button 
                  variant={method.primary ? "towRed" : "outline"}
                  className="w-full"
                >
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Can We Help You With?
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the right contact method based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="p-6 bg-service-card border-service-border">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <p className="text-sm font-medium text-tow-red">
                      {service.contact}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Request a Quote
              </h2>
              <p className="text-lg text-muted-foreground">
                Get pricing information for planned towing or commercial services
              </p>
            </div>

            <Card className="p-8 bg-service-card border-service-border">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(xxx) xxx-xxxx" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Service Type</Label>
                  <select className="w-full px-3 py-2 border border-input bg-background rounded-md">
                    <option value="">Select a service</option>
                    <option value="emergency">Emergency Towing</option>
                    <option value="roadside">Roadside Assistance</option>
                    <option value="scheduled">Scheduled Towing</option>
                    <option value="longdistance">Long Distance Towing</option>
                    <option value="commercial">Commercial Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <Input id="pickup" placeholder="City or postal code" />
                  </div>
                  <div>
                    <Label htmlFor="destination">Destination (if applicable)</Label>
                    <Input id="destination" placeholder="City or postal code" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your vehicle, service needs, or any special requirements..."
                    rows={4}
                  />
                </div>

                <Button variant="towRed" size="lg" className="w-full">
                  Submit Quote Request
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>For immediate assistance or emergencies, call (647) 949-7729</strong>
                  <br />
                  Quote requests are typically responded to within 2-4 hours during business hours.
                  <br />
                  View our <Link to="/pricing" className="text-tow-red hover:underline">pricing guide</Link> for 
                  standard rates and <Link to="/coverage-areas" className="text-tow-red hover:underline">service areas</Link>.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area & Hours */}
      <section className="py-20 bg-hero-bg text-hero-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Service Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-8 w-8 text-tow-red mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Service Area</h3>
                    <p className="text-hero-foreground/80">
                      Complete coverage across Ontario including all major cities, highways, 
                      and remote areas. From Windsor to Ottawa, from the US border to Northern communities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-tow-red mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Operating Hours</h3>
                    <p className="text-hero-foreground/80 mb-2">
                      <strong>Emergency Services:</strong> 24/7/365<br />
                      <strong>Office Hours:</strong> Monday-Friday 8AM-6PM<br />
                      <strong>Quote Requests:</strong> Responded to within 2-4 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-8 w-8 text-tow-red mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Response Times</h3>
                    <p className="text-hero-foreground/80">
                      Average 25 minutes in urban areas, 35 minutes in rural locations. 
                      GPS tracking ensures we find you quickly wherever you are.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Emergency Checklist
              </h3>
              <div className="space-y-4">
                {[
                  "Call (647) 949-7729 immediately",
                  "Move to a safe location away from traffic",
                  "Turn on hazard lights",
                  "Stay with or near your vehicle if safe",
                  "Have your location and vehicle details ready",
                  "Wait for our arrival - help is on the way!"
                ].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-tow-red text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    <span className="text-hero-foreground/90">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </section>

        <Footer />
      </main>
      </div>
    </>
  );
};

export default Contact;