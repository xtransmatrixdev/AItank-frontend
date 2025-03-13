import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#12131C] text-white">
      
      <Header />

      
      <main className="flex-grow">{children}</main>

      
      <Footer />
    </div>
  );
};

export default Layout;
