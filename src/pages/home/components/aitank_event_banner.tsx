import React from 'react';

const EventBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[30vh] bg-primary overflow-hidden flex items-center justify-center -mt-10">

      {/* White Banner - Left to Right */}
      <div className="absolute w-[110%] h-[5vh] bg-white rotate-[-6deg]">
        <div className="absolute inset-0 flex items-center animate-scroll-text-right">
          {[...Array(40)].map((_, index) => (
            <span
              key={`white-${index}`}
              className="px-2 text-black text-xs font-bold whitespace-nowrap"
            >
              AI TANK EVENT ✦
            </span>
          ))}
        </div>
      </div>

      {/* Orange Banner - Right to Left */}
      <div className="absolute w-[110%] h-[5vh] bg-orange-500 rotate-[6deg]">
        <div className="absolute inset-0 flex items-center animate-scroll-text-left">
          {[...Array(40)].map((_, index) => (
            <span
              key={`orange-${index}`}
              className="px-2 text-black text-xs font-bold whitespace-nowrap"
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
