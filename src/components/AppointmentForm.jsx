import React, { useState } from 'react';

const doctors = ['Doctor A', 'Doctor B', 'Doctor C'];

const AppointmentForm = ({ onAdd, appointments }) => {
  const [form, setForm] = useState({
    title: '',
    start: '',
    duration: 30,
    doctor: doctors[0],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isDoubleBooked = () => {
    const newStart = new Date(form.start);
    const newEnd = new Date(newStart.getTime() + form.duration * 60000);

    return appointments.some((appt) => {
      if (appt.extendedProps.doctor !== form.doctor) return false;
      const apptStart = new Date(appt.start);
      const apptEnd = new Date(appt.end);
      return newStart < apptEnd && newEnd > apptStart;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDoubleBooked()) {
      alert('Doctor already booked!');
      return;
    }
    onAdd({
      title: `${form.title} (${form.doctor})`,
      start: form.start,
      end: new Date(new Date(form.start).getTime() + form.duration * 60000).toISOString(),
      extendedProps: { doctor: form.doctor },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Appointment</h3>
      <div className='appointment-form'>
      <input name="title" placeholder="Patient Name" required onChange={handleChange} />
      <input type="datetime-local" name="start" required onChange={handleChange} />
      <input type="number" name="duration" value={form.duration} onChange={handleChange} />
      <select name="doctor" onChange={handleChange}>
        {doctors.map((doc) => (
          <option key={doc} value={doc}>{doc}</option>
        ))}
      </select>
      <button className='submit-form' type="submit">Add Appointment</button>
      </div>
    </form>
  );
};

export default AppointmentForm;
