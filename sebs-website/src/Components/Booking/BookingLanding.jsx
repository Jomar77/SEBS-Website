import React from "react";
import { Link } from "react-router-dom";

export default function BookingLanding() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="text-center max-w-2xl mx-auto p-8">
        <h1 className="text-6xl font-serif font-bold text-primary mb-6">
          Book Your Event
        </h1>
        <p className="text-xl text-base-content mb-8">
          Let us help you create an unforgettable experience. Start by selecting
          your perfect service package.
        </p>
        <Link
          to="/booking/service"
          className="btn btn-primary btn-lg text-xl px-8 py-4 hover:btn-secondary transition-all duration-300 hover:scale-105"
        >
          Start Booking
        </Link>
        <div className=" pt-6 border-t border-base-300">
          <p className="text-base text-base-content/70 mb-4">
            Already have a booking with us?
          </p>
          <Link
            to="/booking/manage"
            className="btn btn-outline btn-sm hover:btn-secondary transition-all duration-300 hover:scale-105"
          >
            Manage Your Booking
          </Link>
        </div>
      </div>
    </div>
  );
}
