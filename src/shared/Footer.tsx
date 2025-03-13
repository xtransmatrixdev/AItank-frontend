import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12131C] text-white py-10 px-4 sm:px-8 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        
        <div className="flex items-center gap-2">
          <img src="./images/aitank_logo.png" alt="Logo" className="h-12 md:h-16" />
          <span className="text-lg md:text-xl font-semibold"></span>
        </div>

        
        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:text-orange-500">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500">Terms of Service</a>
          <a href="#" className="hover:text-orange-500">Contact Us</a>
        </nav>

        
        <div className="flex gap-4">
          <a href="#" className="p-2 rounded-full bg-[#1A1B26] hover:bg-orange-500 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="p-2 rounded-full bg-[#1A1B26] hover:bg-orange-500 transition">
            <FaTwitter />
          </a>
          <a href="#" className="p-2 rounded-full bg-[#1A1B26] hover:bg-orange-500 transition">
            <FaLinkedinIn />
          </a>
          <a href="#" className="p-2 rounded-full bg-[#1A1B26] hover:bg-orange-500 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 my-6" />

      
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AI TANK.AI. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
