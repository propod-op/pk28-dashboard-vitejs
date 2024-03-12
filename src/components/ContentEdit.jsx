import { useRef } from "react";
import { TextField, Grid, Box } from "@mui/material";

const ContentEdit = () => {
	const handleChangeProductOfTheWeek = () => {};
	const handleImageChange = () => {};
	const fileInputRef = useRef(null);

	return (
		<>
			<Box sx={{ width: "100%" }}>
				<Grid container spacing={0} sx={{ width: 1 }}>
					<TextField sx={{ width: "100%" }} id="promotion-text" name="promotion-text" placeholder="Description du produit de la semaine" variant="outlined" helperText="Produit en promotion" value={""} onChange={handleChangeProductOfTheWeek} />
				</Grid>
				<Grid item sx={1}>
					<div className="filezone">
						<label className="label-filezone" htmlFor="imageProduitPromotion">
							Ajouter une image
						</label>
						<TextField sx={{ mr: 2 }} type="file" name="imageKoi" id="imageKoi" onChange={handleImageChange} inputRef={fileInputRef} required />
					</div>
				</Grid>
			</Box>
		</>
	);
};

export default ContentEdit;
