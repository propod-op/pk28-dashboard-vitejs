import { jwtDecode } from "jwt-decode";

const JWTtoLocalStorage = (jwt) => {
	const localStorage = window.localStorage;
	localStorage.setItem("jwtToken", jwt);
	//console.log("jwt.js - Le jwt doit être stocké.", jwt);
};

const JWTFromLocalStorage = () => {
	const storedJwtToken = localStorage.getItem("jwtToken");
	return storedJwtToken;
};

const removeAllFromLocalStorage = () => {
	localStorage.removeItem("jwtToken");
	localStorage.removeItem("authData");
};

const AuthDataFromLocalStorage = () => {
	const storedAuthData = localStorage.getItem("authData");
	return JSON.parse(storedAuthData);
};

const AuthDataToLocalStorage = (authdata) => {
	const localStorage = window.localStorage;
	localStorage.setItem("authData", JSON.stringify(authdata));
};

{
	/* const encodeJWT = () => {
	const storedJwtToken = JSON.parse(localStorage.getItem("jwtToken"));
	if (storedJwtToken) {
		const decoded = jwtDecode(storedJwtToken);
		env.JWT_SECRET;
	}
}; */
}

const getRoleFromJwt = () => {
	const storedJwtTokenString = localStorage.getItem("jwtToken");
	const storedJwtToken = storedJwtTokenString ? JSON.parse(storedJwtTokenString) : null;

	if (storedJwtToken) {
		const decoded = jwtDecode(storedJwtToken);
		return decoded.infosPayload.role;
	} else {
		return "visiteur";
	}
};

/*
const decodeJWT = () {
	
}*/

export { JWTtoLocalStorage, JWTFromLocalStorage, removeAllFromLocalStorage, AuthDataFromLocalStorage, AuthDataToLocalStorage, getRoleFromJwt };
