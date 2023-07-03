import React, { useState } from "react";
import axios from "axios";
import "../styles/administrator.css";
import { useNavigate } from "react-router-dom";
import { apiDomain } from "../utils/APIUtils";

const AddUserForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [badgeNumber, setBadgeNumber] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("");

  const navigate = useNavigate()
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Create a user object
		const newUser = {
			firstName,
			lastName,
			badgeNumber,
			password,
			role,
		};

		try {
			// Send a POST request to the API to add the user
			const response = await axios.post(`${apiDomain}/Users`, newUser);

			// Reset the form
			setFirstName("");
			setLastName("");
			setBadgeNumber("");
			setPassword("");
			setRole("");

			// Show window alert popup
			window.alert("User added successfully!");
			console.log("User added successfully!");
		} catch (error) {
			console.error(error);
			// Show error message in window alert popup
			window.alert("An error occurred while adding the user.");
		}
	};

  const handleViewAllUsers = async () => {
    try {
      navigate("/view-users")
    } catch (error) {
      console.error("Error:", error);
    }
  }


	return (
		<div>
			<h2>Add User</h2>
			<form onSubmit={handleSubmit} className="add-user-form">
				<div className="form-column">
					<label htmlFor="firstName">First Name:</label>
					<input
						type="text"
						id="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>

					<label htmlFor="lastName">Last Name:</label>
					<input
						type="text"
						id="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>

					<label htmlFor="employeeId">Badge No:</label>
					<input
						type="text"
						id="badgeNumber"
						value={badgeNumber}
						onChange={(e) => setBadgeNumber(e.target.value)}
						required
					/>
				</div>

				<div className="form-column">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					<label htmlFor="role">Role:</label>
					<select
						id="role"
						value={role}
						onChange={(e) => setRole(e.target.value)}
						required>
						<option value="">Select Role</option>
						<option value="admin">Admin</option>
						<option value="investigator">Investigator</option>
						<option value="officer">Officer</option>
					</select>

					<div className="button-group">
						<button type="submit">Add User</button>
						<button type="button" onClick={handleViewAllUsers}>
							All Users
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddUserForm;
