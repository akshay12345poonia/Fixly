
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function TimeSlotSelector({ onTimeSelect }) {
  const handleDateClick = (arg) => {
    onTimeSelect(arg.dateStr);
  };

  return (
    <div className="border">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        height="auto"
      />
    </div>
  );
}
