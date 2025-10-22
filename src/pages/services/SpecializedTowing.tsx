import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Wrench, Shield, CheckCircle, Phone } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import specializedTowingImage from '@/assets/services/specialized-towing.jpg';

const SpecializedTowing = () => {
  const specializations = [
    'Luxury and exotic vehicles',
    'Classic and vintage cars',
    'Low-clearance vehicles',
    'Modified vehicles',
    'Electric and hybrid vehicles',
    'Oversized vehicles'
  ];

  return (
    <>
      <Helmet>
        <title>Specialized Towing Toronto & Ontario | Luxury, Classic, Exotic Car Transport | TowDaddy</title>
        <meta name="description" content="Towing for luxury, classic, and exotic cars in Toronto and Ontario. Expert care. Special equipment. Your valuable car is safe with us. Call now!" />
        <meta name="keywords" content="specialized towing Toronto, luxury car towing GTA, exotic vehicle towing Ontario, classic car transport, modified vehicle towing" />
        <link rel="canonical" href="https://towdaddy.ca/services/specialized-towing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { name: 'Services', url: '/services' },
            { name: 'Specialized Towing', url: '/services/specialized-towing' }
          ]} />
          
          <div className="mt-8 grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <h1 className="text-4xl font-bold mb-4">Luxury & Classic Car Towing</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Got a luxury car? Classic car? Exotic car? We tow it right.
                Special care across{" "}
                <Link to="/coverage-areas" className="text-tow-red hover:underline font-medium" title="Ontario specialized towing coverage">
                  Ontario
                </Link>. We use{" "}
                <Link to="/services/emergency-towing" className="text-tow-red hover:underline font-medium" title="Flatbed towing for luxury vehicles">
                  flatbed towing
                </Link>{" "}
                with extra protection. We also offer{" "}
                <Link to="/services/long-distance-towing" className="text-tow-red hover:underline font-medium" title="Long distance exotic vehicle transport">
                  long distance transport
                </Link>.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Settings className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Specialized Equipment</h3>
                    <p className="text-muted-foreground">Custom tools and techniques for high-value and unique vehicles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Expert Handling</h3>
                    <p className="text-muted-foreground">Trained specialists in exotic and classic vehicle transportation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Maximum Protection</h3>
                    <p className="text-muted-foreground">Secure transport with extra precautions for your valuable vehicles.</p>
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
                src={specializedTowingImage} 
                alt="Specialized towing service for luxury and exotic vehicles"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>

          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Vehicle Types We Handle</CardTitle>
              <CardDescription>Specialized towing for all types of unique vehicles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {specializations.map((spec, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{spec}</span>
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

export default SpecializedTowing;
