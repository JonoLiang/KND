import React from 'react';

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
  textColor?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ items, reverse = false, className = '', textColor = 'text-white' }) => {
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div className={`flex whitespace-nowrap py-6 ${reverse ? 'animate-marqueeReverse' : 'animate-marquee'}`}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-12 mx-6">
            {items.map((item, idx) => (
              <span key={idx} className={`text-6xl md:text-8xl font-black uppercase tracking-tighter ${textColor} opacity-20`}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;