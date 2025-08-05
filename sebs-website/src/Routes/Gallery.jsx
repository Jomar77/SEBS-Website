// src/components/BentCarousel.js

import GalleryShowcase from "../Components/Gallery/ShowcaseGallery/GalleryShowcase";
import CurvedCarousel from "../Components/Gallery/CarouselGallery/ParallaxCarousel";
import RecentEvent from "../Components/Gallery/RecentEvent";
import EventPackageSection from "../Components/Common/EventPackageSection/EventPackageSection";

export default function Gallery() {
  // Sample gallery data for event planning business
  const galleryPanels = [
    '#FF7F50', // Coral - Wedding Ceremony
    '#FFD700', // Gold - Corporate Event  
    '#7FB3D3', // Sky Blue - Birthday Party
    '#DDA0DD', // Plum - Anniversary
    '#98FB98', // Light Green - Baby Shower
    '#F0E68C', // Khaki - Graduation
    '#FFA07A', // Light Salmon - Engagement
    '#87CEEB'  // Sky Blue - Reunion
  ];

  return (
    <>
      <div>
        <CurvedCarousel panels={galleryPanels} />
        <RecentEvent />
        <GalleryShowcase />
        <EventPackageSection />
      </div>
    </>
  );
}
