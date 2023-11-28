import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
	display: inline-block;
	text-decoration: none;
	padding: 12px;
	font-weight: 700;
	color: #2a363b;
	&.active {
		color: #e84a5f;
	}
`;

export default function AuthNav() {
	return (
		<div>
			<Link to="/register">Registration</Link>
			<Link to="/login">Log in</Link>
		</div>
	);
}
