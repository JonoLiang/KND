import React, { useEffect, useRef, useState } from 'react';

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  
  // State for the scrolling physics
  const scrollTop = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Handler to update the content height when window resizes or DOM changes
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };

    // Initial measurement
    handleResize();

    // Observe changes in content size (e.g. images loading)
    const resizeObserver = new ResizeObserver(() => handleResize());
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    // The physics/animation loop
    const render = () => {
      const target = window.scrollY;
      const current = scrollTop.current;
      const diff = target - current;

      // Continue animation if the difference is significant
      if (Math.abs(diff) > 0.5) {
        // Interpolation factor: 0.07 provides a heavy, high-quality feel similar to the Team section
        scrollTop.current = current + diff * 0.07;
        
        if (contentRef.current) {
            contentRef.current.style.transform = `translate3d(0, -${scrollTop.current}px, 0)`;
        }
        
        rafId.current = requestAnimationFrame(render);
      } else {
        // Snap to target when very close to stop the loop and save resources
        scrollTop.current = target;
        if (contentRef.current) {
            contentRef.current.style.transform = `translate3d(0, -${scrollTop.current}px, 0)`;
        }
        rafId.current = null;
      }
    };

    const onScroll = () => {
      // Wake up the animation loop on scroll
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(render);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* 
         Ghost spacer to give the body the correct scrollable height.
         This preserves the native scrollbar behavior.
      */}
      <div style={{ height: contentHeight }} />
      
      {/* 
         Fixed container that we transform/translate based on physics.
         will-change-transform helps browser optimize rendering.
      */}
      <div 
        ref={contentRef} 
        className="fixed top-0 left-0 w-full will-change-transform"
      >
        {children}
      </div>
    </>
  );
};

export default SmoothScroll;