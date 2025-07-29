import { useNavigate } from "react-router-dom";
import { useBooking } from "../../../Context/BookingContext";
import CalendarSection from "../CalendarSection/CalendarSection";

export default function DateStep() {
  const { updateBooking } = useBooking();
  const navigate = useNavigate();

  function handleDateSelect(date) {
    updateBooking({ date });
    navigate("/booking/details");
  }

  return (
    <CalendarSection onDateSelect={handleDateSelect} />
  );
}