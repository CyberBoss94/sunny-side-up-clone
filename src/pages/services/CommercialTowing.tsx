import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Clock, Shield, CheckCircle, Phone } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import commercialTowingImage from '@/assets/services/commercial-towing.jpg';

const CommercialTowing = () => {
  const benefits = [
    'Fleet management support',
    'Business account options',
    'Priority service for commercial clients',
    'Heavy-duty towing capabilities',
    'Equipment transportation',
    'Scheduled towing services'
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Towing Toronto & Ontario | Business Fleet Towing | TowDaddy 24/7</title>
        <meta name="description" content="Business towing in Toronto and Ontario. Fleet support. Priority service. Heavy-duty trucks. Keep your business moving. Call now!" />
        <meta name="keywords" content="commercial towing Toronto Ontario, fleet towing, business towing GTA, heavy duty towing, Ontario commercial towing, fleet management" />
        <link rel="canonical" href="https://towdaddy.ca/services/commercial-towing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { name: 'Services', url: '/services' },
            { name: 'Commercial Towing', url: '/services/commercial-towing' }
          ]} />
          
          <div className="mt-8 grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <h1 className="text-4xl font-bold mb-4">Business Towing Toronto & Ontario</h1>
              <p className="text-xl text-muted-foreground mb-6">
                We help businesses in{" "}
                <Link to="/coverage/toronto" className="text-tow-red hover:underline font-medium" title="Toronto fleet towing">
                  Toronto
                </Link>,{" "}
                <Link to="/coverage/hamilton" className="text-tow-red hover:underline font-medium" title="Hamilton commercial towing">
                  Hamilton
                </Link>, and across{" "}
                <Link to="/coverage-areas" className="text-tow-red hover:underline font-medium" title="Ontario commercial towing coverage">
                  Ontario
                </Link>. Fleet towing. Priority service. Business accounts.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Heavy-Duty Capabilities</h3>
                    <p className="text-muted-foreground">Equipped to handle commercial vehicles, trucks, and heavy equipment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">24/7 Business Support</h3>
                    <p className="text-muted-foreground">Round-the-clock availability to minimize your business downtime.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Fleet Management</h3>
                    <p className="text-muted-foreground">Dedicated support for business fleets with account management.</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Get Help Now
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img 
                src={commercialTowingImage} 
                alt="Commercial towing service for fleet vehicles in Ontario"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>

          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Commercial Service Benefits</CardTitle>
              <CardDescription>Why businesses trust TowDaddy for their towing needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CommercialTowing;
