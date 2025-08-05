import React from "react";
import { useLocation } from "react-router-dom";

const steps = [
  { label: "Service", path: "/booking/service" },
  { label: "Date", path: "/booking/date" },
  { label: "Details", path: "/booking/details" },
];

export default function ProgressBar() {
  const location = useLocation();
  const currentIdx = steps.findIndex(s => location.pathname.includes(s.path.split("/")[2]));

  return (
    <div className="w-full flex justify-center py-6 bg-base-200">
      <ul className="steps w-1/2">
        {steps.map((step, idx) => (
          <li
            key={step.label}
            className={`step ${idx <= currentIdx ? "step-primary" : ""}`}
          >
            {step.label}
          </li>
        ))}
      </ul>
    </div>
  );
}