import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent): void => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

const words = ["Hackathons", "Events", "Workshops"];
const textImages = {
    Hackathons: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300",
    Events: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300",
    Workshops: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300",
};

const MaskedCursor = () => {
    const [hoveredWord, setHoveredWord] = useState<keyof typeof textImages | null>(null);
    const { x, y } = useMousePosition();
    const size = hoveredWord ? 150 : 0;

    return (
        <div className="relative flex flex-col items-center justify-center text-white px-4 my-10 overflow-hidden">
            <h1 className="text-6xl sm:text-4xl md:text-9xl font-bold tracking-tighter text-center flex flex-col gap-4 sm:gap-8 relative">
                {words.map((word, index) => (
                    <span
                        key={index}
                        onMouseEnter={() => setHoveredWord(word as keyof typeof textImages)}
                        onMouseLeave={() => setHoveredWord(null)}
                        className="relative inline-block"
                    >
                        <motion.span
                            className="relative z-10 transition-colors duration-300 text-transparent"
                            style={{
                                WebkitTextStroke: "2px white",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </h1>

            <AnimatePresence>
                {hoveredWord && (
                    <motion.div
                        className="fixed rounded-full overflow-hidden pointer-events-none border-2 border-white shadow-lg backdrop-blur-lg"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: `${x - size / 2}px`,
                            top: `${y - size / 2}px`,
                            backgroundImage: `url(${textImages[hoveredWord]})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            mixBlendMode: "normal",
                            clipPath: "circle(50% at center)",
                        }}
                        animate={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default MaskedCursor;
