import { generateMetadata as generateSEOMetadata } from '@/components/SEO'
import { Card } from '@/components/ui/card'
import RelatedPages from '@/components/RelatedPages'
import { Shield, Clock, Users, Award } from 'lucide-react'

export const metadata = generateSEOMetadata({
  title: "About TowDaddy - 15+ Years of Professional Towing Experience in Ontario",
  description: "Learn about TowDaddy's 15+ years of professional towing experience across Ontario. Our licensed, insured team provides 24/7 emergency towing with a safety-first approach and commitment to customer service.",
  keywords: "about TowDaddy, professional towing company Ontario, experienced towing service, licensed towing, insured towing company"
})

export default function About() {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "Every tow is performed with the utmost attention to safety for our customers, their vehicles, and our team."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Reliability",
      description: "24/7 availability with fast response times because we understand emergencies don't wait."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Care",
      description: "Treating every customer with respect and providing clear communication throughout the service."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Continuous training and investment in equipment to deliver the highest quality service."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About TowDaddy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              15+ years of professional towing experience across Ontario with a commitment to safety, reliability, and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded with a simple mission: to provide reliable, professional towing services when people need help most. What started as a small local operation has grown into Ontario's trusted towing partner, serving thousands of customers across the province.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our team combines over 15 years of industry experience with modern equipment and training to ensure every service call is handled professionally and safely. We understand that needing a tow is often stressful, which is why we focus on clear communication and compassionate service.
                </p>
                <p className="text-muted-foreground">
                  From emergency roadside assistance to planned vehicle transport, we treat every customer and their vehicle with the care and respect they deserve.
                </p>
              </div>
              <div className="bg-muted/50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">By the Numbers</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Years of Experience</span>
                    <span className="font-semibold text-tow-red">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customers Served</span>
                    <span className="font-semibold text-tow-red">10,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cities Covered</span>
                    <span className="font-semibold text-tow-red">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Response Time</span>
                    <span className="font-semibold text-tow-red">30 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every service we provide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-tow-red/10 rounded-full text-tow-red">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Licensed & Certified
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We maintain all necessary licenses, certifications, and insurance to provide professional towing services across Ontario.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="font-semibold">Fully Licensed</h3>
                <p className="text-sm text-muted-foreground">Ontario commercial vehicle license</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="font-semibold">Fully Insured</h3>
                <p className="text-sm text-muted-foreground">Comprehensive liability coverage</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="font-semibold">Certified Team</h3>
                <p className="text-sm text-muted-foreground">Ongoing safety and service training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="/about" />
    </>
  )
}