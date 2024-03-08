import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginLayout from "./layouts/LoginLayout";
import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./pages/ProductsPage";
import FishesPage from "./pages/FishesPage";

import NotFound from "./components/NotFound";

import PrivateRoutes from "./components/PrivateRoutes";
import { AuthentificationContext } from "./services/AuthContext";

export default function App() {
	return (
		<AuthentificationContext.Provider value={{ jwt: "", email: "", role: "", connected: false, active: false }}>
			<BrowserRouter>
				<Routes>
					<Route element={<PrivateRoutes />}>
						<Route element={<MainLayout content="dashboard" />} path="/dashboard/fishes" />
						<Route element={<MainLayout content="productspage" />} path="/dashboard/products" />
						<Route element={<MainLayout content="fishespage" />} path="/dashboard/fishes" />
					</Route>
					<Route element={<LoginLayout />} path="/login" />
					<Route element={<NotFound />} path="/*" />
				</Routes>
			</BrowserRouter>
		</AuthentificationContext.Provider>
	);
}
