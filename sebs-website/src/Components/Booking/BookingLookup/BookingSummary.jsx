import React, { useState, useEffect } from "react";
import { getApiUrl } from "../../../Utils/apiConfig.js";
import { ClipboardList, User, CalendarDays, MapPin, BadgeCheck, CheckCircle } from "lucide-react";
import WavePattern from "../../Common/WavePattern"; // Adjust path if needed

// Use a handwriting font (e.g., font-dancing-script or font-caveat if available in your Tailwind config)
const handwritingFont = "font-corben-reg"; // Use the Corben Regular font

export default function BookingSummary({ booking, onExit }) {
  const [cancelReason, setCancelReason] = useState("");
  const [statusMap, setStatusMap] = useState({});
  const [showCancel, setShowCancel] = useState(false);

  // Fetch booking statuses from API
  useEffect(() => {
    fetch(`${getApiUrl()}/api/Enum/booking-statuses`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch booking statuses");
        }
        return response.json();
      })
      .then((data) => {
        const statusMapping = {};
        data.forEach((status) => {
          statusMapping[status.value] = status.displayName;
        });
        setStatusMap(statusMapping);
      })
      .catch((error) => {
        console.error("Error fetching booking statuses:", error);
        // Fallback to original mapping if API fails
        setStatusMap({
          1: "Pending",
          2: "Confirmed",
          3: "Cancelled",
          4: "Completed",
        });
      });
  }, []);

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

  // Card 1: Reference & Name
  const card1 = [
    {
      label: "Booking Reference",
      value: booking.bookingReference,
      icon: ClipboardList,
    },
    {
      label: "Full Name",
      value: booking.customerName,
      icon: User,
    },
  ];
  // Card 2: Date/Time & Address
  const card2 = [
    {
      label: "Event Date & Time",
      value: event.eventDate
        ? (() => {
            const d = new Date(event.eventDate);
            return (
              <span>
                <span className="text-[#8fc2c3]">{d.toLocaleString("en-US", { month: "long" })}</span>{" "}
                <span className="text-[#8fc2c3]">{d.getDate()}</span>,{" "}
                <span className="text-[#8fc2c3]">{d.getFullYear()}</span>{" "}
                <span className="text-[#8fc2c3]">at</span>{" "}
                <span className="text-[#8fc2c3]">{d.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit" })}</span>
              </span>
            );
          })()
        : "-",
      icon: CalendarDays,
    },
    {
      label: "Event Address",
      value: <span className="text-[#8fc2c3]">{event.location || "-"}</span>,
      icon: MapPin,
    },
  ];
  // Card 3: Service & Status
  const card3 = [
    {
      label: "Service",
      value: service.serviceName,
      icon: BadgeCheck,
    },
    {
      label: "Status",
      value: statusMap[booking.status] || booking.status,
      icon: CheckCircle,
    },
  ];

  return (
    <div className={`w-full min-h-screen flex flex-col items-center justify-center bg-transparent ${handwritingFont}`}>
      {/* Pill header */}
      <div className="mb-8 flex justify-center">
        <span className="px-10 py-2 rounded-full bg-white border-2 border-[#204558] shadow text-3xl text-[#204558] tracking-wide font-yeseva">
          Booking Summary
        </span>
      </div>
      {/* Three Cards Side by Side */}
      <div className="flex flex-row gap-10 items-start justify-center mb-12">
        {[card1, card2, card3].map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border-2 border-[#e5aac3] shadow-lg w-[320px] h-[340px] px-8 py-10 flex flex-col items-center justify-center"
          >
            {card.map((item) => {
              const Icon = item.icon;
              const isStatus = item.label === "Status";
              return (
                <div key={item.label} className="flex flex-col items-center mb-8 last:mb-0">
                  <div className="flex flex-col items-center mb-3">
                    <Icon className="w-10 h-10 text-[#efaac3] mb-2" />
                    <span className="text-2xl text-[#204558]">{item.label}</span>
                  </div>
                  <div
                    className={`text-md font-sans ${
                      isStatus
                        ? "bg-[#e5eafd] text-[#204558] px-4 py-1 rounded shadow font-semibold"
                        : "text-[#8fc2c3] font-semibold"
                    } text-center`}
                  >
                    {item.value}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {/* Cancel Booking & Exit */}
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="flex flex-row gap-4 w-full justify-center mt-6">
          <button
            className="px-10 py-3 rounded-full bg-[#efaac3] text-white text-2xl font-sans border-2 border-[#e5aac3] shadow transition hover:bg-[#e5eafd] hover:text-[#204558]"
            onClick={() => setShowCancel(true)}
          >
            Cancel Booking
          </button>
          <button
            className="px-10 py-3 rounded-full bg-[#e5eafd] border-2 border-[#204558] shadow text-[#204558] text-2xl font-sans hover:bg-[#efaac3] hover:text-white transition"
            onClick={onExit}
          >
            Exit
          </button>
        </div>
        {/* Popup for cancellation reason */}
        {showCancel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-base-100 bg-opacity-30">
            {/* Wave background behind the popup */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
              <WavePattern />
            </div>
            <div className="bg-white rounded-2xl border-2 border-[#e5aac3] shadow-xl p-8 w-full max-w-lg flex flex-col items-center relative z-10">
              <div className="text-2xl font-bold text-[#a84a5c] mb-4">Cancel Booking</div>
              <textarea
                className="w-full h-24 bg-[#f7f3ef] rounded p-3 mb-4 border border-[#e5aac3] text-xl text-[#204558] resize-none"
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                placeholder="Reason for cancellation (optional)"
              />
              <div className="flex flex-row gap-4 w-full justify-center mt-2">
                <button
                  className="px-10 py-3 rounded-full bg-[#efaac3] text-white text-2xl border-2 border-[#e5aac3] shadow hover:bg-[#e5aac3]/80 transition"
                >
                  Confirm Cancellation
                </button>
                <button
                  className="px-10 py-3 rounded-full bg-[#e5eafd] border-2 border-[#204558] shadow text-[#204558] text-2xl hover:bg-[#efaac3] hover:text-white transition"
                  onClick={() => setShowCancel(false)}
                >
                  Exit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
