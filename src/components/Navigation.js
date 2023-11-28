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

const Navigation = () => (
	<nav>
		<Link to="/">Home</Link>
		<Link to="/contacts">Contacts</Link>
	</nav>
);

export default Navigation;
