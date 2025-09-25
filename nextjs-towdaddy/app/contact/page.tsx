import { generateMetadata as generateSEOMetadata } from '@/components/SEO'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import RelatedPages from '@/components/RelatedPages'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

export const metadata = generateSEOMetadata({
  title: "Contact TowDaddy - 24/7 Emergency Towing & Roadside Assistance Ontario",
  description: "Need emergency towing in Ontario? Call TowDaddy at (647) 949-7729 for 24/7 towing and roadside assistance. Multiple contact options for immediate help or service quotes.",
  keywords: "contact towing service, emergency towing phone, 24/7 roadside assistance, Ontario towing contact, TowDaddy phone number"
})

export default function Contact() {
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Emergency Phone",
      info: "(647) 949-7729",
      description: "24/7 emergency towing and roadside assistance",
      action: "tel:+16479497729",
      buttonText: "Call Now"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      info: "info@towdaddy.ca",
      description: "Non-urgent inquiries and service quotes",
      action: "mailto:info@towdaddy.ca",
      buttonText: "Send Email"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Text Message",
      info: "(647) 949-7729",
      description: "Send us your location and service details",
      action: "sms:+16479497729",
      buttonText: "Send Text"
    }
  ]

  const serviceHours = [
    { service: "Emergency Towing", hours: "24/7 - 365 Days" },
    { service: "Roadside Assistance", hours: "24/7 - 365 Days" },
    { service: "Vehicle Recovery", hours: "24/7 - 365 Days" },
    { service: "Scheduled Towing", hours: "7 AM - 10 PM Daily" },
    { service: "Office Hours", hours: "8 AM - 6 PM Mon-Fri" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-tow-red to-tow-red-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact TowDaddy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Need emergency towing? We're available 24/7 across Ontario. Multiple ways to get in touch for immediate assistance.
            </p>
            <a href="tel:+16479497729">
              <Button size="lg" className="bg-white text-tow-red hover:bg-white/90 text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Call (647) 949-7729
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to contact us for emergency towing, roadside assistance, or service quotes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-tow-red/10 rounded-full text-tow-red">
                      {method.icon}
                    </div>
                  </div>
                  <CardTitle>{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold text-tow-red mb-2">{method.info}</p>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <a href={method.action}>
                    <Button className="w-full">
                      {method.buttonText}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Service Hours
              </h2>
              <p className="text-lg text-muted-foreground">
                We're here when you need us most with 24/7 emergency services.
              </p>
            </div>
            
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {serviceHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium">{item.service}</span>
                      <span className={`font-semibold ${item.hours.includes('24/7') ? 'text-tow-red' : 'text-muted-foreground'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                When You Call for Emergency Service
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Help us help you faster by having this information ready when you call.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Information to Have Ready</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tow-red rounded-full mt-2 mr-3"></div>
                    Your exact location or nearest intersection
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tow-red rounded-full mt-2 mr-3"></div>
                    Vehicle make, model, and year
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tow-red rounded-full mt-2 mr-3"></div>
                    Nature of the problem or emergency
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tow-red rounded-full mt-2 mr-3"></div>
                    Destination for towing if needed
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tow-red rounded-full mt-2 mr-3"></div>
                    Your contact phone number
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Safety First</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tow-red rounded-full mt-2 mr-3"></div>
                    Move to a safe location if possible
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tow-red rounded-full mt-2 mr-3"></div>
                    Turn on hazard lights
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tow-red rounded-full mt-2 mr-3"></div>
                    Stay inside your vehicle if on highway
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tow-red rounded-full mt-2 mr-3"></div>
                    Call 911 if there are injuries
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tow-red rounded-full mt-2 mr-3"></div>
                    We'll update you on our arrival time
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Serving All of Ontario
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              24/7 emergency towing and roadside assistance across Ontario including:
            </p>
            <div className="flex justify-center">
              <div className="text-center max-w-2xl">
                <p className="text-muted-foreground">
                  Toronto • Scarborough • Thornhill • Vaughan • Mississauga • Brampton • Hamilton • Ottawa • London • Windsor • Kitchener • Waterloo • Markham • Richmond Hill • Oakville • Burlington • Oshawa • Barrie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="/contact" />
    </>
  )
}