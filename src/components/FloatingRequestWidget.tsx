import { Truck, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const FloatingRequestWidget = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  if (isHidden) return null;

  const handleRequestClick = () => {
    window.open('https://request.towdaddy.ca/', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Action Button - Always visible */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
        {/* Expanded Widget */}
        {!isMinimized && (
          <div className="bg-gradient-to-br from-tow-red to-tow-red-hover text-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in max-w-[calc(100vw-2rem)] sm:max-w-sm">
            {/* Close Button */}
            <button
              onClick={() => setIsMinimized(true)}
              className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Minimize widget"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Widget Content */}
            <div className="p-4 sm:p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-white/20 p-2 sm:p-3 rounded-full animate-pulse">
                  <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base sm:text-lg mb-1">Need a Tow?</h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    Quick & easy online request form. Get help fast!
                  </p>
                </div>
              </div>

              <Button
                onClick={handleRequestClick}
                className="w-full bg-white text-tow-red hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm sm:text-base py-2 sm:py-3"
              >
                Request Towing Now
              </Button>

              <p className="text-[10px] sm:text-xs text-white/70 mt-2 text-center">
                Available 24/7 across Ontario
              </p>
            </div>

            {/* Animated Border */}
            <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
          </div>
        )}

        {/* Floating Action Button */}
        <button
          onClick={() => isMinimized ? setIsMinimized(false) : handleRequestClick()}
          className="group relative bg-tow-red hover:bg-tow-red-hover text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 p-4 sm:p-5 animate-bounce-slow"
          aria-label="Request towing service"
        >
          {/* Pulsing Ring Animation */}
          <span className="absolute inset-0 rounded-full bg-tow-red animate-ping opacity-75" />
          <span className="absolute inset-0 rounded-full bg-tow-red animate-pulse" />
          
          {/* Icon */}
          <Truck className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
          
          {/* Badge */}
          <span className="absolute -top-1 -right-1 bg-white text-tow-red text-[10px] font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center animate-pulse">
            !
          </span>
        </button>
      </div>

      {/* Add custom animation styles */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default FloatingRequestWidget;
