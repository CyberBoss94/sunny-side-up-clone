import { Truck } from "lucide-react";

const FloatingRequestWidget = () => {
  const handleRequestClick = () => {
    window.open('https://request.towdaddy.ca/', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={handleRequestClick}
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
