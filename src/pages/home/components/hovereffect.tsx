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
    <div className="bg-primary text-white mb-[4vh] w-full relative overflow-hidden">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="wavy">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="10" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className=" font-inter">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center justify-between p-[3vw] md:p-[2.5vw] lg:p-[2vw] border-b border-gray-600 transition-all duration-300 w-full md:w-[95vw] lg:w-[80vw] mx-auto
                        ${hoverIndex === index ? 'bg-orange-500 text-black' : 'bg-primary'}`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="absolute top-[1vw] left-[2vw] md:top-[1.5vw] md:left-[2.5vw] lg:top-[1.2vw] lg:left-[2.2vw] text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] font-bold pr-[3vw]">
              {`0${index + 1}`}
            </div>

            <div className="font-inter font-semibold text-[4vw] md:text-[3vw] lg:text-[2.5vw] leading-tight w-full md:w-[28vw] lg:w-[25vw] pl-[6vw]">
              {item.title}
            </div>

            <div className="text-[2vw] md:text-[1.5vw] lg:text-[1.3vw] w-full md:w-[40vw] lg:w-[35vw] text-left pl-[3vw] pr-[3vw]">
              {item.description}
            </div>

            {hoverIndex === index && (
              <img
                src={item.image}
                alt={item.title}
                className={`absolute h-[15vw] w-[12vw]  rounded-lg transition-all duration-300 z-10 hover-image
                  ${item.position === 'top-left' ? 'top-[-3vw] left-[4vw]' : ''}
                  ${item.position === 'center-right' ? 'top-[-3vw] right-[4vw]' : ''}
                  ${item.position === 'center-left' ? 'top-[-3vw] left-[4vw]' : ''}
                  ${item.position === 'bottom-right' ? 'top-[-2vw] right-[3vw]' : ''}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* <div className="hidden md:block lg:hidden h-[0.5vw]" />  */}
    </div>
  );
};

export default HoverEffectSection;
