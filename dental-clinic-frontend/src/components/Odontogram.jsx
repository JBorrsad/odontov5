import React from 'react';

function Odontogram({ data }) {
  if (!data) {
    return <div>No odontogram data available.</div>;
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <h4>Odontogram Data (Raw)</h4>
      <pre style={{ backgroundColor: '#f8f8f8', padding: '10px', overflowX: 'auto' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default Odontogram;