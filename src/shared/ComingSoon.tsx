import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
   
      <img 
        src="/images/cominsoon.jpg"
        alt="Background" 
        className="w-full h-full object-cover"
      />
      
    
      <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-4"><br/><br/><br/><br/>
        <h1 className="text-primary text-4xl md:text-6xl font-bold mb-4">Awesome Site in The Making</h1>
        <p className="text-primary text-lg md:text-2xl">An amazing site is coming to this web address. Check back soon!</p>
      </div>
    </div>
  );
};

export default ComingSoon;