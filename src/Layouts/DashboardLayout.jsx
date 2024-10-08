import { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaMobileScreen } from "react-icons/fa6";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Loader from "../Components/Loader";
import { useQuery } from "@tanstack/react-query";
import { IoMenu } from "react-icons/io5";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [menuOpen, setMenuOpen] = useState(false);

  // Admin/Manager Links
  const AdminNavLink = [
    { to: "Cart", label: "Cart" },
    { to: "History", label: "History" },
    { to: "AddProduct", label: "Add Product" },
    { to: "ManageDelivery", label: "Manage Delivery" },
    { to: "ManageProducts", label: "Manage Products" },
    { to: "ManageUsers", label: "Manage Users" },
    { to: "ManageBlogs", label: "Manage Blogs" },
    { to: "ManageHomeBanner", label: "Manage Home Banner" },
    { to: "ManageProductBanners", label: "Manage Product Banners" },
    { to: "ManageBrands", label: "Manage Brands" },
    { to: "ManageFAQ", label: "Manage FAQ" },
  ];

  useEffect(() => {
    // Navigate to the Cart page when the component mounts
    navigate("/Dashboard/Cart");
  }, [navigate]);

  // Fetching User Data with Role
  const {
    data: usersData,
    isLoading: usersDataIsLoading,
    error: usersDataError,
  } = useQuery({
    queryKey: ["usersData"],
    queryFn: () =>
      axiosPublic.get(`/usersData?email=${user.email}`).then((res) => res.data),
  });

  // Loading state
  if (usersDataIsLoading) {
    return <Loader />;
  }

  // Error state
  if (usersDataError) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 to-white">
        <p className="text-center text-red-500 font-bold text-3xl mb-8">
          Something went wrong. Please reload the page.
        </p>
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-300"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    );
  }

  const userRole = usersData.role;

  // Filtered Admin Links based on user role
  const adminNav = AdminNavLink.filter((link) => {
    const restrictedLinks = [
      "AddProduct",
      "ManageDelivery",
      "ManageProducts",
      "ManageUsers",
      "ManageBlogs",
      "ManageHomeBanner",
      "ManageProductBanners",
      "ManageBrands",
      "ManageFAQ",
    ];

    if (restrictedLinks.includes(link.to)) {
      return userRole === "admin" || userRole === "manager";
    }

    return true;
  }).map((link) => {
    const randomColor = "#0df205";

    return (
      <li key={link.to} className="mb-2">
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            `text-lg font-semibold relative group py-2 px-4 transition-colors duration-300 text-black hover:text-black ${
              isActive ? "text-black" : "text-black"
            }`
          }
          style={({ isActive }) => ({
            backgroundColor: isActive ? randomColor : "transparent",
          })}
        >
          {link.label}
          <span
            className="absolute inset-y-0 left-0 w-0 bg-green-500 group-hover:w-full transition-all duration-300 -z-10"
            style={{ backgroundColor: randomColor }}
          ></span>
        </NavLink>
      </li>
    );
  });

  return (
    <div className="bg-gradient-to-br from-green-500 to-emerald-100">
      <div className="max-w-[1200px] mx-auto">
        {/* Dashboard sidebar */}
        <div className="w-80 h-screen pb-10 fixed bg-white overflow-y-auto hidden lg:block">
          {/* To Home */}
          <NavLink to="/" className="block w-full">
            <p className="text-green-700 font-bold text-2xl py-4 pl-5 bg-green-400 flex items-center hover:text-green-900 transition-colors duration-300">
              <FaArrowLeft className="mr-3" />
              <span>Home</span>
            </p>
          </NavLink>

          {/* Icons */}
          <div className="flex justify-center mt-5">
            <h1 className="text-2xl font-bold flex items-center text-black">
              <FaMobileScreen className="mr-2 text-black" />
              Mobile Brand Shop
            </h1>
          </div>

          <ul className="menu p-4 pb-5">
            <ul className="menu menu-vertical px-1">{adminNav}</ul>
          </ul>
        </div>
        {menuOpen && (
          <div className="w-80 h-screen pb-10 fixed bg-white overflow-y-auto z-50 top-0 right-0 lg:block">
            {/* To Home */}
            <NavLink to="/" className="block w-full">
              <p className="text-green-700 font-bold text-2xl py-4 pl-5 bg-green-400 flex items-center hover:text-green-900 transition-colors duration-300">
                <FaArrowLeft className="mr-3" />
                <span>Home</span>
              </p>
            </NavLink>

            {/* Icons */}
            <div className="flex justify-center mt-5">
              <h1 className="text-2xl font-bold flex items-center text-black">
                <FaMobileScreen className="mr-2 text-black" />
                Mobile Brand Shop
              </h1>
            </div>

            <ul className="menu p-4 pb-5">
              <ul className="menu menu-vertical px-1">{adminNav}</ul>
            </ul>
          </div>
        )}

        {/* Dashboard Content */}
        <div className="flex-1 lg:ml-[320px] overflow-y-auto min-h-screen relative">
          <IoMenu
            className="text-5xl text-black bg-green-500 fixed top-20 opacity-70 cursor-pointer z-50 flex lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
