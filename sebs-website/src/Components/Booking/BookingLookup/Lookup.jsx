import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import BookingSummary from "./BookingSummary";
import { getApiUrl } from "../../../Utils/apiConfig.js";
import { Heart, Search } from "lucide-react";

// Speech bubble with icon
function SpeechBubble({ icon, color }) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="absolute inset-0 rounded-xl bg-white border border-[#222] shadow" />
      {icon === "heart" ? (
        <Heart className={`relative z-10 w-8 h-8 ${color}`} />
      ) : (
        <Search className={`relative z-10 w-8 h-8 ${color}`} />
      )}
    </div>
  );
}

export default function Lookup() {
  const [bookingRef, setBookingRef] = useState("");
  const [fullName, setFullName] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Refs for bubbles (increase to 10 for more bubbles)
  const bubbleRefs = [
    useRef(), useRef(), useRef(), useRef(), useRef(),
    useRef(), useRef(), useRef(), useRef(), useRef()
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      bubbleRefs.forEach((ref, i) => {
        gsap.to(ref.current, {
          y: 20 + i * 6,
          x: i % 2 === 0 ? -16 : 16,
          rotate: i % 3 === 0 ? 10 : -10,
          duration: 2 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      });
    });
    return () => ctx.revert();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowSummary(false);

    fetch(`${getApiUrl()}/api/booking/lookup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookingReference: bookingRef,
        lastName: fullName,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        setBookingData(data);
        setShowSummary(true);
      })
      .catch(() => {
        setError("Booking not found. Please check your details.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-base-100">
      {/* More animated speech bubbles, scattered around */}
      <div ref={bubbleRefs[0]} className="absolute left-8 top-24 z-10">
        <SpeechBubble icon="heart" color="text-[#e5aac1]" />
      </div>
      <div ref={bubbleRefs[1]} className="absolute left-24 top-56 z-10">
        <SpeechBubble icon="search" color="text-[#8fc2c3]" />
      </div>
      <div ref={bubbleRefs[2]} className="absolute right-8 top-32 z-10">
        <SpeechBubble icon="search" color="text-[#8fc2c3]" />
      </div>
      <div ref={bubbleRefs[3]} className="absolute right-24 bottom-32 z-10">
        <SpeechBubble icon="heart" color="text-[#e5aac1]" />
      </div>
      <div ref={bubbleRefs[4]} className="absolute left-1/2 top-10 z-10">
        <SpeechBubble icon="heart" color="text-[#e5aac1]" />
      </div>
      <div ref={bubbleRefs[5]} className="absolute right-1/2 bottom-10 z-10">
        <SpeechBubble icon="search" color="text-[#8fc2c3]" />
      </div>
      <div ref={bubbleRefs[6]} className="absolute left-10 bottom-10 z-10">
        <SpeechBubble icon="search" color="text-[#8fc2c3]" />
      </div>
      <div ref={bubbleRefs[7]} className="absolute right-10 top-10 z-10">
        <SpeechBubble icon="heart" color="text-[#e5aac1]" />
      </div>
      <div ref={bubbleRefs[8]} className="absolute left-1/4 top-1/3 z-10">
        <SpeechBubble icon="heart" color="text-[#e5aac1]" />
      </div>
      <div ref={bubbleRefs[9]} className="absolute right-1/4 bottom-1/3 z-10">
        <SpeechBubble icon="search" color="text-[#8fc2c3]" />
      </div>

      <div className="relative z-20 w-full max-w-xl mx-auto flex flex-col items-center justify-center py-10">
        {/* Only show the form if NOT showing summary */}
        {!showSummary || !bookingData ? (
          <div
            className="bg-white border-2 border-[#222] rounded-[24px] shadow-lg w-full flex flex-col items-center"
            style={{
              fontFamily: "Montserrat, serif",
              boxShadow: "0 4px 24px 0 rgba(60,40,40,0.08)",
            }}
          >
            <div className="w-full px-10 pt-10 pb-6 flex flex-col items-center">
              <h1
                className="text-4xl md:text-5xl font-yeseva text-[#e5aac1] mb-2 text-center"
              >
                Find Your Booking
              </h1>
              <div className="h-4" />
              <p
                className="text-sm text-[#23404a] mb-2 text-center font-sans"
              >
                Enter your booking reference and last name to view your event details.
              </p>
            </div>
            <div className="w-full border-t border-[#222] flex flex-col items-center px-10 py-8">
              <form
                onSubmit={handleSearch}
                className="w-full flex flex-col gap-6 items-center"
                id="booking-form"
              >
                <div className="w-full">
                  <label className="block text-lg font-semibold text-[#23404a] mb-2 text-left font-sans">
                    Booking Reference
                  </label>
                  <input
                    type="text"
                    value={bookingRef}
                    onChange={(e) => setBookingRef(e.target.value)}
                    className="input input-bordered border-[#222] w-full h-12 text-lg focus:ring-2 focus:ring-[#e5aac1] font-sans bg-white"
                    placeholder="Enter your booking reference"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-lg font-semibold text-[#23404a] mb-2 text-left font-sans">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="input input-bordered border-[#222] w-full h-12 text-lg focus:ring-2 focus:ring-[#e5aac1] font-sans bg-white"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 w-full border-t border-[#222] mt-8 relative">
                  <button
                    type="button"
                    className="btn bg-white hover:bg-[#8fc2c3] border-2 border-gray-300 text-[#222] text-lg w-full h-14 rounded-bl-[22px] transition-all duration-300 font-semibold font-sans"
                    onClick={() => {
                      setBookingRef("");
                      setFullName("");
                      setShowSummary(false);
                      setBookingData(null);
                      setError("");
                    }}
                  >
                    Clear
                  </button>
                  {/* Divider */}
                  <div className="absolute left-1/2 top-0 h-full w-px bg-[#222] z-10" />
                  <button
                    type="submit"
                    className="btn bg-white hover:bg-[#e5aac1] border-2 border-gray-300 text-[#222] text-lg w-full h-14 rounded-br-[22px] transition-all duration-300 font-semibold font-sans"
                  >
                    Search Booking
                  </button>
                </div>
              </form>
              {loading && <div className="text-center text-lg mt-8">Loading...</div>}
              {error && <div className="text-center text-red-500 mt-8">{error}</div>}
            </div>
          </div>
        ) : null}
        {/* Show summary only when showSummary and bookingData are true */}
        {showSummary && bookingData && (
          <BookingSummary
            booking={bookingData}
            onExit={() => {
              setShowSummary(false);
              setBookingData(null);
              setError("");
            }}
          />
        )}
      </div>
    </div>
  );
}
