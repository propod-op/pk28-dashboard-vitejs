// AuthContext.js
import { createContext } from "react";

const AuthentificationContext = createContext({
	email: "",
	role: "",
	connected: false,
});

const NavigationContext = createContext({
	monObjet: {
		data1: "data1",
		data2: "data2",
	},
});

export { AuthentificationContext, NavigationContext };
