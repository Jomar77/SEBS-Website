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
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen py-12">

        {/* Receipt Card */}
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg border border-dashed border-[#a8a29e] px-8 py-10 flex flex-col gap-6">
          {/* Header */}
          <div className="text-center mb-2">
            <h2 className="font-yeseva text-2xl text-[#204558] tracking-wide mb-1">Booking Receipt</h2>
            <div className="text-xs text-[#a8a29e]">{new Date().toLocaleString()}</div>
          </div>

          {/* Business Details */}
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Business name:</span>
              <span className="text-[#79803c]">SEBS Event Planning</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Email:</span>
              <span className="text-[#79803c]">{booking.form?.email || "your email"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Phone Number:</span>
              <span className="text-[#79803c]">{booking.form?.contact || "your phone"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Booking Date:</span>
              <span className="text-[#79803c]">
                {booking.date ? booking.date.toLocaleDateString('en-US') : "your selected date"}
              </span>
            </div>
          </div>

          {/* Booking Reference */}
          {booking.bookingReference && (
            <div className="flex justify-between items-center py-2 border-y border-dashed border-[#e5aac3]">
              <span className="font-semibold text-gray-700">Booking Number:</span>
              <span className="font-mono text-[#79803c] font-bold text-2xl tracking-widest">
                {booking.bookingReference}
              </span>
            </div>
          )}

          {/* Personalized Message */}
          <div className="text-sm text-gray-700 italic">
            Dear <span className="font-semibold">{booking.form?.name || "Valued Customer"}</span>,<br />
            We thank you for choosing <span className="font-semibold">SEBS Event Planning</span>.<br />
            Below are your booking details.
          </div>

          {/* Service Details Table */}
          <div className="w-full">
            <table className="w-full text-sm border-separate border-spacing-y-2">
              <thead>
                <tr>
                  <th className="text-left font-yeseva text-[#204558] pb-2">Service</th>
                  <th className="text-left font-yeseva text-[#204558] pb-2">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium text-[#79803c] flex items-center gap-2">
                    <FontAwesomeIcon icon={faRibbon} className="text-xl text-[#fb8950]" />
                    Service Booked
                  </td>
                  <td className="text-[#79803c]">{booking.service?.title || "your Selected Service"}</td>
                </tr>
                <tr>
                  <td className="font-medium text-[#79803c] flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-xl text-[#ffc571]" />
                    Event Date
                  </td>
                  <td className="text-[#79803c]">
                    {booking.date ? booking.date.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric', 
                      month: 'long',
                      day: 'numeric'
                    }) : "your selected date"}
                  </td>
                </tr>
                <tr>
                  <td className="font-medium text-[#79803c] flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} className="text-xl text-[#efaac3]" />
                    Event Time
                  </td>
                  <td className="text-[#79803c]">{booking.form?.time || "to be confirmed"}</td>
                </tr>
                <tr>
                  <td className="font-medium text-[#79803c] flex items-center gap-2">
                    <FontAwesomeIcon icon={faLocationDot} className="text-xl text-[#8fc2c3]" />
                    Venue
                  </td>
                  <td className="text-[#79803c]">
                    {booking.form?.address || booking.bookingResponse?.eventDetails?.location || "to be confirmed"}
                  </td>
                </tr>
                <tr>
                  <td className="font-medium text-[#79803c] flex items-center gap-2">
                    <FontAwesomeIcon icon={faDollarSign} className="text-xl text-[#fb8950]" />
                    Total Amount
                  </td>
                  <td className="font-semibold text-[#79803c]">{booking.service?.price || "to be quoted"}</td>
                </tr>
                <tr>
                  <td className="font-medium text-[#79803c] flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-xl text-[#ffc571]" />
                    Status
                  </td>
                  <td className="text-[#79803c]">
                    {booking.bookingResponse?.status === 1 ? "Awaiting Confirmation" : "Pending Review"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-700 font-medium pt-4 border-t border-dashed border-[#e5aac3]">
            Thank you for trusting us.<br />We look forward to being part of your celebration!
          </div>
        </div>

        {/* Contact Information & Action Button */}
        <div className="text-center text-sm text-gray-600 mt-8">
          <p className="mb-2">We'll contact you shortly to confirm the details and arrange payment.</p>
          <p>You should receive a confirmation email at <span className="font-semibold">{booking.form?.email || "your email address"}</span></p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <Link 
            to="/" 
            className="btn bg-[#79803c] text-white hover:bg-[#79803c]/80 border-none px-8"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}