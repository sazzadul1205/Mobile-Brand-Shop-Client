import { useEffect } from "react";
import { FaArrowLeft, FaMobileScreen } from "react-icons/fa6";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();

  // Admin Links
  const AdminNavLink = [
    { to: "Cart", label: "Cart" },
    { to: "History", label: "History" },
  ];

  const adminNav = AdminNavLink.map((link) => {
    const randomColor = "#0df205"; // Fixed random color issue

    return (
      <li key={link.to} className="mb-2">
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            `text-lg font-semibold relative group  py-2 px-4 transition-colors duration-300 text-black hover:text-black ${
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

  useEffect(() => {
    // Navigate to the Cart page when the component mounts
    navigate("/Dashboard/Cart");
  }, [navigate]);

  return (
    <div className="bg-gradient-to-br from-green-500 to-emerald-100">
      <div className="flex max-w-[1200px] mx-auto">
        {/* Dashboard sidebar */}
        <div className="w-80 h-screen pb-10 fixed bg-white overflow-y-auto">
          {/* To Home */}
          <NavLink to="/" className="block w-full">
            <p className="text-green-700 font-bold text-2xl py-4 pl-5 bg-green-400 flex items-center hover:text-green-900 transition-colors duration-300">
              <FaArrowLeft className="mr-3" />
              <span>Home</span>
            </p>
          </NavLink>

          {/* Icons */}
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold flex items-center text-black">
              <FaMobileScreen className="mr-2 text-black" />
              Mobile Brand Shop
            </h1>
          </div>

          <ul className="menu p-4 pb-5">
            <ul className="menu menu-vertical px-1">{adminNav}</ul>
          </ul>
        </div>
        {/* Dashboard Content */}
        <div className="flex-1 ml-[320px] overflow-y-auto min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
