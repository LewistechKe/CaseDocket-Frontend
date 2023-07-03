import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/viewcases.css";
import { apiDomain } from "../utils/APIUtils";


function ViewCases() {
	const [cases, setCases] = useState([]);
	const allCases = async () => {
		try {
			const response = await axios.get(`${apiDomain}/Cases`);
			const cases = response.data;
			console.log(cases);
			setCases(cases);
			// navigate("/view-cases");
			// Display the fetched cases or do something with the data
		} catch (error) {
			console.error("Error:", error);
		}
	};
	useEffect(() => {
		allCases();
	}, []);
	return (
		<div>
            <h2>View Cases</h2>
			<table className="table">
				<thead>
					<tr>
						<th>Case ID</th>
						<th>Case Number</th>
						<th>Incedent Type</th>
						<th>Date Added</th>
						<th>Status</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
                <tbody>
                        {cases && cases.map((cases, i) => (
                            < tr key={i}>
                                <td>{cases.id}</td>
                                <td>{cases.caseNumber}</td>
                                <td>{cases.incidentType}</td>
                                <td>{cases.dateCaseAdded}</td>
                                <td>{cases.status}</td>
                                <td>
                                    <Link to="/editCase" className="btn btn-success">Edit</Link>
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
