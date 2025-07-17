import React from "react";
import AboutForm from "../Components/About/AboutForm";
import EventPackageSection from "../Components/Common/EventPackageSection/EventPackageSection";
import AboutIntroduction from "../Components/About/AboutIntroduction";
import AboutShowcase from "../Components/About/AboutShowcase";
import CircleIcon from "../Components/Common/CircleIcon";


export default function About() {
  return (
    <div className="bg-base-100 text-base-content overflow-x-hidden">
      <AboutIntroduction />

      {/* Circle Icons row, only visible on md+ screens, layered above AboutIntroduction */}
      <div className="relative flex justify-evenly items-end w-full max-w-full md:mt-[-60px] md:mb-8 md:gap-8 md:translate-y-30 hidden md:flex z-10">   
        {[...Array(4)].map((_, i) => (
          <CircleIcon key={i} size={i % 2 === 0 ? 250 : 150} />
        ))}
      </div>

      <AboutShowcase />

      <AboutForm />

      <EventPackageSection />
    </div>
  );
}
