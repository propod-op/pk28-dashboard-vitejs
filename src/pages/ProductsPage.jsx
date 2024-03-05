import ProductsAdd from "../components/ProductsAdd";
import ProductsDataTable from "../components/ProductsDataTable";

const ProductsPage = () => {
	return (
		<div className="content-layout">
			this my product page
			<ProductsDataTable />
			<ProductsAdd />
		</div>
	);
};

export default ProductsPage;
