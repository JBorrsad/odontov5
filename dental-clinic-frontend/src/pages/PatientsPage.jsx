import React, { useEffect, useState } from 'react';
import { getPatients } from '../services/api';
import { Link } from 'react-router-dom';

function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getPatients();
        setPatients(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <div>Loading patients...</div>;
  }

  if (error) {
    return <div>Error loading patients: {error.message}</div>;
  }

  return (
    <div>
      <h2>Patients List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {patients.map(patient => (
          <li key={patient.id} style={{ marginBottom: '5px' }}>
            <Link to={`/patients/${patient.id}`}>
              {patient.name} {patient.surname}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientsPage;