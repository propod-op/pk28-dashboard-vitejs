import Sidebar from "../components/Sidebar";
import "../styles/interface.css";
import ProductsPage from "../pages/ProductsPage";
import FishesPage from "../pages/FishesPage";

const MainLayout = ({ content }) => {
	return (
		<div className="main-layout">
			<Sidebar />
			{content == "productspage" && <ProductsPage />}
			{content == "fishespage" && <FishesPage />}
		</div>
	);
};

export default MainLayout;
