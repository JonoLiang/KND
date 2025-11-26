import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif mb-4">Keith Nelson & Associates</h3>
            <p className="text-gray-400 max-w-sm font-sans font-light">
              Providing exceptional dental care for the whole family. We believe in building lasting relationships with our patients based on trust and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-sans text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Book Online</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-sans text-blue-400">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-300">123 Dental Ave, Suite 100</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-300">hello@nelsondental.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
                <a href="#" className="hover:text-blue-400"><Instagram size={24}/></a>
                <a href="#" className="hover:text-blue-400"><Facebook size={24}/></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Keith Nelson & Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;