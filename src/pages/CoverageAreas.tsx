import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Truck, 
  Navigation,
  Building2,
  TreePine,
  Users
} from "lucide-react";

const CoverageAreas = () => {
  const majorCities = [
    { name: "Toronto", region: "Greater Toronto Area", population: "2.8M", responseTime: "15-25 min" },
    { name: "Ottawa", region: "Eastern Ontario", population: "1.0M", responseTime: "20-30 min" },
    { name: "Hamilton", region: "Golden Horseshoe", population: "580K", responseTime: "18-28 min" },
    { name: "London", region: "Southwestern Ontario", population: "430K", responseTime: "20-30 min" },
    { name: "Kitchener", region: "Waterloo Region", population: "470K", responseTime: "20-30 min" },
    { name: "Windsor", region: "Essex County", population: "350K", responseTime: "22-32 min" },
    { name: "Sudbury", region: "Northern Ontario", population: "165K", responseTime: "25-35 min" },
    { name: "Kingston", region: "Eastern Ontario", population: "135K", responseTime: "25-35 min" },
    { name: "Thunder Bay", region: "Northwestern Ontario", population: "120K", responseTime: "30-40 min" },
    { name: "Barrie", region: "Central Ontario", population: "150K", responseTime: "20-30 min" },
    { name: "Guelph", region: "Wellington County", population: "135K", responseTime: "22-32 min" },
    { name: "Oshawa", region: "Durham Region", population: "175K", responseTime: "18-28 min" }
  ];

  const regions = [
    {
      icon: <Building2 className="h-12 w-12 text-tow-red mb-4" />,
      name: "Greater Toronto Area (GTA)",
      description: "Complete coverage including Toronto, Mississauga, Brampton, Markham, Richmond Hill, and all surrounding municipalities.",
      cities: ["Toronto", "Mississauga", "Brampton", "Markham", "Richmond Hill", "Vaughan", "Oakville", "Burlington"],
      responseTime: "15-25 minutes"
    },
    {
      icon: <Users className="h-12 w-12 text-tow-red mb-4" />,
      name: "Golden Horseshoe",
      description: "Serving Hamilton, Niagara Falls, St. Catharines, and the entire Niagara Peninsula region with rapid response.",
      cities: ["Hamilton", "Niagara Falls", "St. Catharines", "Welland", "Grimsby", "Stoney Creek", "Ancaster"],
      responseTime: "18-28 minutes"
    },
    {
      icon: <Navigation className="h-12 w-12 text-tow-red mb-4" />,
      name: "Eastern Ontario",
      description: "Ottawa, Kingston, Cornwall, and surrounding communities receive full towing and roadside assistance coverage.",
      cities: ["Ottawa", "Kingston", "Cornwall", "Belleville", "Pembroke", "Petawawa", "Hawkesbury"],
      responseTime: "20-35 minutes"
    },
    {
      icon: <TreePine className="h-12 w-12 text-tow-red mb-4" />,
      name: "Northern Ontario",
      description: "Specialized coverage for Sudbury, North Bay, Timmins, and remote northern communities with equipped vehicles.",
      cities: ["Sudbury", "North Bay", "Timmins", "Sault Ste. Marie", "Elliot Lake", "Kapuskasing"],
      responseTime: "25-45 minutes"
    }
  ];

  const serviceFeatures = [
    {
      icon: <Clock className="h-8 w-8 text-tow-red" />,
      title: "Rapid Response Times",
      description: "Average response time under 30 minutes in urban areas, under 45 minutes in rural areas"
    },
    {
      icon: <Truck className="h-8 w-8 text-tow-red" />,
      title: "Mobile Service Units",
      description: "Strategically positioned trucks across Ontario for maximum coverage efficiency"
    },
    {
      icon: <MapPin className="h-8 w-8 text-tow-red" />,
      title: "GPS Tracking",
      description: "Real-time location tracking ensures we find you quickly, even in remote areas"
    },
    {
      icon: <Phone className="h-8 w-8 text-tow-red" />,
      title: "24/7 Dispatch",
      description: "Always-staffed dispatch center coordinates responses across all coverage areas"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-bg text-hero-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ontario-Wide Coverage
              <span className="block text-tow-red">From City to Remote Areas</span>
            </h1>
            <p className="text-xl mb-8 text-hero-foreground/90">
              TowDaddy provides comprehensive towing and roadside assistance across all of Ontario. 
              From bustling city centers to remote rural communities, we're there when you need us.
            </p>
            <Button variant="towRed" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Emergency: (647) 949-7729
            </Button>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center bg-service-card border-service-border">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Regional Coverage Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our strategic positioning ensures rapid response across Ontario's diverse geography, 
              from urban centers to rural highways.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <Card key={index} className="p-8 bg-service-card border-service-border">
                <div className="flex justify-center mb-6">
                  {region.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                  {region.name}
                </h3>
                <p className="text-muted-foreground mb-6 text-center">
                  {region.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Major Cities & Towns:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {region.cities.map((city, cityIndex) => (
                      <div key={cityIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-tow-red rounded-full mr-3" />
                        <span className="text-sm text-foreground">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-tow-red/10 text-tow-red p-4 rounded-lg text-center">
                  <span className="font-semibold">Average Response Time: {region.responseTime}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Major Cities We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick response times in Ontario's largest metropolitan areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {majorCities.map((city, index) => (
              <Card key={index} className="p-6 bg-service-card border-service-border hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-tow-red mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {city.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {city.region}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Population: {city.population}
                  </p>
                  <div className="bg-tow-red/10 text-tow-red px-3 py-1 rounded-full text-sm font-medium">
                    {city.responseTime}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Info */}
      <section className="py-20 bg-hero-bg text-hero-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Anywhere in Ontario, Anytime
            </h2>
            <p className="text-xl mb-8 text-hero-foreground/90">
              Whether you're in downtown Toronto during rush hour or on a remote highway in Northern Ontario, 
              TowDaddy's network of professional drivers and modern equipment ensures help is always within reach.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-tow-red mb-2">400+</div>
                <div className="text-hero-foreground/80">Highway Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tow-red mb-2">50+</div>
                <div className="text-hero-foreground/80">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tow-red mb-2">24/7</div>
                <div className="text-hero-foreground/80">Always Available</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="towRed" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (647) 949-7729
              </Button>
              <Button variant="outline" size="lg" className="bg-background/10 border-hero-foreground/30 text-hero-foreground hover:bg-background/20">
                Check Coverage
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoverageAreas;