import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPatientById, getOdontogramByPatientId } from '../services/api';

function PatientDetailPage() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [odontogram, setOdontogram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const patientData = await getPatientById(id);
        setPatient(patientData);

        const odontogramData = await getOdontogramByPatientId(id);
        setOdontogram(odontogramData);

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // Rerun effect if the ID changes

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading patient details...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>Error loading patient details: {error.message}</div>;
  }

  if (!patient) {
      return <div style={{ padding: '20px' }}>Patient not found.</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{patient.name} {patient.surname}</h2>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Sex:</strong> {patient.sex}</p>
      <p><strong>Phone:</strong> {patient.phone}</p>
      <p><strong>Email:</strong> {patient.email}</p>

      <h3 style={{ marginTop: '20px' }}>Odontogram</h3>
      <div style={{ border: '1px dashed #ccc', padding: '10px', minHeight: '100px' }}>
        {/* Odontogram component will be rendered here */}
        {odontogram ? (
            <pre>{JSON.stringify(odontogram, null, 2)}</pre> // Placeholder for odontogram data
        ) : (
            <p>No odontogram data available.</p>
        )}
      </div>

      <h3 style={{ marginTop: '20px' }}>Appointments</h3>
      <div style={{ border: '1px dashed #ccc', padding: '10px', minHeight: '100px' }}>
        {/* Appointments list will be displayed here */}
        <p>Appointment history will be displayed here.</p> {/* Placeholder */}
      </div>
    </div>
  );
}

export default PatientDetailPage;