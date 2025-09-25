import { generateMetadata as generateSEOMetadata } from '@/components/SEO'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import RelatedPages from '@/components/RelatedPages'
import Link from 'next/link'
import { Truck, Wrench, Shield, Car, Bike, MapPin, Clock, Phone } from 'lucide-react'

export const metadata = generateSEOMetadata({
  title: "Professional Towing Services in Ontario - Emergency & Scheduled Towing",
  description: "Complete towing services across Ontario: emergency towing, roadside assistance, vehicle recovery, motorcycle towing, and long-distance transport. 24/7 professional service, licensed and insured.",
  keywords: "towing services Ontario, emergency towing, roadside assistance, vehicle recovery, motorcycle towing, flatbed towing, professional towing"
})

export default function Services() {
  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Towing",
      description: "24/7 emergency flatbed towing service for cars, trucks, and motorcycles across Ontario.",
      features: ["24/7 availability", "Flatbed towing", "Fast response", "All vehicle types"],
      startingPrice: "Starting at $120"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Roadside Assistance",
      description: "Professional roadside help including jump starts, tire changes, lockouts, and fuel delivery.",
      features: ["Battery jump start", "Tire change", "Lockout service", "Fuel delivery"],
      startingPrice: "Starting at $80"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Vehicle Recovery",
      description: "Safe vehicle recovery from accidents, ditches, and challenging terrain with specialized equipment.",
      features: ["Accident recovery", "Ditch extraction", "Winch services", "Heavy duty recovery"],
      startingPrice: "Starting at $150"
    },
    {
      icon: <Bike className="h-8 w-8" />,
      title: "Motorcycle Towing",
      description: "Specialized motorcycle towing with proper equipment and techniques to protect your bike.",
      features: ["Specialized equipment", "Secure tie-downs", "All bike types", "Experienced handlers"],
      startingPrice: "Starting at $100"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Long Distance Towing",
      description: "Professional long-distance vehicle transport across Ontario and to neighboring provinces.",
      features: ["Cross-province transport", "Secure transport", "GPS tracking", "Scheduled pickup"],
      startingPrice: "Quote based on distance"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Commercial Towing",
      description: "Heavy-duty towing for commercial vehicles, trucks, and fleet services with specialized equipment.",
      features: ["Heavy duty equipment", "Commercial vehicles", "Fleet services", "Business partnerships"],
      startingPrice: "Starting at $200"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Towing Services Across Ontario
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From emergency roadside assistance to specialized vehicle recovery, we provide comprehensive towing solutions with professional equipment and experienced drivers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+16479497729">
                <Button size="lg" className="text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (647) 949-7729
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Get Quote Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Towing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional towing and roadside assistance services available 24/7 across Ontario.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-tow-red/10 rounded-full text-tow-red">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-center">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-tow-red rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-tow-red mb-3">{service.startingPrice}</p>
                    <a href="tel:+16479497729">
                      <Button variant="outline" className="w-full">
                        Call for Service
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Guarantee
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-tow-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fast Response</h3>
              <p className="text-muted-foreground">Average 30-minute response time for emergency calls across our service area.</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-tow-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
              <p className="text-muted-foreground">Fully licensed and insured for your peace of mind and vehicle protection.</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-tow-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ontario-Wide Coverage</h3>
              <p className="text-muted-foreground">Comprehensive coverage across Ontario including major cities and highways.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="/services" />
    </>
  )
}