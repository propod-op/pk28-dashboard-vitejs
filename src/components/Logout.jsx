import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthentificationContext } from "../services/AuthContext";

const Logout = () => {
	const AuthentificationCtx = useContext(AuthentificationContext);
	const navToLogin = useNavigate();

	useEffect(() => {
		AuthentificationCtx.jwt = "";
		AuthentificationCtx.role = "";
		AuthentificationCtx.email = "";
		AuthentificationCtx.active = false;
		AuthentificationCtx.connected = false;

		localStorage.removeItem("jwtToken");
		localStorage.removeItem("authData");
		navToLogin("/login");
	}, []);
};

export default Logout;
