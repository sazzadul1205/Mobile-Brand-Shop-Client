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
import Error from "../Error/Error";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";
import DashboardLayout from "../Layouts/DashboardLayout";
import Cart from "../Dashboard/User/Cart/Cart";
import History from "../Dashboard/User/History/History";
import AddContent from "../Dashboard/Admin/AddContent/AddContent";
import ManageDelivery from "../Dashboard/Admin/ManageDelivery/ManageDelivery";
import ManageProducts from "../Dashboard/Admin/ManageProducts/ManageProducts";
import ManageUsers from "../Dashboard/Admin/ManageUsers/ManageUsers";
import ManageBlogs from "../Dashboard/Admin/ManageBlogs/ManageBlogs";
import ManageHomeBanner from "../Dashboard/Admin/ManageHomeBanner/ManageHomeBanner";
import ManageBrands from "../Dashboard/Admin/ManageBrands/ManageBrands";
import ManageFAQ from "../Dashboard/Admin/MAnageFAQ/MAnageFAQ";
import ManageProductBanners from "../Dashboard/Admin/ManageProductBanners/ManageProductBanners";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
        element: <ProductsMobile></ProductsMobile>,
      },
      {
        path: "/Products-Laptop",
        element: <ProductLaptop></ProductLaptop>,
      },
      {
        path: "/Products-Tablets",
        element: <ProductsTablets></ProductsTablets>,
      },
      {
        path: "/Products-Desktop",
        element: <ProductsDesktops></ProductsDesktops>,
      },
      {
        path: "/Blogs",
        element: <BlogsPage></BlogsPage>,
      },
      {
        path: "/AboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/Dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "Cart",
        element: <Cart></Cart>,
      },
      {
        path: "History",
        element: <History></History>,
      },
      {
        path: "AddProduct",
        element: <AddContent></AddContent>,
      },
      {
        path: "ManageDelivery",
        element: <ManageDelivery></ManageDelivery>,
      },
      {
        path: "ManageProducts",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "ManageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "ManageBlogs",
        element: <ManageBlogs></ManageBlogs>,
      },
      {
        path: "ManageHomeBanner",
        element: <ManageHomeBanner></ManageHomeBanner>,
      },
      {
        path: "ManageProductBanners",
        element: <ManageProductBanners></ManageProductBanners>,
      },
      {
        path: "ManageBrands",
        element: <ManageBrands></ManageBrands>,
      },
      {
        path: "ManageFAQ",
        element: <ManageFAQ></ManageFAQ>,
      },
    ],
  },
]);
