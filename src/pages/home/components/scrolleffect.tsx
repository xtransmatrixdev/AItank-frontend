import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: '/images/Rectangle 21.png', classes: 'top-[20%] left-[10%] z-10', depth: 2 },
  { src: '/images/Rectangle 26.png', classes: 'top-[40%] right-[1%] z-0', depth: 3 },
  { src: '/images/Rectangle 30.png', classes: 'top-[2%] left-[29%] z-10', depth: 1.5 },
  { src: '/images/Rectangle 28.png', classes: 'top-[8%] right-[20%] z-10', depth: 2.5 },
  { src: '/images/Rectangle 29.png', classes: 'top-[24%] left-[47%] z-10', depth: 1.8 },
  { src: '/images/Rectangle 22.png', classes: 'top-[45%] left-[4%] z-20', depth: 2.2 },
  { src: '/images/Rectangle 27.png', classes: 'top-[-6%] right-[1%] z-10', depth: 3.1 },
  { src: '/images/Rectangle 23.png', classes: 'bottom-[1%] left-[28%] z-10', depth: 1.9 },
  { src: '/images/Rectangle 25.png', classes: 'bottom-[1%] right-[20%] z-10', depth: 2.3 },
  { src: '/images/Rectangle 24.png', classes: 'bottom-[15%] left-[48%] z-10', depth: 1.6 },
];

const ScrollEffectSection = () => {
  useEffect(() => {
    interface ParallaxEvent extends MouseEvent {
      clientX: number;
      clientY: number;
    }

    const parallaxEffect = (event: ParallaxEvent) => {
      const { clientX: x, clientY: y } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      document.querySelectorAll<HTMLImageElement>('.image').forEach((image) => {
      const depth = parseFloat(image.getAttribute('data-depth') || '0');
      const moveX = (x - centerX) * (depth / 50);
      const moveY = (y - centerY) * (depth / 50);

      gsap.to(image, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: 'power2.out',
      });
      });
    };

    window.addEventListener('mousemove', parallaxEffect);
    return () => {
      window.removeEventListener('mousemove', parallaxEffect);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      <div
        className="scroll-container relative w-full min-h-screen bg-primary bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('/images/Rectangle 20.png')` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            className={`absolute ${image.classes} image w-16 sm:w-24 md:w-32 lg:w-40 xl:w-52 2xl:w-64`}
            data-depth={image.depth}
            alt="visual"
          />
        ))}

        {/* Continuous Scrolling Text */}
        <div className="absolute bottom-[40%] w-full overflow-hidden whitespace-nowrap z-10 text-white">
          <div className="marquee text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-orange-500">
            <span>
              WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ??
            </span>
            <span>
              WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ??
            </span>
          </div>
        </div>

        {/* CSS for Infinite Scrolling Text */}
        <style>
          {`
            .marquee {
              display: flex;
              gap: 2rem;
              white-space: nowrap;
              width: max-content;
              animation: marquee 10s linear infinite;
            }

            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default ScrollEffectSection;
