import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ price, title, desc, highlight, to }) {
  return (
    <div
      className={`flex flex-col items-center rounded-lg shadow-lg p-6 w-64 m-2 bg-neutral-50 transition duration-200 hover:bg-pink-300 hover:scale-105`}
    >
      <div className="w-full h-32 bg-pink-200 rounded-md mb-4" />
      <div className="bg-neutral-100 text-pink-400 rounded-full px-5 py-2 text-lg font-semibold mb-2">
        {price}
      </div>
      <div className="text-lg font-bold text-cyan-900 mb-1 text-center">{title}</div>
      <div className="text-sm text-cyan-900 text-center opacity-70 mb-2">{desc}</div>
      {to && (
        <Link
          to={to}
          className="mt-2 px-4 py-2 bg-cyan-900 text-white rounded hover:bg-cyan-700 transition"
        >
          Book Now
        </Link>
      )}
    </div>
  );
}
