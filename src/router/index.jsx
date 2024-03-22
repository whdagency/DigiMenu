import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/dashboard/page";
import Login from "../authentification/page";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Dashboard",
        element: <Layout />,
        children: [{ index: true, element: <Dashboard /> }],
      },
    ],
  },
]);
