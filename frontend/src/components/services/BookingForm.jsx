// frontend/src/components/services/BookingForm.jsx
import React, { useState } from 'react';
import api from '../../services/api';
import TimeSlotSelector from '../calendar/TimeSlotSelector';

export default function BookingForm({ providerId }) {
  const [selectedTime, setSelectedTime] = useState(null);
  const [status, setStatus] = useState('');

  const handleBooking = () => {
    api.post('/bookings', { providerId, timeSlot: selectedTime })
      .then(res => {
        setStatus('Booking request sent!');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Book a Time Slot</h2>
      <TimeSlotSelector onTimeSelect={setSelectedTime} />
      <button onClick={handleBooking} disabled={!selectedTime}
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50">
        Book Now
      </button>
      {status && <p className="text-green-600 mt-2">{status}</p>}
    </div>
  );
}
