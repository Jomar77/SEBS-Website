import React from "react";
import AboutForm from "../Components/About/AboutForm";
import EventPackageSection from "../Components/Common/EventPackageSection/EventPackageSection";
import AboutIntroduction from "../Components/About/AboutIntroduction";
import AboutShowcase from "../Components/About/AboutShowcase";


export default function About() {
  return (
    <div className="bg-base-100 text-base-content overflow-x-hidden">
      <AboutIntroduction />

      <AboutShowcase />

      <AboutForm />

      <EventPackageSection />
    </div>
  );
}
