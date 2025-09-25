import { generateMetadata as generateSEOMetadata } from '@/components/SEO'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import RelatedPages from '@/components/RelatedPages'
import { Phone, HelpCircle, Clock, DollarSign } from 'lucide-react'

export const metadata = generateSEOMetadata({
  title: "Frequently Asked Questions - TowDaddy Towing Services Ontario",
  description: "Get answers to common questions about TowDaddy's towing services, pricing, coverage areas, and emergency procedures. Learn about our 24/7 Ontario towing services.",
  keywords: "towing FAQ, towing questions, emergency towing help, Ontario towing information, roadside assistance questions"
})

export default function FAQ() {
  const faqCategories = [
    {
      title: "Service & Coverage",
      icon: <HelpCircle className="h-6 w-6" />,
      faqs: [
        {
          question: "What areas do you serve?",
          answer: "We provide 24/7 towing and roadside assistance across Ontario, including Toronto, Scarborough, Thornhill, Vaughan, Mississauga, Brampton, Hamilton, Ottawa, London, and surrounding areas. We also serve major highways like 401, 400, 404, 410, and QEW."
        },
        {
          question: "What types of vehicles can you tow?",
          answer: "We can tow cars, SUVs, trucks, motorcycles, RVs, and commercial vehicles. Our fleet includes flatbed tow trucks and specialized equipment for different vehicle types and situations."
        },
        {
          question: "Do you provide 24/7 service?",
          answer: "Yes, we provide 24/7 emergency towing and roadside assistance, 365 days a year. Emergency situations don't wait for business hours, and neither do we."
        },
        {
          question: "How quickly can you respond?",
          answer: "Our average response time is 15-30 minutes in the GTA and York Region, 30-45 minutes in Peel and Durham regions, and 45-60 minutes in other Ontario areas, depending on traffic and weather conditions."
        }
      ]
    },
    {
      title: "Pricing & Payment",
      icon: <DollarSign className="h-6 w-6" />,
      faqs: [
        {
          question: "How much does towing cost?",
          answer: "Emergency towing starts at $120 (includes first 10km), roadside assistance starts at $80, and vehicle recovery starts at $150. Final pricing depends on distance, vehicle type, and service complexity. We provide upfront quotes with no hidden fees."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, credit cards (Visa, MasterCard, American Express), and debit cards. We can also work with insurance companies for covered services."
        },
        {
          question: "Do you work with insurance companies?",
          answer: "Yes, we work with most insurance companies and can assist with claim processing. Many roadside assistance and collision coverage policies cover our services. We'll help you understand your coverage."
        },
        {
          question: "Are there additional fees?",
          answer: "Our pricing is transparent. Base service includes the first 10km. Additional distance is charged per kilometer. Complex recovery situations may have additional time-based charges, which we'll explain upfront."
        }
      ]
    },
    {
      title: "Emergency Procedures",
      icon: <Clock className="h-6 w-6" />,
      faqs: [
        {
          question: "What should I do if I need emergency towing?",
          answer: "First, ensure your safety - move to a safe location if possible, turn on hazard lights, and call us at (647) 949-7729. Have your location, vehicle information, and problem description ready. We'll dispatch help immediately."
        },
        {
          question: "What if I'm stranded on a busy highway?",
          answer: "Stay in your vehicle with hazard lights on if it's safe. If you must exit, exit away from traffic. Call us immediately - we have experience with highway emergencies and will coordinate with authorities if needed."
        },
        {
          question: "Do you handle accident recovery?",
          answer: "Yes, we provide accident recovery services with specialized equipment. We work with police, insurance companies, and body shops. Our priority is safe vehicle removal while preserving evidence when required."
        },
        {
          question: "What if my car won't start?",
          answer: "We offer roadside assistance including battery jump starts, fuel delivery, and lockout services. Many issues can be resolved on-site without towing. If towing is needed, we'll explain your options."
        }
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Quick answers to common questions about our towing services, pricing, coverage areas, and emergency procedures across Ontario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+16479497729">
                <Button size="lg" className="text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (647) 949-7729
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-tow-red/10 rounded-full text-tow-red">
                      {category.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {category.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.faqs.map((faq, faqIndex) => (
                    <Card key={faqIndex} className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find the answer you're looking for? Our team is available 24/7 to help with any questions about our towing and roadside assistance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+16479497729">
                <Button size="lg" className="text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (647) 949-7729
                </Button>
              </a>
              <a href="mailto:info@towdaddy.ca">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="/faq" />
    </>
  )
}