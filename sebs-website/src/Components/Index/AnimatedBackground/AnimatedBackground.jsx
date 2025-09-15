import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimatedBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating elements with staggered animations
    const createFloatingElement = (element, delay = 0) => {
      gsap.set(element, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360,
        scale: 0.6 + Math.random() * 0.8,
      });

      gsap.to(element, {
        x: `+=${Math.random() * 300 - 150}`,
        y: `+=${Math.random() * 200 - 100}`,
        duration: 12 + Math.random() * 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay,
      });
    };

    // Animate flowers with gentle rotation
    const flowers = container.querySelectorAll('.flower');
    flowers.forEach((flower, index) => {
      createFloatingElement(flower, index * 0.8);
      
      gsap.to(flower, {
        rotation: 360,
        duration: 25 + Math.random() * 15,
        repeat: -1,
        ease: "none",
      });
    });

    // Animate stickers with subtle movement
    const stickers = container.querySelectorAll('.sticker');
    stickers.forEach((sticker, index) => {
      createFloatingElement(sticker, index * 1.2);
      
      gsap.to(sticker, {
        rotation: `+=${Math.random() * 30 - 15}`,
        duration: 8 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Animate supplies and sweets with gentle bobbing
    const supplies = container.querySelectorAll('.supply');
    supplies.forEach((supply, index) => {
      createFloatingElement(supply, index * 0.5);
      
      gsap.to(supply, {
        y: `+=${20 + Math.random() * 20}`,
        duration: 4 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Special pulsing animation for sweets
    const sweets = container.querySelectorAll('.sweet');
    sweets.forEach((sweet, index) => {
      gsap.to(sweet, {
        scale: `+=${0.2 + Math.random() * 0.3}`,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.4,
      });
    });

    return () => {
      gsap.killTweensOf(container.children);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-40"
    >
      {/* Flowers */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`flower-${i}`}
          className="flower absolute w-16 h-16"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="30" r="14" fill="#e91e63" />
            <circle cx="70" cy="50" r="14" fill="#e91e63" />
            <circle cx="50" cy="70" r="14" fill="#e91e63" />
            <circle cx="30" cy="50" r="14" fill="#e91e63" />
            <circle cx="50" cy="50" r="10" fill="#ff6b35" />
          </svg>
        </div>
      ))}

      {/* Circular Stickers/Badges */}
      {[...Array(2)].map((_, i) => (
        <div
          key={`sticker-${i}`}
          className="sticker absolute w-20 h-20 rounded-full"
          style={{ 
            backgroundColor: i % 2 === 0 ? '#e85a4f' : '#d63384',
          }}
        >
        </div>
      ))}

      {/* More Flowers with Different Colors */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`flower-extra-${i}`}
          className="flower absolute w-14 h-14"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {i % 3 === 0 && (
              // Blue flowers
              <>
                <circle cx="50" cy="30" r="12" fill="#20b2aa" />
                <circle cx="70" cy="50" r="12" fill="#20b2aa" />
                <circle cx="50" cy="70" r="12" fill="#20b2aa" />
                <circle cx="30" cy="50" r="12" fill="#20b2aa" />
                <circle cx="50" cy="50" r="8" fill="#ffeb3b" />
              </>
            )}
            {i % 3 === 1 && (
              // Orange flowers
              <>
                <circle cx="50" cy="30" r="12" fill="#ff9800" />
                <circle cx="70" cy="50" r="12" fill="#ff9800" />
                <circle cx="50" cy="70" r="12" fill="#ff9800" />
                <circle cx="30" cy="50" r="12" fill="#ff9800" />
                <circle cx="50" cy="50" r="8" fill="#fff" />
              </>
            )}
            {i % 3 === 2 && (
              // Purple flowers
              <>
                <circle cx="50" cy="30" r="12" fill="#9c27b0" />
                <circle cx="70" cy="50" r="12" fill="#9c27b0" />
                <circle cx="50" cy="70" r="12" fill="#9c27b0" />
                <circle cx="30" cy="50" r="12" fill="#9c27b0" />
                <circle cx="50" cy="50" r="8" fill="#ffc107" />
              </>
            )}
          </svg>
        </div>
      ))}

      {/* Craft Supplies */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`supply-${i}`}
          className="supply absolute"
        >
          {i % 4 === 0 && (
            // Paper clips
            <div className="w-12 h-5 border-3 border-[#20b2aa] rounded-full"></div>
          )}
          {i % 4 === 1 && (
            // Tape roll
            <div className="w-10 h-10 rounded-full bg-[#ff6b35] border-3 border-white"></div>
          )}
          {i % 4 === 2 && (
            // Heart
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#e91e63]" fill="currentColor">
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
            </svg>
          )}
          {i % 4 === 3 && (
            // Small envelope/card
            <div className="w-12 h-8 bg-[#9c27b0] rounded-sm shadow-sm border-2 border-white"></div>
          )}
        </div>
      ))}

      {/* Polaroids */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`polaroid-${i}`}
          className="supply absolute w-14 h-16"
        >
          <div className="w-full h-full bg-white rounded-sm shadow-lg border border-gray-200 p-1">
            <div 
              className="w-full h-3/4 rounded-xs mb-1"
              style={{ 
                backgroundColor: ['#ff69b4', '#20b2aa', '#ff9800', '#9c27b0', '#e91e63', '#ff6b35'][i % 6],
              }}
            ></div>
            <div className="h-1/4 bg-white"></div>
          </div>
        </div>
      ))}

      {/* Cameras */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`camera-${i}`}
          className="supply absolute"
        >
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#333]" fill="currentColor">
            <path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"/>
          </svg>
        </div>
      ))}

      {/* More Sweets */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`sweet-${i}`}
          className="supply sweet absolute"
        >
          {i % 6 === 0 && (
            // Cupcake
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#ff6b35]" fill="currentColor">
              <path d="M12,3A3,3 0 0,1 15,6V7H16A2,2 0 0,1 18,9V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19V9A2,2 0 0,1 8,7H9V6A3,3 0 0,1 12,3M12,5A1,1 0 0,0 11,6V7H13V6A1,1 0 0,0 12,5Z"/>
              <circle cx="12" cy="15" r="2" fill="#e91e63"/>
            </svg>
          )}
          {i % 6 === 1 && (
            // Donut
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#ff69b4]" fill="currentColor">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
              <circle cx="12" cy="12" r="2" fill="#ffffff"/>
            </svg>
          )}
          {i % 6 === 2 && (
            // Chocolate bar
            <div className="w-10 h-14 bg-[#8b4513] rounded-sm shadow-md">
              <div className="grid grid-cols-2 gap-px p-1 h-full">
                <div className="bg-[#654321] rounded-xs"></div>
                <div className="bg-[#654321] rounded-xs"></div>
                <div className="bg-[#654321] rounded-xs"></div>
                <div className="bg-[#654321] rounded-xs"></div>
              </div>
            </div>
          )}
          {i % 6 === 3 && (
            // Cookie
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#deb887]" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="currentColor"/>
              <circle cx="8" cy="8" r="1.5" fill="#8b4513"/>
              <circle cx="16" cy="10" r="1.5" fill="#8b4513"/>
              <circle cx="10" cy="16" r="1.5" fill="#8b4513"/>
              <circle cx="15" cy="15" r="1.5" fill="#8b4513"/>
            </svg>
          )}
          {i % 6 === 4 && (
            // Ice cream cone
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#ffb6c1]" fill="currentColor">
              <path d="M12,2A6,6 0 0,1 18,8A6,6 0 0,1 12,14A6,6 0 0,1 6,8A6,6 0 0,1 12,2M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4Z"/>
              <path d="M12,14L8,22L12,20L16,22L12,14Z" fill="#deb887"/>
            </svg>
          )}
          {i % 6 === 5 && (
            // Candy
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#ff1493]" fill="currentColor">
              <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
            </svg>
          )}
        </div>
      ))}

      {/* Small decorative dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="supply absolute w-2 h-2 rounded-full"
          style={{ 
            backgroundColor: ['#efaac3', '#ffc571', '#8fc2c3', '#f7d0d5'][i % 4],
          }}
        ></div>
      ))}
    </div>
  );
}