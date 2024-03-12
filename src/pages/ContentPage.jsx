import ContentEdit from "../components/ContentEdit";
import "../styles/interface.css";

const ContentPage = () => {
	return (
		<div className="page-content">
			<div className="title" style={{}}>
				Editeur de contenus
			</div>
			<ContentEdit />
		</div>
	);
};

export default ContentPage;
