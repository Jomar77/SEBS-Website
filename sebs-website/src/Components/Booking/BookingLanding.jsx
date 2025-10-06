import React from "react";
import { Link } from "react-router-dom";
import AnimatedBackground from "../Index/AnimatedBackground/AnimatedBackground";

export default function BookingLanding() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-base-100 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto p-8">
        {/* White background container matching reference */}
        <div className="bg-white rounded-3xl shadow-xl p-12 relative border-4 border-gray-100">
          {/* Decorative border lines */}
          <div className="absolute top-4 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute top-4 bottom-4 left-4 w-0.5 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute top-4 bottom-4 right-4 w-0.5 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
          
          <h1 className="font-bold font-yeseva text-7xl mb-2 tracking-wider">
            <span className="text-[#efaac3]">B</span>
            <span className="text-[#ffba51]">O</span>
            <span className="text-[#8fc2c3]">O</span>
            <span className="text-[#fcc8ba]">K</span>
          </h1>
          <h2 className="font-bold  font-yeseva text-7xl mb-8 tracking-wider">
            <span className="text-[#8fc2c3]">W</span>
            <span className="text-[#fcc8ba]">I</span>
            <span className="text-[#ffba51]">T</span>
            <span className="text-[#efaac3]">H</span>
            <span className="text-[#8fc2c3]"> </span>
            <span className="text-[#ffba51]">U</span>
            <span className="text-[#fcc8ba]">S</span>
          </h2>

          <Link
            to="/booking/service"
            className="bg-[#efaac3] hover:bg-[#e89bb4] text-white font-bold py-2 px-6 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block mb-5 tracking-wide"
          >
            START BOOKING
          </Link>
          
          <div className="pt-4 border-t border-gray-200 mt-2">
            <p className="font-corben-reg text-lg text-[#0e465a] mb-6">
              Already have a booking with us?
            </p>
            <Link
              to="/booking/manage"
              className="btn btn-outline border-2 border-[#efaac3] text-[#efaac3] hover:bg-[#efaac3] hover:text-white transition-all duration-300 hover:scale-105 px-8 py-2 rounded-full"
            >
              Manage Your Booking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
