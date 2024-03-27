import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/dashboard/page";
import Login from "../authentification/page";
import Categories from "../Categories/page"
import Report from "../Report/page"
import Company from "../Company/page"
import Profile from "../Profile/page"
import QrCode from "../QrCode/page"
import Dishes from "../Dishes/page"
import Drinks from "../Drinks/page"
import AddQrCode from "../QrCode/components/AddQrCode";
import QrCodeform from "../QrCode/components/QrCodeform";
import DemoPage from "../Dishes/page";
import DemoPageDrink from "../Drinks/page";
import DemoPagePromotion from "../Promotions/page";
import DemoPageOrders from "../Orders/page";
import { Tabs } from "../components/ui/tabs";
import TabsDemo from "../components/custom/tabs";
export const router = createBrowserRouter([
  {
    path: "/",
    children: [
        {
          path: "/Login",
          element: <Login />,
          // children: [{ index: true, element: <Dashboard /> }],
        },
      {
        path: "/Dashboard",
        element: <Layout />,
        children: [{ index: true, element: <Dashboard /> }],
      },
      {
        path: "/Report",
        element: <Layout />,
        children: [{ index: true, element: <Report /> }],
      },
      {
        path: "/Orders",
        element: <Layout />,
        children: [{ index: true, element: < DemoPageOrders/> }],
      },
      {
        path: "/QrCode",
        element: <Layout />,
        children: [{ index: true, element: <QrCode /> }],
      },
      {
        path: "/QrCode/AddQrCode",
        element: <Layout />,
        children: [{ index: true, element: <TabsDemo /> }],
      },
      {
        path: "/Categories",
        element: <Layout />,
        children: [{ index: true, element: <Categories /> }],
      },
      {
        path: "/Dishes",
        element: <Layout />,
        children: [{ index: true, element: <DemoPage /> }],
      },
      {
        path: "/Drinks",
        element: <Layout />,
        children: [{ index: true, element: <DemoPageDrink /> }],
      },
      {
        path: "/Promotions",
        element: <Layout />,
        children: [{ index: true, element: <DemoPagePromotion /> }],
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
