import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Livros from "../pages/Livros";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Livros />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
