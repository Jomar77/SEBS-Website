import React from "react";
import { Link } from "react-router-dom";
import { useBooking } from "../../Context/BookingContext";

export default function BookingSuccess() {
  const { booking } = useBooking();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-4xl font-bold text-primary mb-4">Booking Confirmed!</h1>
        <p className="text-lg text-base-content mb-6">
          Thank you for your booking. We've received your request for {booking.service?.title} on{" "}
          {booking.date ? new Date(booking.date).toLocaleDateString() : "your selected date"}.
        </p>
        <p className="text-base text-base-content/70 mb-8">
          We'll contact you shortly to confirm the details and arrange payment.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}