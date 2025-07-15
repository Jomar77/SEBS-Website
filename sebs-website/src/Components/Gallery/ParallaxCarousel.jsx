import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CarouselWithMask = ({ panels }) => {
  const [index, setIndex] = useState(0);
  const visibleCount = 4;

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, panels.length - visibleCount));
  };

  return (
    <div className="relative w-full bg-white py-16 overflow-hidden">
      {/* Top semi-circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <svg width="200" height="100" viewBox="0 0 200 100">
          <path d="M0,100 A100,100 0 0,1 200,100" fill="white" />
        </svg>
      </div>

      {/* Carousel container */}
      <div className="flex justify-center items-center gap-4 relative z-10">
        <div className="flex gap-6 transition-transform duration-500" style={{ transform: `translateX(-${index * 25}%)` }}>
          {panels.map((color, i) => (
            <div
              key={i}
              className="w-48 h-64 rounded-md shadow-md"
              style={{
                backgroundColor: color,
                transform: 'perspective(600px) rotateY(' + (i < index ? 20 : i > index + visibleCount - 1 ? -20 : 0) + 'deg)',
                transition: 'transform 0.5s ease',
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Bottom semi-circle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <svg width="200" height="100" viewBox="0 0 200 100">
          <path d="M0,0 A100,100 0 0,0 200,0" fill="white" />
        </svg>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-6">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="text-teal-800 disabled:opacity-30"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={index >= panels.length - visibleCount}
          className="text-teal-800 disabled:opacity-30"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselWithMask;