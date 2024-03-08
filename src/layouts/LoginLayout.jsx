import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, TextField, Button } from "@mui/material";
import { AuthentificationContext } from "../services/AuthContext";
import { JWTtoLocalStorage } from "../services/jwt";

//CSS
const loginStyle = {
	loginPage: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "#222",
	},
	loginContent: {
		position: "absolute",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		textTransform: "uppercase",

		width: "30rem",
		height: "20rem",
		left: "calc(50% - 15rem)",
		top: "calc(50% - 10rem)",
		backgroundColor: "#fcfcfc",
		borderRadius: "4px",
		overflow: "hidden",
		border: "1px solid #222",
	},
	loginTitle: {
		backgroundColor: "#0c6dc3",
		fontSize: "1.5rem",
		fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
		fontWeight: "800",
		textAlign: "center",
		width: "100%",
		padding: "1rem",
		marginBottom: "2rem",
		color: "white",
	},
	loginForm: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	loginFormInput: {
		width: "100%",
		backgroundColor: "#fff",
	},
	loginFormButtonSubmit: {
		marginTop: "3rem",
	},
};

const Login = () => {
	const AuthentificationCtx = useContext(AuthentificationContext);
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isActive, setIsActive] = useState(null);

	const ax = axios.create({
		baseURL: import.meta.env.VITE_REACT_APP_API_URL,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await ax.post("/login", { email, password });
			console.log("response:", response);
			const cdata = { jwt: response.data.jwt_token, role: response.data.role, email: response.data.email, active: response.data.is_active };

			if (cdata && cdata.role == "admin") {
				setIsActive(true);
				AuthentificationCtx.jwt = cdata.jwt;
				AuthentificationCtx.role = cdata.role;
				AuthentificationCtx.email = cdata.email;
				AuthentificationCtx.active = true;
				AuthentificationCtx.connected = true;
				JWTtoLocalStorage(cdata.jwt);
				navigate("/dashboard/products");
			} else {
				AuthentificationCtx.jwt = "";
				AuthentificationCtx.role = "";
				AuthentificationCtx.email = "";
				AuthentificationCtx.active = false;
				AuthentificationCtx.connected = false;
			}
			console.log("le contexte : ", AuthentificationCtx);
		} catch (error) {
			if (error.response && error.response.status === 401) {
				console.log("Vous n'êtes pas autorisé.");
				setIsActive(false);
				AuthentificationCtx.jwt = "";
				AuthentificationCtx.role = "";
				AuthentificationCtx.email = "";
				AuthentificationCtx.active = false;
				AuthentificationCtx.connected = false;
				console.log("le contexte : ", AuthentificationCtx);
			} else {
				console.error("Error:", error);
			}
		}
	};

	useEffect(() => {
		if (isActive) {
			console.log("You're connected !");
		} else {
			console.log("Invalid login");
		}
	}, [isActive]);

	return (
		<div style={loginStyle.loginPage}>
			<div style={loginStyle.loginContent}>
				<div style={loginStyle.loginTitle}>Connectez-vous</div>
				<form style={loginStyle.loginForm} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<TextField style={loginStyle.loginFormInput} id="email" name="email" placeholder="Votre email" variant="outlined" helperText="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
						</Grid>
						<Grid item xs={6}>
							<TextField style={loginStyle.loginFormInput} id="password" name="password" placeholder="Mot de passe" variant="outlined" helperText="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
						</Grid>
					</Grid>
					<Button style={loginStyle.loginFormButtonSubmit} sx={{ px: 4, py: 2 }} type="submit" name="submit" variant="contained" onClick={handleSubmit}>
						Se connecter
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
