import { useEffect } from "react";

import { Loading } from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { authOperations, authSelectors } from "redux/auth";
import ContactsViews from "views/ContactsViews";
import HomeView from "views/HomeViews";
import LoginView from "views/LoginViews";
import RegisterView from "views/RegisterViews";

import { Box } from "./Box/box";
import { Layout } from "./Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export function App() {
	const dispatch = useDispatch();
	const isRefresgingUser = useSelector(authSelectors.getIsRefreshingUser);

	useEffect(() => {
		dispatch(authOperations.fetchCurrentUser());
	}, [dispatch]);
	return isRefresgingUser ? (
		(Loading.standard(), Loading.remove())
	) : (
		<Box as="main" textAlign="center" margin="0 auto" width="1200px">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomeView />} />
					<Route
						path="/register"
						element={
							<PublicRoute redirectTo="/contacts" restricted>
								<RegisterView />
							</PublicRoute>
						}
					/>
					<Route
						path="/login"
						element={
							<PublicRoute redirectTo="/contacts" restricted>
								<LoginView />
							</PublicRoute>
						}
					/>
					<Route
						path="/contacts"
						element={
							<PrivateRoute redirectTo="/login">
								<ContactsViews />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</Box>
	);
}
