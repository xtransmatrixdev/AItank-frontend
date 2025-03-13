import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('HOME');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false); 
  };

  return (
    <header className="bg-[#12131C] text-white px-[1rem] sm:px-[2rem] md:px-[5rem] py-[1rem] flex justify-between items-center z-50">
    
      <div className="flex items-center">
        <img 
          src="./images/aitank_logo.png" 
          alt="Logo" 
          className="h-[5vh] md:h-[10vh]" 
        />
      </div>

     
      <div
        className="md:hidden flex items-center z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <HiX className="text-[2rem] cursor-pointer" />
        ) : (
          <HiMenu className="text-[2rem] cursor-pointer" />
        )}
      </div>

     
      <nav className="hidden md:flex gap-[2rem] text-sm">
        {['HOME', 'WALL OF AI', 'COMMUNITY', 'ABOUT US'].map((link) => (
          <a
            key={link}
            href="#"
            onClick={() => handleLinkClick(link)}
            className={`relative ${activeLink === link ? 'after:content-[\"\"] after:absolute after:w-full after:h-[0.2rem] after:bg-orange-500 after:bottom-[-0.4rem] after:left-0' : ''} hover:text-orange-500`}
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="relative inline-flex items-center justify-center rounded-full p-[0.2rem] bg-gradient-to-r from-pink-500 via-green-500 to-orange-500 animate-[pulse_3s_infinite]">
        <button className="relative z-10 px-[1.5rem] py-[0.5rem] text-white bg-[#12131C] rounded-full">
          CONTACT
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[4rem] left-0 w-full bg-[#12131C] flex flex-col items-center gap-[1rem] py-[1rem] md:hidden z-40">
          {['HOME', 'WALL OF AI', 'COMMUNITY', 'ABOUT US'].map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => handleLinkClick(link)}
              className={`text-sm ${activeLink === link ? 'text-orange-500 font-bold' : ''}`}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
