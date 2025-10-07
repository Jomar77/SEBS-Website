import React from "react";
import { Link } from "react-router-dom";
import AnimatedBackground from "../Index/AnimatedBackground/AnimatedBackground";

export default function BookingLanding() {
  return (
    <div className="relative min-h-screen flex bg-base-100 overflow-hidden">
      {/* Left Side - Content */}
      <div className="w-1/2 flex items-center justify-center bg-[#f5f1eb] p-8">
        <div className="max-w-md text-center">
          <h1 className="font-yeseva text-4xl mb-6 text-[#8b4a6b] leading-tight">
            <span className="text-[#efaac3]">B</span>
            <span className="text-[#ffba51]">O</span>
            <span className="text-[#8fc2c3]">O</span>
            <span className="text-[#fcc8ba]">K</span>
            <br />
            <span className="text-[#8fc2c3]">W</span>
            <span className="text-[#fcc8ba]">I</span>
            <span className="text-[#ffba51]">T</span>
            <span className="text-[#efaac3]">H</span>
            <span className="text-[#8fc2c3]"> </span>
            <span className="text-[#ffba51]">U</span>
            <span className="text-[#fcc8ba]">S</span>
          </h1>
          
          <p className="font-montserrat-alt text-sm text-[#8b4a6b] mb-8 leading-relaxed">
            From elegant grazing carts and interactive photobooths to trendy matcha stations, we bring the most popular event experiences to your celebration. Let us create unforgettable moments that your guests will be talking about long after the party ends.
          </p>

          <Link
            to="/booking/service"
            className="bg-[#efaac3] hover:bg-[#e89bb4] text-white font-semibold py-3 px-8 rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block mb-8"
          >
            Start Booking
          </Link>
          
          <div className="pt-6 border-t border-[#8b4a6b]/20">
            <p className="font-montserrat-alt text-sm text-[#8b4a6b] mb-4">
              Already have a booking with us?
            </p>
            <Link
              to="/booking/manage"
              className="text-[#efaac3] hover:text-[#e89bb4] font-semibold text-sm underline transition-colors duration-300"
            >
              Manage Your Booking
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Animated Background */}
      <div className="w-1/2 relative">
        <AnimatedBackground />
        {/* Overlay to make background more colorful/abstract */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffba51]/30 via-[#8fc2c3]/30 to-[#efaac3]/30 mix-blend-overlay"></div>
      </div>
    </div>
  );
}
