<<<<<<< HEAD
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const textImages = {
  "Hackathons": 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300',
  "Events": 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300',
  "Workshops": 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300',
};

const basePositionOffsets: { [key: number]: { x: number; y: number } } = {
  0: { x: -20, y: -30 },  
  1: { x: 155, y: -10 }, 
  2: { x: 330, y: -25 }, 
};

function MaskedCursor() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
=======
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function MaskedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
>>>>>>> Loksai

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getScaledOffsets = (index: number) => {
    const scaleFactor = Math.min(1, screenWidth / 768); 
    return {
      x: basePositionOffsets[index].x * scaleFactor,
      y: basePositionOffsets[index].y * scaleFactor,
    };
  };

  const TextElement = React.memo(({ text, index }: { text: keyof typeof textImages; index: number }) => {
    const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const [overlappingChars, setOverlappingChars] = useState<Set<number>>(new Set());

    const calculateOverlaps = useCallback(() => {
      if (hoveredIndex === index && imageRef.current) {
        const imageRect = imageRef.current.getBoundingClientRect();
        const newOverlappingChars = new Set<number>();

        charRefs.current.forEach((char, charIndex) => {
          if (char) {
            const charRect = char.getBoundingClientRect();
            const overlaps = !(
              charRect.right < imageRect.left ||
              charRect.left > imageRect.right ||
              charRect.bottom < imageRect.top ||
              charRect.top > imageRect.bottom
            );
            if (overlaps) {
              newOverlappingChars.add(charIndex);
            }
          }
        });

        setOverlappingChars(newOverlappingChars);
      } else {
        setOverlappingChars(new Set());
      }
    }, [hoveredIndex, index]);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        calculateOverlaps();
      }, 100); 

      return () => clearTimeout(timeoutId);
    }, [hoveredIndex, calculateOverlaps]);

    const imageSize = screenWidth < 640 ? 'w-24 h-24' : 'w-40 h-40'; 

    return (
      <div 
        className="relative flex items-center justify-center  w-full "
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onTouchStart={() => setHoveredIndex(index)}
        onTouchEnd={() => setHoveredIndex(null)}
      >
        <motion.div
          className="absolute flex items-center justify-center"
          style={{
            left: getScaledOffsets(index).x,
            top: getScaledOffsets(index).y,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: hoveredIndex === index ? 1 : 0,
            scale: hoveredIndex === index ? 1 : 0.8,
          }}
          transition={{
            duration: 0.5,         
            ease: [0.4, 0, 0.2, 1],
            opacity: { duration: 0.4 },
          }}
          ref={imageRef}
        >
          {hoveredIndex === index && (
            <div 
              className={`${imageSize} rounded-full bg-cover bg-center`}
              style={{ backgroundImage: `url(${textImages[text]})` }}
            />
          )}
        </motion.div>
        <motion.span
          className="block relative z-10 text-center"
          initial={{ opacity: 1 }}
        >
          {text.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              ref={el => (charRefs.current[charIndex] = el)}
              className="relative inline-block"
            >
              <span 
                className={`absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-white transition-opacity duration-300 ${
                  overlappingChars.has(charIndex) ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {char}
              </span>
              <span 
                className={`text-transparent [-webkit-text-stroke:1px_white] transition-opacity duration-300 ${
                  overlappingChars.has(charIndex) ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {char}
              </span>
            </span>
          ))}
        </motion.span>
      </div>
    );
  });

  return (
    <div className="relative my-10 overflow-hidden">
      <div className="relative z-10  flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-6xl sm:text-4xl md:text-9xl  font-bold tracking-tighter text-center flex flex-col gap-4 sm:gap-8">
          <TextElement text="Hackathons" index={0} />
          <TextElement text="Events" index={1} />
          <TextElement text="Workshops" index={2} />
        </h1>
        <div className="mt- sm:mt-12 flex flex-col sm:flex-row gap-4 sm:space-x-4">
          <button className="px-4 py-2 sm:px-6 sm:py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-xs sm:text-sm md:text-base">
            Upcoming Event
          </button>
          <button className="px-4 py-2 sm:px-6 sm:py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-xs sm:text-sm md:text-base">
            Explore
          </button>
        </div>
      </div>

      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(76, 0, 255, 0.1), transparent)',
        }}
      />
    </div>
  );
}

export default MaskedCursor;