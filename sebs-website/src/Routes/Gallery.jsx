// src/components/BentCarousel.js

import GalleryShowcase from "../Components/Gallery/ShowcaseGallery/GalleryShowcase";
import CurvedCarousel from "../Components/Gallery/CarouselGallery/ParallaxCarousel";
import EventPackageSection from "../Components/Common/EventPackageSection/EventPackageSection";
import { useHighlights } from "../Hooks/useHighlights";

export default function Gallery() {
  const { highlights, loading, error } = useHighlights();

  return (
    <>
      <div className="w-full max-w-7xl mx-auto">
        {loading && (
          <div className="flex items-center justify-center w-full h-64 text-lg">
            Loading gallery...
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center w-full h-64 text-red-500">
            Failed to load gallery images.
          </div>
        )}
        {!loading && !error && highlights.length > 0 && (
          <CurvedCarousel panels={highlights} />
        )}
        <GalleryShowcase />
        <EventPackageSection />
      </div>
    </>
  );
}
