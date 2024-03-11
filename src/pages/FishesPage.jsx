import FishesAdd from "../components/FishesAdd";
import FishesRemove from "../components/FishesRemove";

import "../styles/interface.css";

const FishesPage = () => {
	return (
		<div className="page-content">
			<div className="title" style={{}}>
				Tableau des poissons
			</div>
			{/*<FishesTable />*/}

			<div className="title" style={{ marginTop: "2rem" }}>
				Ajouter des poissons
			</div>
			<FishesAdd />
			<div className="title" style={{ marginTop: "2rem" }}>
				Supprimer un poisson (ref)
			</div>
			<FishesRemove />
		</div>
	);
};

export default FishesPage;
