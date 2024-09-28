import { IoMdMenu } from "react-icons/io";
import { FaAngleDown, FaCartArrowDown } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const TopSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto pt-5 pb-10 flex items-center gap-10">
      {/* Categories */}
      <div className="dropdown">
        <button
          className="bg-[#F16521] hover:bg-[#dbb39f] text-white hover:text-black flex items-center gap-5 text-xl py-2 px-5 rounded-full"
          tabIndex={0}
          role="button"
        >
          <IoMdMenu />
          <p className="text-lg font-medium">ALL CATEGORIES</p>
          <FaAngleDown />
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content  bg-white rounded-b-box z-[1] w-full p-2 shadow"
        >
          <NavLink to={"/Products-Mobile"}>
            <li className="py-2 px-2 hover:bg-orange-500 hover:text-white">
              <a>Mobile</a>
            </li>
          </NavLink>
          <NavLink to={"/Products-Laptop"}>
            <li className="py-2 px-2 hover:bg-orange-500 hover:text-white">
              <a>Laptop</a>
            </li>
          </NavLink>
          <NavLink to={"/Products-Tablets"}>
            <li className="py-2 px-2 hover:bg-orange-500 hover:text-white">
              <a>Tablet</a>
            </li>
          </NavLink>
          <NavLink to={"/Products-Desktop"}>
            <li className="py-2 px-2 hover:bg-orange-500 hover:text-white">
              <a>Desktop</a>
            </li>
          </NavLink>
        </ul>
      </div>

      {/* Search box */}
      <label className="input input-bordered bg-white flex items-center gap-2 w-1/2">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-6 w-6 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      {/* Cash */}
      <div className="flex items-center text-2xl font-bold gap-4 text-white">
        <FaBangladeshiTakaSign className="text-black" />
        <p>1000.00</p>
        <div className="p-3 bg-green-700 hover:bg-green-300 hover:text-black border-2 border-green-950 rounded-full">
          <FaCartArrowDown />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
