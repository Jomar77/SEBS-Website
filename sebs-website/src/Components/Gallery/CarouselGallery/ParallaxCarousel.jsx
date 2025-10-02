import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const CarouselWithMask = ({ panels }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const containerRef = useRef(null);
  
  // Smooth infinite scroll animation - no pause functionality
  useEffect(() => {
    if (carouselRef.current && panels.length > 0) {
      const ctx = gsap.context(() => {
        animationRef.current = gsap.to({}, {
          duration: 30,
          repeat: -1,
          ease: "none",
          onUpdate: function() {
            setScrollPosition(prev => (prev + 0.5) % (panels.length * 100));
          }
        });
      }, carouselRef);

      return () => ctx.revert();
    }
  }, [panels.length]);

  const handlePrev = () => {
    setScrollPosition(prev => (prev - 100 + panels.length * 100) % (panels.length * 100));
  };

  const handleNext = () => {
    setScrollPosition(prev => (prev + 100) % (panels.length * 100));
  };

  // Generate visible items with proper spacing to prevent gaps and overlap
  const getVisibleItems = () => {
    const items = [];
    const itemsToShow = 11; // Increased to ensure full viewport coverage
    const centerIndex = Math.floor(itemsToShow / 2);
    
    for (let i = 0; i < itemsToShow; i++) {
      const baseIndex = Math.floor(scrollPosition / 100);
      const itemIndex = (baseIndex + i - centerIndex + panels.length * 10) % panels.length;
      const offset = i - centerIndex;
      const scrollOffset = (scrollPosition % 100) / 100;
      const position = offset - scrollOffset;
      
      // Enhanced reverse fisheye with proper spacing
      const distanceFromCenter = Math.abs(position);
      const scale = Math.min(1.2, 0.7 + (distanceFromCenter * 0.15));
      const opacity = Math.max(0.2, 1 - (distanceFromCenter * 0.25));
      const rotationY = position * 15;
      const zIndex = Math.max(0, Math.floor(distanceFromCenter * 2));
      
      // Better spacing calculation to prevent both overlap and gaps
      const baseSpacing = 240; // Increased spacing to prevent overlap
      const xOffset = position * baseSpacing;
      const yOffset = Math.abs(position) * 8;
      
      items.push({
        index: itemIndex,
        scale,
        opacity,
        rotationY,
        xOffset,
        yOffset,
        zIndex,
        isVisible: distanceFromCenter < 5.5 // Increased visibility range to fill viewport
      });
    }
    
    return items;
  };

  return (
    <div 
      ref={carouselRef}
      className="relative w-full bg-white py-16 overflow-hidden"
    >
      {/* Gallery Title */}
      <div className="text-center mb-2 relative z-20">
        <h2 className="font-yeseva text-4xl lg:text-5xl text-[#204558]">Gallery</h2>
      </div>

      {/* Carousel container - adjusted positioning */}
      <div className="relative z-10 w-full h-80 px-0 -mt-2">
        <div 
          ref={containerRef}
          className="flex justify-center items-center h-full overflow-hidden"
          style={{ perspective: '1200px' }}
        >
          <div className="relative w-full h-full">
            {getVisibleItems().map((item, index) => {
              if (!item.isVisible) return null;
              
              return (
                <div
                  key={`${item.index}-${index}`}
                  className="absolute top-1/2 left-1/2 transition-all duration-100 ease-linear"
                  style={{
                    width: '280px',
                    height: '180px',
                    transform: `
                      translate(-50%, -50%)
                      translateX(${item.xOffset}px)
                      translateY(${item.yOffset}px)
                      rotateY(${item.rotationY}deg)
                      scale(${item.scale})
                    `,
                    opacity: item.opacity,
                    zIndex: item.zIndex,
                    filter: item.scale < 0.8 ? 'brightness(0.7) blur(1px)' : 'none',
                  }}
                >
                  <div 
                    className="w-full h-full rounded-lg overflow-hidden bg-cover bg-center"
                    style={{ 
                      backgroundImage: typeof panels[item.index] === 'string' && panels[item.index].startsWith('http') 
                        ? `url(${panels[item.index]})` 
                        : 'none',
                      backgroundColor: typeof panels[item.index] === 'string' && !panels[item.index].startsWith('http') 
                        ? panels[item.index] 
                        : '#e2e8f0',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation arrows - centered at bottom of carousel */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm text-[#204558] hover:bg-white transition-all duration-300"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm text-[#204558] hover:bg-white transition-all duration-300"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselWithMask;