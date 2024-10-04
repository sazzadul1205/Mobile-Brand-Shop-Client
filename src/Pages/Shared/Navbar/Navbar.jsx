import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
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
  const dropdownRef = useRef(null); // Reference for dropdown

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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

  // Render for desktop view
  const renderNav = () =>
    navItems.map(({ label, link, subMenu }) => (
      <li key={label} className="relative">
        {subMenu.length > 0 ? (
          <div className="dropdown dropdown-hover">
            <button className="hover:text-blue-500 cursor-pointer">
              {label}
            </button>
            <ul className="dropdown-content menu bg-white font-semibold z-10 w-52 p-2 shadow mt-2 lg:absolute lg:left-0 lg:top-auto lg:mt-2">
              {subMenu.map((item) => (
                <li key={item.link}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "text-blue-500" : "hover:text-blue-500"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
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
      </li>
    ));

  // Render for mobile view - merge "MORE PRODUCTS" into the main dropdown
  const renderMobileNav = () => (
    <>
      {navItems
        .filter((item) => item.label !== "MORE PRODUCTS") // Exclude MORE PRODUCTS
        .map(({ label, link }) => (
          <li key={label}>
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-blue-500"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      {/* Add the submenus of "MORE PRODUCTS" directly into the main dropdown */}
      {navItems
        .find((item) => item.label === "MORE PRODUCTS")
        ?.subMenu.map((subItem) => (
          <li key={subItem.link}>
            <NavLink
              to={subItem.link}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-blue-500"
              }
            >
              {subItem.label}
            </NavLink>
          </li>
        ))}
    </>
  );

  return (
    <div>
      <div className="bg-black px-20 fixed top-0 w-full hidden lg:flex justify-between items-center">
        <p>Made by Sazzadul Islam Molla</p>
        <div className="flex gap-5 text-3xl text-white">
          <a
            href="https://github.com/sazzadul1205?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100083112611384"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://myresume-367d0.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <img src={Resume} alt="Resume" className="w-8" />
          </a>
        </div>
      </div>

      {/* Navbar section */}
      <div
        className={`navbar transition-all duration-300 mx-auto text-black fixed w-full z-40 ${
          scrollPosition > 50 ? "bg-white top-0" : "bg-[#15B392] lg:top-8"
        }`}
      >
        <div className="navbar mx-auto max-w-[1200px] items-center h-16">
          {/* Navbar Start */}
          <div className="navbar-start items-center ">
            <div className="dropdown flex lg:hidden relative" ref={dropdownRef}>
              <button
                tabIndex={0}
                className="btn btn-ghost"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <IoMenu className="text-3xl mt-2 " />
              </button>
              {isDropdownOpen && (
                <ul className="menu menu-sm bg-white absolute left-0 mt-2 w-52 p-2 shadow">
                  {renderMobileNav()}
                </ul>
              )}
            </div>
            <Link
              to={"/"}
              className="text-2xl font-bold hidden lg:flex items-center"
            >
              <FaMobileScreen className="mr-2 text-black" />
              Mobile Brand Shop
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
                  className="flex items-center lg:pr-5 bg-green-300 hover:bg-green-200 rounded-full"
                  tabIndex={0}
                  role="button"
                >
                  <img
                    src={user.photoURL || userImage}
                    alt="User"
                    className="w-12 h-12 rounded-full"
                  />
                  <h2 className="font-semibold lg:pl-2 text-lg hidden lg:flex">
                    {user.displayName}
                  </h2>
                  <ul className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 mt-36 shadow right-0">
                    <li className="flex lg:hidden">
                      <p>{user.displayName}</p>
                    </li>
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
              <div className="text-xl font-semibold flex">
                <Link to={"/SignUp"}>
                  <button className="py-2 px-5 w-28 hidden md:flex bg-green-300 hover:bg-green-100 rounded-l-full">
                    SignUp
                  </button>
                </Link>
                <Link to={"/Login"}>
                  <button className="py-2 px-8 w-28  bg-green-400 hover:bg-green-600 rounded-none md:rounded-r-full">
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
