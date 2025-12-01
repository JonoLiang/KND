import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { NavigateFunction } from '../types';
import Marquee from './Marquee';

interface ServicesSectionProps {
  onNavigate: NavigateFunction;
}

const services = [
  {
    id: 'orthodontics',
    title: 'Invisalign®',
    desc: 'Award winning providers.',
  },
  {
    id: 'cosmetic',
    title: 'Veneers',
    desc: 'Custom designed smiles.',
  },
  {
    id: 'implants',
    title: 'Implants',
    desc: 'Restore function & form.',
  },
  {
    id: 'general',
    title: 'General',
    desc: 'Complete family care.',
  }
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Active when section is entering view
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate a normalized progress (0 to 1) relative to viewport entry
        // This ensures the animation is consistent regardless of page height
        const distanceFromCenter = rect.top - windowHeight / 2;
        setScrollProgress(distanceFromCenter);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-navy-900 overflow-hidden">
        {/* Background Geometry - White Accent */}
        <div 
            className="absolute bottom-0 left-0 w-[40vw] h-full bg-white/5 pointer-events-none z-0"
            style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        ></div>

        {/* Background Geometry - Pastel Blue Accent (Matching Hero) */}
        <div 
            className="absolute top-0 right-0 w-[30vw] h-[80%] bg-pastel-blue/5 pointer-events-none z-0"
            style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
        ></div>

        <section ref={sectionRef} className="py-32 text-white border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 mb-20">
            {/* Header Link - Horizontal Scroll Left to Right */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] whitespace-nowrap">
                {/* WHITE: Horizontal Scroll */}
                <span 
                    className="block will-change-transform transition-transform duration-100 ease-out"
                    style={{ transform: `translateX(${Math.min(scrollProgress * 0.1, 0)}px)` }}
                >
                    Your Smile,
                </span>
                {/* BLUE: Vertical Scroll (Parallax) */}
                {/* Fixed Gap: Reduced max offset and used relative scrollProgress */}
                <span 
                    className="block text-pastel-blue will-change-transform transition-transform duration-100 ease-out"
                    style={{ transform: `translateY(${Math.max(scrollProgress * 0.1, 0)}px)` }}
                >
                    Your Solution.
                </span>
            </h2>
            <button 
                onClick={() => onNavigate('services')}
                className="text-white border-b-2 border-white pb-2 hover:text-pastel-blue hover:border-pastel-blue transition-colors font-bold uppercase tracking-widest text-sm mb-4"
                >
                View All 
            </button>
            </div>
        </div>

        {/* Grid - Flat White Cards - Horizontal Scroll Right to Left */}
        <div 
            className="container mx-auto px-6 transform transition-transform duration-75 ease-out will-change-transform"
            style={{ transform: `translateX(${Math.max(scrollProgress * 0.05, -50)}px)` }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {services.map((service, index) => (
                <div
                key={index}
                className="group border border-white/10 hover:border-white hover:bg-white hover:text-navy-900 p-10 h-[400px] flex flex-col justify-between transition-all duration-300 cursor-pointer"
                onClick={() => onNavigate('services', service.id)}
                >
                <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-50">0{index + 1}</span>
                    <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                
                <div>
                    <h3 className="text-3xl font-bold uppercase mb-4">{service.title}</h3>
                    <p className="font-medium opacity-70 group-hover:opacity-100">{service.desc}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

        {/* Marquee Bridge */}
        <div className="py-8 bg-navy-900 border-t border-white/5 relative z-10">
             <Marquee items={['Clinical Excellence', 'Family Care', 'Advanced Technology', 'Trusted Service']} textColor="text-white" />
        </div>
    </div>
  );
};

export default ServicesSection;