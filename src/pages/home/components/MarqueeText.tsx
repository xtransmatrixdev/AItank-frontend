import React from "react";
import { motion } from "framer-motion";
import img from "/images/Ellipse15.jpg";

const MarqueeText: React.FC = () => {
  // Define the base content to repeat
  const marqueeContent = Array(20)
    .fill("AI TANK")
    .map((text, index) => (
      <div key={index} className="flex items-center">
        <span>{text}</span>
        <img src={img} alt="dot" className="w-4 h-4 mx-3" />
      </div>
    ));

  return (
    <>
      {/* Right to Left Marquee */}
      <div className="overflow-hidden whitespace-nowrap bg-black text-white ">
        <motion.div
          className="flex space-x-4 text-2xl font-bold"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          {marqueeContent}
          {marqueeContent}
        </motion.div>
      </div>

      {/* Left to Right Marquee */}
      <div className="overflow-hidden whitespace-nowrap bg-black text-white">
        <motion.div
          className="flex space-x-4 text-2xl font-bold"
          animate={{ x: ["-50%", "0%"] }} 
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          {marqueeContent}
          {marqueeContent}
        </motion.div>
      </div>
    </>
  );
};

export default MarqueeText;