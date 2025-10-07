import { useState, useEffect } from "react";

export default function CalendarMonth({ year, month, onDateSelect, selectedDate }) {
  const [calendarDays, setCalendarDays] = useState([]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    generateCalendarDays();
  }, [year, month, selectedDate]); // Add selectedDate as dependency

  const generateCalendarDays = () => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 42; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = currentDate.getMonth() === month;
      const isPast = currentDate < today;
      const isToday = currentDate.toDateString() === today.toDateString();
      const isSelected = selectedDate && 
        currentDate.toDateString() === selectedDate.toDateString();

      days.push({
        date: currentDate,
        day: currentDate.getDate(),
        isCurrentMonth,
        isPast,
        isToday,
        isSelected
      });
    }

    setCalendarDays(days); // This line must be present
  };

  const handleDateClick = (dayObj) => {
    if (dayObj.isPast || !dayObj.isCurrentMonth) return;
    onDateSelect(dayObj.date);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 flex-1 min-w-[500px] max-w-[700px]">
      {/* Month/Year Header */}
      <div className="text-center mb-6 font-bold text-[#204558] text-xl">
        {monthNames[month]} {year}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Day Headers */}
        {dayNames.map(day => (
          <div key={day} className="text-center py-2 text-sm font-semibold text-[#204558] border-b border-gray-200">
            {day}
          </div>
        ))}

        {/* Calendar Days */}
        {calendarDays.map((dayObj, index) => (
          <div
            key={index}
            onClick={() => handleDateClick(dayObj)}
            className={`
              h-8 flex items-center justify-center text-sm border border-gray-100 cursor-pointer transition-all duration-200
              ${!dayObj.isCurrentMonth ? 'text-gray-300 bg-gray-50' : ''}
              ${dayObj.isPast && dayObj.isCurrentMonth ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : ''}
              ${dayObj.isToday ? 'bg-[#fef3c7] text-[#204558] font-bold' : ''}
              ${dayObj.isSelected ? 'bg-[#f8d1d6] text-[#204558] font-bold' : ''}
              ${!dayObj.isPast && dayObj.isCurrentMonth && !dayObj.isSelected && !dayObj.isToday ? 'text-[#204558] hover:bg-[#f8d1d6]' : ''}
            `}
          >
            {dayObj.day}
          </div>
        ))}
      </div>
    </div>
  );
}