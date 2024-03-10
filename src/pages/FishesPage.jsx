import FishesAdd from "../components/FishesAdd";
import "../styles/interface.css";

const FishesPage = () => {
	return (
		<div className="page-content">
			<div className="title">Ajouter des poissons</div>
			<FishesAdd />
		</div>
	);
};

export default FishesPage;
