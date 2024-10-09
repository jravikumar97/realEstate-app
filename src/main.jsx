import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Error404NotFound from "./pages/Error404NotFound";
import Home from "./pages/Home";
import SellMyHome from "./pages/SellMyHome";
import ViewProperty from "./pages/ViewProperty";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sellmyhome", // No leading slash needed
        element: <SellMyHome />,
      },
      {
        path: "viewProperty",
        element: <ViewProperty/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
