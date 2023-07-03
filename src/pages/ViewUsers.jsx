import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/viewusers.css";
import { apiDomain } from "../utils/APIUtils";

function ViewUsers() {
	const [users, setUsers] = useState([]);
	const allUsers = async () => {
		try {
			const response = await axios.get(`${apiDomain}/Users`);
			const users = response.data;
			console.log(users);
			setUsers(users);
			// navigate("/view-users");
			// Display the fetched users or do something with the data
		} catch (error) {
			console.error("Error:", error);
		}
	};
	useEffect(() => {
		allUsers();
	}, []);
	return (
		<div>
            <h2>View Users</h2>
			<table className="table">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last NAme</th>
						<th>Badge Number</th>
						<th>Password</th>
						<th>Role</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
                <tbody>
                        {users && users.map((users, i) => (
                            < tr key={i}>
                                <td>{users.firstName}</td>
                                <td>{users.lastName}</td>
                                <td>{users.badgeNumber}</td>
                                <td>{users.password}</td>
                                <td>{users.role}</td>
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

export default ViewUsers;
