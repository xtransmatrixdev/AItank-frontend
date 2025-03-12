import React, { useState } from 'react';

const data = [
  {
    title: 'Learners',
    description: 'AI enthusiasts, students, and newcomers exploring AI',
    image: 'Rectangle 21.png',
    position: 'top-left'
  },
  {
    title: 'Developers',
    description: 'Developers, engineers, and makers working on AI projects',
    image: 'Rectangle 23.png',
    position: 'center-right'
  },
  {
    title: 'Researchers',
    description: 'AI scientists, PhD students, and experts pushing AI forward',
    image: 'Rectangle 29.png',
    position: 'center-left'
  },
  {
    title: 'Entrepreneurs',
    description: 'Startup founders and product managers building AI-powered businesses',
    image: 'Rectangle 30.png',
    position: 'bottom-right'
  }
];

const HoverPage: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="bg-black text-white p-28 space-y-0 font-[Inter] min-h-screen w-full">
      {data.map((item, index) => (
        <div
          key={index}
          className={`relative flex items-center justify-between p-6 border-b border-gray-600 transition-all duration-300 w-[90%] mx-auto
                      ${hoverIndex === index ? 'bg-orange-500 text-black' : 'bg-black'}`}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {/* Numbers */}
          <div
            className="absolute top-[4px] left-[50px] text-1xl w-[46px] h-[18px] font-medium"
          >
            {`0${index + 1}`}
          </div>

          {/* Title */}
          <div
            className="font-[Inter] font-semibold text-[50px] leading-[99%] w-[343px] pl-[71px]"
          >
            {item.title}
          </div>

          {/* Description */}
          <div
            className="text-lg text-[17px] w-[650px] text-left pr-[30px] "
          >
            {item.description}
          </div>

          {/* Image on Hover */}
          {hoverIndex === index && (
            <img
              src={item.image}
              alt={item.title}
              className={`absolute h-52 w-52 rounded-lg transition-all duration-300 z-10
                ${item.position === 'top-left' ? 'top-[-80px] left-80' : ''}
                ${item.position === 'center-right' ? 'top-[-60px] right-40' : ''}
                ${item.position === 'center-left' ? 'top-[-60px] left-40' : ''}
                ${item.position === 'bottom-right' ? 'top-[-40px] right-16' : ''}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HoverPage;
