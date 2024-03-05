import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";

import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./pages/ProductsPage";
import FishesPage from "./pages/FishesPage";
import LoginLayout from "./layouts/LoginLayout";

const router = createBrowserRouter([
	{
		path: "/dashboard",
		element: <MainLayout />,
	},
	{
		path: "/login",
		element: <LoginLayout />,
	},
	{
		path: "/dashboard/products",
		element: <MainLayout content={<ProductsPage />} />,
	},
	{
		path: "/dashboard/fishes",
		element: <MainLayout content={<FishesPage />} />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
