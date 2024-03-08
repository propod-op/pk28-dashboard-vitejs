// AuthProvider.js
import { useState } from "react";
import { AuthContext } from "../services/AuthContext";

const AuthProvider = ({ children }) => {
	const [authData, setAuthData] = useState({});
	return <AuthContext.Provider value={{ authData, setAuthData }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
