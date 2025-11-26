import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Shop', href: '#shop' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="flex items-center justify-center mr-4">
             <img src="/logo.png" alt="Keith Nelson & Associates" className="h-12 w-auto object-contain" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white/90 hover:text-white text-sm font-sans tracking-wide uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex space-x-4 border-r border-white/30 pr-6">
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <Facebook size={18} />
            </a>
          </div>
          <button className="bg-navy-800 hover:bg-navy-900 text-white text-sm px-6 py-2 rounded-full transition-all border border-white/10 shadow-lg">
            Bookings
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-navy-900 border-t border-white/10 py-6 px-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-white text-lg font-sans"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
            <a href="#" className="text-white"><Instagram size={24} /></a>
            <a href="#" className="text-white"><Facebook size={24} /></a>
          </div>
          <button className="bg-white text-navy-900 font-bold py-3 rounded text-center">
            Bookings
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;