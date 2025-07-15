import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import PolaroidCard from "../../Common/PolaroidCard";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    id: 1,
    title: "Wedding Setup",
    description: "Elegant venue design for a perfect wedding day",
    color: "bg-gradient-to-br from-orange-400 to-red-500"
  },
  {
    id: 2,
    title: "Corporate Event",
    description: "Professional event planning and execution",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500"
  },
  {
    id: 3,
    title: "Birthday Party",
    description: "Memorable celebrations for all ages",
    color: "bg-gradient-to-br from-pink-400 to-rose-500"
  },
  {
    id: 4,
    title: "Anniversary Dinner",
    description: "Intimate dining experiences",
    color: "bg-gradient-to-br from-teal-400 to-cyan-500"
  },
  {
    id: 5,
    title: "Baby Shower",
    description: "Sweet celebrations for new arrivals",
    color: "bg-gradient-to-br from-purple-400 to-pink-500"
  },
  {
    id: 6,
    title: "Graduation Party",
    description: "Celebrating achievements and milestones",
    color: "bg-gradient-to-br from-blue-400 to-purple-500"
  }
];

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef();
  const titleRef = useRef();
  const carouselRef = useRef();
  const buttonRef = useRef();

  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // lg and up
      if (window.innerWidth >= 768) return 2;  // md
      return 1; // mobile
    }
    return 1;
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());
  const maxSlide = Math.max(0, galleryItems.length - visibleSlides);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Animate carousel
      gsap.fromTo(carouselRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 80%",
          }
        }
      );

      // Animate button
      gsap.fromTo(buttonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % (maxSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? maxSlide : prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlide));
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-base-100 to-base-200 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl font-serif font-bold text-base-content mb-6"
          >
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Carousel Container with Side Navigation */}
        <div 
          ref={carouselRef}
          className="relative"
        >
          {/* Left Navigation Button */}
          <button 
            className="btn btn-circle bg-pink-200 border-none text-pink-600 hover:bg-pink-300 shadow-lg disabled:opacity-30 active:scale-100 absolute left-4 top-1/2 z-10"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Navigation Button */}
          <button 
            className="btn btn-circle bg-pink-200 border-none text-pink-600 hover:bg-pink-300 shadow-lg disabled:opacity-30 active:scale-100 absolute right-4 top-1/2  z-10"
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* DaisyUI Carousel */}
          <div className="carousel carousel-center max-w-full space-x-2 bg-transparent p-4 mx-16">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`
              }}
            >
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`carousel-item flex-shrink-0 ${
                    visibleSlides === 1 ? 'w-full' : 
                    visibleSlides === 2 ? 'w-1/2' : 
                    'w-1/4'
                  } px-1`}
                >
                  <PolaroidCard 
                    title={item.title}
                    description={item.description}
                    color={item.color}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary scale-110' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <Link
            ref={buttonRef}
            to="/gallery"
            className="btn btn-lg bg-pink-300 border-none text-pink-700 hover:bg-pink-400 hover:text-pink-800 uppercase tracking-wider font-bold px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            SEE MORE
          </Link>
        </div>
      </div>
    </section>
  );
}