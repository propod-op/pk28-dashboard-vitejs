import Sidebar from "../components/Sidebar";
import "../styles/interface.css";
import ProductsPage from "../pages/ProductsPage";
import FishesPage from "../pages/FishesPage";
import ContentPage from "../pages/ContentPage";
import Test from "../components/Test";

const MainLayout = ({ content }) => {
	return (
		<div className="main-layout">
			<Sidebar />
			{content == "productspage" && <ProductsPage />}
			{content == "fishespage" && <FishesPage />}
			{content == "contentpage" && <ContentPage />}
			{content == "test" && <Test />}
		</div>
	);
};

export default MainLayout;
