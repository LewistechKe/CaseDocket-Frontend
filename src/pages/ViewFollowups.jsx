import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/viewfollowups.css";
import { apiDomain } from "../utils/APIUtils";

function ViewFollowups() {
  const [followups, setFollowups] = useState([]);

  const fetchFollowups = async () => {
    try {
      const response = await fetch(`${apiDomain}/followups`);
      if (response.ok) {
        const followupsData = await response.json();
        console.log(followupsData);
        setFollowups(followupsData);
      } else {
        throw new Error("An error occurred while fetching followups.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchFollowups();
  }, []);

  return (
    <div>
      <h2>View Followups</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Case ID</th>
            <th>Case Number</th>
            <th>Action Taken</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {followups &&
            followups.map((followup, i) => (
              <tr key={i}>
                <td>{followup.caseId}</td>
                <td>{followup.caseNumber}</td>
                <td>{followup.actionTaken}</td>
                <td>{followup.status}</td>
                <td>
                  <Link to="/editFollowup" className="btn btn-success">
                    Edit
                  </Link>
                </td>
                <td>
                  <button className="btn btn-danger">Remove</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewFollowups;
