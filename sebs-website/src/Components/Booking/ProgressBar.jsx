import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const steps = [
  { label: "Service", path: "/booking/service" },
  { label: "Date", path: "/booking/date" },
  { label: "Details", path: "/booking/details" },
];

export default function ProgressBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIdx = steps.findIndex(s => location.pathname.includes(s.path.split("/")[2]));

  const handleBack = () => {
    if (currentIdx > 0) {
      navigate(steps[currentIdx - 1].path);
    }
  };

  const handleContinue = () => {
    if (currentIdx < steps.length - 1) {
      navigate(steps[currentIdx + 1].path);
    }
  };

  return (
    <div className="w-full bg-base-100">
      <div className="flex justify-center items-center py-6 px-16">
        <style jsx>{`
          .steps .step-primary + .step-primary:before,
          .steps .step-primary:after {
            background-color: #79803c !important;
            border-color: #79803c !important;
            color: white !important;
          }
          .steps .step-primary:before {
            background-color: #79803c !important;
            border-color: #79803c !important;
            color: white !important;
          }
          .steps .step:before {
            color: #204558 !important;
            border-color: #204558 !important;
          }
        `}</style>
        
        <button
          onClick={handleBack}
          disabled={currentIdx === 0}
          className="btn btn-outline border-[#204558] text-[#204558] hover:bg-[#204558] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed mr-8"
        >
          ← Back
        </button>
        
        <ul className="steps flex-1 text-[#204558]">
          {steps.map((step, idx) => (
            <li
              key={step.label}
              className={`step ${idx <= currentIdx ? "step-primary" : ""}`}
            >
              {step.label}
            </li>
          ))}
        </ul>
        
        <button
          onClick={handleContinue}
          disabled={currentIdx === steps.length - 1}
          className="btn bg-[#79803c] text-white hover:bg-[#6a6f33] disabled:opacity-50 disabled:cursor-not-allowed ml-8"
        >
          Next →
        </button>
      </div>
    </div>
  );
}