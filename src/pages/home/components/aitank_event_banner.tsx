import React from 'react';

const EventBanner: React.FC = () => {
  return (
    <div className="relative w-full bg-primary overflow-hidden py-4">
      {/* White Banner - Moving Right */}
      <div className="flex whitespace-nowrap animate-scroll-right">
        {Array(20).fill(0).map((_, index) => (
          <span key={`white-${index}`} className="px-6 text-black bg-white text-sm font-bold">
            AI TANK EVENT ✦
          </span>
        ))}
      </div>

      {/* Orange Banner - Moving Left */}
      <div className="flex whitespace-nowrap animate-scroll-left mt-2">
        {Array(20).fill(0).map((_, index) => (
          <span key={`orange-${index}`} className="px-6 text-black bg-orange-500 text-sm font-bold">
            AI TANK EVENT ✦
          </span>
        ))}
      </div>
    </div>
  );
};

export default EventBanner;
