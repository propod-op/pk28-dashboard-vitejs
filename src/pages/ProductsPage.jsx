import ProductsAdd from "../components/ProductsAdd";
import ProductsDataTable from "../components/ProductsDataTable";

const ProductsPage = () => {
	return (
		<div className="page-content">
			<div className="page-title">Ajouter des Produits</div>
			<ProductsAdd />
			<div className="page-title">Tableaux des Produits</div>
			<ProductsDataTable />
			<div className="page-title">Supprimer une référence</div>
		</div>
	);
};

export default ProductsPage;
