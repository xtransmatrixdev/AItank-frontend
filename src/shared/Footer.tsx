import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12131C] text-white py-[5vh] px-[2vw] sm:px-[4vw] md:px-[6vw]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-[3vh]">
        
        
        <div className="flex items-center gap-[1vw]">
          <img src="./images/aitank_logo.png" alt="Logo" className="h-[6vh] md:h-[8vh]" />
          <span className="text-[1.8vw] md:text-[2vw] font-semibold"></span>
        </div>

        
        <nav className="flex gap-[3vw] text-[1.5vw]">
          <a href="#" className="hover:text-orange-500">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500">Terms of Service</a>
          <a href="#" className="hover:text-orange-500">Contact Us</a>
        </nav>

        
        <div className="flex gap-[2vw]">
          <a href="#" className="p-[1.5vh] rounded-full bg-[#1A1B26] hover:bg-orange-500 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="p-[1.5vh] rounded-full bg-[#1A1B26] hover:bg-orange-500 transition">
            <FaTwitter />
          </a>
          <a href="#" className="p-[1.5vh] rounded-full bg-[#1A1B26] hover:bg-orange-500 transition">
            <FaLinkedinIn />
          </a>
          <a href="#" className="p-[1.5vh] rounded-full bg-[#1A1B26] hover:bg-orange-500 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 my-[3vh]" />

      
      <p className="text-center text-[1.2vw] text-gray-500">
        © {new Date().getFullYear()} AI TANK.AI. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
