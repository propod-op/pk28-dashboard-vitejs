// AuthContext.js
import { createContext } from "react";

const AuthentificationContext = createContext({
	jwt: "",
	email: "",
	role: "",
	connected: false,
	active: false,
});

const NavigationContext = createContext({
	monObjet: {
		data1: "data1",
		data2: "data2",
	},
});

export { AuthentificationContext, NavigationContext };
