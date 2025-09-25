import React, { useState } from "react";
import WavePattern from "../../Common/WavePattern";
import BookingSummary from "./BookingSummary";
import { getApiUrl } from "../../../Utils/apiConfig.js";

export default function Lookup() {
  const [bookingRef, setBookingRef] = useState("");
  const [fullName, setFullName] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowSummary(false);
    
    

    try {
      const res = await fetch(`${getApiUrl()}/api/booking/lookup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingReference: bookingRef,
          lastName: fullName,
        }),
      });
      if (!res.ok) throw new Error("Booking not found");
      const data = await res.json();

      // // Filler data for demo/testing
      // const data = {
      //   bookingID: 123,
      //   bookingDate: "2025-07-29T03:23:34.751Z",
      //   status: "Confirmed",
      //   bookingReference: bookingRef,
      //   customerName: fullName,
      //   customerEmail: "sample@email.com",
      //   customerPhone: "0917-123-4567",
      //   eventDetails: {
      //     eventID: 1,
      //     eventDate: "2025-08-15T18:00:00.000Z",
      //     location: "123 Main St, City",
      //     eventType: 1,
      //     status: 1,
      //     name: "Birthday Party",
      //     notes: "No peanuts",
      //     eventServices: [
      //       {
      //         eventServiceID: 1,
      //         eventID: 1,
      //         serviceID: 2,
      //         customPrice: 5000,
      //         quantity: 1,
      //         notes: "",
      //         serviceName: "Photobooth",
      //         serviceDescription: "Unlimited prints for 3 hours",
      //         serviceBasePrice: 5000,
      //       },
      //     ],
      //     meetings: [],
      //   },
      //   approvedByName: "Jane Doe",
      //   approvedDate: "2025-07-30T10:00:00.000Z",
      // };

      setBookingData(data);
      setShowSummary(true);
    } catch (err) {
      setError("Booking not found. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-base-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
        <WavePattern />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl p-8 pb-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-12 md:flex md:gap-30 items-center justify-center">
          <div className="flex-1 align-start text-left md:pr-10 ">
            <h1 className="text-5xl md:text-6xl font-serif text-[#e5aac1] mb-12 text-left">
              Find Your Booking
            </h1>

            <form onSubmit={handleSearch} className="space-y-8">
              <div>
                <label className="block text-lg font-medium text-[#5a7a8a] mb-3">
                  Booking Reference
                </label>
                <input
                  type="text"
                  value={bookingRef}
                  onChange={(e) => setBookingRef(e.target.value)}
                  className="input input-bordered border-base-content w-full h-14 text-lg focus:ring-2 focus:ring-[#e5aac1]"
                  placeholder="Enter your booking reference"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-[#5a7a8a] mb-3">
                  Last Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="input input-bordered border-base-content w-full h-14 text-lg focus:ring-2 focus:ring-[#e5aac1]"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn bg-[#e5aac1] hover:bg-[#d194b3] border-none text-white text-lg w-full h-14 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Search Booking
              </button>
            </form>
          </div>
          <div className="text-center mt-8 flex-none md:pr-20">
            <p className="text-lg text-[#5a7a8a]">
              Need help?{" "}
              <a
                href="mailto:support@example.com"
                className="text-[#e5aac1] hover:underline"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
      {showSummary && bookingData && (
        <div className="w-full">
          <div className="divider divider-secondary text-4xl font-bold text-center mb-2 text-[#173D3D]">
            Booking Summary
          </div>
          <BookingSummary booking={bookingData} />
        </div>
      )}
      {loading && <div className="text-center text-lg mt-8">Loading...</div>}
      {error && <div className="text-center text-red-500 mt-8">{error}</div>}
    </div>
  );
}
