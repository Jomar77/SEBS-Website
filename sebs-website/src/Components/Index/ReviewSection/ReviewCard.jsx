import React from "react";

export default function ReviewCard({ name, date, text }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-4">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
          {name[0]}
        </div>
        <div>
          <div className="font-semibold text-base-content">{name}</div>
          <div className="text-xs text-base-content/70">{date}</div>
        </div>
      </div>
      <p className="text-base-content text-sm">{text}</p>
    </div>
  );
}
