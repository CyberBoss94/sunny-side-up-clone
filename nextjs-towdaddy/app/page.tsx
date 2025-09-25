import { generateMetadata as generateSEOMetadata } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import RelatedPages from '@/components/RelatedPages'
import Link from 'next/link'
import { Phone, Clock, Shield, Truck, Wrench, MapPin } from 'lucide-react'

export const metadata = generateSEOMetadata({
  title: "TowDaddy - 24/7 Professional Towing Services Across Ontario",
  description: "Need emergency towing in Ontario? TowDaddy provides 24/7 professional flatbed towing, roadside assistance, and vehicle recovery. Licensed, insured, and trusted by thousands. Call now!",
  keywords: "emergency towing Ontario, 24/7 towing service, flatbed towing, roadside assistance, vehicle recovery, professional towing, licensed towing company"
})

export default function Home() {
  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Towing",
      description: "24/7 emergency flatbed towing service for cars, trucks, and motorcycles across Ontario."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Roadside Assistance", 
      description: "Professional roadside help including jump starts, tire changes, lockouts, and fuel delivery."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Vehicle Recovery",
      description: "Safe vehicle recovery from accidents, ditches, and challenging terrain with specialized equipment."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tow-red to-tow-red-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              24/7 Professional Towing Across Ontario
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Emergency towing, roadside assistance, and vehicle recovery. Licensed, insured, and ready to help when you need us most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+16479497729">
                <Button size="lg" className="bg-white text-tow-red hover:bg-white/90 text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (647) 949-7729
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tow-red text-lg px-8 py-4">
                  Get Quote Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Towing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From emergency roadside assistance to specialized vehicle recovery, we provide comprehensive towing solutions across Ontario.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-tow-red/10 rounded-full text-tow-red">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose TowDaddy?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-tow-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-muted-foreground">Round-the-clock emergency service, 365 days a year across Ontario.</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-tow-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
              <p className="text-muted-foreground">Fully licensed and insured for your peace of mind and protection.</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-tow-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ontario-Wide Coverage</h3>
              <p className="text-muted-foreground">Serving Toronto, Scarborough, Thornhill, Vaughan, and across Ontario.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="/" />
    </>
  )
}