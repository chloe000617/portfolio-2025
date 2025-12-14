import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PAGE_DATA } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Background blur on scroll
      setScrolled(window.scrollY > 20);

      // 2. Scroll Spy Logic
      const sections = PAGE_DATA.nav.map(item => item.id);
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is within the top third of the viewport, consider it active
          if (rect.top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tighter">
            CHLOE<span className="text-blue-400">.LI</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {PAGE_DATA.nav.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : item.class || 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
                {/* Active Indicator Dot or Underline */}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full animate-fadeIn" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-white/10 shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            {PAGE_DATA.nav.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className={`text-lg font-medium p-2 rounded-lg transition-colors ${
                    activeSection === item.id 
                    ? 'bg-white/10 text-white' 
                    : 'text-gray-300 hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;