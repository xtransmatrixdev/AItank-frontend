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
    const [isMobile, setIsMobile] = useState(false);
    const [hoveredWord, setHoveredWord] = useState<keyof typeof textImages | null>(null);
    const { x, y } = useMousePosition();
    const size = hoveredWord ? 150 : 0;

    // Detect screen size on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // Matches Tailwind's md breakpoint
        };

        checkMobile(); // Check on mount
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const buttonConfigs = {
        Hackathons: [
            { text: "Explore", position: "top-right" },
            { text: "Get In", position: "top-right" },
        ],
        Events: [
            { text: "Upcoming Event", position: "bottom-left" },
            { text: "Explore", position: "bottom-left" },
        ],
        Workshops: [
            { text: "Join In", position: "bottom-right" },
            { text: "Explore", position: "bottom-right" },
        ],
    };

    return (
        <div className="relative flex flex-col items-center justify-center text-white px-4 my-10 overflow-hidden w-full h-[500px]">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-9xl font-bold tracking-tighter text-center flex flex-col gap-4 sm:gap-8 relative z-10">
                {words.map((word, index) => (
                    <span
                        key={index}
                        onMouseEnter={() => !isMobile && setHoveredWord(word as keyof typeof textImages)}
                        onMouseLeave={() => !isMobile && setHoveredWord(null)}
                        onClick={() => isMobile && setHoveredWord(word === hoveredWord ? null : word as keyof typeof textImages)}
                        className="relative inline-block cursor-pointer"
                        style={{
                            transform: `translateX(${isMobile ? 0 : (index === 1 ? "10%" : index === 2 ? "20%" : "0%")})`,
                        }}
                    >
                        <motion.span
                            className="relative z-10 transition-colors duration-300 text-transparen"
                            style={{
                                WebkitTextStroke: "2px white",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            {word}
                        </motion.span>
                        
                        {/* Mobile buttons - appear below each word when tapped */}
                        {isMobile && hoveredWord === word && (
                            <div className="flex flex-wrap gap-2 mt-2 justify-center">
                                {buttonConfigs[word].map((button, btnIndex) => (
                                    <motion.a
                                        key={btnIndex}
                                        href="#"
                                        className="px-3 py-1 text-sm rounded-full border border-white/20 bg-black/30 hover:bg-white/10 transition"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {button.text}
                                    </motion.a>
                                ))}
                            </div>
                        )}
                    </span>
                ))}
            </h1>

            {/* Desktop Buttons with responsive positioning */}
            <div className="absolute inset-0 hidden md:block">
                {words.map((word, index) => (
                    <div key={index} className={hoveredWord === word ? "opacity-100" : "opacity-50"}>
                        {buttonConfigs[word as keyof typeof buttonConfigs].map((button, btnIndex) => {
                            // Dynamic positioning based on position property
                            let positionClasses = "";
                            
                            if (button.position === "top-right") {
                                positionClasses = `top-16 ${btnIndex === 0 ? 'right-2' : 'right-32'}`;
                            } else if (button.position === "bottom-left") {
                                positionClasses = `bottom-16 ${btnIndex === 0 ? 'left-44' : 'left-16'}`;
                            } else if (button.position === "bottom-right") {
                                positionClasses = `bottom-8 ${btnIndex === 0 ? 'right-2' : 'right-32'}`;
                            }
                            
                            return (
                                <motion.a
                                    key={btnIndex}
                                    href="#"
                                    className={`absolute px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-base lg:text-lg ${positionClasses}`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0.7 }}
                                    animate={{ 
                                        opacity: hoveredWord === word ? 1 : 0.7,
                                        scale: hoveredWord === word ? 1.05 : 1
                                    }}
                                >
                                    {button.text}
                                </motion.a>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Cursor effect only on non-mobile */}
            <AnimatePresence>
                {!isMobile && hoveredWord && (
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