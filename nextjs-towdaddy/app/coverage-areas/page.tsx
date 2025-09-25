import { generateMetadata as generateSEOMetadata } from '@/components/SEO'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import RelatedPages from '@/components/RelatedPages'
import { MapPin, Phone, Clock } from 'lucide-react'

export const metadata = generateSEOMetadata({
  title: "Ontario Towing Coverage Areas - TowDaddy Service Locations",
  description: "TowDaddy provides 24/7 towing services across Ontario including Toronto, Scarborough, Thornhill, Vaughan, Mississauga, Brampton, Hamilton, Ottawa, London and surrounding areas.",
  keywords: "towing coverage Ontario, towing service areas, Toronto towing, Scarborough towing, Vaughan towing, Ontario emergency towing"
})

export default function CoverageAreas() {
  const majorCities = [
    "Toronto", "Scarborough", "Thornhill", "Vaughan", "Mississauga", "Brampton", 
    "Hamilton", "Ottawa", "London", "Windsor", "Kitchener", "Waterloo",
    "Markham", "Richmond Hill", "Oakville", "Burlington", "Oshawa", "Barrie"
  ]

  const highways = [
    "Highway 401", "Highway 400", "Highway 404", "Highway 410", "Highway 427",
    "Highway 407 ETR", "Highway QEW", "Highway 403", "Highway 7", "Highway 9"
  ]

  const serviceAreas = [
    {
      region: "Greater Toronto Area (GTA)",
      cities: ["Toronto", "Scarborough", "North York", "Etobicoke", "York", "East York"],
      description: "Complete coverage of Toronto and all boroughs with fastest response times."
    },
    {
      region: "York Region",
      cities: ["Vaughan", "Thornhill", "Richmond Hill", "Markham", "Aurora", "Newmarket"],
      description: "Full service coverage throughout York Region including all municipalities."
    },
    {
      region: "Peel Region",
      cities: ["Mississauga", "Brampton", "Caledon", "Malton", "Streetsville"],
      description: "Comprehensive towing and roadside assistance across Peel Region."
    },
    {
      region: "Durham Region",
      cities: ["Oshawa", "Whitby", "Ajax", "Pickering", "Bowmanville", "Clarington"],
      description: "Professional towing services throughout Durham Region and surrounding areas."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ontario Towing Coverage Areas
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              24/7 professional towing and roadside assistance across Ontario. We serve major cities, highways, and rural areas with fast response times.
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

      {/* Service Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Primary Service Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive towing coverage across these key regions in Ontario.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-tow-red/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-tow-red" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{area.region}</h3>
                    <p className="text-muted-foreground mb-3">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.cities.map((city, i) => (
                        <span key={i} className="text-sm bg-muted px-3 py-1 rounded-full">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Major Cities We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional towing services available in these major Ontario cities and surrounding areas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {majorCities.map((city, index) => (
              <div key={index} className="text-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                <MapPin className="h-6 w-6 text-tow-red mx-auto mb-2" />
                <span className="text-sm font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highway Coverage */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Highway Coverage
            </h2>
            <p className="text-lg text-muted-foreground">
              Emergency towing available on major Ontario highways and connecting routes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {highways.map((highway, index) => (
              <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                <span className="font-medium">{highway}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Fast Response Times Across Ontario
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-tow-red mb-2">15-30 min</h3>
                <p className="text-muted-foreground">GTA & York Region</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-tow-red mb-2">30-45 min</h3>
                <p className="text-muted-foreground">Peel & Durham Region</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-tow-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-tow-red mb-2">45-60 min</h3>
                <p className="text-muted-foreground">Other Ontario Areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="/coverage-areas" />
    </>
  )
}