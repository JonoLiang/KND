import React from 'react';

const GeometricOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.05 }} />
          </linearGradient>
        </defs>
        
        {/* Large Left Triangles - Emulating the "Frosted Glass" look */}
        <path d="M-10 0 L60 0 L-10 80 Z" fill="rgba(255,255,255,0.08)" />
        <path d="M-10 20 L40 0 L20 60 Z" fill="rgba(255,255,255,0.12)" />
        <path d="M0 0 L30 0 L0 40 Z" fill="rgba(200,220,255,0.15)" />
        
        {/* Overlapping jagged shapes */}
        <path d="M-20 100 L45 100 L-20 40 Z" fill="rgba(255,255,255,0.1)" />
        <path d="M10 100 L60 100 L30 60 Z" fill="rgba(255,255,255,0.05)" />
        
        {/* Center/Top details */}
        <path d="M20 0 L55 0 L40 30 Z" fill="rgba(255,255,255,0.03)" />
        
        {/* Subtle right side overlay to darken image slightly for text readability */}
        <rect x="0" y="0" width="100" height="100" fill="rgba(10, 25, 48, 0.2)" />
      </svg>
      
      {/* Additional frosted glass effect overlay via CSS for texture */}
      <div 
        className="absolute inset-0 bg-white/5 mix-blend-overlay" 
        style={{ clipPath: 'polygon(0 0, 45% 0, 25% 100%, 0% 100%)' }}
      ></div>
       <div 
        className="absolute inset-0 bg-blue-100/5 mix-blend-overlay" 
        style={{ clipPath: 'polygon(0 0, 30% 0, 50% 100%, 0% 100%)' }}
      ></div>
    </div>
  );
};

export default GeometricOverlay;