import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { apiDomain } from "../utils/APIUtils";

const LoginForm = () => {
	const navigate = useNavigate();

	const loginSchema = yup.object().shape({
		badgeNumber: yup.string().required("Badge Number is required"),
		password: yup.string().min(6).required("Password is required"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	const onSubmit = async (data) => {
		console.log(data);

		try {
			const res = await fetch(`${apiDomain}/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (res.ok) {
				const formData = await res.json();
				if (formData.token) {
					navigate("/dashboard");
				}
			} else {
				throw new Error("Authentication failed");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<h1>Police Case Docket System</h1>
			<div className="form-container">
				<p className="title">Login</p>
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<div className="input-group">
						<label htmlFor="badgeNumber">Badge Number</label>
						<input
							type="text"
							name="badgeNumber"
							id="badgeNumber"
							placeholder="Badge Number"
							{...register("badgeNumber")}
						/>
						{errors["badgeNumber"] && (
							<span className="error">{errors["badgeNumber"].message}</span>
						)}
					</div>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter Password"
							{...register("password")}
						/>
						{errors.password && (
							<span className="error">{errors.password.message}</span>
						)}
						<div className="forgot">
							<a rel="noopener noreferrer" href="#">
								Forgot Password?
							</a>
						</div>
					</div>
					<button type="submit" className="sign">
						Sign in
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
