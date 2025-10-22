import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const London = () => {
  const areas = [
    'Downtown London', 'Old North', 'Old South', 'Byron',
    'White Oaks', 'Westmount', 'Oakridge', 'Whitehills',
    'St. Thomas', 'Strathroy', 'Ingersoll', 'Woodstock'
  ];

  return (
    <>
      <Helmet>
        <title>Towing London Ontario | 24/7 Emergency Towing & Roadside Help | TowDaddy</title>
        <meta name="description" content="Need towing in London, Ontario? We're here 24/7. Fast help. Safe towing. Call now for emergency towing or roadside assistance in London." />
        <meta name="keywords" content="towing London Ontario, emergency towing London, roadside assistance London, 24/7 towing London, London tow truck, flatbed towing London" />
        <link rel="canonical" href="https://towdaddy.ca/coverage/london" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { name: 'Coverage Areas', url: '/coverage-areas' },
            { name: 'London', url: '/coverage/london' }
          ]} />
          
          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-4">Towing London Ontario</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Need towing in London? We're here 24/7. Fast help. Safe towing across London and area.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Wide Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Serving all London neighborhoods and surrounding areas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Quick Arrival</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fast response times throughout the London region.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Always Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    24/7 emergency towing and roadside assistance.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>London Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Towing in London?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Professional towing available 24/7 throughout London and area.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Get Help Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default London;
