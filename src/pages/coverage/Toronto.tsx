import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const Toronto = () => {
  const neighborhoods = [
    'Downtown Toronto', 'North York', 'Scarborough', 'Etobicoke',
    'East York', 'York', 'Mississauga', 'Markham',
    'Vaughan', 'Richmond Hill', 'Brampton', 'Pickering'
  ];

  return (
    <>
      <Helmet>
        <title>Towing Service Toronto & GTA | 24/7 Emergency Towing | TowDaddy</title>
        <meta name="description" content="Fast, reliable towing service in Toronto and GTA. Available 24/7 for emergency towing, roadside assistance, and vehicle recovery. Serving all Toronto neighborhoods." />
        <meta name="keywords" content="towing Toronto, GTA towing, emergency towing Toronto, roadside assistance Toronto, 24/7 towing Toronto" />
        <link rel="canonical" href="https://towdaddy.ca/coverage/toronto" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { name: 'Coverage Areas', url: '/coverage-areas' },
            { name: 'Toronto', url: '/coverage/toronto' }
          ]} />
          
          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-4">24/7 Towing Service Toronto & GTA - Fast Emergency Response</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional emergency towing and roadside assistance across Toronto and the Greater Toronto Area. Licensed flatbed towing available 24/7.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose TowDaddy in Toronto?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Complete Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Full service across all Toronto neighborhoods and GTA regions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Fast Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Average 30-minute response time in most Toronto locations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>24/7 Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Round-the-clock emergency towing and roadside assistance.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Complete Toronto & GTA Coverage Areas</h2>
            <Card className="mb-8">
              <CardHeader>
                <p className="text-xl font-semibold">Neighborhoods & Cities We Serve</p>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {neighborhoods.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Towing in Toronto?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Fast, reliable service across all of Toronto and the GTA. Available 24/7.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now for Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toronto;
