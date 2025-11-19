import { MapPin, X, Truck } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const LiveTrackingBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after a short delay on page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleRequestClick = () => {
    window.open('https://request.towdaddy.ca/', '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
      <div className="bg-gradient-to-r from-tow-red via-tow-red-hover to-tow-red text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Content */}
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              {/* Icon */}
              <div className="hidden sm:flex bg-white/20 p-2 rounded-full shrink-0">
                <MapPin className="w-5 h-5 animate-pulse" />
              </div>
              
              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-4 h-4 sm:hidden shrink-0" />
                  <h3 className="font-bold text-sm sm:text-base truncate">
                    Track Your Tow in Real-Time!
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-white/90 line-clamp-2 sm:line-clamp-1">
                  See your driver's location live on the map. Know exactly when help arrives. Available 24/7.
                </p>
              </div>
            </div>

            {/* Action Button */}
            <Button
              onClick={handleRequestClick}
              size="sm"
              className="bg-white text-tow-red hover:bg-white/90 font-semibold shrink-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-xs sm:text-sm whitespace-nowrap"
            >
              Request Now
            </Button>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors shrink-0 ml-1"
              aria-label="Close banner"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Add custom slide down animation */}
      <style>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LiveTrackingBanner;
