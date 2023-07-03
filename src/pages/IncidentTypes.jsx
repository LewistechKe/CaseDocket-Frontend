// IncidentType.js
import '../styles/incedentTypes.css';
import React, { useState } from 'react';

const IncidentType = ({ onAddIncidentType }) => {
  const [incidentType, setIncidentType] = useState('');
  const [dateAdded, setDateAdded] = useState('');
  const [addedBy, setAddedBy] = useState('');

  const handleAddIncidentType = (e) => {
    e.preventDefault();

    const newIncidentType = {
      incidentType,
      dateAdded,
      addedBy
    };

    onAddIncidentType(newIncidentType);

    setIncidentType('');
    setDateAdded('');
    setAddedBy('');
  };

  return (
    <div>
      <h2>Add Incident Type</h2>
      <form onSubmit={handleAddIncidentType} className='incident-type'>
        <div className="form-group">
          <label htmlFor="incidentType" className="incident-type-label">Incident Type</label>
          <input
            type="text"
            id="incidentType"
            value={incidentType}
            onChange={(e) => setIncidentType(e.target.value)}
            className="incident-type-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateAdded" className="date-added-label">Date Added On</label>
          <input
            type="date"
            id="dateAdded"
            value={dateAdded}
            onChange={(e) => setDateAdded(e.target.value)}
            className="date-added-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="addedBy" className="added-by-label">Added By</label>
          <input
            type="text"
            id="addedBy"
            value={addedBy}
            onChange={(e) => setAddedBy(e.target.value)}
            className="added-by-input"
          />
        </div>
        <button  className="incident-button">Add Incident Type</button>
      </form>
    </div>
  );
};

export default IncidentType;
