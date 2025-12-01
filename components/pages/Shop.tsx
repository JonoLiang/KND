import React, { useState, useEffect } from 'react';

const Shop: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-navy-50 min-h-screen relative overflow-hidden">
       {/* Background Geometry - Animated Entry */}
       <div 
         className={`absolute top-0 left-0 w-[40vw] h-[60vh] bg-pastel-blue/10 pointer-events-none z-0 transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
         style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
       ></div>

       <div className="container mx-auto px-6 relative z-10">
          <div className={`transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-6xl font-black uppercase text-navy-900 mb-12">Shop</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[1,2,3,4].map(i => (
                <div key={i} className={`bg-white p-6 border border-transparent hover:border-navy-900 transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                   <div className="h-64 bg-gray-100 mb-6"></div>
                   <h3 className="font-bold uppercase text-navy-900 text-lg">Product {i}</h3>
                   <p className="text-gray-500 mb-4">$29.00</p>
                   <button className="w-full border-2 border-navy-900 py-3 font-bold uppercase tracking-widest text-xs hover:bg-navy-900 hover:text-white transition-colors">Add to Cart</button>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default Shop;