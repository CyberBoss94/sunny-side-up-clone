import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ExternalLink, MessageSquare, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import reviewsDataset from "@/data/googleReviews.json";

interface Review {
  id: string | number;
  author: string;
  rating: number;
  date: string;
  text: string;
  photoUrl?: string;
  isLocalGuide?: boolean;
}

const PAGE_SIZE = 6;
const ROTATE_MS = 7000;

const GoogleReviewsSection = () => {
  const googleBusinessUrl =
    "https://www.google.com/maps/place/?q=place_id:ChIJsTNOmoPRNm8RZEjGw4yJG78";

  const reviews = reviewsDataset as Review[];

  const businessRating = useMemo(() => {
    if (!reviews.length) return 5;
    const avg = reviews.reduce((s, r) => s + (r.rating || 5), 0) / reviews.length;
    return Math.round(avg * 10) / 10;
  }, [reviews]);

  const totalPages = Math.max(1, Math.ceil(reviews.length / PAGE_SIZE));
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const pagedReviews = useMemo(() => {
    const start = page * PAGE_SIZE;
    return reviews.slice(start, start + PAGE_SIZE);
  }, [reviews, page]);

  // Auto-rotate every ROTATE_MS unless paused
  useEffect(() => {
    if (paused || totalPages <= 1) return;
    const t = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, [paused, totalPages]);

  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const goNext = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section
      className="py-20 bg-gradient-to-b from-background to-muted/30"
      role="complementary"
      aria-label="Customer reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="md:text-4xl mb-4 font-bold bg-teal-300 rounded-2xl shadow-xl py-[8px] my-[5px] text-slate-950 text-xl">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Real reviews from real customers on Google — auto-rotating every few seconds.
          </p>

          <div className="flex items-center justify-center gap-6 mb-4">
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
                        className={`h-4 w-4 ${
                          i < Math.floor(businessRating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{businessRating.toFixed(1)}</span>
                  <span className="text-sm text-muted-foreground">
                    ({reviews.length}+ reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid — 6 per page, auto-rotating */}
        <div
          key={page}
          className="grid gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in"
        >
          {pagedReviews.map((review) => (
            <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                {review.photoUrl ? (
                  <img
                    src={review.photoUrl}
                    alt={review.author}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-10 w-10 rounded-full object-cover flex-shrink-0"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-tow-red text-white flex items-center justify-center font-semibold flex-shrink-0">
                    {review.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{review.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.date}
                    {review.isLocalGuide && (
                      <span className="ml-2 text-xs text-primary">· Local Guide</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">
                {review.text}
              </p>
            </Card>
          ))}
        </div>

        {/* Pagination + Auto-rotate Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
            <Button variant="outline" size="sm" onClick={goPrev} aria-label="Previous reviews">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <span className="text-sm text-muted-foreground" aria-live="polite">
              Page {page + 1} of {totalPages}
            </span>
            <Button variant="outline" size="sm" onClick={goNext} aria-label="Next reviews">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Resume auto-rotate" : "Pause auto-rotate"}
            >
              {paused ? (
                <>
                  <Play className="h-4 w-4" /> Resume
                </>
              ) : (
                <>
                  <Pause className="h-4 w-4" /> Pause
                </>
              )}
            </Button>
          </div>
        )}

        {/* Google Maps Embed */}
        <div className="mb-10 flex justify-center">
          <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d740849.9065709277!2d-79.37839405!3d43.503484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f36d1839a4e33b1%3A0xbf1b898cc3c64864!2sTowDaddy%20Inc.!5e0!3m2!1sen!2sca!4v1760468337221!5m2!1sen!2sca"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TowDaddy Inc. Location"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="towRed" className="gap-2" asChild>
            <a
              href="https://g.page/r/CWRIxsOMiRu_EAE/review"
              target="_blank"
              rel="noopener noreferrer"
            >
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
