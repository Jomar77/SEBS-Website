import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CarouselWithMask = ({ panels }) => {
  const [index, setIndex] = useState(0);
  
  const handlePrev = () => {
    setIndex((prev) => prev === 0 ? panels.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setIndex((prev) => prev === panels.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className="relative w-full bg-white py-16 overflow-hidden">
      {/* Top curved mask */}
      <div className="absolute top-0 left-0 right-0 h-20 z-20 pointer-events-none">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1200 80" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,80 Q600,0 1200,80 L1200,0 L0,0 Z" 
            fill="white"
          />
        </svg>
      </div>

      {/* Gallery Title */}
      <div className="text-center mb-12 relative z-20">
        <h2 className="font-yeseva text-4xl lg:text-5xl text-[#204558]">Gallery</h2>
      </div>

      {/* Carousel container */}
      <div className="relative z-10 w-full h-80 px-8">
        <div className="flex justify-center items-center h-full overflow-hidden">
          <div className="flex gap-6 justify-center items-center">
            {[0, 1, 2, 3].map((offset) => {
              const photoIndex = (index + offset) % panels.length;
              const isCenter = offset === 1 || offset === 2; // Positions 1,2 are center
              const isSide = offset === 0 || offset === 3;   // Positions 0,3 are sides
              
              return (
                <div
                  key={`${photoIndex}-${offset}`}
                  className="flex-shrink-0 transition-all duration-500 ease-out"
                  style={{
                    width: '280px',
                    height: '180px',
                    opacity: isCenter ? 1 : 0.7,
                    transform: `
                      perspective(1000px) 
                      rotateY(${offset === 0 ? '10deg' : offset === 3 ? '-10deg' : '0deg'})
                      scale(${isCenter ? 1 : 0.9})
                    `,
                    filter: isCenter ? 'none' : 'brightness(0.8)',
                  }}
                >
                  <div 
                    className="w-full h-full rounded-lg shadow-lg overflow-hidden bg-cover bg-center"
                    style={{ 
                      backgroundImage: typeof panels[photoIndex] === 'string' && panels[photoIndex].startsWith('http') 
                        ? `url(${panels[photoIndex]})` 
                        : 'none',
                      backgroundColor: typeof panels[photoIndex] === 'string' && !panels[photoIndex].startsWith('http') 
                        ? panels[photoIndex] 
                        : '#e2e8f0',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom curved mask */}
      <div className="absolute bottom-0 left-0 right-0 h-20 z-20 pointer-events-none">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1200 80" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 Q600,80 1200,0 L1200,80 L0,80 Z" 
            fill="white"
          />
        </svg>
      </div>

      {/* Navigation arrows */}
      <div className="absolute top-1/2 left-8 right-8 flex justify-between items-center z-30 pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-[#204558] hover:bg-white transition-all duration-300"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-[#204558] hover:bg-white transition-all duration-300"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CarouselWithMask;