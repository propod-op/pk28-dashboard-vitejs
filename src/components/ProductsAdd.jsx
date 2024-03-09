import { useState, useEffect } from "react";
import axios from "axios"; // Importez Axios
import { JWTFromLocalStorage } from "../services/jwt";

import { TextField, Button, Grid } from "@mui/material";

const ProductsAdd = () => {
	const styleUploadzone = {
		zone: {
			padding: "1rem",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "flex-start",
		},
		fileInput: { width: "20rem" },
		labelInput: {
			fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
			fontSize: "1.25rem",
			marginRight: "1rem",
		},
	};

	const jwt = JWTFromLocalStorage();

	const ax = axios.create({
		baseURL: import.meta.env.VITE_REACT_APP_API_URL,
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
	});

	const [donnees, setDonnees] = useState({
		reference: "",
		age: "",
		famille: "",
		taille: "",
		couleurs: "",
		eleveur: "",
		prix: "",
		reserve_by: 1,
		vendue: 0,
	});

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		let addFormData = new FormData();
		addFormData.append("reference", donnees.reference);
		addFormData.append("age", donnees.age);
		addFormData.append("famille", donnees.famille);
		addFormData.append("taille", donnees.taille);
		addFormData.append("couleurs", donnees.couleurs);
		addFormData.append("eleveur", donnees.eleveur);
		addFormData.append("prix", donnees.prix);
		addFormData.append("vendue", 0);
		addFormData.append("reserve_by", 0);

		if (image) {
			addFormData.append("koiImage", image);
		}

		for (let obj of addFormData) {
			console.log(obj);
		}

		try {
			const response = await ax.post("/products/add", addFormData, { headers: { "Content-Type": "multipart/form-data" } });
			console.log("Serveur :", response);
		} catch (error) {
			console.error("Erreur lors de la soumission du formulaire", error);
		}
	};

	return (
		<>
			<form className="manage ajouter" action="/products/add" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<TextField style={{ width: "100%" }} id="reference" name="reference" placeholder="Référence" variant="outlined" helperText="Référence" value={donnees.reference} onChange={handleChange} required />
					</Grid>
					<Grid item xs={4}>
						<TextField style={{ width: "100%" }} id="famille" name="famille" placeholder="Famille" variant="outlined" helperText="Famille" value={donnees.famille} onChange={handleChange} required />
					</Grid>
					<Grid item xs={4}>
						<TextField style={{ width: "100%" }} id="Taille" name="taille" placeholder="Taille (cm)" variant="outlined" helperText="Taille (cm)" value={donnees.taille} onChange={handleChange} required />
					</Grid>
					<Grid item xs={4}>
						<TextField style={{ width: "100%" }} id="age" name="age" placeholder="Age" variant="outlined" helperText="Age" value={donnees.age} onChange={handleChange} required />
					</Grid>
					<Grid item xs={4}>
						<TextField style={{ width: "100%" }} id="eleveur" name="eleveur" placeholder="Eleveur" variant="outlined" helperText="Eleveur" value={donnees.eleveur} onChange={handleChange} required />
					</Grid>
					<Grid item xs={4}>
						<TextField style={{ width: "100%" }} id="prix" name="prix" placeholder="Prix" variant="outlined" helperText="Prix" type="number" value={donnees.prix} onChange={handleChange} required />
					</Grid>
					<Grid item xs={12}>
						<div style={styleUploadzone.zone}>
							<label style={styleUploadzone.labelInput} htmlFor="imageKoi">
								Ajouter une image
							</label>
							<TextField sx={{ mr: 2 }} type="file" name="imageKoi" id="imageKoi" onChange={handleImageChange} required />
							<Button sx={{ height: "3.4rem" }} type="submit" name="submit" variant="contained">
								Uploader
							</Button>
						</div>
					</Grid>
				</Grid>
			</form>
		</>
	);
};

export default ProductsAdd;
