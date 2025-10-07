import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WavePattern from "../Common/WavePattern";

gsap.registerPlugin(ScrollTrigger);

export default function AboutIntroduction() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Animate subheading
      if (subheadingRef.current) {
        gsap.fromTo(
          subheadingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: subheadingRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Animate cards with stagger
      if (cardsRef.current && cardsRef.current.children) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 100, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Animate description
      if (descriptionRef.current) {
        gsap.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: descriptionRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-6 bg-base-200 min-h-screen">
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <WavePattern />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Text */}
        <div className="text-center mb-16">
          <p ref={headingRef} className="text-sm font-montserrat-alt text-[#8b4a6b] uppercase tracking-widest mb-4">
            About Psalm & Platter
          </p>
          <h1 ref={subheadingRef} className="text-4xl md:text-5xl font-yeseva text-[#8b4a6b] leading-tight max-w-3xl mx-auto">
            we believe every celebration deserves a touch of{" "}
            <span className="text-[#ffffff] drop-shadow-lg">magic and memories</span>
          </h1>
        </div>

        {/* Service Cards */}
        <div ref={cardsRef} className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          {/* Catering Card */}
          <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden w-80 h-80 transform rotate-[-5deg]">
            <div className="absolute top-4 left-4 bg-[#ffc571] text-black px-3 py-1 rounded-full text-sm font-semibold transform rotate-[-10deg]">
              Our passion for catering
            </div>
            <div className="h-full bg-gradient-to-br from-[#ffc571] to-[#ffd89b] flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-lg shadow-inner flex items-center justify-center">
              </div>
            </div>
          </div>

          {/* Photography Card */}
          <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden w-80 h-80 transform rotate-[3deg]">
            <div className="absolute top-4 left-4 bg-[#e8a5c0] text-white px-3 py-1 rounded-full text-sm font-semibold transform rotate-[8deg]">
              Capturing your moments
            </div>
            <div className="h-full bg-gradient-to-br from-[#fdf2e9] to-[#fadbd8] flex items-center justify-center p-8">
              <div className="grid grid-cols-3 gap-2">
                <div className="w-12 h-12 bg-[#e8a5c0] rounded-full"></div>
                <div className="w-12 h-12 bg-[#f8c2d4] rounded-full"></div>
                <div className="w-12 h-12 bg-[#e8a5c0] rounded-full"></div>
                <div className="w-12 h-12 bg-[#f8c2d4] rounded-full"></div>
                <div className="w-12 h-12 bg-[#e8a5c0] rounded-full"></div>
                <div className="w-12 h-12 bg-[#f8c2d4] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden w-80 h-80 transform rotate-[-2deg]">
            <div className="absolute top-4 left-4 bg-[#85c1e9] text-white px-3 py-1 rounded-full text-sm font-semibold transform rotate-[-5deg]">
              Years of experience
            </div>
            <div className="h-full bg-gradient-to-br from-[#ebf5fb] to-[#d6eaf8] flex items-center justify-center p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="w-20 h-20 bg-[#e8a5c0] rounded-lg"></div>
                <div className="w-20 h-20 bg-[#f8c2d4] rounded-lg"></div>
                <div className="w-20 h-20 bg-[#85c1e9] rounded-lg"></div>
                <div className="w-20 h-20 bg-[#aed6f1] rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Description and CTA */}
        <div ref={descriptionRef} className="text-center">
          <p className="text-lg text-[#6b3a4f] max-w-2xl mx-auto mb-8 leading-relaxed">
            Founded with a passion for bringing people together, SEBS Events has been creating unforgettable experiences for families and communities. Our dedicated team combines creativity and attention to detail to make every celebration truly special.
          </p>
        </div>
      </div>
    </section>
  );
}
