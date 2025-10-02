import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import WavePattern from '../Common/WavePattern';

export default function GalleryShowcase() {
  const [recentEventPhotos, setRecentEventPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedEvent, setExpandedEvent] = useState('recent'); // Start expanded
  const expandedGridRef = useRef(null);
  const initialGridRef = useRef(null);

  // Hardcoded featured event colors
  const featuredEventColors = [
    '#9333EA', '#EC4899', '#10B981', '#F59E0B'
  ];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SEBS_API_URL}/api/events/recent`)
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => {
        setRecentEventPhotos(data.photos || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch recent event photos:', error);
        setLoading(false);
      });
  }, []);

  // GSAP animation for expanded photos
  useEffect(() => {
    if (expandedEvent && expandedGridRef.current) {
      const ctx = gsap.context(() => {
        const expandedBoxes = expandedGridRef.current.querySelectorAll('.expanded-box');
        
        gsap.fromTo(expandedBoxes, 
          { opacity: 0, y: 30, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)"
          }
        );
      }, expandedGridRef);

      return () => ctx.revert();
    }
  }, [expandedEvent]);

  // GSAP animation for initial load (all photos)
  useEffect(() => {
    if (!loading && initialGridRef.current) {
      const ctx = gsap.context(() => {
        const allBoxes = initialGridRef.current.querySelectorAll('.photo-box');
        
        gsap.fromTo(allBoxes, 
          { opacity: 0, y: 30, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)"
          }
        );
      }, initialGridRef);

      return () => ctx.revert();
    }
  }, [loading]);

  // GSAP animation for Recent Event toggle
  useEffect(() => {
    if (expandedEvent === 'recent' && initialGridRef.current) {
      const ctx = gsap.context(() => {
        const allBoxes = initialGridRef.current.querySelectorAll('.photo-box');
        
        // Only animate boxes that aren't already visible (index 4+)
        const newBoxes = Array.from(allBoxes).slice(4);
        
        if (newBoxes.length > 0) {
          gsap.fromTo(newBoxes, 
            { opacity: 0, y: 30, scale: 0.9 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)"
            }
          );
        }
      }, initialGridRef);

      return () => ctx.revert();
    }
  }, [expandedEvent]);

  const handleLookClick = (eventType) => {
    setExpandedEvent(expandedEvent === eventType ? null : eventType);
  };

  return (
    <>
      {/* Recent Event Section with Wave Background */}
      <div className={`relative w-full overflow-hidden bg-gradient-to-br from-blue-50 to-pink-50 transition-all duration-700 ease-in-out ${
        expandedEvent === 'recent' ? 'min-h-screen' : 'h-auto'
      }`}>
        <div className={`absolute inset-0 z-0 transition-opacity duration-700 ${
          expandedEvent === 'recent' ? 'opacity-100' : 'opacity-30'
        }`}>
          <WavePattern />
        </div>
        
        <div className={`relative z-10 p-8 transition-all duration-700 ${
          expandedEvent === 'recent' ? 'min-h-screen flex items-center' : 'py-16'
        }`}>
          <div className="w-full">
            <h1 className="text-6xl font-bold text-gray-800 mb-12 text-center">
              Recent Event
            </h1>
            
            <div className="flex flex-col items-center justify-center">
              {/* Show all photos by default or first 4 when collapsed */}
              <div ref={initialGridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {loading ? (
                  Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className="w-64 h-64 bg-gray-200 animate-pulse rounded-lg"></div>
                  ))
                ) : recentEventPhotos.length > 0 ? (
                  // Show all photos when expanded, first 4 when collapsed
                  recentEventPhotos
                    .slice(0, expandedEvent === 'recent' ? recentEventPhotos.length : 4)
                    .map((photo, index) => (
                      <div 
                        key={photo.id || index}
                        className="photo-box w-64 h-64 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                        style={{
                          backgroundImage: `url(${photo.url || photo.image_url})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundColor: '#f3f4f6'
                        }}
                      />
                    ))
                ) : (
                  // Fallback colored boxes - show all 8 when expanded, first 4 when collapsed
                  Array.from({ 
                    length: expandedEvent === 'recent' ? 8 : 4 
                  }, (_, index) => {
                    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FCEA2B', '#FF9FF3', '#54A0FF', '#5F27CD'];
                    return (
                      <div 
                        key={index}
                        className="photo-box w-64 h-64 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                        style={{ backgroundColor: colors[index % colors.length] }}
                      />
                    );
                  })
                )}
              </div>
              
              <button 
                onClick={() => handleLookClick('recent')}
                className="btn btn-lg bg-pink-400 hover:bg-pink-500 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none"
              >
                {expandedEvent === 'recent' ? 'Show Less' : 'Look!'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Event Section - Plain Background */}
      <div className="min-h-screen w-full bg-white">
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-12 text-center">
            Featured Event
          </h1>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredEventColors.map((color, index) => (
              <div 
                key={index}
                className="w-64 h-64 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Expanded featured photos - show when featured event is expanded */}
          {expandedEvent === 'featured' && (
            <div ref={expandedGridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {Array.from({ length: 8 }, (_, index) => (
                <div 
                  key={`featured-expanded-${index}`}
                  className="expanded-box w-64 h-64 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                  style={{
                    backgroundColor: featuredEventColors[index % featuredEventColors.length]
                  }}
                />
              ))}
            </div>
          )}
          
          <button 
            onClick={() => handleLookClick('featured')}
            className="btn btn-lg bg-pink-400 hover:bg-pink-500 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none"
          >
            {expandedEvent === 'featured' ? 'Show Less' : 'Look!'}
          </button>
        </div>
      </div>
    </>
  );
}