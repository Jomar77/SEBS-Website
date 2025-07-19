import { useNavigate } from "react-router-dom";
import { useBooking } from "../../../Context/BookingContext";
import BookServiceSection from "../ServiceSectionBooking/BookServiceSection";

const services = [
  { id: 1, price: "$300", title: "Psalm $ Platter", desc: "Per hour", highlight: false },
  { id: 2, price: "$450", title: "The Arkives", desc: "Lorem Ipsum", highlight: false },
  { id: 3, price: "$500", title: "Package A", desc: "Lorem Ipsum", highlight: true },
  { id: 4, price: "$600", title: "Package B", desc: "Lorem Ipsum", highlight: false },
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