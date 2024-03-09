import axios from "axios";

const ProductsRemove = () => {
	const styleRemoveZone = {
		zone: {
			padding: "1rem",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "flex-start",
		},
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
					<Grid item xs={12}>
						<Button sx={{ height: "3.4rem" }} type="submit" name="submit" variant="contained">
							Supprimer
						</Button>
					</Grid>
				</Grid>
			</form>
			{/* <h2>SUPPRIMER UN PRODUIT</h2>
			<form className="manage delete" action="products/delete" method="post" encType="multipart/form-data">
				<input className="base-input" type="text" id="delete-code" name="delete-code" placeholder="Entrez un code produit à supprimer" required />
				<button type="submit" name="submit">
					Supprimer
				</button>
			</form>
      **/}
		</>
	);
};

export default ProductsRemove;
