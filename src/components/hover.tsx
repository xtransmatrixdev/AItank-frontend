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
    position: 'center'
  },
  {
    title: 'Researchers',
    description: 'AI scientists, PhD students, and experts pushing AI forward',
    image: 'Rectangle 29.png',
    position: 'center'
  },
  {
    title: 'Entrepreneurs',
    description: 'Startup founders and product managers building AI-powered businesses',
    image: 'Rectangle 30.png',
    position: 'bottom-right'
  }
];

const HoverEffectGrid: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="bg-black text-white p-6 space-y-0 font-[Inter]">
      {data.map((item, index) => (
        <div
          key={index}
          className={`relative flex items-center p-6 border-b border-gray-600 transition-all duration-300 w-full
                      ${hoverIndex === index ? 'bg-orange-500 text-black' : 'bg-black'}`}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <div className="text-3xl font-bold w-1/3">{`0${index + 1} ${item.title}`}</div>
          <div className="text-lg w-2/3">{item.description}</div>

          {/* Image on hover */}
          {hoverIndex === index && (
            <img
              src={item.image}
              alt={item.title}
              className={`absolute h-48 w-48 rounded-lg transition-all duration-300 
                ${item.position === 'top-left' ? 'top-4 left-4' : ''}
                ${item.position === 'center' ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : ''}
                ${item.position === 'bottom-right' ? 'bottom-4 right-4' : ''}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HoverEffectGrid;
