import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/addcase.css";
import { useNavigate } from "react-router-dom";
import { apiDomain } from "../utils/APIUtils";

const AddCase = () => {
  const [caseData, setCaseData] = useState({
    caseNumber: undefined,
    incidentType: "default",
    dateCaseAdded: "",
    description: "",
    actionTaken: "",
    status: "open",
  });
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiDomain}/Cases/addCase`,
        caseData
      );
      window.alert("Case added successfully:", response.data);
      console.log("Case added successfully:", response.data);

      // Reset form fields
      setCaseData({
        caseNumber: "",
        incidentType: "default",
        dateCaseAdded: "",
        description: "",
        actionTaken: "",
        status: "open",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setCaseData({
      ...caseData,
      [e.target.id]: e.target.value,
    });
  };

  const fetchNextCaseNumber = async () => {
    try {
      const response = await axios.get(`${apiDomain}/nextCaseNumber`);
      const nextCaseNumber = response.data.nextCaseNumber;
      console.log(nextCaseNumber);
      // Update the caseNumber input field placeholder
      const caseNumberInput = document.getElementById("caseNumber");
      caseNumberInput.placeholder = nextCaseNumber;

      //You can also set the caseNumber directly in the state if needed
      setCaseData({
        ...caseData,
        caseNumber: nextCaseNumber,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchNextCaseNumber();
  }, []);

  const handleViewAllCases = async () => {
	try {
		navigate("/view-cases")
	} catch (error) {
		console.error("Error:", error);
	}
};

  return (
    <div className="addcase-container">
      <h2>Add Case</h2>
      <form className="addcase-form" onSubmit={handleSubmit}>
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="caseNumber">Case Number</label>
            <input
              type="text"
              id="caseNumber"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="incidentType">Incident Type</label>
            <select
              id="incidentType"
              value={caseData.incidentType}
              onChange={handleChange}
              required
            >
              {/* Options */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dateCaseAdded">Date Case Added</label>
            <input
              type="date"
              id="dateCaseAdded"
              value={caseData.dateCaseAdded}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows="4"
              value={caseData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="actionTaken">Action Taken</label>
            <textarea
              id="actionTaken"
              rows="4"
              value={caseData.actionTaken}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={caseData.status}
              onChange={handleChange}
              required
            >
              {/* Options */}
            </select>
          </div>
        </div>
        <div className="button-group">
          <button type="submit">Add Case</button>
          <button type="button">Cancel</button>
          <button type="button" onClick={handleViewAllCases}>
            All Cases
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCase;
