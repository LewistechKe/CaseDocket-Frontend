import React, { useState } from "react";
import axios from "axios";
import "../styles/settings.css";
import { apiDomain } from "../utils/APIUtils";

const Settings = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [badgeNumber, setBadgeNumber] = useState("");
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		// Create an object with the updated details
		const updatedSettings = {
			firstName,
			lastName,
			badgeNumber,
			currentPassword,
			newPassword,
		};

		try {
			// Send a request to update the settings in the database
			await axios.put(`${apiDomain}/settings`, updatedSettings);
			console.log("Settings updated successfully");
			// Reset the form fields
			setFirstName("");
			setLastName("");
			setBadgeNumber("");
			setCurrentPassword("");
			setNewPassword("");
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div>
			<h2>Settings</h2>
			<form onSubmit={handleFormSubmit} className="settings-form">
				<div>
					<label htmlFor="firstName">First Name:</label>
					<input
						type="text"
						id="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="lastName">Last Name:</label>
					<input
						type="text"
						id="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="badgeNumber">Badge Number:</label>
					<input
						type="text"
						id="badgeNumber"
						value={badgeNumber}
						onChange={(e) => setBadgeNumber(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="currentPassword">Current Password:</label>
					<input
						type="password"
						id="currentPassword"
						value={currentPassword}
						onChange={(e) => setCurrentPassword(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="newPassword">New Password:</label>
					<input
						type="password"
						id="newPassword"
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Update Settings</button>
			</form>
		</div>
	);
};

export default Settings;
