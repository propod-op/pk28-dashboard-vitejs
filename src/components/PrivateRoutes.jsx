import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthentificationContext } from "../services/AuthContext";

const PrivateRoutes = () => {
	const AuthentificationCtx = useContext(AuthentificationContext);

	let auth = { token: AuthentificationCtx.connected };
	return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
