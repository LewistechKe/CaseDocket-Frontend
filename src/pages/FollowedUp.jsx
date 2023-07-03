import React, { useState } from "react";
import axios from "axios";
import '../styles/followedup.css';
import { useNavigate } from "react-router-dom";

const FollowedUp = () => {
  // State variables for form inputs
  const [caseNumber, setCaseNumber] = useState("");
  const [dateFollowedUp, setDateFollowedUp] = useState("");
  const [description, setDescription] = useState("");
  const [actionTaken, setActionTaken] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new follow-up object with form data
    const newFollowup = {
      caseNumber: caseNumber,
      dateFollowedUp: dateFollowedUp,
      description: description,
      actionTaken: actionTaken,
      status: status,
    };

    try {
      // Send a POST request to the server with the follow-up data
      await axios.post(`${apiDomain}/followups`, newFollowup);
	  window.alert("Follow-up added successfully");
      console.log("Follow-up added successfully");

      // Reset the form fields after successful submission
      setCaseNumber("");
      setDateFollowedUp("");
      setDescription("");
      setActionTaken("");
      setStatus("");
    } catch (error) {
      console.error("Error:", error);
      // Handle any error occurred during the request
    }
  };

  const handleViewAllFollowups = async () => {
    try {
      navigate("/view-followups")
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <h2>Add Follow-up</h2>
      <form onSubmit={handleSubmit} className="followup-form">
        <div className="column">
          <label htmlFor="caseNumber">Case Number:</label>
          <input
            type="text"
            id="caseNumber"
            value={caseNumber}
            onChange={(e) => setCaseNumber(e.target.value)}
            required
          />

          <label htmlFor="dateFollowedUp">Date Followed Up:</label>
          <input
            type="date"
            id="dateFollowedUp"
            value={dateFollowedUp}
            onChange={(e) => setDateFollowedUp(e.target.value)}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="column">
          <label htmlFor="actionTaken">Action Taken:</label>
          <textarea
            id="actionTaken"
            value={actionTaken}
            onChange={(e) => setActionTaken(e.target.value)}
            required
          />

          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Select status</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <div className="button-group">
        <button type="submit">Add Follow-up</button>
          <button type="button" onClick={handleViewAllFollowups}>
            All Followups
          </button>
        </div>
      </form>
    </div>
  );
};

export default FollowedUp;