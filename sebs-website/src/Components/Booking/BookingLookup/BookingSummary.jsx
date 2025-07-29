import React, { useState } from "react";

export default function BookingSummary({ booking }) {
  const [cancelReason, setCancelReason] = useState("");

  return (
    <div className="max-w-3xl mx-auto m-10 px-4">
      <div className="flex items-center justify-center mb-6">
        <span className="text-2xl mr-2 text-[#F9B233]">⏳</span>
        <span className="text-xl font-medium text-[#F9B233]">
          Status: {booking.status}
        </span>
      </div>
      <div className="bg-[#F8F1E7] rounded shadow p-6 mb-8">
        <div className="mb-2">
          <span className="font-semibold text-[#173D3D]">
            Booking Reference :
          </span>{" "}
          <span className="font-medium">{booking.bookingReference}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-[#173D3D]">Full Name:</span>{" "}
          <span>{booking.customerName}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-[#173D3D]">Contact No.:</span>{" "}
          <span>{booking.customerPhone}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-[#173D3D]">Event Address:</span>{" "}
          <span>{booking.eventAddress}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-[#173D3D]">Time of Event:</span>{" "}
          <span>{booking.eventTime}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-[#173D3D]">Service:</span>{" "}
          <span>{booking.service}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-[#173D3D]">Duration:</span>{" "}
          <span>{booking.duration}</span>
        </div>
        <div>
          <span className="font-semibold text-[#173D3D]">Mode of Payment:</span>{" "}
          <span>{booking.paymentMethod}</span>
        </div>
      </div>

      <div className="mb-2">
        <span className="text-lg font-semibold text-[#E53935]">
          Cancel Booking
        </span>
        <div className="text-sm text-[#173D3D]">
          Reason for Cancellation (Optional)
        </div>
      </div>
      <textarea
        className="w-full h-24 bg-[#F8F1E7] rounded p-3 mb-6 border-none focus:ring-2 focus:ring-[#F9B233] resize-none"
        value={cancelReason}
        onChange={(e) => setCancelReason(e.target.value)}
        placeholder=""
      />
      <div className="flex gap-4">
        <button className="btn bg-[#E53935] text-white px-6 hover:bg-[#c62828] border-none">
          Cancel Booking
        </button>
        <button className="btn bg-[#A3C3C3] text-[#173D3D] px-6 hover:bg-[#7da6a6] border-none">
          Exit
        </button>
      </div>
    </div>
  );
}
