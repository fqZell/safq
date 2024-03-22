import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "../Pages/Root";
import SingleProductPage from "../Pages/SingleProductPage.jsx";
import UsersPage from "../Pages/UsersPage.jsx";


const HomePage = React.lazy(() => import("../Pages/HomePage.jsx"));
const ProductPage = React.lazy(() => import("../Pages/ProductPage.jsx"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                index: true
            },
            {
                path: "/product",
                element: <ProductPage />,
            },
            {
                path: "/product/:id",
                element: <SingleProductPage />
            },
            {
                path: "/users",
                element: <UsersPage />
            },
        ]
    }
]);

export default router;