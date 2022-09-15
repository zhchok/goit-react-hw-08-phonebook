import { Outlet } from "react-router-dom";

import AppBar from "./AppBar";
import { GlobalStyle } from "./Base/GlobalStyle";

export const Layout = () => {
	return (
		<>
			<AppBar />
			<Outlet />
			<GlobalStyle />
		</>
	);
};
