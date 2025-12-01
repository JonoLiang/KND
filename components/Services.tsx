import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface ServicesProps {
    initialTab?: string;
}

const serviceCategories = [
    {
        id: 'general',
        title: 'General & Family',
        items: [
            { title: 'Exams & X-Rays', desc: 'We use PearlAI to aid diagnosis.' },
            { title: 'Hygienist Services', desc: 'Professional cleaning and gum health maintenance to prevent periodontal disease.' },
            { title: 'Free Student Care', desc: 'Free basic dental care for secondary school students (Year 9 until 18th birthday).' },
            { title: 'Children’s Dentistry', desc: 'Gentle care from infancy, focusing on prevention and positive experiences.' },
            { title: 'Root Canal Treatment', desc: 'Saving infected teeth through advanced endodontic therapy.' },
            { title: 'Tooth Extraction', desc: 'Safe and comfortable removal of problematic teeth when necessary.' },
            
        ]
    },
    {
        id: 'cosmetic',
        title: 'Cosmetic & Restorative',
        items: [
            { title: 'Veneers & Bonding', desc: 'Reshape and brighten your smile with porcelain veneers or composite bonding.' },
            { title: 'Crown & Bridge', desc: 'Restore damaged teeth or replace missing ones with durable, natural-looking prosthetics.' },
            { title: 'Dental Implants', desc: 'The gold standard for replacing missing teeth, acting as artificial roots.' },
            { title: 'Whitening Options', desc: 'Professional in-office or take-home kits to safely brighten your smile.' },
            { title: 'Dentures', desc: 'Comfortable removable (full or partial) and fixed denture solutions.' }
        ]
    },
    {
        id: 'specialized',
        title: 'Specialized Services',
        items: [
            { title: 'Orthodontics', desc: 'Bonded braces, removable plates, and clear aligners. Dr. Vikki Nelson holds a DipOrtho.' },
            { title: 'Sedation Surgery', desc: 'IV sedation options available for anxious patients to ensure a stress-free experience.' },
            { title: 'Dentofacial Aesthetics', desc: 'Facial injectables for revitalization or relief from bruxism (grinding) pain.' },
            { title: 'Emergency Dentistry', desc: 'Same-day appointments for urgent pain relief and trauma.' }
            { title: 'Mouthguards', desc: 'Custom-fitted protection for sports to prevent dental trauma.' }
        ]
    }
];

const Services: React.FC<ServicesProps> = ({ initialTab }) => {
  const activeCategoryData = initialTab ? serviceCategories.find(c => c.id === initialTab)?.id : 'general';
  const [activeCategory, setActiveCategory] = useState(activeCategoryData || 'general');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
      if(initialTab) {
          setActiveCategory(initialTab);
      }
  }, [initialTab]);

  return (
    <div className="bg-navy-900 min-h-screen text-white pt-20 relative overflow-hidden">
       {/* Background Geometry */}
       <div 
         className={`absolute top-0 right-0 w-[60vw] h-full bg-white/5 pointer-events-none z-0 transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
         style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
       ></div>

       <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="mb-16">
             <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter flex flex-col">
                {/* WHITE: Horizontal */}
                <span className={`block transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                    Our
                </span>
                {/* BLUE: Vertical */}
                <span className={`block text-pastel-blue transition-all duration-1000 delay-200 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    Services.
                </span>
             </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             <div className={`lg:col-span-4 sticky top-32 h-fit transition-all duration-700 delay-200 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="flex flex-col space-y-2 border-l-2 border-white/10">
                    {serviceCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`text-left pl-8 py-4 text-xl font-bold uppercase tracking-widest transition-all duration-300 ${
                                activeCategory === cat.id 
                                ? 'text-pastel-blue border-l-4 border-pastel-blue -ml-[3px] bg-white/5' 
                                : 'text-gray-500 hover:text-white'
                            }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>
                
                <div className="mt-12 bg-navy-800 text-white p-8 border border-white/5">
                    <h3 className="font-bold uppercase tracking-widest mb-4 text-pastel-blue">Finance Options</h3>
                    <p className="text-sm mb-6 leading-relaxed opacity-80">
                        We offer payment plans, Afterpay, and accept Southern Cross Easy-Claim.
                    </p>
                    <a href="/patients" className="underline font-bold text-xs uppercase tracking-widest hover:text-pastel-blue transition-colors block mb-6">View Details</a>
                    
                    <button className="w-full bg-pastel-blue text-navy-900 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                        Book Consultation
                    </button>
                </div>
             </div>

             <div className={`lg:col-span-8 transition-all duration-700 delay-300 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                {serviceCategories.map((cat) => (
                    cat.id === activeCategory && (
                        <div key={cat.id} className="animate-fadeIn flex flex-col h-full">
                            <h2 className="text-4xl font-bold uppercase mb-12 text-white border-b border-white/20 pb-8">
                                {cat.title}
                            </h2>
                            <div className="grid grid-cols-1 gap-8 mb-12">
                                {cat.items.map((item, idx) => (
                                    <div key={idx} className="group border border-white/10 p-8 hover:bg-white hover:text-navy-900 transition-all duration-300">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-bold uppercase">{item.title}</h3>
                                            <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <p className="opacity-70 group-hover:opacity-100 leading-relaxed text-lg">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-auto pt-8 border-t border-white/10 flex justify-end">
                                <button className="group bg-transparent border-2 border-pastel-blue text-pastel-blue hover:bg-pastel-blue hover:text-navy-900 px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center gap-3">
                                    Book {cat.title} Appointment
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    )
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

export default Services;