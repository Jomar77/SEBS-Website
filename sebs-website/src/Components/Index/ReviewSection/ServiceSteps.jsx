import React from "react";
import { FaTools, FaCalendarAlt, FaClipboardCheck } from "react-icons/fa";

const steps = [
  {
    icon: <FaTools className="text-3xl mx-auto mb-2 text-primary" />,
    label: "Pick a service",
  },
  {
    icon: <FaCalendarAlt className="text-3xl mx-auto mb-2 text-primary" />,
    label: "Choose a date",
  },
  {
    icon: <FaClipboardCheck className="text-3xl mx-auto mb-2 text-primary" />,
    label: "Book with us",
  },
];

export default function ServiceSteps() {
  return (
    <div className="flex justify-center gap-8 py-8 bg-base-100">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">
          {step.icon}
          <span className="mt-2 font-semibold text-base-content">{step.label}</span>
        </div>
      ))}
    </div>
  );
}
