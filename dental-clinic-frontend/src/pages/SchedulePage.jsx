import React, { useEffect, useState } from 'react';
import { getAppointments, getDoctors } from '../services/api';

function SchedulePage() {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date()); // State to hold the selected date

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointmentsData = await getAppointments();
        setAppointments(appointmentsData);

        const doctorsData = await getDoctors();
        setDoctors(doctorsData);

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Fetch data initially

   // Function to filter appointments for the selected date
   const appointmentsForSelectedDate = appointments.filter(appointment => {
       const appointmentDate = new Date(appointment.startTime);
       return appointmentDate.toDateString() === selectedDate.toDateString();
   });


  if (loading) {
    return <div>Loading schedule...</div>;
  }

  if (error) {
    return <div>Error loading schedule: {error.message}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Schedule</h2>

      {/* Date picker or selector component will go here */}
      <input
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
          style={{ marginBottom: '20px' }}
      />

      <h3>Schedule for {selectedDate.toDateString()}</h3>

      {doctors.map(doctor => (
          <div key={doctor.id} style={{ marginBottom: '15px', border: '1px solid #ccc', padding: '10px' }}>
              <h4>Dr. {doctor.name} {doctor.surname}</h4>
              {appointmentsForSelectedDate
                  .filter(appointment => appointment.doctorId === doctor.id)
                  .length === 0 ? (
                      <p>No appointments for this doctor on this day.</p>
                  ) : (
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                          {appointmentsForSelectedDate
                              .filter(appointment => appointment.doctorId === doctor.id)
                              .map(appointment => (
                                  <li key={appointment.id} style={{ backgroundColor: '#f9f9f9', margin: '5px 0', padding: '8px', borderLeft: '4px solid #007bff' }}>
                                      {new Date(appointment.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(appointment.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} : Patient {appointment.patientId} - {appointment.treatment} ({appointment.status})
                                  </li>
                              ))}
                      </ul>
                  )
              }
          </div>
      ))}


      {/* Implement Weekly and Monthly views later */}
    </div>
  );
}

export default SchedulePage;