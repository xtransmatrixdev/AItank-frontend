import React from "react";
import { motion } from "framer-motion";
import img from "../assets/Ellipse15.jpg"

const MarqueeText: React.FC = () => {
  return (
    <>
    <div className="overflow-hidden whitespace-nowrap bg-black text-white ">
      <motion.div
        className="flex space-x-4 text-2xl font-bold"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {Array(100)
          .fill("AI TANK")
          .map((text, index) => (
            <div key={index} className="flex items-center ">
              <span>{text}</span>
              <img src={img} alt="dot" className="w-4 h-4 mx-3"/>
            </div>
          ))}
      </motion.div>
    </div>
    <div className="overflow-hidden whitespace-nowrap bg-black text-white ">
      <motion.div
        className="flex space-x-4 text-2xl font-bold"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {Array(100)
          .fill("AI TANK")
          .map((text, index) => (
            <div key={index} className="flex items-center ">
              <span>{text}</span>
              <img src={img} alt="dot" className="w-4 h-4 mx-3"/>
            </div>
          ))}
      </motion.div>
    </div>

    </>
  );
};

export default MarqueeText;
