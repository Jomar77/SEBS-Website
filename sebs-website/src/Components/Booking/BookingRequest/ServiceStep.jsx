import { useNavigate } from "react-router-dom";
import { useBooking } from "../../../Context/BookingContext";
import BookServiceSection from "../ServiceSectionBooking/BookServiceSection";

const services = [
  { id: 1, price: "$300", title: "Psalm & Platter", desc: "Per Event", highlight: false },
  { id: 2, price: "$450", title: "The Arkives", desc: "Per Event", highlight: false },
  { id: 4, price: "$350", title: "Matcha Cart", desc: "Per Event", highlight: true },
];

export default function ServiceStep() {
  const { updateBooking } = useBooking();
  const navigate = useNavigate();

  function handleSelect(service) {
    updateBooking({ service });
    navigate("/booking/date");
  }

  return (
    <BookServiceSection
      services={services.map(s => ({
        ...s,
        onClick: () => handleSelect(s)
      }))}
    />
  );
}