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
import PrivateRoutes from "./PrivateRoutes";
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
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
      },
      {
        path: "History",
        element: (
          <PrivateRoutes>
            <History></History>
          </PrivateRoutes>
        ),
      },
      {
        path: "AddProduct",
        element: (
          <PrivateRoutes>
            <AddContent></AddContent>
          </PrivateRoutes>
        ),
      },
      {
        path: "ManageDelivery",
        element: (
          <PrivateRoutes>
            <ManageDelivery></ManageDelivery>
          </PrivateRoutes>
        ),
      },
      {
        path: "ManageProducts",
        element: (
          <PrivateRoutes>
            <ManageProducts></ManageProducts>
          </PrivateRoutes>
        ),
      },
      {
        path: "ManageUsers",
        element: (
          <PrivateRoutes>
            <ManageUsers></ManageUsers>
          </PrivateRoutes>
        ),
      },
      {
        path: "ManageBlogs",
        element: (
          <PrivateRoutes>
            <ManageBlogs></ManageBlogs>
          </PrivateRoutes>
        ),
      },
      {
        path: "ManageHomeBanner",
        element: (
          <PrivateRoutes>
            <ManageHomeBanner></ManageHomeBanner>
          </PrivateRoutes>
        ),
      },
      {
        path: "ManageProductBanners",
        element: (
          <PrivateRoutes>
            <ManageProductBanners></ManageProductBanners>
          </PrivateRoutes>
        ),
      },
      {
        path: "ManageBrands",
        element: (
          <PrivateRoutes>
            <ManageBrands></ManageBrands>
          </PrivateRoutes>
        ),
      },
      {
        path: "ManageFAQ",
        element: (
          <PrivateRoutes>
            <ManageFAQ></ManageFAQ>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
