import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/dashboard/page";
import Login from "../authentification/page";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
