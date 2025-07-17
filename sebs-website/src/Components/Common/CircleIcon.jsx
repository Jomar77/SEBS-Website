import React from "react";

const CircleIcon = ({ size = 24 }) => {
  const dimension = typeof size === "number" ? `${size}px` : size;
  return (
    <div
      className="rounded-full bg-green-600 flex items-center justify-center text-white"
      style={{ width: dimension, height: dimension }}
    >
      P&amp;P
    </div>
  );
};

export default CircleIcon;
