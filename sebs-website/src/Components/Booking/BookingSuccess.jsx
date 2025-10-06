import React from "react";
import { Link } from "react-router-dom";
import { useBooking } from "../../Context/BookingContext";
import WavePattern from "../Common/WavePattern";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClipboardList, 
  faRibbon, 
  faCalendarDays, 
  faClock, 
  faLocationDot, 
  faDollarSign, 
  faCheckCircle 
} from '@fortawesome/free-solid-svg-icons';

export default function BookingSuccess() {
  const { booking } = useBooking();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-base-100 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 opacity-30">
        <WavePattern />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto p-8">

        {/* Booking Confirmation Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6 border-2 border-gray-200 text-left">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <FontAwesomeIcon icon={faClipboardList} className="text-2xl text-[#efaac3]" />
            <h2 className="text-2xl font-montserrat-alt font-bold text-[#efaac3]">Booking Details</h2>
          </div>

          {/* Business Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
            <div>
              <span className="font-semibold text-gray-700">Business name:</span>
              <span className="ml-2 text-[#79803c]">SEBS Event Planning</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Email:</span>
              <span className="ml-2 text-[#79803c]">{booking.form?.email || "your email"}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Phone Number:</span>
              <span className="ml-2 text-[#79803c]">{booking.form?.contact || "your phone"}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Booking Date:</span>
              <span className="ml-2 text-[#79803c]">
                {booking.date ? booking.date.toLocaleDateString('en-US') : "your selected date"}
              </span>
            </div>
          </div>

          {/* Booking Reference */}
          {booking.bookingReference && (
            <div className="mb-6">
              <span className="font-semibold text-gray-700">Booking Number:</span>
              <span className="ml-2 font-mono text-[#79803c] font-bold">
                {booking.bookingReference}
              </span>
            </div>
          )}

          {/* Personalized Message */}
          <div className="mb-6">
            <p className="text-gray-700">
              <span className="font-semibold">Dear {booking.form?.name || "Valued Customer"},</span>
            </p>
            <p className="mt-2 text-gray-700">
              We are thrilled to receive your booking with <span className="font-semibold"> SEBS Event Planning </span> 
              for your upcoming event. Below are your booking details.
            </p>
          </div>

          {/* Service Details Table */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
            <div className="bg-gray-100 grid grid-cols-2 font-semibold text-gray-700 border-b border-gray-300">
              <div className="p-3 text-left">Service</div>
              <div className="p-3 text-left">Details</div>
            </div>
            
            <div className="grid grid-cols-2 border-b border-gray-200">
              <div className="p-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faRibbon} className="text-lg text-[#fb8950]" />
                <span className="font-medium text-[#79803c]">Service Booked</span>
              </div>
              <div className="p-3 text-[#79803c]">{booking.service?.title || "your Selected Service"}</div>
            </div>
            
            <div className="grid grid-cols-2 border-b border-gray-200">
              <div className="p-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendarDays} className="text-lg text-[#ffc571]" />
                <span className="font-medium text-[#79803c]">Event Date</span>
              </div>
              <div className="p-3 text-[#79803c]">
                {booking.date ? booking.date.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric', 
                  month: 'long',
                  day: 'numeric'
                }) : "your selected date"}
              </div>
            </div>
            
            <div className="grid grid-cols-2 border-b border-gray-200">
              <div className="p-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="text-lg text-[#efaac3]" />
                <span className="font-medium text-[#79803c]">Event Time</span>
              </div>
              <div className="p-3 text-[#79803c]">{booking.form?.time || "to be confirmed"}</div>
            </div>
            
            <div className="grid grid-cols-2 border-b border-gray-200">
              <div className="p-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-lg text-[#8fc2c3]" />
                <span className="font-medium text-[#79803c]">Venue</span>
              </div>
              <div className="p-3 text-[#79803c]">
                {booking.form?.address || booking.bookingResponse?.eventDetails?.location || "to be confirmed"}
              </div>
            </div>
            
            <div className="grid grid-cols-2 border-b border-gray-200">
              <div className="p-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faDollarSign} className="text-lg text-[#fb8950]" />
                <span className="font-medium text-[#79803c]">Total Amount</span>
              </div>
              <div className="p-3 font-semibold text-[#79803c]">{booking.service?.price || "to be quoted"}</div>
            </div>
            
            <div className="grid grid-cols-2 border-b border-gray-200">
              <div className="p-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-lg text-[#ffc571]" />
                <span className="font-medium text-[#79803c]">Status</span>
              </div>
              <div className="p-3 text-[#79803c]">
                {booking.bookingResponse?.status === 1 ? "Awaiting Confirmation" : "Pending Review"}
              </div>
            </div>
          </div>

          <div className="text-center text-gray-700 font-medium">
            Thank you for trusting us. We look forward to being part of your celebration!
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center text-sm text-gray-600 mb-8">
          <p className="mb-2">We'll contact you shortly to confirm the details and arrange payment.</p>
          <p>You should receive a confirmation email at <span className="font-semibold">{booking.form?.email || "your email address"}</span></p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="btn bg-[#79803c] text-white hover:bg-[#79803c]/80 border-none px-8"
          >
            Return to Home
          </Link>
          <button 
            onClick={() => window.print()} 
            className="btn btn-outline border-[#79803c] text-[#79803c] hover:bg-[#79803c] hover:text-white px-8"
          >
            Print Details
          </button>
        </div>
      </div>
    </div>
  );
}