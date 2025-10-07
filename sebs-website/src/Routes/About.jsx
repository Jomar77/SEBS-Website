import React from "react";
import AboutForm from "../Components/About/AboutForm";
import EventPackageSection from "../Components/Common/EventPackageSection/EventPackageSection";
import AboutIntroduction from "../Components/About/AboutIntroduction";
import AboutShowcase from "../Components/About/AboutShowcase";

export default function About() {
  return (
    <>
      <AboutIntroduction />
      <AboutShowcase />
      <AboutForm />
      <EventPackageSection />
    </>
  );
}
