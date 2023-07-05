import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/viewcases.css";
import { apiDomain } from "../utils/APIUtils";

function ViewCases() {
  const [cases, setCases] = useState([]);

  const fetchCases = async () => {
    try {
      const response = await fetch(`${apiDomain}/Cases`);
      if (response.ok) {
        const casesData = await response.json();
        console.log(casesData);
        setCases(casesData);
      } else {
        throw new Error("An error occurred while fetching cases.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  return (
    <div>
      <h2>View Cases</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Case ID</th>
            <th>Case Number</th>
            <th>Incident Type</th>
            <th>Date Added</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cases &&
            cases.map((caseItem, i) => (
              <tr key={i}>
                <td>{caseItem.id}</td>
                <td>{caseItem.caseNumber}</td>
                <td>{caseItem.incidentType}</td>
                <td>{caseItem.dateCaseAdded}</td>
                <td>{caseItem.status}</td>
                <td>
                  <Link to="/editCase" className="btn btn-success">
                    Edit
                  </Link>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewCases;
