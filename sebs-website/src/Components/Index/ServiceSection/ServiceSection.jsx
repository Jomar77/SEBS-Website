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
      if (titleRef.current) {
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
      }

      // Enhanced staggered card reveals - add null check
      if (cardsRef.current && cardsRef.current.children) {
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
      }

      // Background parallax effect - add null check
      const waveElement = sectionRef.current?.querySelector(".wave-background");
      if (waveElement) {
        gsap.to(waveElement, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
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
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2
              ref={titleRef}
              className="text-5xl md:text-6xl font-yeseva font-serif text-[#0e465a] mb-6 drop-shadow-sm"
            >
              Our Services
            </h2>
          </div>
          
          {loading && (
            <div className="flex items-center justify-center w-full h-64 text-lg">Loading services...</div>
          )}
          {error && (
            <div className="flex items-center justify-center w-full h-64 text-red-500">Failed to load services.</div>
          )}
          {!loading && !error && services.length > 0 && (
            <div
              ref={cardsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            >
              {services.map((service) => (
                <div key={service.id} className="w-full max-w-sm">
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/10 via-primary/5 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
