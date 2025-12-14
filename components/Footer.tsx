import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10 bg-slate-900 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-bold text-lg mb-1">CHLOE LI</div>
          <div className="text-sm text-gray-500">Product & Solution Strategist</div>
        </div>
        
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Chloe Li. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;