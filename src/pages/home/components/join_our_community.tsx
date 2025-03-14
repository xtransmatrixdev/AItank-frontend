import React, { useRef, useState } from "react";

import video1 from "/video/video.mp4";
import video2 from "/video/video1.mp4";
import video3 from "/video/video2.mp4";


const HeroSection: React.FC = () => {
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative w-full bg-primary text-white py-10 px-4 sm:py-20 sm:px-6 md:px-12"
      onMouseMove={handleMouseMove}
    >
      <div className="hidden md:block text-center max-w-[1320px] mx-auto">
        <h2 className="text-[40.67px] font-bold font-poppins leading-[1.5] tracking-[0.02em] mb-6">
          Come join us in shaping the future{" "}
          <span className="font-extrabold">CONNECT</span>
          <span
            className="inline-block mx-1 relative align-middle z-20"
            style={{ marginTop: '5px' }}
            onMouseEnter={() => setHoveredVideo(video1)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <video
              ref={videoRefs[0]}
              autoPlay
              loop
              muted
              playsInline
              className="w-[147.22px] h-[32px] rounded-[16.27px] object-cover"
            >
              <source src={video1} type="video/mp4" />
            </video>
          </span>
          <br />
          <span className="font-extrabold">BUILD</span>
          <span
            className="inline-block mx-1 relative align-middle z-20"
            style={{ marginTop: '5px' }}
            onMouseEnter={() => setHoveredVideo(video2)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <video
              ref={videoRefs[1]}
              autoPlay
              loop
              muted
              playsInline
              className="w-[147.22px] h-[32px] rounded-[16.27px] object-cover"
            >
              <source src={video2} type="video/mp4" />
            </video>
          </span>
          <span className="font-extrabold">INNOVATE</span>
          <span
            className="inline-block mx-1 relative align-middle z-20"
            style={{ marginTop: '5px' }}
            onMouseEnter={() => setHoveredVideo(video3)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <video
              ref={videoRefs[1]}
              autoPlay
              loop
              muted
              playsInline
              className="w-[147.22px] h-[32px] rounded-[16.27px] object-cover"
            >
              <source src={video3} type="video/mp4" />
            </video>
          </span>
          <span>with the brightest minds in AI</span>
        </h2>

        
        {hoveredVideo && (
          <div
            className="fixed w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-white shadow-lg z-30"
            style={{
              top: position.y + 20,
              left: position.x + 20,
              pointerEvents: "none",
            }}
          >
            <video
              src={hoveredVideo}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />
          </div>
        )}
<a href="https://chat.whatsapp.com/H76HPaLrz478jOwepDCkYj">
        <div className="relative inline-flex items-center justify-center rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-green-500 to-orange-500 animate-[pulse_3s_infinite] mt-8">
          <button className="relative z-10 px-6 py-2 text-white bg-[#12131C] rounded-full">
            JOIN OUR COMMUNITY
          </button>
        </div>
        </a>
      </div>

     
      <div className="block md:hidden text-center max-w-[1320px] mx-auto">
        <h2 className="text-[18px] sm:text-[24px] font-bold font-poppins leading-[1.5] tracking-[0.02em] mb-6">
          Come join us in shaping the future{" "}
          <span className="font-extrabold">CONNECT</span>
          <br />
          <span className="font-extrabold">BUILD</span>
          <span className="font-extrabold">INNOVATE</span>
          with the brightest minds in AI
        </h2>
        <a href="https://chat.whatsapp.com/H76HPaLrz478jOwepDCkYj">
        <div className="relative inline-flex items-center justify-center rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-green-500 to-orange-500 animate-[pulse_3s_infinite] mt-8">
          <button className="relative z-10 px-6 py-2 text-white bg-[#12131C] rounded-full">
            JOIN OUR COMMUNITY 
          </button>
        </div>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
