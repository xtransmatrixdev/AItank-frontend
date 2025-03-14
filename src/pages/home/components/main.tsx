import React, { useEffect, useRef } from "react";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      videoRef.current?.play().catch((error) =>
        console.error("Autoplay blocked:", error)
      );
    };

    document.addEventListener("click", playVideo);
    return () => document.removeEventListener("click", playVideo);
  }, []);

  return (
    <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden bg-primary ">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-1/2 left-0 w-full h-full object-cover transform -translate-y-1/2"
      >
        <source src="/images/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-primary mix-blend-multiply flex items-center justify-center py-2 sm:py-4 md:py-0">
        <h1
          className="text-[2.5rem] sm:text-[3rem] md:text-[8rem] lg:text-[10rem] text-white text-center leading-tight sm:leading-none"
          style={{ fontFamily: "'Kumar One', cursive" }}
        >
          STEP INTO THE <br /> FUTURE OF AI
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
