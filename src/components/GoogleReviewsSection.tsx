import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ExternalLink, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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
    reviews: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        console.log("Fetching Google reviews...");
        const { data, error } = await supabase.functions.invoke("fetch-google-reviews");

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
            reviews: data.reviews || [], // Show all reviews
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

  return (
    <section
      className="py-20 bg-gradient-to-b from-background to-muted/30"
      role="complementary"
      aria-label="Customer reviews"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Don't just take our word for it - see what our customers have to say about TowDaddy's service
          </p>

          {/* Google Business Profile Stats */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <img
                src="/towdaddy-logo.png"
                alt={reviewsData.name}
                className="h-12 w-12 rounded-full border-2 border-border"
              />
              <div className="text-left">
                <p className="font-semibold">{reviewsData.name}</p>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(reviewsData.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
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
          {loading ? (
            // Loading skeleton
            [...Array(3)].map((_, i) => (
              <Card key={i} className="p-6">
                <div className="animate-pulse">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-muted rounded w-1/2"></div>
                      <div className="h-3 bg-muted rounded w-1/3"></div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="h-4 w-4 bg-muted rounded"></div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-5/6"></div>
                  </div>
                </div>
              </Card>
            ))
          ) : reviewsData.reviews.length > 0 ? (
            reviewsData.reviews.map((review) => (
              <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  {review.photoUrl ? (
                    <img src={review.photoUrl} alt={review.author} className="h-10 w-10 rounded-full object-cover" />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-tow-red text-white flex items-center justify-center font-semibold">
                      {review.avatar}
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="font-semibold">{review.author}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
              </Card>
            ))
          ) : (
            <div className="col-span-3 text-center text-muted-foreground">No reviews available at the moment.</div>
          )}
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
    </section>
  );
};

export default GoogleReviewsSection;
