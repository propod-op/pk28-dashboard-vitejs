import { useState, useEffect, useRef } from "react";
import axios from "axios"; // Importez Axios
import { JWTFromLocalStorage } from "../services/jwt";
import { TextField, Button, Grid, Select, MenuItem, InputLabel, Alert } from "@mui/material";

const FishesAdd = () => {
	const styleForm = {
		textfield: {
			width: "100%",
		},
	};

	const fileInputRef = useRef(null);

	const InitialObject = () => {
		return {
			reference: "",
			age: "",
			famille: "",
			taille: "",
			couleurs: "",
			eleveur: "",
			prix: "",
			reserve_by: 1,
			vendue: 0,
			type: "",
			description: "",
		};
	};

	const jwt = JWTFromLocalStorage();

	const ax = axios.create({
		baseURL: import.meta.env.VITE_REACT_APP_API_URL,
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
	});

	const [donnees, setDonnees] = useState(InitialObject);
	const [selectedType, setSelectedType] = useState(null); // Définissez selectedType
	const [responseStatus, setResponseStatus] = useState({ status: "", message: "" });
	const [image, setImage] = useState(null);
	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setDonnees({
			...donnees,
			[name]: value,
		});
	};

	useEffect(() => {
		console.log("donnees", donnees);
		console.log("image", image);
	}, [donnees, image]);

	const handleTypeChange = (e) => {
		const { value } = e.target;
		setSelectedType(value); // Mettez à jour la valeur de selectedType lors du changement
		handleChange(e); // Appelez handleChange pour mettre à jour donnees
	};

	const handleEmptyForm = () => {
		setDonnees(InitialObject());
		setSelectedType(null);
		if (fileInputRef.current) {
			fileInputRef.current.value = ""; // Réinitialisez la valeur du champ de fichier
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let addFormData = new FormData();
		addFormData.append("reference", donnees.reference);
		addFormData.append("prix", donnees.prix);
		addFormData.append("naissance", "2023/04/12");
		addFormData.append("age", donnees.age);
		addFormData.append("famille", donnees.famille);
		addFormData.append("taille", donnees.taille);
		addFormData.append("couleurs", donnees.couleurs);
		addFormData.append("eleveur", donnees.eleveur);
		addFormData.append("reserve_by", 0);
		addFormData.append("vendue", 0);
		addFormData.append("type", donnees.type);
		addFormData.append("description", donnees.description);

		if (image) {
			addFormData.append("koiImage", image);
		}

		for (let obj of addFormData) {
			console.log(obj);
		}

		try {
			const response = await ax.post("/fishes/", addFormData, { headers: { "Content-Type": "multipart/form-data" } });
			setResponseStatus({ status: "success", message: `Le poisson ref ${donnees.reference} à été ajouté !` });
			console.log("response", response);
			handleEmptyForm();
		} catch (error) {
			setResponseStatus({ status: "error", message: `Erreur lors de la soumission du formulaire (voir le log)` });
			console.log("error", error);
		}
	};

	return (
		<>
			<form action="/fishes" encType="multipart/form-data">
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<TextField style={styleForm.textfield} id="reference" name="reference" placeholder="Référence" variant="outlined" helperText="Référence" value={donnees.reference} onChange={handleChange} required />
					</Grid>
					<Grid item xs={4}>
						<TextField style={styleForm.textfield} id="famille" name="famille" placeholder="Famille" variant="outlined" helperText="Famille" value={donnees.famille} onChange={handleChange} required />
					</Grid>
					<Grid item xs={4}>
						<TextField style={styleForm.textfield} id="Taille" name="taille" placeholder="Taille (cm)" variant="outlined" helperText="Taille (cm)" value={donnees.taille} onChange={handleChange} required />
					</Grid>
					<Grid item xs={4}>
						<TextField style={styleForm.textfield} id="age" name="age" placeholder="Age (en années)" variant="outlined" helperText="Age" value={donnees.age} onChange={handleChange} required />
					</Grid>
					<Grid item xs={4}>
						<TextField style={styleForm.textfield} id="eleveur" name="eleveur" placeholder="Eleveur" variant="outlined" helperText="Eleveur" value={donnees.eleveur} onChange={handleChange} required />
					</Grid>
					<Grid item xs={4}>
						<TextField style={styleForm.textfield} id="prix" name="prix" placeholder="Prix" variant="outlined" helperText="Prix" type="number" value={donnees.prix} onChange={handleChange} required />
					</Grid>
					{/*<Grid item xs={4}>
						<input id="arrivee_stock" name="arrivee_stock" placeholder="date stockage" type="date" />
					</Grid>*/}
					<Grid item xs={4}>
						<InputLabel id="type-label">Type de poisson</InputLabel>
						<Select style={{ width: "25rem" }} labelId="type-label" id="type" label="Type de poisson" value={selectedType || ""} onChange={handleTypeChange} required>
							<MenuItem value={null}>Sélectionnez un type</MenuItem>
							<MenuItem value={"carpe-koi"}>Carpe Koï</MenuItem>
							<MenuItem value={"carpe-voilée"}>Carpe voilée</MenuItem>
							<MenuItem value={"carpe-miroir"}>Carpe mirroir</MenuItem>
							<MenuItem value={"esturgeon"}>Esturgeon</MenuItem>
						</Select>
					</Grid>

					<Grid item xs={12}>
						<TextField multiline rows={4} style={styleForm.textfield} id="description" name="description" placeholder="description" variant="outlined" helperText="description" type="text" value={donnees.description} onChange={handleChange} required />
					</Grid>
					<Grid item xs={10}>
						<div className="filezone">
							<label className="label-filezone" htmlFor="imageKoi">
								Ajouter une image
							</label>
							<TextField sx={{ mr: 2 }} type="file" name="imageKoi" id="imageKoi" onChange={handleImageChange} inputRef={fileInputRef} required />
						</div>
					</Grid>
				</Grid>
			</form>
			<Grid item xs={12} sx={{ my: 2, display: "flex", justifyContent: "flex-start" }}>
				<Button sx={{ height: "3.4rem", width: 1 / 4 }} type="button" name="clear" variant="contained" onClick={handleEmptyForm}>
					Effacer le formulaire
				</Button>
				<Button sx={{ width: 1 / 4, marginLeft: "2rem", height: "3.4rem", backgroundColor: "#388E3C" }} type="button" name="submit" variant="contained" onClick={handleSubmit}>
					Enregistrer le produit
				</Button>
			</Grid>
			{responseStatus.status == "success" && <Alert severity="success">{responseStatus.message}</Alert>}
			{responseStatus.status == "error" && <Alert severity="error">{responseStatus.message}</Alert>}
		</>
	);
};

export default FishesAdd;
