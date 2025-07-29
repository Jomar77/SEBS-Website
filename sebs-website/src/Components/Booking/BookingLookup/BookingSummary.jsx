import React, { useState } from "react";

export default function BookingSummary({ booking }) {
  const [cancelReason, setCancelReason] = useState("");

  // Helper: status mapping
  const statusMap = {
    1: "Confirmed",
    2: "Pending",
    3: "Cancelled",
    4: "Completed",
  };

  // Helper: format date/time
  const formatDate = (dateStr) =>
    dateStr
      ? new Date(dateStr).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "-";

  // Extract event details
  const event = booking.eventDetails || {};
  const service = event.eventServices?.[0] || {};

  return (
    <div className="max-w-3xl mx-auto m-10 px-4">
      <div className="flex items-center justify-center mb-6">
        <span className="text-2xl mr-2 text-[#F9B233]">⏳</span>
        <span className="text-xl font-medium text-[#F9B233]">
          Status: {statusMap[booking.status] || booking.status}
        </span>
      </div>
      <div className="bg-[#F8F1E7] rounded shadow p-6 mb-8">
        <div className="mb-2">
          <span className="font-semibold text-[#173D3D]">
            Booking Reference:
          </span>{" "}
          <span className="font-medium">{booking.bookingReference}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-[#173D3D]">Full Name:</span>{" "}
          <span>{booking.customerName}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-[#173D3D]">Event Address:</span>{" "}
          <span>{event.location}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-[#173D3D]">
            Event Date & Time:
          </span>{" "}
          <span>{formatDate(event.eventDate)}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-[#173D3D]">Service:</span>{" "}
          <span>{service.serviceName}</span>
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
