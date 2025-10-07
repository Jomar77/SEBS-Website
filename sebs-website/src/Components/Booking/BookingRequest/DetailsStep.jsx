import { useNavigate } from "react-router-dom";
import { useBooking } from "../../../Context/BookingContext";
import BookingFormSection from "../BookingForm/BookingFormSection";
import { getApiUrl } from "../../../Utils/apiConfig.js";

export default function DetailsStep() {
  const { booking, updateBooking } = useBooking();
  const navigate = useNavigate();

  async function handleSubmit(formData) {
    updateBooking({ form: formData });

    // Prepare the request body
    const requestBody = {
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.contact,
      eventDate: booking.date,
      location: formData.address,
      eventType: 1,
      eventName: `${booking.service?.title || "Event"} - ${
        formData.time || "Time TBD"
      }`,
      notes: `Duration: ${formData.duration} hours. Payment method: ${
        formData.payment
      }. Additional notes: ${
        formData.address
          ? `Event at ${formData.address}`
          : "No additional notes"
      }`,
      services: [
        {
          serviceID: booking.service?.id || 1, // changed to camelCase
          quantity: parseInt(formData.duration) || 1, // changed to camelCase
          customPrice: parseFloat(
            booking.service?.price?.replace(/[^\d.]/g, '') || "0" // Improved price parsing
          ),
          notes: `${booking.service?.desc || "Service"} - ${
            formData.time || "Time TBD"
          }`, // changed to camelCase
        },
      ],
    };

    console.log("Sending booking request:", JSON.stringify(requestBody));

    // API request with properly mapped data
    const res = await fetch(
      `${getApiUrl()}/api/booking/request`,
      {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest" // Add this to help prevent CSRF issues
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (res.ok) {
      const bookingResponse = await res.json();
      // Show success, redirect, etc.
      console.log("Booking successful!");
      console.log("📋 Booking Response:", bookingResponse);

      // Store the booking reference and full response in context
      updateBooking({
        bookingReference: bookingResponse.bookingReference,
        bookingResponse: bookingResponse,
      });
      navigate("/booking/success");
    } else {
      // Show error feedback
      const errorText = await res.text();
      console.error("Booking failed with status:", res.status);
      console.error("Error response:", errorText);

      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        errorData = { message: errorText };
      }

      console.error("Parsed error data:", errorData);
      alert(
        `Booking failed (${res.status}): ${
          errorData.message || errorData.title || "Unknown error"
        }`
      );
    }
  }

  return (
    <BookingFormSection
      onSubmit={handleSubmit}
      selectedService={booking.service}
      selectedDate={booking.date}
    />
  );
}
