import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
       
       <div className="bg-navy-900 text-white relative min-h-[90vh] flex flex-col lg:flex-row">
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-20 py-32 lg:py-0 relative z-10">
               <div 
                  className={`absolute top-0 right-0 w-[50vw] h-full bg-white/5 pointer-events-none z-0 transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                  style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                ></div>

              <div className="relative z-10 mb-12">
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter flex flex-col">
                    {/* WHITE: Horizontal */}
                    <span className={`block transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        Keith Nelson
                    </span>
                    {/* BLUE: Vertical */}
                    <span className={`block text-pastel-blue transition-all duration-1000 delay-200 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        Dental.
                    </span>
                </h1>
              </div>
              
              <div className={`relative z-10 transition-all duration-700 delay-300 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <p className="text-2xl text-white leading-relaxed font-medium mb-8 border-l-4 border-pastel-blue pl-6">
                   The Dental Family for your Family.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-lg">
                   Keith Nelson & Associates is a long-standing practice centrally located in Freemans Bay & Ponsonby. 
                   Our mission is to make your visits comfortable, pain-free, and enjoyable.
                </p>
                <div className="mt-8">
                     <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 max-w-lg">
                       <div>
                          <h4 className="text-4xl font-bold text-white">1985</h4>
                          <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Established</span>
                       </div>
                       <div>
                          <h4 className="text-4xl font-bold text-white">4+</h4>
                          <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Expert Clinicians</span>
                       </div>
                    </div>
                </div>
             </div>
          </div>

          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto">
               <div className={`absolute inset-0 transition-all duration-1000 delay-500 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                   <img 
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
                        className="w-full h-full object-cover grayscale-0" 
                        alt="Clinic Interior"
                    />
                    <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply"></div>
               </div>
          </div>
       </div>

       <div className="bg-navy-50 py-20 relative">
          <div 
             className={`absolute bottom-0 left-0 w-[30vw] h-[30vh] bg-pastel-blue/10 pointer-events-none z-0 transition-all duration-1000 delay-500 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
             style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
           ></div>

          <div className="container mx-auto px-6 relative z-10">
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className={`order-2 lg:order-1 transition-all duration-700 delay-500 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                      <div className="relative">
                          <div className="absolute inset-0 bg-pastel-blue/20 translate-x-4 translate-y-4 rounded-sm"></div>
                          <img 
                            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
                            alt="Our History" 
                            className="w-full rounded-sm shadow-xl relative z-10"
                          />
                      </div>
                 </div>

                 <div className={`order-1 lg:order-2 transition-all duration-700 delay-300 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                     <h2 className="text-4xl font-bold uppercase text-navy-900 mb-8">Our History</h2>
                     <p className="text-navy-900/80 text-lg leading-relaxed mb-12 font-medium">
                       We are your family of dental practitioners known as "The Dental Family for your Family". 
                       At Keith Nelson & Associates our aim is to make your visit with us as comfortable, 
                       pain free and enjoyable as possible, while at the same time providing the highest standard of clinical care.
                     </p>

                     <div className="bg-white p-8 border border-gray-100 shadow-sm mb-10">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-navy-900/60 mb-6">Proud Members & Supporters</h3>
                        <div className="flex flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="text-lg font-bold text-navy-900">NZ Dental Association</span>
                            <span className="text-lg font-bold text-navy-900">NZDOS</span>
                            <span className="text-lg font-bold text-navy-900">AADFA</span>
                            <span className="text-lg font-bold text-navy-900">NZACD</span>
                        </div>
                     </div>

                     <button className="group bg-navy-900 text-white hover:bg-pastel-blue hover:text-navy-900 px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center gap-3">
                         Meet The Team
                         <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                 </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default About;