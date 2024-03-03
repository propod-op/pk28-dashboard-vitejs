import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";

import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./pages/ProductsPage";
import FishesPage from "./pages/FishesPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
	},
	{
		path: "/products",
		element: <MainLayout content={<ProductsPage />} />,
	},
	{
		path: "/fishes",
		element: <MainLayout content={<FishesPage />} />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
