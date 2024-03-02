import "../styles/sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul>
				<li onClick="">Gérer les comptes</li>
				<li onClick="">Produits</li>
				<li onClick="">Poissons</li>
				<li onClick="">Promotions</li>
				<li onClick="">Evenemens</li>
				<li onClick="">Contenu</li>
			</ul>
		</div>
	);
};

export default Sidebar;
