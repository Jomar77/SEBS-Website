import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function CalendarMonth({ year, month }) {
    console.log("Rendering CalendarMonth:", year, month);
  return (
    <div className="bg-neutral-50 rounded-lg shadow-lg p-8 flex-1 min-w-[350px] max-w-[500px]">
      <div className="text-center mb-2 font-bold">
        {year} / {month + 1}
      </div>
      <FullCalendar
        key={`${year}-${month}`}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "",
          center: "title",
          right: "",
        }}
        height="auto"
        aspectRatio={1.5}
        fixedWeekCount={false}
        selectable={false}
        dayMaxEventRows={1}
        showNonCurrentDates={false}
        initialDate={new Date(year, month, 1).toISOString().slice(0, 10)}
      />
    </div>
  );
}