import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const Hamilton = () => {
  const areas = [
    'Downtown Hamilton', 'Stoney Creek', 'Ancaster', 'Dundas',
    'Waterdown', 'Flamborough', 'Binbrook', 'Glanbrook',
    'Burlington', 'Grimsby', 'Beamsville', 'Caledonia'
  ];

  return (
    <>
      <Helmet>
        <title>Towing Service Hamilton | 24/7 Emergency Towing | TowDaddy</title>
        <meta name="description" content="Fast, professional towing service in Hamilton and surrounding areas. 24/7 emergency towing, roadside assistance, and vehicle recovery for all Hamilton neighborhoods." />
        <meta name="keywords" content="towing Hamilton, emergency towing Hamilton, roadside assistance Hamilton, 24/7 towing Hamilton, Hamilton tow truck" />
        <link rel="canonical" href="https://towdaddy.ca/coverage/hamilton" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { name: 'Coverage Areas', url: '/coverage-areas' },
            { name: 'Hamilton', url: '/coverage/hamilton' }
          ]} />
          
          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-4">Towing Service Hamilton</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional 24/7{" "}
              <Link to="/services/emergency-towing" className="text-tow-red hover:underline font-medium" title="Emergency towing service Hamilton">
                emergency towing
              </Link>{" "}
              and{" "}
              <Link to="/services/roadside-assistance" className="text-tow-red hover:underline font-medium" title="Roadside assistance Hamilton">
                roadside assistance
              </Link>{" "}
              serving Hamilton and the surrounding region. We offer{" "}
              <Link to="/services/long-distance-towing" className="text-tow-red hover:underline font-medium" title="Long distance towing from Hamilton">
                long distance towing
              </Link>,{" "}
              <Link to="/services/commercial-towing" className="text-tow-red hover:underline font-medium" title="Commercial fleet towing Hamilton">
                commercial towing
              </Link>, and{" "}
              <Link to="/services/vehicle-recovery" className="text-tow-red hover:underline font-medium" title="Vehicle recovery Hamilton area">
                vehicle recovery
              </Link>{" "}
              throughout the Hamilton area.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Full Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete service across Hamilton and neighboring communities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Fast Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Rapid response times throughout the Hamilton area.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Round-the-clock emergency towing and assistance.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Hamilton Area Coverage</CardTitle>
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
              <h2 className="text-2xl font-bold mb-4">Need Towing in Hamilton?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Reliable towing service available 24/7 throughout Hamilton and area.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hamilton;
