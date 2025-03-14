import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const playVideo = () => {
      videoRef.current?.play().catch((error) =>
        console.error("Autoplay blocked:", error)
      );
    };

    document.addEventListener("click", playVideo);
    return () => document.removeEventListener("click", playVideo);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const openYouTubeVideo = () => {
    window.open("https://youtu.be/9FmPM0x0k8Q", "_blank");
  };

  const text = "▶ WATCH VIDEO • ▶ WATCH VIDEO • ";
  const textArray = text.split("");

  return (
    <div
      className="relative w-full h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden bg-primary"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-1/2 left-0 w-full h-full object-cover transform -translate-y-1/2"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <img
  src="/video/bg.gif"
  alt="Background Animation"
  className="absolute top-0 left-0 w-full h-full object-cover"
/>


      <div className="absolute top-0 left-0 w-full h-full bg-primary mix-blend-multiply flex items-center justify-center py-2 sm:py-4 md:py-0">
        <motion.h1
          className="text-[2.5rem] sm:text-[3rem] md:text-[8rem] lg:text-[10rem] text-white text-center leading-tight sm:leading-none cursor-pointer"
          style={{ fontFamily: "'Kumar One', cursive" }}
          whileHover={{ scale: 1.05, color: "#f8d210" }}
          onClick={openYouTubeVideo}
        >
          STEP INTO THE <br /> FUTURE OF AI
        </motion.h1>
      </div>

      {/* Custom Hover Cursor */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="fixed flex items-center justify-center rounded-full pointer-events-none"
            style={{
              width: "150px",
              height: "150px",
              left: `${mousePosition.x - 75}px`,
              top: `${mousePosition.y - 75}px`,
              background: "rgba(247, 240, 240, 0.22)", // Glass effect
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(13.2px)",
              WebkitBackdropFilter: "blur(13.2px)",
              clipPath: "circle(50% at center)",
            }}
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Rotating Circular Text - Facing Inwards */}
            <motion.div
              className="absolute w-full h-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              {textArray.map((char, index) => {
                const angle = (360 / textArray.length) * index;
                return (
                  <span
                    key={index}
                    className="absolute text-white-500 text-xs font-bold"
                    style={{
                      transform: `rotate(${angle}deg) translate(55px) rotate(90deg)`, // Rotates each letter 90° inward
                      transformOrigin: "center",
                      position: "absolute",
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </motion.div>

            {/* Play Button in Center */}
            <div className="absolute w-12 h-12 flex items-center justify-center text-white bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fill="currentColor"
                  d="M3 22v-20l18 10-18 10z"
                />
              </svg>
</div>


          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
