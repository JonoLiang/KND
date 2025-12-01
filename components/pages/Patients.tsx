import React, { useState, useEffect } from 'react';
import { ShieldCheck, Clock, CreditCard, HeartPulse, ArrowRight } from 'lucide-react';

const Patients: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-navy-900 min-h-screen text-white relative overflow-hidden">
      {/* Background Geometry */}
      <div 
        className={`absolute top-0 right-0 w-[70vw] h-[70vh] bg-pastel-blue/5 pointer-events-none z-0 transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter flex flex-col">
                {/* WHITE: Horizontal */}
                <span className={`transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                    Patient
                </span>
                {/* BLUE: Vertical */}
                <span className={`text-pastel-blue transition-all duration-1000 delay-200 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    Information
                </span>
            </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            {/* Left Column: Intro */}
            <div className={`transition-all duration-700 delay-100 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <p className="text-2xl leading-relaxed mb-8">
                    We welcome new patients of all ages. Whether it's your first visit or an emergency, we are here to help.
                </p>
                <div className="border border-pastel-blue p-8 bg-white/5">
                    <h3 className="text-pastel-blue font-bold uppercase tracking-widest text-lg mb-4 flex items-center gap-2">
                        <HeartPulse /> Emergency Care
                    </h3>
                    <p className="mb-4 opacity-80">
                        We have dedicated emergency slots during opening hours. For after-hours emergencies for existing patients, please call our mobile line.
                    </p>
                    <p className="text-3xl font-bold">021 678 288</p>
                    <p className="text-sm opacity-50 mt-1 uppercase tracking-widest">After Hours Only</p>
                </div>
            </div>

            {/* Right Column: First Visit */}
            <div className={`transition-all duration-700 delay-200 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                 <h3 className="text-3xl font-bold uppercase mb-6 border-b border-white/20 pb-4">Your First Visit</h3>
                 <p className="opacity-70 leading-relaxed mb-6">
                    On your first visit, we conduct a comprehensive examination of your teeth, gums, and mouth. 
                    This may include digital X-rays to check for hidden issues. We will discuss your oral health goals 
                    and create a tailored treatment plan for you.
                 </p>
                 <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-pastel-blue"></div>
                        <span className="uppercase tracking-widest text-sm font-bold">Medical History Form</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-pastel-blue"></div>
                        <span className="uppercase tracking-widest text-sm font-bold">Full Mouth Exam</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-pastel-blue"></div>
                        <span className="uppercase tracking-widest text-sm font-bold">Treatment Plan Discussion</span>
                    </li>
                 </ul>
                 
                 <button className="group bg-pastel-blue text-navy-900 hover:bg-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center gap-3">
                     Book New Patient Exam
                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
            </div>
        </div>

        {/* Finance Section */}
        <div className={`border-t border-white/10 pt-20 transition-all duration-700 delay-300 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-4xl font-bold uppercase mb-12">Finance & Payment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white text-navy-900 p-8">
                    <CreditCard className="mb-6 text-pastel-blue" size={32} />
                    <h3 className="text-xl font-bold uppercase mb-4">Payment Options</h3>
                    <p className="text-sm leading-relaxed mb-6 opacity-80">
                        Payment is preferred on the day of treatment. We accept Eftpos, Visa, Mastercard, and Cash.
                        We also offer in-house interest-free payment plans over 6-12 months.
                    </p>
                </div>

                 {/* Card 2 */}
                 <div className="bg-white text-navy-900 p-8">
                    <ShieldCheck className="mb-6 text-pastel-blue" size={32} />
                    <h3 className="text-xl font-bold uppercase mb-4">Insurance & Support</h3>
                    <ul className="space-y-3 text-sm font-medium opacity-80">
                        <li className="border-b border-navy-900/10 pb-2">Southern Cross Easy-Claim Partner</li>
                        <li className="border-b border-navy-900/10 pb-2">ACC Registered</li>
                        <li className="border-b border-navy-900/10 pb-2">WINZ Quotations Available</li>
                    </ul>
                </div>

                 {/* Card 3 */}
                 <div className="bg-white text-navy-900 p-8 border-t-4 border-pastel-blue">
                    <Clock className="mb-6 text-pastel-blue" size={32} />
                    <h3 className="text-xl font-bold uppercase mb-4">Discounts</h3>
                    <div className="space-y-4">
                        <div>
                            <span className="text-4xl font-black">10%</span>
                            <span className="block text-xs font-bold uppercase tracking-widest">Tertiary Students</span>
                        </div>
                        <div>
                            <span className="text-4xl font-black">10%</span>
                            <span className="block text-xs font-bold uppercase tracking-widest">Superannuants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;