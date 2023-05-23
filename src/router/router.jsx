import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "../Pages/Root";


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
        ]
    }
]);

export default router;