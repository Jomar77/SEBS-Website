import React from 'react';
import GalleryGrid from './GalleryGrid';

const GalleryShowcase = () => {
  const eventImages = [
    { bgColor: 'bg-pink-300', alt: 'Event photo 1' },
    { bgColor: 'bg-teal-400', alt: 'Event photo 2' },
    { bgColor: 'bg-yellow-300', alt: 'Event photo 3' },
    { bgColor: 'bg-orange-400', alt: 'Event photo 4' },
    { bgColor: 'bg-orange-500', alt: 'Event photo 5' },
    { bgColor: 'bg-pink-300', alt: 'Event photo 6' },
    { bgColor: 'bg-teal-400', alt: 'Event photo 7' },
    { bgColor: 'bg-yellow-300', alt: 'Event photo 8' },
    { bgColor: 'bg-teal-400', alt: 'Event photo 9' },
    { bgColor: 'bg-yellow-300', alt: 'Event photo 10' },
    { bgColor: 'bg-orange-400', alt: 'Event photo 11' },
    { bgColor: 'bg-pink-300', alt: 'Event photo 12' },
  ];

  return (
    <GalleryGrid 
      title="Event #1"
      images={eventImages}
      bgColor="bg-gray-50"
      titleColor="text-gray-800"
    />
  );
};

export default GalleryShowcase;