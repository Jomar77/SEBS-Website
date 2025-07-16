import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GalleryGrid = ({ 
  title, 
  images = [], 
  bgColor = "bg-white",
  titleColor = "text-gray-800" 
}) => {
  const galleryRef = useRef(null);
  const titleRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: -30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );

      // Animate images with stagger
      gsap.fromTo(imagesRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 70%",
            end: "bottom 20%",
          }
        }
      );
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  return (
    <section ref={galleryRef} className={`py-16 px-4 ${bgColor}`}>
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold text-center ${titleColor} mb-12`}
        >
          {title}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              ref={addToRefs}
              className={`aspect-square ${image.bgColor || 'bg-gray-200'} rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer`}
              style={image.src ? { backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
            >
              {image.alt && (
                <span className="sr-only">{image.alt}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;