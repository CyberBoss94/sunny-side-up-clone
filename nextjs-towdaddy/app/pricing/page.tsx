import { generateMetadata as generateSEOMetadata } from '@/components/SEO'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import RelatedPages from '@/components/RelatedPages'
import { DollarSign, Phone, Clock, Shield, Check } from 'lucide-react'

export const metadata = generateSEOMetadata({
  title: "Transparent Towing Pricing Ontario - Fair Rates, No Hidden Fees",
  description: "Get upfront towing pricing for Ontario. Emergency towing from $120, roadside assistance from $80. No hidden fees, transparent rates for all towing and recovery services.",
  keywords: "towing prices Ontario, towing rates, emergency towing cost, roadside assistance pricing, transparent towing fees"
})

export default function Pricing() {
  const services = [
    {
      title: "Emergency Towing",
      startingPrice: "$120",
      description: "24/7 emergency flatbed towing service",
      features: ["First 10km included", "Flatbed transport", "24/7 availability", "All vehicle types"],
      additionalFees: "$3/km after 10km"
    },
    {
      title: "Roadside Assistance",
      startingPrice: "$80",
      description: "Professional roadside help and minor repairs",
      features: ["Battery jump start", "Tire change service", "Lockout assistance", "Fuel delivery"],
      additionalFees: "Parts/fuel at cost"
    },
    {
      title: "Vehicle Recovery",
      startingPrice: "$150",
      description: "Specialized recovery from accidents or difficult terrain",
      features: ["Winch services", "Accident recovery", "Ditch extraction", "Heavy equipment"],
      additionalFees: "Time-based for complex recovery"
    },
    {
      title: "Motorcycle Towing",
      startingPrice: "$100",
      description: "Specialized motorcycle transport with proper equipment",
      features: ["Specialized equipment", "Secure tie-downs", "All motorcycle types", "Experienced handling"],
      additionalFees: "$2.50/km after 10km"
    },
    {
      title: "Long Distance Towing",
      startingPrice: "Quote",
      description: "Long-distance vehicle transport across Ontario",
      features: ["Cross-province transport", "Secure flatbed", "GPS tracking", "Scheduled pickup"],
      additionalFees: "Distance and fuel surcharge"
    },
    {
      title: "Commercial Towing",
      startingPrice: "$200",
      description: "Heavy-duty towing for commercial vehicles",
      features: ["Heavy duty equipment", "Commercial vehicles", "Fleet discounts", "Priority service"],
      additionalFees: "Weight and complexity based"
    }
  ]

  const pricingFeatures = [
    "Upfront transparent pricing",
    "No hidden fees or surprises",
    "Payment accepted: Cash, Credit, Debit",
    "Insurance claim assistance",
    "Fleet and commercial discounts",
    "24/7 emergency service available"
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transparent Towing Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Fair, upfront pricing for all towing and roadside assistance services across Ontario. No hidden fees, no surprises - just honest pricing you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+16479497729">
                <Button size="lg" className="text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Service Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Starting prices for our professional towing and roadside assistance services. Final pricing depends on distance, vehicle type, and service complexity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <DollarSign className="h-8 w-8 text-tow-red" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <div className="text-3xl font-bold text-tow-red">{service.startingPrice}</div>
                  <p className="text-sm text-muted-foreground">Starting price</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-center">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-tow-red mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-xs text-muted-foreground mb-3">
                      Additional: {service.additionalFees}
                    </p>
                    <a href="tel:+16479497729">
                      <Button variant="outline" className="w-full">
                        Get Quote
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Pricing?
              </h2>
              <p className="text-lg text-muted-foreground">
                Honest, transparent pricing with no surprises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-tow-red flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Price */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Factors That Affect Pricing
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Distance & Time</h3>
                <p className="text-muted-foreground">Pricing includes base service plus distance charges. Emergency calls may have time-of-day rates.</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Vehicle Type</h3>
                <p className="text-muted-foreground">Different vehicles require different equipment. Heavy vehicles or specialty vehicles may have additional charges.</p>
              </div>
              <div className="text-center">
                <DollarSign className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Service Complexity</h3>
                <p className="text-muted-foreground">Standard tows are straightforward. Complex recovery situations are priced based on equipment and time required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="/pricing" />
    </>
  )
}