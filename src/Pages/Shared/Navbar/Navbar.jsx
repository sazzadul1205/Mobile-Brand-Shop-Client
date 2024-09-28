import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <div
      className={`navbar fixed z-50 mx-auto text-black transition-colors duration-300 ${
        scrollPosition > 50 ? "bg-white" : "bg-[#15B392]"
      }`}
    >
      <div className="navbar mx-auto max-w-[1200px] items-center h-20">
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
          <Link to={'/'}>
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
        <div className="navbar-end">
          <button className="px-11 py-2 text-xl font-semibold bg-green-300 hover:bg-green-100 rounded-full">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
