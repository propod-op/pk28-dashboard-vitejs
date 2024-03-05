import { useNavigate } from "react-router-dom";
import { FormControl } from "@mui/base/FormControl";

export default function LoginLayout() {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(`Lookup for login... ${email}  ${password}`);
		{
			if (email == "rm" && password == "123") {
				console.log("You're login in !");
				navigate("/dashboard");
			}
		}
	};

	const style = {
		content: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100vw",
			height: "100vh",
		},
		form: {
			display: "flex",
			flexDirection: "column",
			margin: "1rem auto",
			width: "15rem",
			columnGap: "1rem",
			rowGap: "1rem",
		},
		input: {
			width: "100%",
			height: "2rem",
			paddingLeft: "1rem",
		},
		button: {
			backgroundColor: "#0E4AB7",
			color: "white",
		},
	};

	return (
		<div style={style.content}>
			<form style={style.form} onSubmit={handleSubmit}>
				<input style={style.input} type="text" name="email" placeholder="Votre email" />
				<input style={style.input} type="password" name="password" placeholder="Votre mot de passe" />
				<button style={style.button} type="submit">
					Connecter
				</button>
			</form>
		</div>
	);
}
