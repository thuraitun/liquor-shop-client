import { createBrowserRouter } from "react-router-dom";
import { Home } from "../features/home";
import Layout from "../layout";
import { NoFound } from "../components/no-found";
import { Product } from "../features/product";
import { About } from "../features/about";
import { Cart } from "../features/cart";

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
        path: "",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    // element: <Layout />,
    children: [],
  },
]);

export default router;
