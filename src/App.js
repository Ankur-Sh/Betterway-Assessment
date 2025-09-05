import React,{ useState } from 'react';
import './App.css';
import CalendarView from './components/CalendarView';
import AppointmentForm from './components/AppointmentForm';
import DeleteModal from './components/DeleteModal';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleAddAppointment = (appointment) => {
    setAppointments([...appointments, { ...appointment, id: uuidv4() }]);
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
    setSelectedEvent(null);
  };

  return (
    <div className="App">
     <h1>
       Resource-Based Clinic Calendar
      </h1>
      <AppointmentForm appointments={appointments} onAdd={handleAddAppointment} />
      {/* <CalendarView appointments={appointments} onEventClick={(info) => setSelectedEvent(info.event)} /> */}
      <DeleteModal selectedEvent={selectedEvent} onDelete={handleDelete} onCancel={() => setSelectedEvent(null)} />
    </div>
  );
}

export default App;