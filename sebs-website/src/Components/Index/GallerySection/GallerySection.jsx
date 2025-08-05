import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import PolaroidCard from "../../Common/PolaroidCard";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { id: 1, color: "bg-gradient-to-br from-orange-400 to-red-500" },
  { id: 2, color: "bg-gradient-to-br from-yellow-400 to-orange-500" },
  { id: 3, color: "bg-gradient-to-br from-pink-400 to-rose-500" },
  { id: 4, color: "bg-gradient-to-br from-teal-400 to-cyan-500" },
  { id: 5, color: "bg-gradient-to-br from-purple-400 to-pink-500" },
  { id: 6, color: "bg-gradient-to-br from-blue-400 to-purple-500" },
];

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef();
  const carouselRef = useRef();
  const buttonRef = useRef();

  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 2;
      return 1;
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        carouselRef.current,
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
          },
        }
      );
      gsap.fromTo(
        buttonRef.current,
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
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (maxSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
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
        <div ref={carouselRef} className="relative">
          <button
            className="btn btn-circle bg-[#f0a7c2] border-none text-black hover:bg-[#f0a7c2]/80 shadow-lg disabled:opacity-30 active:scale-100 absolute left-4 top-1/2 z-10"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="btn btn-circle bg-pink-200 border-none text-black hover:bg-pink-300 shadow-lg disabled:opacity-30 active:scale-100 absolute right-4 top-1/2 z-10"
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="carousel w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out "
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / visibleSlides)
                }%)`,
                width: `${(galleryItems.length * 100) / visibleSlides}%`,
              }}
            >
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className={`carousel-item flex-shrink-0 flex items-center justify-center ${
                    visibleSlides === 1
                      ? "w-full"
                      : visibleSlides === 2
                      ? "w-1/2"
                      : "w-1/4"
                  } px-2`}
                >
                  <PolaroidCard
                    color={item.color}
                    className="w-full max-w-[240px] h-[300px] sm:h-[320px] md:h-[340px] rounded-2xl shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-primary scale-110"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            ref={buttonRef}
            to="/gallery"
            className="btn btn-lg bg-[#e5aac1] border-none text-white hover:bg-white hover:text-[#e5aac1] uppercase tracking-wider font-bold px-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            SEE MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
