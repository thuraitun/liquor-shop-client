import { createBrowserRouter } from "react-router-dom";
import { Home } from "../features/home";
import Layout from "../layout";
import { NoFound } from "../components/no-found";
import { Product } from "../features/product";
import { About } from "../features/about";
import { Cart } from "../features/cart";
import { AdminHome } from "../features/admin/admin-home";
import { AdminBanner } from "../features/admin/banner";
import { AdminLayout } from "../admin-layout";
import { ProductDetail } from "../features/product/detail";
import { Login } from "../features/admin/auth";
import { AdminCategory } from "../features/admin/category";
import { AdminProduct } from "../features/admin/product";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NoFound />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "banners",
        element: <AdminBanner />,
      },
      {
        path: "categories",
        element: <AdminCategory />,
      },
      {
        path: "products",
        element: <AdminProduct />,
      },
    ],
  },
]);

export default router;
