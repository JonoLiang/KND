import React, { useState } from 'react';
import GeometricOverlay from './GeometricOverlay';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-navy-900 flex items-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/DSCF0464.jpg"
          alt="Clinic Background"
          className="w-full h-full object-cover opacity-90"
        />
        {/* Dark gradient from left to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/70 via-navy-900/40 to-transparent"></div>
      </div>

      {/* Geometric Decoration Layer */}
      <GeometricOverlay />

      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-2/3 xl:w-1/2 pt-20 lg:pt-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-2 drop-shadow-lg">
            Keith Nelson <br />
            <span className="text-4xl md:text-5xl lg:text-6xl opacity-90">& Associates</span>
          </h1>
          
          <div className="w-24 h-1 bg-blue-400/50 my-6 rounded-full"></div>
          
          <h2 className="text-2xl md:text-3xl font-serif text-white/90 mb-10 tracking-wide">
            The Dental Family for <span className="font-semibold italic">Your</span> Family
          </h2>

          <button className="bg-navy-800 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-navy-900 hover:scale-105 transition-all duration-300 shadow-xl border border-white/10 ring-4 ring-white/5">
            Bookings
          </button>
        </div>

        {/* Team Image Section */}
        <div className="absolute bottom-0 right-0 hidden lg:block w-[55%] max-w-4xl pointer-events-none">
             <div className="relative">
                <img 
                  src="/5962.png" 
                  alt="Dental Team"
                  onLoad={() => setIsLoaded(true)}
                  className={`w-full h-auto object-contain drop-shadow-2xl transition-all duration-1000 ease-out transform ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                />
             </div>
        </div>
      </div>
      
      {/* Mobile Team Image */}
      <div className="lg:hidden absolute bottom-0 right-0 w-3/4 opacity-40 z-0">
          <img 
            src="/5962.png" 
            alt="Dental Team Mobile"
            className="w-full h-auto object-cover mask-image-bottom"
          />
      </div>
    </section>
  );
};

export default Hero;