import Sidebar from "../components/Sidebar";

import "../styles/interface.css";
import ContentLayout from "./ContentLayout";

const MainLayout = () => {
	return (
		<div className="main-layout">
			<Sidebar />
			<ContentLayout />
		</div>
	);
};

export default MainLayout;
