import { useState, useEffect } from "react";
import axios from "axios"; // Importez Axios
import { JWTFromLocalStorage } from "../services/jwt";

const ProductsAdd = () => {
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
		<div className="manage-container">
			<h2>AJOUTER UN PRODUIT</h2>
			<form className="manage ajouter" action="/products/add" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
				<div className="input">
					<label htmlFor="reference">Référence :</label>
					<input className="base-input" type="text" placeholder="Ex : 1011" id="reference" name="reference" value={donnees.reference} onChange={handleChange} required />
				</div>
				<div className="input">
					<label htmlFor="famille">Famille :</label>
					<input className="base-input" type="text" placeholder="Asagin" id="famille" name="famille" value={donnees.famille} onChange={handleChange} required />
				</div>
				<div className="input">
					<label htmlFor="taille">Taille (cm) :</label>
					<input className="base-input" type="text" id="taille" name="taille" value={donnees.taille} onChange={handleChange} required />
				</div>

				<div className="input">
					<label htmlFor="age">Âge (ans):</label>
					<input className="base-input" type="number" id="age" name="age" value={donnees.age} onChange={handleChange} required />
				</div>

				<div className="input">
					<label htmlFor="eleveur">Éleveur :</label>
					<input className="base-input" type="text" id="eleveur" name="eleveur" value={donnees.eleveur} onChange={handleChange} required />
				</div>
				<div className="input">
					<label htmlFor="prix">Prix :</label>
					<input className="base-input" type="text" id="prix" name="prix" value={donnees.prix} onChange={handleChange} required />
				</div>

				<div className="upload">
					<label htmlFor="imageKoi">Ajouter une image</label>
					<input className="base-input" type="file" name="imageKoi" id="imageKoi" onChange={handleImageChange} required />
					<button type="submit" name="submit">
						Uploader
					</button>
				</div>
			</form>
			<hr />
			{/* <h2>SUPPRIMER UN PRODUIT</h2>
			<form className="manage delete" action="products/delete" method="post" encType="multipart/form-data">
				<input className="base-input" type="text" id="delete-code" name="delete-code" placeholder="Entrez un code produit à supprimer" required />
				<button type="submit" name="submit">
					Supprimer
				</button>
			</form>
      **/}
		</div>
	);
};

export default ProductsAdd;
