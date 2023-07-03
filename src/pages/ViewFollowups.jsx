import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/viewfollowups.css";
import { apiDomain } from "../utils/APIUtils";


function ViewFollowups() {
	const [followups, setFollowups] = useState([]);
	const allFollowups = async () => {
		try {
			const response = await axios.get(`${apiDomain}/followups`);
			const followups = response.data;
			console.log(followups);
			setFollowups(followups);
			// navigate("/view-followups");
			// Display the fetched cases or do something with the data
		} catch (error) {
			console.error("Error:", error);
		}
	};
	useEffect(() => {
		allFollowups();
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
                        {followups && followups.map((followups, i) => (
                            < tr key={i}>
                                <td>{followups.caseId}</td>
                                <td>{followups.caseNumber}</td>
                                <td>{followups.actionTaken}</td>
                                <td>{followups.status}</td>
                                <td>
                                    <Link to="/editFollowup" className="btn btn-success">Edit</Link>
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


