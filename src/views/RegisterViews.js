import { useState } from "react";

import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";

import authOperations from "../redux/auth/auth-operations";

const styles = {
	form: {
		width: 320,
		margin: "0 auto",
	},
	label: {
		display: "flex",
		flexDirection: "column",
		marginBottom: 15,
	},
};

export default function RegisterView() {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case "name":
				return setName(value);
			case "email":
				return setEmail(value);
			case "password":
				return setPassword(value);
			default:
				return;
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(authOperations.register({ name, email, password }));
		setName("");
		setEmail("");
		setPassword("");
	};

	return (
		<div>
			<Helmet>
				<title>Registration page</title>
			</Helmet>
			<h1>Create an account</h1>

			<form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
				<label style={styles.label}>
					Name
					<input type="text" name="name" value={name} onChange={handleChange} />
				</label>

				<label style={styles.label}>
					Email
					<input type="email" name="email" value={email} onChange={handleChange} />
				</label>

				<label style={styles.label}>
					Password
					<input type="password" name="password" value={password} onChange={handleChange} />
				</label>

				<button type="submit">Register</button>
			</form>
		</div>
	);
}
