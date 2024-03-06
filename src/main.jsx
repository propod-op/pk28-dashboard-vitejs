import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import Test from "./components/Test";
import NotFound from "./components/NotFound";

import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./pages/ProductsPage";

{
	/*import MainLayout from "./layouts/MainLayout";
import FishesPage from "./pages/FishesPage";
import DashboardPage from "./pages/DashboardPage";
*/
}
import PrivateRoutes from "./components/PrivateRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
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
	</React.StrictMode>
);
