import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-navy-50 min-h-screen relative overflow-hidden">
      {/* Background Geometry - Animated Entry */}
      <div 
         className={`absolute top-0 right-0 w-[40vw] h-[60vh] bg-pastel-blue/10 pointer-events-none z-0 transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
         style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
       ></div>

      <div className="container mx-auto px-6 relative z-10">
         <div className={`transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-6xl font-black uppercase text-navy-900 mb-12">Gallery</h1>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1,2,3,4,5,6].map(i => (
               <div key={i} className={`aspect-square bg-white border-4 border-white overflow-hidden group transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <img src={`https://source.unsplash.com/random/800x800?dental,smile,${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
               </div>
            ))}
         </div>
         
         <div className={`flex justify-center transition-all duration-700 delay-500 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
             <button className="group bg-navy-900 text-white hover:bg-pastel-blue hover:text-navy-900 px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center gap-3">
                 Transform Your Smile
                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </button>
         </div>
      </div>
    </div>
  );
};

export default Gallery;