<<<<<<< HEAD
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from './ServiceCards';
import WavePattern from '../../Common/WavePattern';
=======
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCards";
import WavePattern from "./WavePattern";
>>>>>>> 8bc4341 (Refactor code structure and remove redundant changes for improved clarity and maintainability)

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "venue-design",
    title: "Venue Design",
    description:
      "Lorem ipsum dolor sit amet. Cum dolores vero aut sint aperiam quo voluptates numquam id eaque dolor ut ratione adipisci.",
    colorClass: "bg-[#e5adc2]",
  },
  {
    id: "photobooth",
    title: "Photobooth",
    description:
      "Lorem ipsum dolor sit amet. Cum dolores vero aut sint aperiam quo voluptates numquam id eaque dolor ut ratione adipisci.",
    colorClass: "bg-[#f6c77e]",
  },
  {
    id: "grazing-cart",
    title: "Grazing Cart",
    description:
      "Lorem ipsum dolor sit amet. Cum dolores vero aut sint aperiam quo voluptates numquam id eaque dolor ut ratione adipisci.",
    colorClass: "bg-[#e38157]",
  },
];

export default function ServiceSection() {
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
      {/* Remove the left-1/2 -translate-x-1/2 and use full width properly */}
      <div className="wave-background absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none z-0">
        <WavePattern />
      </div>

      {/* Fix the second background layer too */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none z-10" />

      {/* Content container */}
      <div className="relative z-20 py-20 min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              ref={titleRef}
              className="text-5xl md:text-6xl font-yeseva font-serif text-[#204558] mb-6 drop-shadow-sm"
            >
              Our Services
            </h2>
          </div>

          {/* Services Grid */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 justify-center w-fit mx-auto"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>

        {/* Fix bottom decoration */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/10 via-primary/5 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
