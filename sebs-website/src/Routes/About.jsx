import React from "react";
import AboutForm from "../Components/About/AboutForm";
import EventPackageSection from "../Components/Common/EventPackageSection/EventPackageSection";

export default function About() {
  return (
    <div className="bg-base-100 text-base-content">
      <section className="px-6 py-12">
        <h2 className="text-4xl font-bold text-center">About us</h2>
        <p className="max-w-2xl mx-auto mt-4 text-center">
          Welcome to diwqinds, where creativity, flavor, and unforgettable
          moments come to life in Invercargill, New Zealand...
        </p>
        <div className="flex justify-center space-x-6 mt-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center text-white"
            >
              P&amp;P
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            Psalm &amp; Platter: Elegance Meets Flavor
          </h3>
          <p>Our celebration deserves more than just food...</p>
        </div>
        <div className="bg-secondary h-40"></div>

        <div className="bg-secondary h-40"></div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary">
            The Arkives: Capture The Moment
          </h3>
          <p>Say cheese—and let the enchantment begin!...</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            Psalm &amp; Platter: Elegance Meets Flavor
          </h3>
          <p>Our celebration deserves more than just food...</p>
        </div>
        <div className="bg-secondary h-40"></div>
      </section>

      <AboutForm />

      <EventPackageSection/>
    </div>
  );
}
