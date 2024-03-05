// AuthContext.js
import { createContext } from "react";

const AuthContext = createContext({
	message: "Le client est déconnecté.",
	role: "visiteur",
	filtre: {
		couleurs: [],
		famille: "",
		types: "",
		age: "",
		concours: "",
		prix: "",
		eleveur: "",
	},
});

// A supprimer si inutilisé
const NavigationContext = createContext({
	message: "Le client est déconnecté.",
	role: "visiteur",
	filtre: {
		couleurs: [],
		famille: "",
		types: "",
		age: "",
		concours: "",
		prix: "",
		eleveur: "",
	},
});

const initAuthData = {
	role: "visiteur",
	message: "Le client est déconnecté.",
	filtre: {
		couleurs: [],
		famille: "",
		type: "",
		prix: [0, 10000],
		age: 0,
		concours: 0,
		eleveur: "",
	},
};

export { AuthContext, NavigationContext, initAuthData };
