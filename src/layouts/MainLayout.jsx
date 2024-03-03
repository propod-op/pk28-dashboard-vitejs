import Sidebar from "../components/Sidebar";

import "../styles/interface.css";
import ContentLayout from "./ContentLayout";

const MainLayout = ({ content }) => {
	return (
		<div className="main-layout">
			<Sidebar />
			<ContentLayout content={content} />
		</div>
	);
};

export default MainLayout;
