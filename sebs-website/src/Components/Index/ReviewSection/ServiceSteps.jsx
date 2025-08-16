import React from "react";
import {
  FaMousePointer,
  FaCalendarAlt,
  FaClipboardCheck,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaMousePointer className="text-6xl mx-auto mb-2" style={{ color: "#fb8950" }} />,
    label: "Choose a service",
  },
  {
    icon: <FaCalendarAlt className="text-6xl mx-auto mb-2" style={{ color: "#ffc571" }} />,
    label: "Choose a date",
  },
  {
    icon: <FaClipboardCheck className="text-6xl mx-auto mb-2" style={{ color: "#efaac3" }} />,
    label: "Book with us",
  },
];

export default function ServiceSteps() {
  return (
    <div className="flex justify-center w-full gap-35 py-10 bg-[#fff]">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">
          {/* Icon with rounded square background */}
          <div className="flex items-center justify-center w-25 h-25 rounded-xl bg-[#faf4eb] mb-4">
            {step.icon}
          </div>
          {/* Label with pill background and custom color */}
          <span className="px-9 py-2 rounded-lg bg-[#faf4eb] text-[#bb8c7d] text-sm font-light font-corben-reg">
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
}
