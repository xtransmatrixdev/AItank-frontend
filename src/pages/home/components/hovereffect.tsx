import { useEffect, useState } from 'react';
import gsap from 'gsap';

const data = [
  { title: 'Learners', description: 'AI enthusiasts, students, and newcomers exploring AI', image: '/images/Rectangle 21.png', position: 'top-left' },
  { title: 'Developers', description: 'Developers, engineers, and makers working on AI projects', image: '/images/Rectangle 23.png', position: 'center-right' },
  { title: 'Researchers', description: 'AI scientists, PhD students, and experts pushing AI forward', image: '/images/Rectangle 29.png', position: 'center-left' },
  { title: 'Entrepreneurs', description: 'Startup founders and product managers building AI-powered businesses', image: '/images/Rectangle 30.png', position: 'bottom-right' }
];

const HoverEffectSection = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to('.hover-image', {
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
        duration: 0.5,
        ease: 'power2.out',
        filter: 'url(#wavy)',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-primary text-white min-h-screen w-full relative overflow-hidden">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="wavy">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="10" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="p-6 md:p-12 lg:p-20 space-y-6 font-inter">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center justify-between p-4 md:p-6 lg:p-8 border-b border-gray-600 transition-all duration-300 w-full md:w-[95%] lg:w-[90%] mx-auto
                        ${hoverIndex === index ? 'bg-orange-500 text-black' : 'bg-primary'}`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="absolute top-2 left-4 md:top-4 md:left-8 lg:top-[4px] lg:left-[50px] text-xl">{`0${index + 1}`}</div>

            <div className="font-inter font-semibold text-2xl md:text-[40px] lg:text-[50px] leading-tight w-full md:w-[280px] lg:w-[343px] pl-4 md:pl-6 lg:pl-[71px]">
              {item.title}
            </div>

            <div className="text-md md:text-lg lg:text-xl w-full md:w-[500px] lg:w-[650px] text-left pr-4 md:pr-6 lg:pr-[30px]">
              {item.description}
            </div>

            {hoverIndex === index && (
              <img
                src={item.image}
                alt={item.title}
                className={`absolute h-24 w-24 md:h-36 md:w-36 lg:h-52 lg:w-52 rounded-lg transition-all duration-300 z-10 hover-image
                  ${item.position === 'top-left' ? 'top-[-20px] left-8 md:top-[-40px] md:left-20 lg:top-[-80px] lg:left-80' : ''}
                  ${item.position === 'center-right' ? 'top-[-15px] right-8 md:top-[-30px] md:right-20 lg:top-[-60px] lg:right-40' : ''}
                  ${item.position === 'center-left' ? 'top-[-15px] left-8 md:top-[-30px] md:left-20 lg:top-[-60px] lg:left-40' : ''}
                  ${item.position === 'bottom-right' ? 'top-[-10px] right-8 md:top-[-20px] md:right-16 lg:top-[-40px] lg:right-16' : ''}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverEffectSection;
