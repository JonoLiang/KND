import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
           <h3 className="text-2xl font-bold mb-6">KN&A</h3>
           <p className="opacity-60 leading-relaxed max-w-xs">
             Providing exceptional dental care for the whole family since 1985.
           </p>
        </div>
        
        <div>
           <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-pastel-blue">Visit</h4>
           <p className="opacity-80">High Street, Lower Hutt<br/>Wellington, NZ</p>
        </div>

        <div>
           <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-pastel-blue">Contact</h4>
           <p className="opacity-80">09 378 0877<br/>reception@keithnelson.co.nz</p>
        </div>

        <div>
           <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-pastel-blue">Hours</h4>
           <p className="opacity-80">Mon-Fri: 7:30am - 6:00pm<br/>Sat: 8:30am - 1:30pm</p>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex justify-between items-center opacity-40 text-sm uppercase tracking-wider">
         <span>© {new Date().getFullYear()} Keith Nelson</span>
         <span>Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;