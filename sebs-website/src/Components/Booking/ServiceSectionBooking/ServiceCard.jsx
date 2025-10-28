import React from "react";

export default function ServiceCard({ price, title, desc, highlight, onClick, imageUrl, imageAlt }) {
  return (
    <div
      className={`relative bg-white p-4 shadow-lg flex flex-col justify-center items-center cursor-pointer text-center transition-all duration-300 hover:scale-105 hover:bg-[#eea9c2] hover:shadow-2xl`}
      style={{
        width: "280px",
        borderRadius: "2px",
      }}
      onClick={onClick}
    >
      {/* Image or Photo area - polaroid style */}
      {imageUrl ? (
        <div className="w-full h-48 mb-4 overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt || title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-48 bg-[#fcc8ba] mb-4" />
      )}

      {/* White space below photo - typical polaroid style */}
      <div className="bg-transparent p-4 -mt-4">
        {/* Price tag */}
        <div className="inline-block bg-base-200 text-secondary-content rounded-lg px-4 py-1 text-sm font-semibold mb-3">
          {price}
        </div>

        {/* Title */}
        <div className="text-lg font-bold text-[#0e465a] mb-1 text-left font-handwriting">
          {title}
        </div>

        {/* Description */}
        <div className="text-sm text-[#0e465a] text-center opacity-70 font-handwriting">
          {desc}
        </div>
      </div>
    </div>
  );
}
