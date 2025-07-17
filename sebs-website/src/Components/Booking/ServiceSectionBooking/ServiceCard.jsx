import React from "react";

export default function ServiceCard({ price, title, desc, highlight, onClick }) {
  return (
    <div
      className={`card w-80 bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-all ${
        highlight ? "ring-2 ring-primary" : ""
      }`}
      onClick={onClick}
    >
      <div className="w-full h-32 bg-pink-200 rounded-md mb-4" />
      <div className="bg-neutral-100 text-pink-400 rounded-full px-5 py-2 text-lg font-semibold mb-2">
        {price}
      </div>
      <div className="text-lg font-bold text-cyan-900 mb-1 text-center">{title}</div>
      <div className="text-sm text-cyan-900 text-center opacity-70 mb-2">{desc}</div>
    </div>
  );
}
