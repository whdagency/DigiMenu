import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/dashboard/page";
import Login from "../authentification/page";

import Menu from "../pages/menu/page";
import Arrangement from "../pages/arrangement/page";

import Categories from "../Categories/page";
import Report from "../Report/page";
import Company from "../Company/page";
import Profile from "../Profile/page";
import QrCode from "../QrCode/page";
import AddQrCode from "../QrCode/components/AddQrCode";
import QrCodeform from "../QrCode/components/QrCodeform";
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
      {
        path: "/Menu",
        element: <Layout />,
        children: [{ index: true, element: <Menu /> }],
      },
      {
        path: "/Arrangement",
        element: <Layout />,
        children: [{ index: true, element: <Arrangement /> }],
        path: "/Report",
        element: <Layout />,
        children: [{ index: true, element: <Report /> }],
      },
      {
        path: "/QrCode",
        element: <Layout />,
        children: [{ index: true, element: <QrCode /> }],
      },
      {
        path: "/QrCode/AddQrCode",
        element: <Layout />,
        children: [{ index: true, element: <QrCodeform /> }],
      },
      {
        path: "/Categories",
        element: <Layout />,
        children: [{ index: true, element: <Categories /> }],
      },
      {
        path: "/Company",
        element: <Layout />,
        children: [{ index: true, element: <Company /> }],
      },
      {
        path: "/Profile",
        element: <Layout />,
        children: [{ index: true, element: <Profile /> }],
      },
    ],
  },
]);
