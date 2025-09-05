import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarView = ({ appointments, onEventClick }) => {
  return (
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      editable={false}
      selectable={false}
      events={appointments}
      eventClick={onEventClick}
      slotDuration="00:30:00"
      allDaySlot={false}
    />
  );
};

export default CalendarView;
