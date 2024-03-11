import { useState } from "react";
import axios from "axios"; // Importez Axios
import { JWTFromLocalStorage } from "../services/jwt";
import { TextField, Button, Grid } from "@mui/material";
import { Alert } from "@mui/material";

const FishesRemove = () => {
	const styleForm = {
		zone: {
			padding: "1rem",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "flex-start",
		},
		textfield: {
			width: "100%",
		},
	};

	const [reference, setReference] = useState("");
	const [responseStatus, setResponseStatus] = useState({ status: "", message: "" });
	const jwt = JWTFromLocalStorage();
	const ax = axios.create({
		baseURL: import.meta.env.VITE_REACT_APP_API_URL,
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
	});

	// Fonction pour gérer le changement de référence
	const handleChange = (event) => {
		setReference(event.target.value);
	};

	const handleSubmitRemove = () => {
		ax.delete("/fishes/" + reference)
			.then((response) => {
				// Gérer la réponse si nécessaire
				console.log("Suppression réussie ! : ", response);
				setResponseStatus({ status: "success", message: `Le poisson ref ${reference} a été supprimé !` });
			})
			.catch((error) => {
				// Gérer les erreurs
				setResponseStatus({ status: "error", message: `Erreur lors de la suppression (${error})` });
			});
	};

	return (
		<>
			<form>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<TextField style={styleForm.textfield} id="reference" name="reference" placeholder="Référence" variant="outlined" helperText="Référence" onChange={handleChange} required />
					</Grid>
					<Grid item xs={4}>
						<Button sx={{ height: "3.4rem", backgroundColor: "#db2525" }} type="button" name="clear" variant="contained" onClick={handleSubmitRemove}>
							Effacer la référence
						</Button>
					</Grid>
				</Grid>
			</form>
			{responseStatus.status == "success" && <Alert severity="success">{responseStatus.message}</Alert>}
			{responseStatus.status == "error" && <Alert severity="error">{responseStatus.message}</Alert>}
		</>
	);
};

export default FishesRemove;
