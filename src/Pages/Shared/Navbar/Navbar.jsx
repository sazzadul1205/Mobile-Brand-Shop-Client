import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { AuthContext } from "../../../Provider/AuthProvider";
import userImage from "../../../assets/User.jfif";
import { FaGithub, FaFacebook } from "react-icons/fa6";
import Resume from "../../../assets/download.png";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  // Handle scroll position change
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("User signed out successfully.");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const navItems = [
    { label: "HOME", link: "/", subMenu: [] },
    { label: "PRODUCTS", link: "/Products", subMenu: [] },
    {
      label: "MORE PRODUCTS",
      subMenu: [
        { label: "MOBILE", link: "/Products-Mobile" },
        { label: "LAPTOP", link: "/Products-Laptop" },
        { label: "TABLET", link: "/Products-Tablets" },
        { label: "DESKTOP", link: "/Products-Desktop" },
      ],
    },
    { label: "BLOGS", link: "/Blogs", subMenu: [] },
    { label: "ABOUT US", link: "/AboutUs", subMenu: [] },
  ];

  const renderNav = () =>
    navItems.map(({ label, link, subMenu }) => (
      <li key={label}>
        <div className="dropdown dropdown-hover">
          {subMenu.length > 0 ? (
            <>
              <p className="hover:text-blue-500 ">{label}</p>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white font-semibold z-[1] w-52 p-2 shadow"
              >
                {subMenu.map((item) => (
                  <li key={item.link}>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-500 bg-white"
                          : "hover:text-blue-500"
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-blue-500"
              }
            >
              {label}
            </NavLink>
          )}
        </div>
      </li>
    ));

  return (
    <div>
      {/* Link section */}
      <div className="bg-black px-20 fixed top-0 w-full flex justify-between items-center">
        <p>Made by Sazzadul Islam Molla</p>
        <div className="flex gap-5 text-3xl text-white">
          <button className="hover:text-gray-400">
            <Link to={"https://github.com/sazzadul1205?tab=repositories"}>
              <FaGithub />
            </Link>
          </button>

          <button className="hover:text-gray-400">
            <Link
              to={"https://www.facebook.com/profile.php?id=100083112611384"}
            >
              <FaFacebook />
            </Link>
          </button>
          <button className="hover:text-gray-400">
            <Link to={"https://myresume-367d0.web.app/"}>
              <img src={Resume} alt="" className="w-8" />
            </Link>
          </button>
        </div>
      </div>

      {/* Navbar section */}
      <div
        className={`navbar transition-all duration-300 mx-auto text-black fixed w-full z-40 ${
          scrollPosition > 50 ? "bg-white top-0" : "bg-[#15B392] top-8"
        }`}
      >
        <div className="navbar mx-auto max-w-[1200px] items-center h-16">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <button
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <IoMenu className="text-3xl mt-2" />
              </button>
              {isDropdownOpen && (
                <ul className="menu menu-sm bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {renderNav()}
                </ul>
              )}
            </div>
            <Link to={"/"}>
              <a className="text-2xl font-bold flex items-center">
                <FaMobileScreen className="mr-2 text-black" />
                Mobile Brand Shop
              </a>
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-1 px-1 space-x-5 font-semibold text-lg">
              {renderNav()}
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end flex gap-5">
            {user ? (
              <div className="dropdown">
                <div
                  className="flex items-center pr-5 bg-green-300 hover:bg-green-200 rounded-full"
                  tabIndex={0}
                  role="button"
                >
                  <img
                    src={user.photoURL || userImage}
                    alt="User"
                    className="w-12 h-12 rounded-full"
                  />
                  <h2 className="font-semibold pl-2 text-lg">
                    {user.displayName}
                  </h2>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 mt-36 shadow"
                  >
                    <li onClick={handleSignOut}>
                      <p className="w-full text-center bg-green-400 hover:bg-green-300 font-bold">
                        LogOut
                      </p>
                    </li>
                    <li>
                      <Link to={"/Dashboard"}>
                        <p>Dashboard</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-xl font-semibold rounded-full bg-green-300 hover:bg-green-100">
                <Link to={"/SignUp"}>
                  <button className="py-2 w-28">SignUp</button>
                </Link>
                <Link to={"/Login"}>
                  <button className=" py-2 w-32 bg-green-400 rounded-full hover:bg-green-500">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
