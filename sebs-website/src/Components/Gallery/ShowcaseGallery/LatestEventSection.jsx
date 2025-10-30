import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import WavePattern from "../../Common/WavePattern";

export default function LatestEventSection({ 
  event, 
  expandedEvent, 
  onToggle, 
  eventKey,
  loading = false
}) {
  const initialGridRef = useRef(null);

  // GSAP animation for initial load (all photos)
  useEffect(() => {
    if (!loading && initialGridRef.current) {
      const ctx = gsap.context(() => {
        const allBoxes = initialGridRef.current.querySelectorAll(".photo-box");

        gsap.fromTo(
          allBoxes,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          }
        );
      }, initialGridRef);

      return () => ctx.revert();
    }
  }, [loading]);

  // GSAP animation for toggle expansion
  useEffect(() => {
    if (expandedEvent === eventKey && initialGridRef.current) {
      const ctx = gsap.context(() => {
        const allBoxes = initialGridRef.current.querySelectorAll(".photo-box");
        const newBoxes = Array.from(allBoxes).slice(4);

        if (newBoxes.length > 0) {
          gsap.fromTo(
            newBoxes,
            { opacity: 0, y: 30, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
            }
          );
        }
      }, initialGridRef);

      return () => ctx.revert();
    }
  }, [expandedEvent, eventKey]);

  const isExpanded = expandedEvent === eventKey;
  const photos = event.images || [];

  // Handle smooth collapse animation
  const handleToggle = () => {
    if (isExpanded && initialGridRef.current) {
      // Animate out the extra boxes before collapsing
      const ctx = gsap.context(() => {
        const allBoxes = initialGridRef.current.querySelectorAll(".photo-box");
        const boxesToHide = Array.from(allBoxes).slice(4);

        if (boxesToHide.length > 0) {
          gsap.to(boxesToHide, {
            opacity: 0,
            y: -30,
            scale: 0.9,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.in",
            onComplete: () => {
              onToggle(eventKey);
            },
          });
        } else {
          onToggle(eventKey);
        }
      }, initialGridRef);

      return () => ctx.revert();
    } else {
      onToggle(eventKey);
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-base-200 transition-all duration-700 ease-in-out ${
        isExpanded ? "min-h-screen" : "h-auto"
      }`}
    >
      {/* Wave Background */}
      <div
        className={`wave-background absolute top-0 left-0 w-full h-full pointer-events-none z-0 transition-opacity duration-700 ${
          isExpanded ? "opacity-40" : "opacity-20"
        }`}
      >
        <WavePattern />
      </div>

      {/* "Latest Event" Badge */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg font-corben-bold text-lg">
          ✨ Latest Event
        </div>
      </div>

      <div
        className={`relative z-10 pt-30 p-8 transition-all duration-700 ${
          isExpanded ? "min-h-screen flex items-center" : "py-16"
        }`}
      >
        <div className="w-full">
          <h1 className="font-corben-reg text-3xl text-gray-800 mb-12 text-center">
            {event.title}
          </h1>

          <div className="flex flex-col items-center justify-center">
            {/* Show all photos by default or first 4 when collapsed */}
            <div
              ref={initialGridRef}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {photos.length > 0 ? (
                // Show all photos when expanded, first 4 when collapsed
                photos
                  .slice(0, isExpanded ? photos.length : 4)
                  .map((photo, index) => (
                    <div
                      key={photo.eventImageId || index}
                      className="photo-box w-64 h-64 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                      style={{
                        backgroundImage: `url(${import.meta.env.VITE_SEBS_API_URL}${photo.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundColor: "#f3f4f6",
                      }}
                    />
                  ))
              ) : !loading ? (
                // Only show fallback colored boxes if not loading and no photos
                Array.from(
                  {
                    length: isExpanded ? 8 : 4,
                  },
                  (_, index) => {
                    const colors = [
                      "#FF6B6B",
                      "#4ECDC4",
                      "#45B7D1",
                      "#96CEB4",
                      "#FCEA2B",
                      "#FF9FF3",
                      "#54A0FF",
                      "#5F27CD",
                    ];
                    return (
                      <div
                        key={index}
                        className="photo-box w-64 h-64 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                        style={{
                          backgroundColor: colors[index % colors.length],
                        }}
                      />
                    );
                  }
                )
              ) : null}
            </div>

            <button
              onClick={handleToggle}
              className="btn btn-lg bg-pink-400 hover:bg-pink-500 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none"
            >
              {isExpanded ? "Show Less" : "Look!"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
