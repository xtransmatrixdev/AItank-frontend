import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: '/images/Rectangle 21.png', classes: 'top-[20%] left-[10%] z-10' },
  { src: '/images/Rectangle 26.png', classes: 'top-[40%] right-[1%] z-0' },
  { src: '/images/Rectangle 30.png', classes: 'top-[2%] left-[29%] z-10' },
  { src: '/images/Rectangle 28.png', classes: 'top-[8%] right-[20%] z-10' },
  { src: '/images/Rectangle 29.png', classes: 'top-[24%] left-[47%] z-10' },
  { src: '/images/Rectangle 22.png', classes: 'top-[45%] left-[4%] z-20' },
  { src: '/images/Rectangle 27.png', classes: 'top-[-6%] right-[1%] z-10' },
  { src: '/images/Rectangle 23.png', classes: 'bottom-[1%] left-[28%] z-10' },
  { src: '/images/Rectangle 25.png', classes: 'bottom-[1%] right-[20%] z-10' },
  { src: '/images/Rectangle 24.png', classes: 'bottom-[15%] left-[48%] z-10' },
];

const ScrollEffectSection = () => {
  useEffect(() => {
    gsap.fromTo(
      '.image',
      { y: 0, x: 0, opacity: 0 },
      {
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.scroll-container',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );

    document.querySelectorAll('.image').forEach((image) => {
      image.addEventListener('mouseenter', () => {
        gsap.to(image, {
          filter: 'grayscale(100%) contrast(1.5) brightness(0.8)',
          duration: 0.3,
        });
      });

      image.addEventListener('mouseleave', () => {
        gsap.to(image, {
          filter: 'none',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
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
            alt="visual"
          />
        ))}

        <div
          className="absolute bottom-[40%] w-full text-center overflow-hidden whitespace-nowrap z-10 text-white"
          style={{ fontFamily: "'Kumar One', cursive" }}
        >
          <div className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-orange-500 animate-scroll-left">
            WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ??
            WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ?? WHO IS IT FOR ??
          </div>
        </div>

        <style>
          {`
            @keyframes scroll-left {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }

            .animate-scroll-left {
              display: inline-block;
              animation: scroll-left 10s linear infinite;
              white-space: nowrap;
              width: 200%;
            }

            .image::after {
              content: '';
              position: absolute;
              top: 0; left: 0;
              width: 100%; height: 100%;
              background: linear-gradient(
                rgba(255, 255, 255, 0.1) 10%,
                rgba(0, 0, 0, 0.2) 30%,
                rgba(255, 255, 255, 0.05) 50%,
                rgba(0, 0, 0, 0.3) 70%,
                rgba(255, 255, 255, 0.1) 90%
              );
              background-size: 200% 200%;
              mix-blend-mode: overlay;
              pointer-events: none;
              animation: glitch 0.5s linear infinite;
            }

            @keyframes glitch {
              0% { opacity: 1; }
              20% { opacity: 0.9; filter: brightness(1.1) contrast(1.2); }
              40% { opacity: 0.7; filter: brightness(1.2) contrast(1.3); }
              60% { opacity: 0.5; filter: brightness(0.9) contrast(1.5); }
              80% { opacity: 0.9; filter: brightness(1) contrast(1); }
              100% { opacity: 1; }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default ScrollEffectSection;
