import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ExternalLink, MessageSquare } from "lucide-react";

const GoogleReviewsSection = () => {
  const googleBusinessUrl = "https://www.google.com/maps/place/?q=place_id:ChIJYeN7bRLJ1IkR0u7RQXHQe9o";
  
  // Sample reviews - these would ideally come from Google Places API
  const reviews = [
    {
      id: 1,
      author: "John Smith",
      rating: 5,
      date: "2 weeks ago",
      text: "Excellent service! Quick response time and professional team. They handled my vehicle with care and got me back on the road fast.",
      avatar: "JS"
    },
    {
      id: 2,
      author: "Sarah Johnson",
      rating: 5,
      date: "1 month ago",
      text: "TowDaddy saved the day when I broke down on the highway. Available 24/7 and the flatbed service was top-notch. Highly recommend!",
      avatar: "SJ"
    },
    {
      id: 3,
      author: "Mike Davis",
      rating: 5,
      date: "1 month ago",
      text: "Professional and reliable towing service. Fair pricing and they arrived within the promised time. Will definitely use again if needed.",
      avatar: "MD"
    }
  ];

  const overallRating = 4.9;
  const totalReviews = 127;

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30" role="complementary" aria-label="Customer reviews">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Don't just take our word for it - see what our customers have to say about TowDaddy's service
          </p>
          
          {/* Google Business Profile Stats */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <img 
                src="/towdaddy-logo.png" 
                alt="TowDaddy Inc." 
                className="h-12 w-12 rounded-full border-2 border-border"
              />
              <div className="text-left">
                <p className="font-semibold">TowDaddy Inc.</p>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{overallRating}</span>
                  <span className="text-sm text-muted-foreground">({totalReviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-tow-red text-white flex items-center justify-center font-semibold">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>
              
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {review.text}
              </p>
            </Card>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="towRed"
            className="gap-2"
            asChild
          >
            <a 
              href={googleBusinessUrl}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageSquare className="h-5 w-5" />
              Write a Review on Google
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="gap-2"
            asChild
          >
            <a 
              href={googleBusinessUrl}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-5 w-5" />
              View All Reviews
            </a>
          </Button>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Verified reviews from real customers on Google
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
