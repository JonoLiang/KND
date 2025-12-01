import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  creds?: string;
  bio?: string;
  image: string;
}

const dentists: TeamMember[] = [
  {
    id: 'd1',
    name: 'Dr. Vikki Nelson',
    role: 'Principal Dentist',
    creds: 'BA, BDS (Otago), NZ DipOrtho (POS)',
    bio: 'The middle daughter of the three Nelson girls. Originally studying Economics at Otago before switching to Dentistry (1992). Vikki has a special interest in Orthodontics and leads the practice with a focus on family care.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'd2',
    name: 'Dr. Stela Dimitrova',
    role: 'Dentist',
    creds: 'Dr of Stomatology (Sofia)',
    bio: 'Part of our team since 2004, originally at our Glen Eden branch before joining Ponsonby in 2011. Stela brings extensive experience and a gentle, thorough approach to general dentistry.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'd3',
    name: 'Dr. Michelle Jin',
    role: 'Dentist',
    creds: 'BDS (Otago)',
    bio: 'Grew up in Pakuranga. Michelle is renowned for her gentle nature, always striving to make patient visits relaxed, comfortable, and pain-free.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'd4',
    name: 'Dr. Jonathan Liang',
    role: 'Dentist',
    creds: 'BDS (Otago) Distinction',
    bio: 'Brought up in East Auckland and attending Macleans College, Jonathan graduated with distinction. He is passionate about modern restorative techniques and patient education.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
  }
];

const hygienists: TeamMember[] = [
  { 
      id: 'h1', 
      name: 'Anna Caldwell', 
      role: 'Oral Health Therapist',
      bio: 'Dedicated to preventing dental issues and maintaining optimal gum health for all our patients.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800' 
  },
  { 
      id: 'h2', 
      name: 'Sarah Gluestein', 
      role: 'Oral Health Therapist',
      bio: 'Passionate about patient education and ensuring a comfortable hygiene experience.',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=800' 
  },
  { 
      id: 'h3', 
      name: 'Nisha Patel', 
      role: 'Oral Health Therapist',
      bio: 'Specializes in periodontal care and preventative treatments for long-term oral health.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800' 
  },
  { 
      id: 'h4', 
      name: 'Larisa Beck', 
      role: 'Oral Health Therapist',
      bio: 'Provides gentle, thorough cleaning and personalized advice for home care.',
      image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=800' 
  },
  { 
      id: 'h5', 
      name: 'Veronia Metry', 
      role: 'Oral Health Therapist',
      bio: 'Focused on creating positive dental experiences and helping patients achieve bright, healthy smiles.',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800' 
  },
];

const auxiliary: TeamMember[] = [
  { 
      id: 'a1', 
      name: 'Alexandra Donovan', 
      role: 'Patient Coordinator',
      bio: 'Ensuring every patient journey is smooth, from the first phone call to the final checkout.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800' 
  },
  { 
      id: 'a2', 
      name: 'Eden Morgan', 
      role: 'Senior Dental Assistant',
      bio: 'Supporting our clinicians with expertise and ensuring patient comfort during procedures.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800' 
  },
  { 
      id: 'a3', 
      name: 'Giovanna Caroba', 
      role: 'Reception/Dental Assistant',
      bio: 'A friendly face at our front desk and skilled assistance in the surgery.',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800' 
  },
  { 
      id: 'a4', 
      name: 'Anne Mohan', 
      role: 'Dental Assistant',
      bio: 'Dedicated to maintaining the highest standards of sterilization and clinical support.',
      image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=800' 
  },
  { 
      id: 'a5', 
      name: 'Deborah Mariuci', 
      role: 'Dental Assistant',
      bio: 'Passionate about dentistry and making patients feel at ease in the chair.',
      image: 'https://images.unsplash.com/photo-1589571894960-20bbe2815d17?auto=format&fit=crop&q=80&w=800' 
  },
];

// Simplified Reusable Animation Component
// Instead of complex physics, this uses a clean Observer pattern
const RevealOnScroll: React.FC<{ children: React.ReactNode, delay?: number, fullWidth?: boolean }> = ({ children, delay = 0, fullWidth = false }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect(); // Only animate once
            }
        }, { threshold: 0.1, rootMargin: '50px' });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={ref} 
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} ${fullWidth ? 'w-full' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const TeamMemberCard: React.FC<{ member: TeamMember, index: number, onClick: () => void }> = ({ member, index, onClick }) => {
    return (
        <div 
            className="group cursor-pointer relative bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            onClick={onClick}
        >
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full mb-6 bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors z-10 duration-300"></div>
                <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Label below */}
            <div className="text-center mt-2">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-navy-900 group-hover:text-pastel-blue transition-colors leading-none">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-navy-900/60 mt-3">{member.role}</p>
            </div>
        </div>
    );
};

const TeamPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden">
      
      {/* 
        HERO SECTION - Dark Navy for contrast
      */}
      <div className="bg-navy-900 text-white pt-40 pb-24 relative overflow-hidden z-10">
           {/* Top Right Triangle */}
          <div 
            className={`absolute top-0 right-0 w-[60vw] h-[60vh] bg-white/5 z-0 pointer-events-none transition-all duration-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
            style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
          ></div>
          
          <div className="container mx-auto px-6 relative z-10">
                <div className="relative">
                    <h1 className="text-7xl md:text-9xl font-black relative z-10 tracking-tighter uppercase">
                        {/* WHITE: Horizontal */}
                        <span className={`inline-block transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                            Our 
                        </span>
                        {/* BLUE: Vertical */}
                        <span className={`inline-block text-pastel-blue transition-all duration-1000 delay-200 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} ml-4`}>
                            Team.
                        </span>
                    </h1>
                    <p className={`mt-8 text-xl text-gray-300 max-w-lg font-medium leading-relaxed border-l-4 border-pastel-blue pl-6 transition-all duration-700 delay-200 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        It's always been pretty simple for us. Great people make great work. Meet the Keith Nelson team.
                    </p>
                </div>
          </div>
      </div>

      {/* 
         STATIC BACKGROUND ELEMENTS (Removed Parallax for Reliability)
      */}
      <div 
          className="absolute top-[300px] left-0 w-[30vw] h-[60vh] bg-pastel-blue/5 z-0 pointer-events-none"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      ></div>

      <div 
          className="absolute top-[1400px] right-0 w-[50vw] h-[100vh] bg-navy-900/5 z-0 pointer-events-none"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      ></div>
      
      {/* 
         CONTENT SECTION
      */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        
        {/* Dentists Group */}
        <div className="mb-8 border-b border-gray-200 pb-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">Dental Surgeons</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start mb-24">
            {dentists.map((member, index) => (
                <RevealOnScroll key={member.id} delay={index * 100}>
                    <TeamMemberCard member={member} index={index} onClick={() => setSelectedMember(member)} />
                </RevealOnScroll>
            ))}
        </div>

        {/* Hygienists Group */}
        <div className="mb-8 border-b border-gray-200 pb-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">Oral Health Therapists</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start mb-24">
            {hygienists.map((member, index) => (
                <RevealOnScroll key={member.id} delay={index * 100}>
                    <TeamMemberCard member={member} index={index} onClick={() => setSelectedMember(member)} />
                </RevealOnScroll>
            ))}
        </div>

        {/* Auxiliary Group */}
        <div className="mb-8 border-b border-gray-200 pb-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">Clinical Support & Administration</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start mb-24">
            {auxiliary.map((member, index) => (
                <RevealOnScroll key={member.id} delay={index * 100}>
                    <TeamMemberCard member={member} index={index} onClick={() => setSelectedMember(member)} />
                </RevealOnScroll>
            ))}
        </div>

        {/* Final CTA Section */}
        <div className="mt-20 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-navy-900 mb-8">Ready to visit us?</h2>
            <button className="group bg-navy-900 text-white hover:bg-pastel-blue hover:text-navy-900 px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center gap-3">
                Book Your Appointment
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
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-50 p-2 transition-transform duration-300 hover:rotate-90 group bg-white/20 md:bg-transparent rounded-full md:rounded-none"
                aria-label="Close modal"
              >
                <X size={32} strokeWidth={1.5} className="text-white md:text-navy-900" />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-5/12 h-[350px] md:h-auto min-h-[350px] relative shrink-0">
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
                 <div className="w-12 h-1.5 bg-pastel-blue mb-8"></div>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-navy-900 mb-2 leading-[0.9] tracking-tighter">
                    {selectedMember.name}
                 </h2>
                 <p className="text-sm font-bold uppercase tracking-widest text-pastel-blue mb-8">
                    {selectedMember.role}
                 </p>
                 
                 {selectedMember.creds && (
                     <div className="mb-8">
                        <span className="inline-block border border-navy-900/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-900/70 bg-gray-50">
                           {selectedMember.creds}
                        </span>
                    </div>
                 )}

                 <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                    <p>
                      {selectedMember.bio || "Dedicated member of the Keith Nelson & Associates team, committed to providing exceptional care."}
                    </p>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;