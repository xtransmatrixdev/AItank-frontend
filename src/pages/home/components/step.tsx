import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-[#12131C] flex items-center justify-center overflow-hidden">
      
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="./images/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <h1
        className="absolute text-[6rem] font-bold uppercase text-transparent"
        style={{
          backgroundImage: 'url(/images/bg_video.mp4)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        STEP INTO THE <br /> FUTURE OF AI
      </h1>

      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0" />
    </div>
  );
};

export default HeroSection;
