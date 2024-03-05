import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul>
				<Link to="/">
					<li>Dashboard</li>
				</Link>

				<Link to="/dashboard/products">
					<li key="1">Produits</li>
				</Link>
				<Link to="/dashboard/fishes">
					<li key="2">Poissons</li>
				</Link>
				<Link to="/dashboard/content">
					<li key="3">Contenu</li>
				</Link>
				<Link to="/dashboard/users">
					<li key="4">Comptes</li>
				</Link>
				<Link to="/dashboard/logout">
					<li key="5">Déconnecter</li>
				</Link>
			</ul>
		</div>
	);
};

export default Sidebar;
