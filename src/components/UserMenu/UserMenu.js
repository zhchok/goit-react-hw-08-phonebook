import { useDispatch, useSelector } from "react-redux";

import { Box } from "components/Box/box";

import { authOperations, authSelectors } from "../../redux/auth";
import { Avatar, Name } from "./UserMenu.styled";

export default function UserMenu() {
	const dispatch = useDispatch();
	const name = useSelector(authSelectors.getUsername);

	return (
		<Box display="flex" alignItems="center">
			<Name>Welcome, {name}</Name>
			<Avatar />
			<button type="button" onClick={() => dispatch(authOperations.logOut())}>
				Log out
			</button>
		</Box>
	);
}
