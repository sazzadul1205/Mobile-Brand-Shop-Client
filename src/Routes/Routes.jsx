import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";
import BlogsPage from "../Pages/BlogsPage/BlogsPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ProductsMobile from "../Pages/ProductsMobile/ProductsMobile";
import ProductLaptop from "../Pages/ProductLaptop/ProductLaptop";
import ProductsTablets from "../Pages/ProductsTablets/ProductsTablets";
import ProductsDesktops from "../Pages/ProductsDesktops/ProductsDesktops";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Products",
        element: <ProductsPage></ProductsPage>,
      },
      {
        path: "/Products-Mobile",
        element: <ProductsMobile></ProductsMobile>
      },
      {
        path: "/Products-Laptop",
        element: <ProductLaptop></ProductLaptop>
      },
      {
        path: "/Products-Tablets",
        element: <ProductsTablets></ProductsTablets>
      },
      {
        path: "/Products-Desktop",
        element: <ProductsDesktops></ProductsDesktops>
      },
      {
        path: "/Blogs",
        element: <BlogsPage></BlogsPage>,
      },
      {
        path: "/AboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
