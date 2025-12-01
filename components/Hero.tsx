import React, { useState, useEffect } from 'react';
import { NavigateFunction } from '../types';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate?: NavigateFunction;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[800px] bg-navy-900 flex flex-col justify-center overflow-hidden">
      
      {/* GEOMETRIC BACKGROUND */}
      <div 
        className={`absolute top-0 right-0 w-[80vw] h-[100vh] bg-gradient-to-b from-pastel-blue/10 to-transparent transform origin-top-right transition-transform duration-1000 ease-out ${isLoaded ? 'scale-100' : 'scale-0'}`}
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      ></div>

      <div 
        className={`absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-white/5 transform transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        
        {/* Left: Typography */}
        <div className="flex flex-col justify-center pt-20 lg:pt-0">
            <div className={`w-24 h-1 bg-pastel-blue mb-10 transition-all duration-700 delay-300 ${isLoaded ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
            
            <div className="relative mb-8">
                <h1 className="flex flex-col text-6xl md:text-8xl font-black uppercase text-white leading-[0.8] tracking-tighter">
                    {/* WHITE: Horizontal Animation */}
                    <span className={`block transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                      Keith
                    </span>
                    <span className={`block transition-all duration-1000 delay-100 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                      Nelson
                    </span>
                    {/* BLUE: Vertical Animation */}
                    <span className={`block text-pastel-blue transition-all duration-1000 delay-300 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                      & Associates.
                    </span>
                </h1>
            </div>

            <div className={`mb-10 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-white/90 text-2xl font-light max-w-lg leading-relaxed">
                  The Dental Family for your family.
              </p>
              <p className="text-pastel-blue text-xs font-bold uppercase tracking-widest mt-3">
                  Serving Auckland Since 1985
              </p>
            </div>

            <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <button 
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="group bg-pastel-blue text-navy-900 px-8 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 flex items-center gap-3"
                >
                    Book Appointment 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate && onNavigate('services')}
                  className="px-8 py-5 font-bold uppercase tracking-widest text-sm text-white border border-white/20 hover:bg-white/10 transition-colors"
                >
                    Our Services
                </button>
            </div>
        </div>

        {/* Right: Image Composition */}
        <div className={`hidden lg:block relative h-full w-full transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
             <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="absolute w-[90%] h-[80%] bg-gradient-to-tr from-navy-800 to-transparent z-0 opacity-50"
                    style={{ clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)' }}
                  ></div>
                  
                  <img 
                    src="/team.png" 
                    alt="Dental Team" 
                    className="relative z-10 w-[90%] max-w-xl object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" 
                  />
             </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;