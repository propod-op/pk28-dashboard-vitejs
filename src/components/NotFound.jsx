import { Link } from "react-router-dom";

const NotFound = () => {
	const styleNotFound = {
		container: {
			width: "100vw",
			height: "100vh",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
		text: {
			fontSize: "3rem",
			textAlign: "center",
		},
		link: {
			margin: "auto",
			textDecoration: "none",
			fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
			fontSize: "1.25rem",
		},
	};

	return (
		<>
			<div style={styleNotFound.container}>
				<p style={styleNotFound.text}>404 : Page not found !</p>
				<Link style={styleNotFound.link} to="/login">
					Page de login
				</Link>
			</div>
		</>
	);
};

export default NotFound;
