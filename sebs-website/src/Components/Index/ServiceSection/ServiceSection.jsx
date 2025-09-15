import { useEffect, useRef, useState } from 'react';
import { useData } from '../../../Context/DataContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from './ServiceCards';
import WavePattern from '../../Common/WavePattern';

gsap.registerPlugin(ScrollTrigger);






export default function ServiceSection() {
  const { services, loading, error } = useData();
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef();
  const titleRef = useRef();
  const cardsRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with enhanced entrance
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 50%",
          },
        }
      );

      // Enhanced staggered card reveals
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 100, scale: 0.8, rotateX: 45 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      // Background parallax effect
      gsap.to(sectionRef.current.querySelector(".wave-background"), {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-base-200 overflow-hidden">
      <div className="wave-background absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none z-0">
        <WavePattern />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none z-10" />
      <div className="relative z-20 py-20 min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2
              ref={titleRef}
              className="text-5xl md:text-6xl font-yeseva font-serif text-[#0e465a] mb-6 drop-shadow-sm"
            >
              Our Services
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="btn btn-circle btn-outline mr-4"
              aria-label="Previous Service"
              onClick={() => setCurrent((prev) => (prev - 1 + services.length) % services.length)}
              disabled={loading || error || services.length === 0}
            >
              <span className="text-2xl">&#8592;</span>
            </button>
            <div
              ref={cardsRef}
              className="carousel w-[350px] sm:w-[400px] md:w-[500px] h-[520px] transition-all duration-500 ease-in-out"
            >
              {loading && (
                <div className="flex items-center justify-center w-full h-full text-lg">Loading services...</div>
              )}
              {error && (
                <div className="flex items-center justify-center w-full h-full text-red-500">Failed to load services.</div>
              )}
              {!loading && !error && services.length > 0 && (
                <div
                  className="carousel-item w-full transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(0)`,
                    opacity: 1,
                  }}
                  key={services[current].id}
                >
                  <ServiceCard {...services[current]} />
                </div>
              )}
            </div>
            <button
              className="btn btn-circle btn-outline ml-4"
              aria-label="Next Service"
              onClick={() => setCurrent((prev) => (prev + 1) % services.length)}
              disabled={loading || error || services.length === 0}
            >
              <span className="text-2xl">&#8594;</span>
            </button>
          </div>
          {/* Carousel indicators */}
          {!loading && !error && services.length > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  className={`btn btn-xs rounded-full transition-all duration-300 ${idx === current ? 'bg-[#efaac3] scale-125' : 'bg-gray-300'}`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to service ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/10 via-primary/5 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
