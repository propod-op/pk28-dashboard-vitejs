import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginLayout from "./layouts/LoginLayout";
import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./pages/ProductsPage";
import Test from "./components/Test";
import NotFound from "./components/NotFound";

import PrivateRoutes from "./components/PrivateRoutes";
import { AuthentificationContext } from "./services/AuthContext";

export default function App() {
	return (
		<AuthentificationContext.Provider value={{}}>
			<BrowserRouter>
				<Routes>
					<Route element={<PrivateRoutes />}>
						<Route element={<Test />} path="/" exact />
						<Route element={<MainLayout content={ProductsPage} />} path="/dashboard/products" />
					</Route>
					<Route element={<LoginLayout />} path="/login" />
					<Route element={<NotFound />} path="/*" />
				</Routes>
			</BrowserRouter>
		</AuthentificationContext.Provider>
	);
}
