import { useState } from "react";

import { useDispatch } from "react-redux";

import { Box } from "components/Box/box";

import { authOperations } from "../redux/auth";

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

export default function LoginView() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
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
		dispatch(authOperations.logIn({ email, password }));
		setEmail("");
		setPassword("");
	};

	return (
		<Box>
			<h1>Log in</h1>

			<form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
				<label style={styles.label}>
					Email
					<input type="email" name="email" value={email} onChange={handleChange} />
				</label>

				<label style={styles.label}>
					Password
					<input type="password" name="password" value={password} onChange={handleChange} />
				</label>

				<button type="submit">Log in</button>
			</form>
		</Box>
	);
}
