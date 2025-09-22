import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import { 
  HelpCircle, 
  Phone, 
  Clock, 
  Shield,
  Truck,
  CreditCard,
  MapPin,
  AlertTriangle
} from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Service",
      icon: <Truck className="h-6 w-6 text-tow-red" />,
      questions: [
        {
          question: "What areas do you service?",
          answer: "We provide 24/7 towing and roadside assistance throughout Ontario, including all major cities, highways, and remote areas. Our coverage extends from Windsor to Ottawa, and from the US border to Northern Ontario communities."
        },
        {
          question: "How quickly can you respond?",
          answer: "Our average response time is under 30 minutes in urban areas and under 45 minutes in rural locations. During peak times or severe weather, response times may be slightly longer, but we'll always keep you updated."
        },
        {
          question: "Do you operate 24/7?",
          answer: "Yes! TowDaddy operates 24 hours a day, 7 days a week, 365 days a year. We have live operators answering calls around the clock - no automated systems or callbacks."
        },
        {
          question: "What makes TowDaddy different from other towing companies?",
          answer: "We use only flatbed towing (never hooks or chains), maintain the fastest response times in Ontario, employ only licensed and insured professionals, and provide transparent pricing with no hidden fees."
        }
      ]
    },
    {
      title: "Pricing & Payment",
      icon: <CreditCard className="h-6 w-6 text-tow-red" />,
      questions: [
        {
          question: "How much does towing cost?",
          answer: "Local towing starts at $95 for distances up to 10km. Long-distance towing is $2.50 per kilometer. Roadside assistance starts at $75. We provide upfront quotes before beginning any work."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees, ever. The price we quote is the price you pay. All costs including taxes are included in our upfront quotes."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, all major credit cards (Visa, MasterCard, American Express), and debit cards. Payment is due upon completion of service."
        },
        {
          question: "Do you work with insurance companies?",
          answer: "Yes, we work with most major insurance providers. We can bill your insurance company directly or provide detailed receipts for reimbursement. Call your insurance first to confirm coverage."
        }
      ]
    },
    {
      title: "Service Details",
      icon: <Shield className="h-6 w-6 text-tow-red" />,
      questions: [
        {
          question: "What is flatbed-only towing?",
          answer: "Flatbed towing means your entire vehicle is loaded onto a flat platform, never dragged or lifted by hooks/chains. This is the safest method that prevents damage to your vehicle's transmission, suspension, or body."
        },
        {
          question: "What roadside services do you provide?",
          answer: "We offer jump starts, flat tire changes, lockout service, fuel delivery, battery replacement, and basic mechanical troubleshooting. Our technicians carry professional equipment for most common issues."
        },
        {
          question: "Can you tow all types of vehicles?",
          answer: "We tow cars, SUVs, light trucks, motorcycles, and commercial vehicles. We have specialized equipment for luxury cars, classic vehicles, and motorcycles. Heavy commercial vehicles may require our heavy-duty service."
        },
        {
          question: "Do you provide long-distance towing?",
          answer: "Yes, we provide long-distance towing across Ontario and to other provinces. All long-distance tows include real-time GPS tracking and regular status updates."
        }
      ]
    },
    {
      title: "Emergency Situations",
      icon: <AlertTriangle className="h-6 w-6 text-tow-red" />,
      questions: [
        {
          question: "What should I do while waiting for the tow truck?",
          answer: "Stay safe: move to a safe location away from traffic, turn on hazard lights, use road flares or reflectors if available, and remain visible. Stay with your vehicle if safely possible or wait in a secure nearby location."
        },
        {
          question: "What if I'm in a dangerous location?",
          answer: "Your safety is our priority. If you're in an unsafe location (busy highway, remote area, etc.), we'll coordinate with police if necessary and prioritize your pickup. Call 911 first if you're in immediate danger."
        },
        {
          question: "Can you help if my car is stuck in snow/mud?",
          answer: "Yes, vehicle recovery is one of our specialties. We have winch-equipped trucks and specialized recovery equipment for cars stuck in snow, mud, ditches, or other challenging situations."
        },
        {
          question: "What if I locked my keys in the car?",
          answer: "Our lockout service can safely open most vehicles without damage. Our technicians use professional tools and techniques. If we cannot open your vehicle, we'll help arrange a locksmith."
        }
      ]
    }
  ];

  const quickAnswers = [
    {
      icon: <Clock className="h-8 w-8 text-tow-red" />,
      question: "How long until you arrive?",
      answer: "Average 25 minutes in cities, 35 minutes rural areas"
    },
    {
      icon: <Phone className="h-8 w-8 text-tow-red" />,
      question: "What's your emergency number?",
      answer: "(647) 949-7729 - Available 24/7"
    },
    {
      icon: <MapPin className="h-8 w-8 text-tow-red" />,
      question: "Do you service my area?",
      answer: "All of Ontario including remote areas"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-tow-red" />,
      question: "How much will it cost?",
      answer: "From $75 roadside, $95 local towing + distance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-bg text-hero-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="h-16 w-16 text-tow-red mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
              <span className="block text-tow-red">Get Answers Fast</span>
            </h1>
            <p className="text-xl mb-8 text-hero-foreground/90">
              Find answers to common questions about our towing services, pricing, and policies. 
              Can't find what you're looking for? Call us anytime.
            </p>
            <Button variant="towRed" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Us: (647) 949-7729
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Answers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Quick Answers
            </h2>
            <p className="text-muted-foreground">
              The most common questions answered at a glance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAnswers.map((qa, index) => (
              <Card key={index} className="p-6 text-center bg-service-card border-service-border">
                <div className="flex justify-center mb-4">
                  {qa.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {qa.question}
                </h3>
                <p className="text-muted-foreground">
                  {qa.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Detailed FAQ
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive answers organized by category
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-foreground ml-3">
                    {category.title}
                  </h3>
                </div>

                <Card className="bg-service-card border-service-border">
                  <Accordion type="single" collapsible className="p-6">
                    {category.questions.map((qa, qaIndex) => (
                      <AccordionItem key={qaIndex} value={`item-${categoryIndex}-${qaIndex}`}>
                        <AccordionTrigger className="text-left font-semibold text-foreground">
                          {qa.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {qa.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-hero-bg text-hero-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-hero-foreground/90 max-w-2xl mx-auto">
            Our experienced dispatch team is available 24/7 to answer your questions 
            and provide immediate assistance when you need it most.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <Phone className="h-12 w-12 text-tow-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Anytime</h3>
              <p className="text-hero-foreground/80 mb-4">
                Speak with a real person, not a machine
              </p>
              <p className="text-2xl font-bold text-tow-red">
                (647) 949-7729
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-tow-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Always Available</h3>
              <p className="text-hero-foreground/80 mb-4">
                24 hours, 7 days a week, 365 days a year
              </p>
              <p className="text-lg font-semibold text-hero-foreground">
                Emergency & Non-Emergency
              </p>
            </div>
          </div>

          <Button variant="towRed" size="lg">
            <Phone className="w-5 h-5 mr-2" />
            Contact Us Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;