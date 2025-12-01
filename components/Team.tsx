import React, { useRef, useState, useEffect } from 'react';
import { TeamMember } from '../types';
import { ArrowRight, X } from 'lucide-react';

const teamMembers: TeamMember[] = [
  { 
    name: 'Dr. Vikki Nelson', 
    role: 'Principal Dentist', 
    creds: 'BA, BDS (Otago), NZ DipOrtho (POS)',
    bio: 'The middle daughter of the three Nelson girls. Originally studying Economics at Otago before switching to Dentistry (1992). Vikki has a special interest in Orthodontics and leads the practice with a focus on family care.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    name: 'Dr. Keith Nelson', 
    role: 'Founder & Surgeon', 
    creds: 'BDS',
    bio: 'Founder of the practice in 1985. Keith has dedicated his career to providing exceptional dental care to the Auckland community, establishing the family-oriented values we hold today.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    name: 'Sarah Jenkins', 
    role: 'Senior Hygienist', 
    creds: 'BHSc (Oral Health)',
    bio: 'Sarah is passionate about preventative care and patient education, ensuring every patient understands how to maintain a healthy smile for life.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    name: 'Michael Chang', 
    role: 'Practice Manager', 
    bio: 'With a background in healthcare management, Michael ensures the smooth operation of our clinic and that every patient experience is seamless.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800' 
  },
];

const Team: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasMoved = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    hasMoved.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    
    // Check if moved significantly to consider it a drag
    if (Math.abs(x - startX.current) > 5) {
        hasMoved.current = true;
    }

    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleCardClick = (member: TeamMember) => {
    if (!hasMoved.current) {
        setSelectedMember(member);
    }
  };

  return (
    <section ref={sectionRef} className="bg-navy-50 py-32 text-navy-900 border-t border-navy-900/5 overflow-hidden relative">
       {/* Background Accent Triangle - Top Right (Pastel Blue) */}
       <div 
         className="absolute top-0 right-0 w-[60vw] h-full bg-pastel-blue/5 z-0 pointer-events-none"
         style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
       ></div>
       
       {/* Background Accent Triangle - Bottom Left (Navy) */}
       <div 
         className="absolute bottom-0 left-0 w-[40vw] h-[80%] bg-navy-900/5 z-0 pointer-events-none"
         style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
       ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
           <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              {/* WHITE (Navy here): Horizontal reveal */}
              <span className={`block transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                Meet The
              </span>
              {/* BLUE: Vertical reveal */}
              <span className={`block text-pastel-blue transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                Experts.
              </span>
           </h2>
        </div>

        {/* Carousel with Grid Card Styling */}
        <div 
          ref={scrollRef}
          className={`flex overflow-x-auto space-x-8 pb-16 cursor-grab active:cursor-grabbing scrollbar-hide transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
          style={{ perspective: '1000px' }} 
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
           {teamMembers.map((member, index) => (
             <div 
                key={index} 
                className="flex-shrink-0 w-[300px] group cursor-pointer relative bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                onClick={() => handleCardClick(member)}
             >
                {/* Image Container with Tilt Physics */}
                <div className="relative aspect-[3/4] w-full mb-6 bg-gray-100 transition-all duration-500 ease-out transform group-hover:rotate-1 group-hover:-translate-y-1 origin-bottom-left overflow-hidden">
                   <img 
                     src={member.image} 
                     alt={member.name} 
                     className="w-full h-full object-cover transition-all duration-500"
                   />
                </div>

                {/* Label below - Updated to match TeamPage.tsx */}
                <div className="text-center mt-2">
                   <h3 className="text-3xl font-black uppercase tracking-tighter text-navy-900 group-hover:text-pastel-blue transition-colors leading-none">{member.name}</h3>
                   <p className="text-sm font-bold uppercase tracking-widest text-navy-900 mt-3">{member.role}</p>
                </div>
             </div>
           ))}
        </div>

        {/* Button */}
        <div className={`mt-8 flex justify-start transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <button className="group bg-navy-900 text-white hover:bg-pastel-blue hover:text-navy-900 px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center gap-3 rounded-sm">
                View Full Team
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>

      {/* Refined Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-navy-900/95 backdrop-blur-md transition-opacity duration-300"
             onClick={() => setSelectedMember(null)}
           ></div>

           {/* Content Container */}
           <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto md:overflow-visible relative z-10 flex flex-col md:flex-row shadow-2xl animate-fadeIn">
              
              {/* Close Button - Sticky to corner, adaptable color */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-50 p-2 transition-transform duration-300 hover:rotate-90 group"
                aria-label="Close modal"
              >
                <X size={32} strokeWidth={1.5} className="text-white md:text-navy-900" />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-5/12 h-[350px] md:h-auto min-h-[350px] relative shrink-0">
                 {/* Gradient for Mobile Close Button Visibility */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-black/60 to-transparent z-20 md:hidden pointer-events-none"></div>
                 
                 {/* Brand Overlay */}
                 <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply z-10"></div>
                 
                 <img 
                   src={selectedMember.image} 
                   alt={selectedMember.name} 
                   className="w-full h-full object-cover"
                 />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-7/12 p-8 md:p-14 lg:p-16 flex flex-col justify-center bg-white relative">
                 {/* Decorative Accent */}
                 <div className="w-12 h-1.5 bg-pastel-blue mb-8"></div>

                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-navy-900 mb-2 leading-[0.9] tracking-tighter">
                    {selectedMember.name}
                 </h2>
                 <p className="text-sm font-bold uppercase tracking-widest text-pastel-blue mb-8">
                    {selectedMember.role}
                 </p>
                 
                 {selectedMember.creds && (
                     <div className="mb-8">
                        <span className="inline-block border border-navy-900/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-50">
                           {selectedMember.creds}
                        </span>
                    </div>
                 )}

                 <div className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                    <p>
                      {selectedMember.bio || "Dedicated member of the Keith Nelson & Associates team, committed to providing exceptional care."}
                    </p>
                 </div>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};

export default Team;