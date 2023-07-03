import "./App.css";
import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AddCase from "./pages/AddCase";
import FollowedUp from "./pages/FollowedUp";
import IncidentTypes from "./pages/IncidentTypes";
import Administrators from "./pages/Administrators";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import ViewCases from "./pages/ViewCases";
import ViewFollowups from "./pages/ViewFollowups";
import ViewUsers from './pages/ViewUsers';
import UpdateUserInfo from "./pages/Settings";

function App() {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="" element={<Layout />}>
				<Route path="/" element={<Navigate to="Dashboard" />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/add-case" element={<AddCase />} />
				<Route path="/followed-up" element={<FollowedUp />} />
				<Route path="/incident-types" element={<IncidentTypes />} />
				<Route path="/administrator" element={<Administrators />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/view-cases" element={<ViewCases />} />
				<Route path="/view-followups" element={<ViewFollowups />} />
				<Route path="/view-users" element={<ViewUsers />} />
				<Route path="/update-userinfo" element={<UpdateUserInfo />} />
			</Route>
		</Routes>
	);
}

export default App;
