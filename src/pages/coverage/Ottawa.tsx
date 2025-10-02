import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const Ottawa = () => {
  const areas = [
    'Downtown Ottawa', 'Kanata', 'Orleans', 'Barrhaven',
    'Nepean', 'Gloucester', 'Gatineau', 'Rockland',
    'Stittsville', 'Manotick', 'Carp', 'Greely'
  ];

  return (
    <>
      <Helmet>
        <title>Towing Service Ottawa | 24/7 Emergency Towing Ottawa | TowDaddy</title>
        <meta name="description" content="Professional towing service in Ottawa and surrounding areas. 24/7 emergency towing, roadside assistance, and vehicle recovery. Fast response times." />
        <meta name="keywords" content="towing Ottawa, emergency towing Ottawa, roadside assistance Ottawa, 24/7 towing Ottawa, Ottawa tow truck" />
        <link rel="canonical" href="https://towdaddy.ca/coverage/ottawa" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { name: 'Coverage Areas', url: '/coverage-areas' },
            { name: 'Ottawa', url: '/coverage/ottawa' }
          ]} />
          
          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-4">Towing Service Ottawa</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Reliable 24/7 towing and roadside assistance throughout Ottawa and the National Capital Region.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>City-Wide Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Serving all Ottawa neighborhoods and surrounding communities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Quick Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fast arrival times across all Ottawa service areas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Always Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    24/7 emergency service for all your towing needs.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Ottawa Service Coverage</CardTitle>
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
              <h2 className="text-2xl font-bold mb-4">Need Towing in Ottawa?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Professional towing service available 24/7 throughout the capital region.
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

export default Ottawa;
