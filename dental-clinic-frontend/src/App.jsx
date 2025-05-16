import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import PatientsPage from './pages/PatientsPage';
import SchedulePage from './pages/SchedulePage';
import PatientDetailPage from './pages/PatientDetailPage';
// Import other page components as you create them

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Topbar />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            {/* Add routes for your pages */}
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/patients/:id" element={<PatientDetailPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
      {/* Optional: Add a Footer component here */}
    </div>
  );
}

export default App;
