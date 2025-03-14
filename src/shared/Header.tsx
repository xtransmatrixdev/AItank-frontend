import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

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

      <div className="md:hidden flex items-center z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <HiX className="text-[2rem] cursor-pointer" />
        ) : (
          <HiMenu className="text-[2rem] cursor-pointer" />
        )}
      </div>

      <nav className="hidden md:flex gap-[10vw] text-md">
        {[
          { name: 'HOME', path: '/' },
          { name: 'WALL OF AI', path: '/coming-soon' },
          { name: 'COMMUNITY', path: '/coming-soon' },
          { name: 'ABOUT US', path: '/coming-soon' }
        ].map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            onClick={() => handleLinkClick(name)}
            className={`relative ${activeLink === name ? 'after:content-[""] after:absolute after:w-full after:h-[0.2rem] after:bg-orange-500 after:bottom-[-0.4rem] after:left-0' : ''} hover:text-orange-500`}
          >
            {name}
          </Link>
        ))}
      </nav>

      <div className="hidden md:inline relative inline-flex items-center justify-center rounded-full p-[0.2rem] bg-gradient-to-r from-pink-500 via-green-500 to-orange-500 animate-[pulse_3s_infinite]">
        <button className="relative z-10 px-[1.5rem] py-[0.5rem] text-white bg-[#12131C] rounded-full">
          CONTACT
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[4rem] left-0 w-full bg-[#12131C] flex flex-col items-center gap-[1rem] py-[1rem] md:hidden z-40">
          {[
            { name: 'HOME', path: '/' },
            { name: 'WALL OF AI', path: '/coming-soon' },
            { name: 'COMMUNITY', path: '/coming-soon' },
            { name: 'ABOUT US', path: '/coming-soon' }
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => handleLinkClick(name)}
              className={`text-sm ${activeLink === name ? 'text-orange-500 font-bold' : ''}`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
