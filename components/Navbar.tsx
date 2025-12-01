import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Menu, X } from 'lucide-react';
import { NavLink, NavigateFunction } from '../types';

const navLinks: NavLink[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Team', href: 'team' },
  { label: 'Services', href: 'services' },
  { label: 'Patients', href: 'patients' },
  { label: 'Contact', href: 'contact' },
  { label: 'Gallery', href: 'gallery' },
  { label: 'Shop', href: 'shop' },
];

interface NavbarProps {
  onNavigate: NavigateFunction;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Determine navbar background based on current page/scroll
  // Home: Starts Transparent (on Navy), becomes Solid Navy
  // Others: Solid Navy
  const navClasses = isScrolled || currentPage !== 'home'
    ? 'bg-navy-900 border-b border-white/10 py-4'
    : 'bg-transparent py-6 border-b border-white/10';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navClasses}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick('home')}>
             <h1 className="text-2xl font-bold text-white tracking-tighter border-2 border-white p-2">
                KN<span className="text-pastel-blue">&</span>A
             </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:text-pastel-blue ${
                  currentPage === link.href 
                    ? 'text-pastel-blue underline underline-offset-8 decoration-2' 
                    : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6 border-r border-white/20 pr-8">
              <a href="#" className="text-white hover:text-pastel-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-pastel-blue transition-colors">
                <Facebook size={20} />
              </a>
            </div>
            <button className="bg-pastel-blue text-navy-900 hover:bg-white hover:text-navy-900 text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-sm transition-all duration-300 shadow-none border border-transparent">
              Bookings
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-sm hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-navy-900 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(link.href)}
              className="text-4xl font-bold text-white hover:text-pastel-blue transition-colors uppercase tracking-tight"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-12 w-full max-w-xs">
            <button className="w-full bg-pastel-blue text-navy-900 px-6 py-4 rounded-sm text-sm font-bold uppercase tracking-widest">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;