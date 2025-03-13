import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function MaskedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      setMousePosition({ x: touch.clientX, y: touch.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const animateText = async () => {
      while (true) {
        // Generate 2-3 random unique indices
        const numHighlights = Math.random() < 0.5 ? 2 : 3;
        const indices: number[] = [];
        while (indices.length < numHighlights) {
          const index = Math.floor(Math.random() * 3);
          if (!indices.includes(index)) {
            indices.push(index);
          }
        }
        setActiveIndices(indices);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
      }
    };

    animateText();
  }, []);

  const TextElement = ({ text, index }: { text: string; index: number }) => (
    <motion.span 
      className="block relative group"
      initial={{ opacity: 1 }}
      animate={{ 
        scale: activeIndices.includes(index) ? 1.05 : 1,
        transition: { duration: 0.5 }
      }}
    >
      <span 
        className={`absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-white transition-opacity duration-500 ${
          activeIndices.includes(index) ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {text}
      </span>
      <span 
        className={`text-transparent [-webkit-text-stroke:1px_white] transition-opacity duration-500 ${
          activeIndices.includes(index) ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {text}
      </span>
    </motion.span>
  );

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Masked content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-center flex flex-col gap-4">
          <TextElement text="Hackathons" index={0} />
          <TextElement text="Events" index={1} />
          <TextElement text="Workshops" index={2} />
        </h1>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:space-x-4">
          <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm sm:text-base">
            Upcoming Event
          </button>
          <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm sm:text-base">
            Explore
          </button>
        </div>
      </div>

      {/* Cursor mask */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 mix-blend-difference block"
        animate={{
          WebkitMaskPosition: `${mousePosition.x - 100}px ${mousePosition.y - 100}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        style={{
          WebkitMaskImage: 'radial-gradient(circle, black 25%, transparent 50%)',
          WebkitMaskSize: '200px 200px',
          WebkitMaskRepeat: 'no-repeat',
          background: 'white',
        }}
      />

      {/* Background gradient */}
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