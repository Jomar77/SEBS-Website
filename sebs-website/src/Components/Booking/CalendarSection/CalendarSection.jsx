import { useState } from "react";
import CalendarMonth from "./CalendarMonth";
import WavePattern from "../../Common/WavePattern";

export default function CalendarSection({ onDateSelect }) {
  const now = new Date();
  const [startYear, setStartYear] = useState(now.getFullYear());
  const [startMonth, setStartMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);

  // Prevent navigating to past months
  const isPrevDisabled =
    startYear === now.getFullYear() && startMonth === now.getMonth();

  // Handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  // Handle confirm button click
  const handleConfirmDate = () => {
    console.log("Confirm button clicked");
    console.log("selectedDate:", selectedDate);
    console.log("onDateSelect:", onDateSelect);
    
    if (selectedDate && onDateSelect) {
      console.log("Calling onDateSelect with:", selectedDate);
      onDateSelect(selectedDate);
    } else {
      console.log("Missing selectedDate or onDateSelect");
    }
  };

  // Format selected date for display
  const formatSelectedDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Next button handler
  const handleNext = () => {
    let newMonth = startMonth + 1;
    let newYear = startYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setStartYear(newYear);
    setStartMonth(newMonth);
  };

  // Prev button handler
  const handlePrev = () => {
    let newMonth = startMonth - 1;
    let newYear = startYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }
    // Prevent going to months before current
    if (
      newYear < now.getFullYear() ||
      (newYear === now.getFullYear() && newMonth < now.getMonth())
    ) {
      return;
    }
    setStartYear(newYear);
    setStartMonth(newMonth);
  };

  return (
    <section className="relative py-4 overflow-hidden bg-base-100 text-base-content">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <WavePattern />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-5xl font-serif font-bold text-center text-[#0e465a] mt-12 mb-10">
          Choose a date
        </h2>
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl mx-auto items-center mb-12">
          <div className="relative flex items-center w-full justify-between px-8">
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className="btn btn-circle btn-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-50 z-10"
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
            
            <div className="flex gap-8 transition-transform duration-500 ease-in-out">
              <CalendarMonth
                year={startYear}
                month={startMonth}
                onDateSelect={handleDateSelect}
                selectedDate={selectedDate}
              />
              <CalendarMonth
                year={startMonth === 11 ? startYear + 1 : startYear}
                month={startMonth === 11 ? 0 : startMonth + 1}
                onDateSelect={handleDateSelect}
                selectedDate={selectedDate}
              />
            </div>
            
            <button
              onClick={handleNext}
              className="btn btn-circle btn-sm bg-gray-100 hover:bg-gray-200 z-10"
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

          {/* Selected date confirmation section */}
          {selectedDate && (
            <div className="w-full flex flex-col items-center mt-8 space-y-4">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="font-corben-reg text-2xl text-gray-700 mb-2">
                  Selected Date
                </h3>
                <p className="text-xl font-bold text-[#f8d1d6] mb-4">
                  {formatSelectedDate(selectedDate)}
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => setSelectedDate(null)}
                    className="btn btn-outline btn-sm text-[#204558] border-[#204558] hover:bg-[#204558] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmDate}
                    className="btn btn-sm bg-[#f8d1d6] text-[#204558] hover:bg-[#f0c4ca] border-[#f8d1d6]"
                    style={{ pointerEvents: 'auto', zIndex: 1000 }}
                    onMouseEnter={() => console.log("Button hovered")}
                  >
                    Confirm Date
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
