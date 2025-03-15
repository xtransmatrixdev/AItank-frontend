import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { title: "Learners", description: "AI enthusiasts, students, and newcomers exploring AI", image: "/images/learner.jpg" },
  { title: "Developers", description: "Developers, engineers, and makers working on AI projects", image: "/images/devloper.jpg" },
  { title: "Researchers", description: "AI scientists, PhD students, and experts pushing AI forward", image: "/images/research.jpg" },
  { title: "Entrepreneurs", description: "Startup founders and product managers building AI-powered businesses", image: "/images/enter.jpg" },
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
  const size = hoveredIndex !== null ? 220 : 0; // Increased size for a bolder effect
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768; // Detect mobile view

  return (
    <div className="bg-primary text-white w-full relative overflow-hidden py-[5vh]">
      <div className="font-inter">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center justify-between p-[5vw] md:p-[3.5vw] lg:p-[3vw] border-b-2 border-gray-500 
              transition-all duration-300 w-full md:w-[95vw] lg:w-[80vw] mx-auto font-bold text-lg md:text-2xl lg:text-3xl
              ${hoveredIndex === index && !isMobile ? "bg-orange-500 text-black" : "bg-primary"}`}
            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
          >
            <div className="absolute top-[1.5vw] left-[2vw] md:top-[1.8vw] md:left-[3vw] lg:top-[1.5vw] lg:left-[2.5vw] text-[5vw] md:text-[2vw] lg:text-[1.8vw] font-extrabold">
              {`0${index + 1}`}
            </div>

            <div className="font-semibold w-full md:w-[28vw] lg:w-[25vw] pl-[7vw] text-[6vw] md:text-[3.2vw] lg:text-[2.8vw] leading-tight">
              {item.title}
            </div>

            <div className="w-full md:w-[40vw] lg:w-[35vw] text-left pl-[7vw] pr-[4vw] text-[3.5vw] md:text-[1.7vw] lg:text-[1.5vw]">
              {item.description}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Image Effect (Disabled for Mobile) */}
      {!isMobile && (
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.img
              key={hoveredIndex}
              src={data[hoveredIndex].image}
              alt="hovered preview"
              className="fixed pointer-events-none rounded-lg shadow-xl"
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
      )}
    </div>
  );
};

export default HoverEffectSection;
