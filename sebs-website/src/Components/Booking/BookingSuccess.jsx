import React from "react";
import { Link } from "react-router-dom";
import { useBooking } from "../../Context/BookingContext";

export default function BookingSuccess() {
  const { booking } = useBooking();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="text-center max-w-lg mx-auto p-8">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-4xl font-bold text-primary mb-4">Booking Confirmed!</h1>
        
        {/* Booking Reference Display */}
        {booking.bookingReference && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-primary">
            <div className="text-sm text-gray-600 mb-1">Your Booking Reference</div>
            <div className="text-2xl font-bold text-primary font-mono tracking-wider">
              {booking.bookingReference}
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Please save this reference number for your records
            </div>
          </div>
        )}

        <p className="text-lg text-base-content mb-4">
          Thank you for your booking. We've received your request for{" "}
          <span className="font-semibold text-primary">
            {booking.service?.title}
          </span>{" "}
          on{" "}
          <span className="font-semibold text-primary">
            {booking.date ? booking.date.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric', 
              month: 'long',
              day: 'numeric'
            }) : "your selected date"}
          </span>.
        </p>

        {/* Additional booking details if available */}
        {booking.bookingResponse && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-sm text-left">
            <h3 className="font-semibold text-gray-800 mb-3">Booking Details:</h3>
            <div className="space-y-2">
             
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium">
                  {booking.bookingResponse.status === 1 ? "Awaiting Confirmation" : "Call Us"}
                </span>
              </div>
              {booking.bookingResponse.eventDetails?.location && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{booking.bookingResponse.eventDetails.location}</span>
                </div>
              )}
            </div>
          </div>
        )}

        <p className="text-base text-base-content/70 mb-8">
          We'll contact you shortly to confirm the details and arrange payment.
          You should receive a confirmation email at{" "}
          <span className="font-semibold">
            {booking.form?.email || "your email address"}
          </span>.
        </p>

        <div className="flex gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            Return to Home
          </Link>
          <button 
            onClick={() => window.print()} 
            className="btn btn-outline"
          >
            Print Details
          </button>
        </div>
      </div>
    </div>
  );
}