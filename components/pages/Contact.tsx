import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div className="pt-32 pb-0 bg-navy-900 min-h-screen flex flex-col relative overflow-hidden text-white">
      {/* Background Geometry */}
      <div 
         className={`absolute top-0 right-0 w-[60vw] h-[60vh] bg-white/5 pointer-events-none z-0 transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
         style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
       ></div>
      
       <div 
         className={`absolute bottom-[20%] left-0 w-[40vw] h-[40vh] bg-pastel-blue/5 pointer-events-none z-0 transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
         style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
       ></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 relative z-10">
        <div className={`transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
           <h1 className="text-6xl md:text-8xl font-black uppercase mb-12 tracking-tighter flex flex-col">
                {/* WHITE: Horizontal */}
                <span className={`transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                    Contact
                </span>
                {/* BLUE: Vertical */}
                <span className={`text-pastel-blue transition-all duration-1000 delay-200 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    Us
                </span>
           </h1>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className={`transition-all duration-700 delay-100 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                 <div className="flex items-center gap-2 mb-4 opacity-50">
                    <MapPin size={18} />
                    <h4 className="font-bold uppercase tracking-widest text-sm">Location</h4>
                 </div>
                 <p className="text-xl font-medium leading-relaxed text-gray-300">
                    Keith Nelson & Associates<br/>
                    Freemans Bay / Ponsonby<br/>
                    Auckland, NZ
                 </p>
              </div>
              <div className={`transition-all duration-700 delay-200 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                 <div className="flex items-center gap-2 mb-4 opacity-50">
                    <Phone size={18} />
                    <h4 className="font-bold uppercase tracking-widest text-sm">Get in Touch</h4>
                 </div>
                 <p className="text-xl font-bold mb-2">09 378 0877</p>
                 <p className="text-lg underline opacity-80 hover:text-pastel-blue transition-colors cursor-pointer">reception@keithnelson.co.nz</p>
              </div>
           </div>

           <div className={`bg-navy-800 p-8 border-l-4 border-pastel-blue transition-all duration-700 delay-300 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-center gap-2 mb-6 text-pastel-blue">
                    <Clock size={20} />
                    <h4 className="font-bold uppercase tracking-widest text-sm">Opening Hours</h4>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <span className="block text-xs font-bold uppercase text-gray-400 mb-1">Mon - Fri</span>
                        <span className="text-lg font-bold">7:30am - 6:00pm</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase text-gray-400 mb-1">Saturday</span>
                        <span className="text-lg font-bold">8:30am - 1:30pm</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase text-gray-400 mb-1">Sunday</span>
                        <span className="text-lg font-bold text-gray-500">Closed</span>
                    </div>
                </div>
           </div>
        </div>

        {/* Contact Form */}
        <div className={`bg-navy-800 p-12 shadow-2xl h-fit border border-white/5 transition-all duration-1000 delay-300 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
           <form className="space-y-8">
              <h3 className="text-2xl font-bold uppercase text-white mb-6 flex items-center gap-3">
                  <Mail className="text-pastel-blue" />
                  Send a Message
              </h3>
              
              <div className="group">
                  <input type="text" placeholder="NAME" className="w-full bg-transparent border-b-2 border-white/20 py-4 font-bold uppercase text-white placeholder-white/30 focus:outline-none focus:border-pastel-blue transition-colors" />
              </div>
              
              <div className="group">
                  <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b-2 border-white/20 py-4 font-bold uppercase text-white placeholder-white/30 focus:outline-none focus:border-pastel-blue transition-colors" />
              </div>
              
              <div className="group">
                  <input type="tel" placeholder="PHONE" className="w-full bg-transparent border-b-2 border-white/20 py-4 font-bold uppercase text-white placeholder-white/30 focus:outline-none focus:border-pastel-blue transition-colors" />
              </div>
              
              <div className="group">
                  <textarea placeholder="How can we help?" rows={4} className="w-full bg-transparent border-b-2 border-white/20 py-4 font-bold uppercase text-white placeholder-white/30 focus:outline-none focus:border-pastel-blue transition-colors resize-none"></textarea>
              </div>

              <button className="bg-white text-navy-900 px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-pastel-blue transition-colors w-full mt-4">
                  Request Appointment
              </button>
           </form>
        </div>
      </div>

      <div className={`w-full h-[600px] relative group overflow-hidden border-t border-white/10 transition-all duration-1000 delay-500 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.6596987157835!2d174.746!3d-36.852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUxJzE1LjAiUyAxNzTCsDQ0JzU0LjAiRQ!5e0!3m2!1sen!2snz!4v1620000000000!5m2!1sen!2snz" 
            width="100%" 
            height="100%" 
            style={{border:0, filter: 'grayscale(100%) invert(0%) contrast(1.1)'}} 
            loading="lazy"
            allowFullScreen={true}
            className="opacity-60 hover:opacity-100 transition-opacity duration-500"
          ></iframe>
          
          <div className="absolute top-8 left-8 z-10 pointer-events-none">
                <div className="bg-navy-900 text-white p-4 shadow-2xl border border-white/10">
                    <p className="font-bold text-sm uppercase tracking-widest text-pastel-blue">Keith Nelson & Associates</p>
                    <p className="text-xs text-gray-400">Freemans Bay, Auckland</p>
                </div>
          </div>
      </div>

      <div className="bg-pastel-blue text-navy-900 py-16 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                  <h3 className="text-4xl font-black uppercase tracking-tight mb-2">Emergency?</h3>
                  <p className="font-medium opacity-80 max-w-lg text-lg">
                      Existing patients experiencing severe pain or trauma outside of business hours can contact our dedicated emergency line.
                  </p>
              </div>
              <div className="bg-white px-10 py-6 shadow-xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">After Hours Mobile</p>
                  <p className="text-4xl md:text-5xl font-black text-navy-900">021 678 288</p>
              </div>
          </div>
      </div>

    </div>
  );
};

export default Contact;