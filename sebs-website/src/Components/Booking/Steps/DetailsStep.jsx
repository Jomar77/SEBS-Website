import { useNavigate } from "react-router-dom";
import { useBooking } from "../../../Context/BookingContext";
import BookingFormSection from "../BookingForm/BookingFormSection";

export default function DetailsStep() {
  const { booking, updateBooking } = useBooking();
  const navigate = useNavigate();

  async function handleSubmit(formData) {
    updateBooking({ form: formData });
    // API request
    const res = await fetch("/api/booking/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.contact,
        eventDate: booking.date,
        location: formData.address,
        eventType: 1,
        eventName: formData.eventName,
        notes: formData.notes,
        services: [
          {
            serviceID: booking.service?.id ?? 0,
            quantity: formData.quantity ?? 1,
            customPrice: booking.service?.price ?? 0,
            notes: formData.serviceNotes ?? "",
          },
        ],
      }),
    });
    if (res.ok) {
      // Show success, redirect, etc.
      navigate("/booking/success");
    } else {
      // Show error feedback
      alert("Booking failed. Please try again.");
    }
  }

  return (
    <BookingFormSection onSubmit={handleSubmit} />
  );
}