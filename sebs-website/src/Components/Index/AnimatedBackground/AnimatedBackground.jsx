import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimatedBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use GSAP context for proper cleanup
    const ctx = gsap.context(() => {
      // Create floating elements with staggered animations
      const createFloatingElement = (element, delay = 0) => {
        gsap.set(element, {
          x: Math.random() * (window.innerWidth - 100),
          y: Math.random() * (window.innerHeight - 100),
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
    }, containerRef);

    return () => ctx.revert();
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
          className="flower absolute w-12 h-12"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="30" r="12" fill="#e91e63" />
            <circle cx="70" cy="50" r="12" fill="#e91e63" />
            <circle cx="50" cy="70" r="12" fill="#e91e63" />
            <circle cx="30" cy="50" r="12" fill="#e91e63" />
            <circle cx="50" cy="50" r="8" fill="#ff6b35" />
          </svg>
        </div>
      ))}

      {/* More Flowers with Different Colors */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`flower-extra-${i}`}
          className="flower absolute w-10 h-10"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {i % 3 === 0 && (
              <>
                <circle cx="50" cy="30" r="10" fill="#20b2aa" />
                <circle cx="70" cy="50" r="10" fill="#20b2aa" />
                <circle cx="50" cy="70" r="10" fill="#20b2aa" />
                <circle cx="30" cy="50" r="10" fill="#20b2aa" />
                <circle cx="50" cy="50" r="6" fill="#ffeb3b" />
              </>
            )}
            {i % 3 === 1 && (
              <>
                <circle cx="50" cy="30" r="10" fill="#ff9800" />
                <circle cx="70" cy="50" r="10" fill="#ff9800" />
                <circle cx="50" cy="70" r="10" fill="#ff9800" />
                <circle cx="30" cy="50" r="10" fill="#ff9800" />
                <circle cx="50" cy="50" r="6" fill="#fff" />
              </>
            )}
            {i % 3 === 2 && (
              <>
                <circle cx="50" cy="30" r="10" fill="#9c27b0" />
                <circle cx="70" cy="50" r="10" fill="#9c27b0" />
                <circle cx="50" cy="70" r="10" fill="#9c27b0" />
                <circle cx="30" cy="50" r="10" fill="#9c27b0" />
                <circle cx="50" cy="50" r="6" fill="#ffc107" />
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
          {i % 3 === 0 && (
            <div className="w-12 h-5 border-3 border-[#20b2aa] rounded-full"></div>
          )}
          {i % 3 === 1 && (
            <div className="w-10 h-10 rounded-full bg-[#ff6b35] border-3 border-white"></div>
          )}
          {i % 3 === 2 && (
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#e91e63]" fill="currentColor">
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
            </svg>
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

      {/* More Sweets - Remove cupcakes and candies */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`sweet-${i}`}
          className="supply sweet absolute"
        >
          {i % 2 === 0 && (
            <svg viewBox="0 0 24 24" className="w-14 h-14" fill="none">
              <circle cx="12" cy="12" r="9" fill="#deb887"/>
              <circle cx="12" cy="12" r="3.5" fill="white"/>
              <circle cx="12" cy="12" r="9" fill="#e91e63"/>
              <circle cx="12" cy="12" r="3.5" fill="white"/>
              <path d="M6 15 Q8 17 10 15" fill="#e91e63"/>
              <path d="M14 15 Q16 17 18 15" fill="#e91e63"/>
              <path d="M9 6 Q11 8 13 6" fill="#e91e63"/>
              <rect x="8" y="8" width="2" height="0.8" rx="0.4" fill="#ffeb3b" transform="rotate(45 9 8.4)"/>
              <rect x="14" y="9" width="2" height="0.8" rx="0.4" fill="#4caf50" transform="rotate(-30 15 9.4)"/>
              <rect x="10" y="14" width="2" height="0.8" rx="0.4" fill="#ff5722" transform="rotate(60 11 14.4)"/>
              <rect x="15" y="13" width="2" height="0.8" rx="0.4" fill="#2196f3" transform="rotate(-45 16 13.4)"/>
              <rect x="7" y="11" width="2" height="0.8" rx="0.4" fill="#ff9800" transform="rotate(90 8 11.4)"/>
              <rect x="16" y="8" width="2" height="0.8" rx="0.4" fill="#9c27b0" transform="rotate(15 17 8.4)"/>
            </svg>
          )}
          {i % 2 === 1 && (
            <svg viewBox="0 0 24 24" className="w-14 h-14 text-[#deb887]" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="currentColor"/>
              <circle cx="8" cy="8" r="1.5" fill="#8b4513"/>
              <circle cx="16" cy="10" r="1.5" fill="#8b4513"/>
              <circle cx="10" cy="16" r="1.5" fill="#8b4513"/>
              <circle cx="15" cy="15" r="1.5" fill="#8b4513"/>
            </svg>
          )}
        </div>
      ))}

      {/* Olives */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`olive-${i}`}
          className="supply absolute"
        >
          <svg viewBox="0 0 24 24" className="w-14 h-14" fill="none">
            <ellipse cx="12" cy="14" rx="4" ry="6" fill="#2d5016"/>
            <ellipse cx="10" cy="12" rx="1.5" ry="2" fill="#4a7c23"/>
            <rect x="11.5" y="8" width="1" height="3" fill="#8b4513"/>
          </svg>
        </div>
      ))}

      {/* Strawberries */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`strawberry-${i}`}
          className="supply sweet absolute"
        >
          <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
            {/* Strawberry body */}
            <path d="M12 20C16 20 18 16 18 13C18 10 16 8 12 8C8 8 6 10 6 13C6 16 8 20 12 20Z" fill="#dc2626"/>
            {/* Strawberry top/leaves */}
            <path d="M8 8L10 6L12 7L14 6L16 8L14 9L12 8L10 9L8 8Z" fill="#16a34a"/>
            {/* Seeds */}
            <circle cx="10" cy="12" r="0.5" fill="#fef3c7"/>
            <circle cx="14" cy="11" r="0.5" fill="#fef3c7"/>
            <circle cx="11" cy="15" r="0.5" fill="#fef3c7"/>
            <circle cx="13" cy="14" r="0.5" fill="#fef3c7"/>
            <circle cx="12" cy="17" r="0.5" fill="#fef3c7"/>
          </svg>
        </div>
      ))}

      {/* Matcha Drinks */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`matcha-${i}`}
          className="supply sweet absolute"
        >
          <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
            {/* Cup body */}
            <path d="M6 8C6 7.5 6.5 7 7 7H17C17.5 7 18 7.5 18 8V18C18 19 17 20 16 20H8C7 20 6 19 6 18V8Z" fill="#f5f5f5"/>
            {/* Matcha liquid */}
            <path d="M6.5 9H17.5V17.5C17.5 18.3 16.8 19 16 19H8C7.2 19 6.5 18.3 6.5 17.5V9Z" fill="#7cb342"/>
            {/* Matcha foam */}
            <ellipse cx="12" cy="9.5" rx="5.5" ry="1" fill="#9ccc65"/>
            {/* Cup handle */}
            <path d="M18 10C19.5 10 20.5 11 20.5 12.5C20.5 14 19.5 15 18 15" stroke="#d0d0d0" strokeWidth="1.5" fill="none"/>
            {/* Straw (optional) */}
            {i % 2 === 0 && (
              <rect x="14" y="6" width="1.5" height="8" fill="#ff69b4" rx="0.5"/>
            )}
          </svg>
        </div>
      ))}

      {/* Iced Coffee */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`iced-coffee-${i}`}
          className="supply sweet absolute"
        >
          <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
            {/* Cup body */}
            <path d="M6 8C6 7.5 6.5 7 7 7H17C17.5 7 18 7.5 18 8V18C18 19 17 20 16 20H8C7 20 6 19 6 18V8Z" fill="#f5f5f5"/>
            {/* Coffee liquid */}
            <path d="M6.5 9H17.5V17.5C17.5 18.3 16.8 19 16 19H8C7.2 19 6.5 18.3 6.5 17.5V9Z" fill="#8b4513"/>
            {/* Ice cubes */}
            <rect x="8" y="10" width="2" height="2" fill="#e6f3ff" opacity="0.8" rx="0.3"/>
            <rect x="13" y="11" width="2" height="2" fill="#e6f3ff" opacity="0.8" rx="0.3"/>
            <rect x="10" y="13" width="2" height="2" fill="#e6f3ff" opacity="0.8" rx="0.3"/>
            {/* Whipped cream on top */}
            <ellipse cx="12" cy="9" rx="5" ry="1.5" fill="#fff"/>
            {/* Straw */}
            <rect x="14" y="5" width="1.5" height="10" fill="#ff6b35" rx="0.5"/>
            {/* Cup handle */}
            <path d="M18 10C19.5 10 20.5 11 20.5 12.5C20.5 14 19.5 15 18 15" stroke="#d0d0d0" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
      ))}

      {/* Cheese Wedges - Fix colors */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`cheese-${i}`}
          className="supply absolute"
        >
          <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
            <path d="M12 4L20 18H4L12 4Z" fill={['#fef3c7', '#fff7ed', '#fef3c7'][i % 3]}/>
            <path d="M12 4L20 18H4L12 4Z" fill={['#fbbf24', '#fb923c', '#f59e0b'][i % 3]} opacity="0.8"/>
            <circle cx="10" cy="12" r="1" fill="white" opacity="0.8"/>
            <circle cx="14" cy="14" r="0.8" fill="white" opacity="0.8"/>
            <circle cx="12" cy="16" r="0.6" fill="white" opacity="0.8"/>
          </svg>
        </div>
      ))}

      {/* Crackers */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`cracker-${i}`}
          className="supply absolute"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
            {/* Cracker rectangle */}
            <rect x="4" y="6" width="16" height="12" rx="1" fill="#deb887"/>
            <rect x="4" y="6" width="16" height="12" rx="1" fill="#cd853f" opacity="0.6"/>
            {/* Cracker holes/texture */}
            <circle cx="8" cy="10" r="0.5" fill="#8b4513"/>
            <circle cx="12" cy="9" r="0.5" fill="#8b4513"/>
            <circle cx="16" cy="10" r="0.5" fill="#8b4513"/>
            <circle cx="10" cy="13" r="0.5" fill="#8b4513"/>
            <circle cx="14" cy="14" r="0.5" fill="#8b4513"/>
            <circle cx="18" cy="13" r="0.5" fill="#8b4513"/>
          </svg>
        </div>
      ))}

      {/* Small decorative dots - make bigger */}
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