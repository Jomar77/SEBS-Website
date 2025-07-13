import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShowcaseCard from './ShowcaseCard';

gsap.registerPlugin(ScrollTrigger);

// Dynamic color generation - cycles through theme colors
const colorPalette = ['bg-accent', 'bg-warning', 'bg-secondary', 'bg-info'];
const showcaseItems = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  color: colorPalette[index % colorPalette.length]
}));

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();
  const leftButtonRef = useRef();
  const rightButtonRef = useRef();
  const sectionRef = useRef();
  const isAnimating = useRef(false);

  // Show 4 cards at a time
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(showcaseItems.length / itemsPerSlide);

  const slideLeft = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    // GSAP button click animation
    gsap.to(leftButtonRef.current, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });

    // Infinite loop navigation - move by 4 cards
    const newIndex = currentIndex > 0 ? currentIndex - itemsPerSlide : showcaseItems.length - itemsPerSlide;
    setCurrentIndex(newIndex);

    // GSAP carousel movement - move by card width percentage
    gsap.to(carouselRef.current, {
      x: `${-newIndex * (100 / itemsPerSlide)}%`,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        isAnimating.current = false;
      }
    });
  };

  const slideRight = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    // GSAP button click animation
    gsap.to(rightButtonRef.current, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });

    // Infinite loop navigation - move by 4 cards
    const maxIndex = showcaseItems.length - itemsPerSlide;
    const newIndex = currentIndex < maxIndex ? currentIndex + itemsPerSlide : 0;
    setCurrentIndex(newIndex);

    // GSAP carousel movement - move by card width percentage
    gsap.to(carouselRef.current, {
      x: `${-newIndex * (100 / itemsPerSlide)}%`,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        isAnimating.current = false;
      }
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initialize carousel position
      gsap.set(carouselRef.current, { x: 0 });

      // GSAP entrance animations for buttons
      gsap.from([leftButtonRef.current, rightButtonRef.current], {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      });

      // Staggered entrance for cards
      gsap.from(".gallery-card", {
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // GSAP hover animations for buttons
  const handleButtonHover = (buttonRef, isEntering) => {
    gsap.to(buttonRef.current, {
      scale: isEntering ? 1.1 : 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section ref={sectionRef} className="py-16 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Gallery Showcase Container */}
        <div className="flex items-center justify-center gap-8">
          {/* Left Arrow - positioned to the side */}
          <button
            ref={leftButtonRef}
            onClick={slideLeft}
            onMouseEnter={() => handleButtonHover(leftButtonRef, true)}
            onMouseLeave={() => handleButtonHover(leftButtonRef, false)}
            className="flex-shrink-0 p-4 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-300 shadow-lg z-10"
            aria-label="Previous images"
          >
            <svg className="w-6 h-6 text-secondary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Container - fixed width, no horizontal scroll */}
          <div className="flex-1 max-w-6xl overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex"
              style={{ width: `${showcaseItems.length * 25}%` }}
            >
              {showcaseItems.map((item) => (
                <ShowcaseCard
                  key={item.id}
                  color={item.color}
                  index={item.id - 1}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow - positioned to the side */}
          <button
            ref={rightButtonRef}
            onClick={slideRight}
            onMouseEnter={() => handleButtonHover(rightButtonRef, true)}
            onMouseLeave={() => handleButtonHover(rightButtonRef, false)}
            className="flex-shrink-0 p-4 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-300 shadow-lg z-10"
            aria-label="Next images"
          >
            <svg className="w-6 h-6 text-secondary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="btn btn-secondary btn-lg px-12 py-4 uppercase tracking-wide font-bold rounded-full hover:btn-secondary/80 transition-colors duration-300"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  );
}