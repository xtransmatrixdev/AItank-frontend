import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { title: "Learners", description: "AI enthusiasts, students, and newcomers exploring AI", image: "/images/Rectangle 21.png" },
  { title: "Developers", description: "Developers, engineers, and makers working on AI projects", image: "/images/Rectangle 23.png" },
  { title: "Researchers", description: "AI scientists, PhD students, and experts pushing AI forward", image: "/images/Rectangle 29.png" },
  { title: "Entrepreneurs", description: "Startup founders and product managers building AI-powered businesses", image: "/images/Rectangle 30.png" },
];

// Hook to track cursor position
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

const HoverEffectSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { x, y } = useMousePosition();
  const size = hoveredIndex !== null ? 180 : 0;

  return (
    <div className="bg-primary text-white mb-[4vh] w-full relative overflow-hidden">
      <div className="font-inter">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center justify-between p-[3vw] md:p-[2.5vw] lg:p-[2vw] border-b border-gray-600 transition-all duration-300 w-full md:w-[95vw] lg:w-[80vw] mx-auto 
              ${hoveredIndex === index ? "bg-orange-500 text-black" : "bg-primary"}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute top-[1vw] left-[2vw] md:top-[1.5vw] md:left-[2.5vw] lg:top-[1.2vw] lg:left-[2.2vw] text-[3vw] md:text-[1.5vw] lg:text-[1.2vw] font-bold pr-[3vw]">
              {`0${index + 1}`}
            </div>

            <div className="font-inter font-semibold text-[6vw] md:text-[3vw] lg:text-[2.5vw] leading-tight w-full md:w-[28vw] lg:w-[25vw] pl-[6vw]">
              {item.title}
            </div>

            <div className="text-[3vw] md:text-[1.5vw] lg:text-[1.3vw] w-full md:w-[40vw] lg:w-[35vw] text-left pl-[3vw] pr-[3vw]">
              {item.description}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Image Effect */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.img
            key={hoveredIndex}
            src={data[hoveredIndex].image}
            alt="hovered preview"
            className="fixed pointer-events-none rounded-lg shadow-lg"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${x - size / 2}px`,
              top: `${y - size / 2}px`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverEffectSection;
