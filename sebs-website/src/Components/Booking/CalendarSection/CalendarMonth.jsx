import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function CalendarMonth({ year, month, onDateSelect, selectedDate }) {
  
  const handleDateClick = (info) => {
    const clickedDate = info.date;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Prevent selecting past dates
    if (clickedDate < today) {
      return;
    }
    
    onDateSelect(clickedDate);
  };

  // Create events array for styling selected date
  const events = selectedDate ? [{
    date: selectedDate.toISOString().split('T')[0],
    display: 'background',
    backgroundColor: '#3b82f6', // Blue background for selected date
    classNames: ['selected-date']
  }] : [];

  return (
    <div className="bg-neutral-50 rounded-lg shadow-lg p-8 flex-1 min-w-[350px] max-w-[500px]">
      <div className="text-center mb-2 font-bold">
        {year} / {month + 1}
      </div>
      <FullCalendar
        key={`${year}-${month}`}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "",
          center: "title",
          right: "",
        }}
        height="auto"
        aspectRatio={1.5}
        fixedWeekCount={false}
        selectable={true}
        dateClick={handleDateClick}
        dayMaxEventRows={1}
        showNonCurrentDates={false}
        initialDate={new Date(year, month, 1).toISOString().slice(0, 10)}
        events={events}
        selectConstraint={{
          start: new Date().toISOString().split('T')[0]
        }}
        dayCellClassNames={(date) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          
          if (date.date < today) {
            return ['past-date'];
          }
          return [];
        }}
      />
      <style jsx>{`
        :global(.past-date) {
          background-color: #f3f4f6 !important;
          color: #9ca3af !important;
          cursor: not-allowed !important;
        }
        :global(.fc-day-today) {
          background-color: #fef3c7 !important;
        }
        :global(.selected-date) {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}