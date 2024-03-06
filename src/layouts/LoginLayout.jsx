import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Box, Grid, TextField, Button } from "@mui/material";
import "../styles/interface.css";
{
	/*import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../services/AuthContext";
*/
}

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [connectionData, setConnectionData] = useState({});
	const [isActive, setIsActive] = useState(null);

	const ax = axios.create({
		baseURL: import.meta.env.VITE_REACT_APP_API_URL,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await ax.post("/login", { email, password });
			const cdata = { jwt: response.data.jwt, role: response.data.role, email: response.data.email, active: response.data.is_active };
			setConnectionData(cdata);
			if (connectionData.role == "admin") {
				setIsActive(true);
			}
			//console.log("response : ", response);
		} catch (error) {
			console.error("Error:", error);
			setIsActive(false);
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
		<div className="login-content">
			<div className="login-title">Connectez-vous</div>
			<form className="login-form" onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<TextField style={{ width: "100%" }} id="email" name="email" placeholder="Votre email" variant="outlined" helperText="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
					</Grid>
					<Grid item xs={6}>
						<TextField style={{ width: "100%" }} id="password" name="password" placeholder="Mot de passe" variant="outlined" helperText="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
					</Grid>
				</Grid>
				<Button sx={{ px: 4, py: 2 }} type="submit" name="submit" variant="contained" onClick={handleSubmit}>
					Se connecter
				</Button>
			</form>
		</div>
	);
};

export default Login;
