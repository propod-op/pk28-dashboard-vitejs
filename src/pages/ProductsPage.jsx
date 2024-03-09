import ProductsAdd from "../components/ProductsAdd";
import ProductsDataTable from "../components/ProductsDataTable";
import "../styles/interface.css";

const ProductsPage = () => {
	return (
		<div className="page-content">
			<div className="title">Ajouter des Produits</div>
			<ProductsAdd />
			<div className="title">Tableaux des Produits</div>
			<ProductsDataTable />
			<div className="title">Supprimer une référence</div>
		</div>
	);
};

export default ProductsPage;
