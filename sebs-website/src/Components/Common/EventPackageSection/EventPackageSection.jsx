import { useState, useEffect } from "react";
import PackageCard from "./PackageCard";
import { getApiUrl } from "../../../Utils/apiConfig";

export default function EventPackageSection() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Fetch services from API
  useEffect(() => {
    const apiUrl = getApiUrl();
    fetch(`${apiUrl}/api/Public/services`)
      .then((res) => res.ok ? res.json() : Promise.reject(res))
      .then((data) => {
        // Transform API data to match PackageCard format
        const transformedPackages = data.map((service) => ({
          id: service.serviceID,
          price: `$${service.basePrice}`,
          title: service.name,
          description: service.description,
          imageUrl: service.imageUrl ? `${apiUrl}${service.imageUrl}` : null,
          imageAlt: service.image?.fileName || service.name,
        }));
        setPackages(transformedPackages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch services:", error);
        setLoading(false);
      });
  }, []);
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
            Plan your perfect occasion with ease using our all-in-one Event
            Toolkit. From curated venue options to tailored service packages,
            everything you need to organize, manage, and elevate your event
            experience is here. Discover flexible plans designed to fit your
            style and budget — so you can focus on creating moments that matter.
          </p>
        </div>

        {/* Right side - Package cards */}
        <div className="flex flex-col items-center">
          {loading ? (
            // Loading skeleton
            <div className="flex gap-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className="w-48 h-64 bg-base-200 animate-pulse rounded-lg"
                />
              ))}
            </div>
          ) : packages.length > 0 ? (
            <>
              {/* Mobile: DaisyUI carousel */}
              <div className="carousel carousel-center w-full max-w-sm p-4 space-x-4 lg:hidden overflow-x-auto">
                {packages.map((pkg, i) => (
                  <div key={pkg.id || i} className="carousel-item">
                    <PackageCard pkg={pkg} index={i} />
                  </div>
                ))}
              </div>

              {/* Desktop: Custom carousel */}
              <div className="hidden lg:flex items-center">
                <div
                  className="carousel overflow-hidden"
                  style={{ width: "408px" }}
                >
                  {" "}
                  {/* Reduced from 432px to hide shadow bleeding */}
                  <div
                    className="flex gap-6 transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(-${currentIndex * (192 + 24)}px)`,
                    }}
                  >
                    {packages.map((pkg, i) => (
                      <div key={pkg.id || i} className="flex-none">
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
            </>
          ) : (
            // Fallback when no services available
            <div className="text-center text-gray-500 py-12">
              No service packages available at this time.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
