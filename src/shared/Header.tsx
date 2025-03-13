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
    <header className="bg-[#12131C] text-white px-4 sm:px-8 md:px-20 py-4 flex justify-between items-center">
      
      <div className="flex items-center">
        <img 
          src="./images/aitank_logo.png" 
          alt="Logo" 
          className="h-10 md:h-20" 
        />
      </div>

      
      <nav className="hidden md:flex gap-8 text-sm">
        {['HOME', 'WALL OF AI', 'COMMUNITY', 'ABOUT US'].map((link) => (
          <a
            key={link}
            href="#"
            onClick={() => handleLinkClick(link)}
            className={`relative ${activeLink === link ? 'after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-orange-500 after:bottom-[-4px] after:left-0' : ''} hover:text-orange-500`}
          >
            {link}
          </a>
        ))}
      </nav>

      
      <div className="relative inline-flex items-center justify-center rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-green-500 to-orange-500 animate-[pulse_3s_infinite]">
        <button className="relative z-10 px-6 py-2 text-white bg-[#12131C] rounded-full">
          CONTACT
        </button>
      </div>

      <div
        className="md:hidden flex items-center absolute left-1/2 transform -translate-x-1/2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <HiX className="text-3xl cursor-pointer" />
        ) : (
          <HiMenu className="text-3xl cursor-pointer" />
        )}
      </div>

    
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#12131C] flex flex-col items-center gap-4 py-4 md:hidden">
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
