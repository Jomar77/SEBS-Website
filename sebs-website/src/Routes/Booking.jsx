import React from "react";
import ServiceCard from "../Components/Booking/ServiceCard";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

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
    <div className="min-h-screen w-full bg-gradient-to-b from-base-100 to-base-300 flex flex-col items-center justify-start pb-12" style={{backgroundImage: 'url("/waves-bg.svg")', backgroundRepeat: 'repeat', backgroundSize: 'cover'}}>
      <h2 className="text-5xl font-serif font-bold text-primary-content mt-12 mb-10">Book A Service</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
      <h2 className="text-5xl font-serif font-bold text-primary-content mt-12 mb-10">Choose a date</h2>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
        {/* First calendar: current month */}
        <div className="bg-neutral-50 rounded-lg shadow-lg p-8 flex-1 min-w-[350px] max-w-[500px]">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: '',
              center: 'title',
              right: ''
            }}
            height="auto"
            aspectRatio={1.5}
            fixedWeekCount={false}
            selectable={false}
            dayMaxEventRows={1}
            showNonCurrentDates={false}
            initialDate={(() => {
              const now = new Date();
              return new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0, 10);
            })()}
          />
        </div>
        {/* Second calendar: next month */}
        <div className="bg-neutral-50 rounded-lg shadow-lg p-8 flex-1 min-w-[350px] max-w-[500px]">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: '',
              center: 'title',
              right: ''
            }}
            height="auto"
            aspectRatio={1.5}
            fixedWeekCount={false}
            selectable={false}
            dayMaxEventRows={1}
            showNonCurrentDates={false}
            initialDate={(() => {
              const now = new Date();
              return new Date(now.getFullYear(), now.getMonth() + 1, 1).toISOString().slice(0, 10);
            })()}
          />
        </div>
      </div>
    </div>
  );
}
