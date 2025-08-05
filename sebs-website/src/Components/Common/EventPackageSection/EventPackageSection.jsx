import { useState } from "react";
import PackageCard from "./PackageCard";

export default function EventPackageSection() {
  const packages = [
    { price: "$300", title: "Package A", description: "Lorem Ipsum" },
    { price: "$450", title: "Package B", description: "Lorem Ipsum" },
    { price: "$600", title: "Package C", description: "Lorem Ipsum" },
    { price: "$800", title: "Package D", description: "Lorem Ipsum" },
    { price: "$1000", title: "Package E", description: "Lorem Ipsum" },
    { price: "$1200", title: "Package F", description: "Lorem Ipsum" },
    { price: "$1500", title: "Package G", description: "Lorem Ipsum" },
    { price: "$1800", title: "Package H", description: "Lorem Ipsum" },
    { price: "$2000", title: "Package I", description: "Lorem Ipsum" },
    { price: "$2500", title: "Package J", description: "Lorem Ipsum" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, packages.length - 2);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 2, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 2, 0));
  };

  return (
    <section className="w-full px-25 py-45 bg-[#fff]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
        {/* Left side - Text content */}
        <div className="text-center lg:text-left max-w-xl">
          <h3 className="text-5xl font-corben-reg text-gray-800 mb-6">
            Your Event Toolkit
          </h3>
          <p className="text-gray-600 font-corben-reg leading-relaxed">
            Lorem ipsum dolor sit amet. Et sunt accusamus sit enim odit et
            numquam repellat non deleniti reprehenderit sit minima dolorem.
            Aut consequatur dolore hic doloribus quia ab labore molestias ad
            voluptas omnis? Et rerum consequatur non explicabo odio non iusto
            eveniet est praesentium mollitia et galisum sint.
          </p>
        </div>

        {/* Right side - Package cards */}
        <div className="flex flex-col items-center">
          {/* Mobile: DaisyUI carousel */}
          <div className="carousel carousel-center w-full max-w-sm p-4 space-x-4 lg:hidden overflow-x-auto">
            {packages.map((pkg, i) => (
              <div key={i} className="carousel-item">
                <PackageCard pkg={pkg} index={i} />
              </div>
            ))}
          </div>

          {/* Desktop: Custom carousel */}
          <div className="hidden lg:flex items-center">
            <div className="carousel w-full max-w-md overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (192 + 16)}px)`,
                }}
              >
                {packages.map((pkg, i) => (
                  <div key={i} className="flex-none">
                    <PackageCard pkg={pkg} index={i} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex flex-col gap-2 ml-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="btn btn-circle btn-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="btn btn-circle btn-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}