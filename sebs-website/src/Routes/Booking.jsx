import React from "react";

import BookServiceSection from "../Components/Booking/ServiceSectionBooking/BookServiceSection";
import CalendarSection from "../Components/Booking/CalendarSection/CalendarSection";

const services = [
  {
    price: "$300",
    title: "Psalm $ Platter",
    desc: "Per hour",
    highlight: false,
  },
  {
    price: "$450",
    title: "The Arkives",
    desc: "Lorem Ipsum",
    highlight: false,
  },
  {
    price: "$500",
    title: "Package A",
    desc: "Lorem Ipsum",
    highlight: true,
  },
  {
    price: "$600",
    title: "Package B",
    desc: "Lorem Ipsum",
    highlight: false,
  },
];

export default function Booking() {
  return (
    <div className=" w-full ">
      <BookServiceSection services={services} />
      <CalendarSection />
    </div>
  );
}
