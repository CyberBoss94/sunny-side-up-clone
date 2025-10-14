import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ExternalLink, MessageSquare } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    google: any;
  }
  const google: any;
}
interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
  photoUrl?: string;
}
interface GoogleReviewsData {
  name: string;
  rating: number;
  totalReviews: number;
  reviews: Review[];
}
const GoogleReviewsSection = () => {
  const googleBusinessUrl = "https://www.google.com/maps/place/?q=place_id:ChIJsTNOmoPRNm8RZEjGw4yJG78";
  const [reviewsData, setReviewsData] = useState<GoogleReviewsData>({
    name: "TowDaddy Inc.",
    rating: 4.9,
    totalReviews: 127,
    reviews: []
  });
  const [loading, setLoading] = useState(true);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        console.log("Fetching Google reviews...");
        const {
          data,
          error
        } = await supabase.functions.invoke("fetch-google-reviews");
        if (error) {
          console.error("Error fetching reviews:", error);
          return;
        }
        if (data) {
          console.log("Reviews data received:", data);
          setReviewsData({
            name: data.name || "TowDaddy Inc.",
            rating: data.rating || 4.9,
            totalReviews: data.totalReviews || 0,
            reviews: data.reviews || [] // Show all reviews
          });
        }
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      try {
        const { Map, InfoWindow } = await google.maps.importLibrary('maps') as any;
        const { AdvancedMarkerElement } = await google.maps.importLibrary('marker') as any;
        const { Place } = await google.maps.importLibrary('places') as any;

        const centerCoordinates = { lat: 43.503484, lng: -79.378394 };
        
        const map = new Map(mapRef.current, {
          center: centerCoordinates,
          zoom: 14,
          mapId: 'DEMO_MAP_ID', // Required for AdvancedMarkerElement
        });

        mapInstanceRef.current = map;

        // Create Place instance
        const place = new Place({
          id: 'ChIJsTNOmoPRNm8RZEjGw4yJG78',
        });

        // Fetch place details
        await place.fetchFields({
          fields: ['displayName', 'formattedAddress', 'location', 'reviews', 'rating'],
        });

        // Create content string for InfoWindow
        let contentString = '';
        if (place.reviews && place.reviews.length > 0) {
          const review = place.reviews[0];
          const reviewRating = review.rating || 0;
          const reviewText = review.text || '';
          const authorName = review.authorAttribution?.displayName || 'Anonymous';
          const authorUri = review.authorAttribution?.uri || '#';

          contentString = `
            <div style="font-family: Arial, sans-serif; max-width: 300px;">
              <div style="font-weight: bold; font-size: 16px; margin-bottom: 8px;">${place.displayName}</div>
              <div style="color: #666; margin-bottom: 8px;">${place.formattedAddress}</div>
              <a href="${authorUri}" target="_blank" rel="noopener noreferrer" style="color: #1a73e8; text-decoration: none;">Author: ${authorName}</a>
              <div style="margin-top: 8px;">Rating: ${reviewRating} stars</div>
              <div style="margin-top: 8px;"><p>${reviewText}</p></div>
            </div>
          `;
        } else {
          contentString = `<div>No reviews were found for ${place.displayName}.</div>`;
        }

        // Create InfoWindow
        const infoWindow = new InfoWindow({
          content: contentString,
          ariaLabel: place.displayName || 'TowDaddy Inc.',
        });

        // Add marker
        const marker = new AdvancedMarkerElement({
          map,
          position: place.location,
          title: place.displayName || 'TowDaddy Inc.',
        });

        // Show InfoWindow
        infoWindow.open({
          anchor: marker,
          map,
        });
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places,marker&callback=Function.prototype`;
    script.async = true;
    script.defer = true;
    script.onload = () => initMap();
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  return <section className="py-20 bg-gradient-to-b from-background to-muted/30" role="complementary" aria-label="Customer reviews">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold text-slate-950 bg-teal-300 rounded-2xl shadow-xl py-[8px] my-[5px]">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Don't just take our word for it - see what our customers have to say about TowDaddy's service
          </p>

          {/* Google Business Profile Stats */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <img src="/towdaddy-logo.png" alt={reviewsData.name} className="h-12 w-12 rounded-full border-2 border-border" />
              <div className="text-left">
                <p className="font-semibold">{reviewsData.name}</p>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${i < Math.floor(reviewsData.rating) ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`} />)}
                  </div>
                  <span className="text-sm font-medium">{reviewsData.rating.toFixed(1)}</span>
                  <span className="text-sm text-muted-foreground">({reviewsData.totalReviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {loading ?
        // Loading skeleton
        [...Array(3)].map((_, i) => <Card key={i} className="p-6">
                <div className="animate-pulse">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-muted rounded w-1/2"></div>
                      <div className="h-3 bg-muted rounded w-1/3"></div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => <div key={j} className="h-4 w-4 bg-muted rounded"></div>)}
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-5/6"></div>
                  </div>
                </div>
              </Card>) : reviewsData.reviews.length > 0 ? reviewsData.reviews.map(review => <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  {review.photoUrl ? <img src={review.photoUrl} alt={review.author} className="h-10 w-10 rounded-full object-cover" /> : <div className="h-10 w-10 rounded-full bg-tow-red text-white flex items-center justify-center font-semibold">
                      {review.avatar}
                    </div>}
                  <div className="flex-1">
                    <p className="font-semibold">{review.author}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`} />)}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
              </Card>) : <div className="col-span-3 text-center text-muted-foreground">No reviews available at the moment.</div>}
        </div>

        {/* Google Maps with Reviews */}
        <div className="mb-10 flex justify-center">
          <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg border border-border">
            <div ref={mapRef} className="w-full h-[400px]" />
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="towRed" className="gap-2" asChild>
            <a href="https://g.page/r/CWRIxsOMiRu_EAE/review" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-5 w-5" />
              Write a Review on Google
            </a>
          </Button>

          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5" />
              View All Reviews
            </a>
          </Button>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">Verified reviews from real customers on Google</p>
        </div>
      </div>
    </section>;
};
export default GoogleReviewsSection;