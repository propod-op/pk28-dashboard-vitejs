import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul>
				<Link to="/">
					{" "}
					<li>Dashboard</li>
				</Link>

				<Link to="/products">
					{" "}
					<li>Produits</li>
				</Link>
				<Link to="/fishes">
					{" "}
					<li>Poissons</li>
				</Link>
				<li>Promotions</li>
				<li>Evenemens</li>
				<li>Contenu</li>
			</ul>
		</div>
	);
};

export default Sidebar;
