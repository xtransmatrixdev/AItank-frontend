import React from 'react';

const EventBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] bg-primary overflow-hidden flex items-center justify-center">
      {/* White Banner - Centered and Fixed */}
      <div className="absolute w-[150%] h-20 bg-white rotate-[-12deg]">
        <div className="absolute inset-0 flex items-center animate-scroll-text-left">
          {[...Array(40)].map((_, index) => (
            <span
              key={`white-${index}`}
              className="px-4 text-black text-sm font-bold whitespace-nowrap"
            >
              AI TANK EVENT ✦
            </span>
          ))}
        </div>
      </div>

      {/* Orange Banner - Centered and Fixed */}
      <div className="absolute w-[150%] h-20 bg-orange-500 rotate-[12deg]">
        <div className="absolute inset-0 flex items-center animate-scroll-text-left">
          {[...Array(40)].map((_, index) => (
            <span
              key={`orange-${index}`}
              className="px-4 text-black text-sm font-bold whitespace-nowrap"
            >
              AI TANK EVENT ✦
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
