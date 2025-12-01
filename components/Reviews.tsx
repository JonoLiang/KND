import React, { useRef, useState, useEffect } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import Marquee from './Marquee';

const reviews = [
  {
    author: "Sarah Mitchell",
    text: "Exceptional care. Dr. Vikki made my children feel so safe.",
  },
  {
    author: "James Peterson",
    text: "Best dental experience. Dr. Keith took time to explain everything.",
  },
  {
    author: "Emma Reynolds",
    text: "Fantastic clinic. Everyone treats you like family here.",
  }
];

const Reviews: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-navy-50 pt-32 pb-0 border-t border-navy-900/5 flex flex-col justify-between relative overflow-hidden">
      {/* Background Geometry - Top Left Triangle (Pastel Blue) */}
      <div 
          className="absolute top-0 left-0 w-[40vw] h-full bg-pastel-blue/5 pointer-events-none z-0"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      ></div>

      <div className="container mx-auto px-6 mb-24 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-navy-900">
                {/* WHITE (Navy): Horizontal */}
                <span className={`block transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                    Patient
                </span>
                {/* BLUE: Vertical */}
                <span className={`block text-pastel-blue transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    Stories.
                </span>
            </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-10 shadow-sm border border-transparent hover:border-pastel-blue hover:shadow-xl transition-all duration-300 group">
               <div className="flex space-x-1 mb-6 text-pastel-blue">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
               </div>
               <p className="text-2xl font-medium leading-tight mb-8 text-navy-900 group-hover:text-black transition-colors">"{review.text}"</p>
               <div className="flex items-center gap-4">
                 <div className="w-8 h-[2px] bg-navy-900/20 group-hover:bg-pastel-blue transition-colors"></div>
                 <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                   {review.author}
                 </div>
               </div>
            </div>
          ))}
        </div>
        
        <div className={`flex flex-col items-center gap-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex items-center justify-center gap-2 text-navy-900">
                <Star size={20} fill="currentColor" className="text-pastel-blue" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Google Rating: 5.0 Stars</h3>
            </div>
            
            <button className="group bg-navy-900 text-white hover:bg-pastel-blue hover:text-navy-900 px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center gap-3">
                 Book Your Appointment
                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>

      {/* Marquee Bridge to Footer */}
      <div className="py-6 bg-white border-y border-navy-900 relative z-10">
         <Marquee items={['Book Your Visit', '09 378 0877', 'New Patients Welcome']} reverse={true} textColor="text-navy-900" />
      </div>
    </section>
  );
};

export default Reviews;