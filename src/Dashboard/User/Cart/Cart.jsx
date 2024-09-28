import { FaSearch } from "react-icons/fa";
import { FaBangladeshiTakaSign, FaTrash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Cart = () => {
  const { user } = useContext(AuthContext);

  // Sample JSON data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      orderBy: "psazadul@gmail.com",
      name: "iPhone 7S",
      brand: "Apple",
      type: "Phone",
      price: 100.0,
      quantity: 1,
      imageUrl: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    },
    {
      id: 2,
      orderBy: "psazadul@gmail.com",
      name: "Galaxy S10",
      brand: "Samsung",
      type: "Phone",
      price: 150.0,
      quantity: 2,
      imageUrl: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    },
    {
      id: 3,
      orderBy: "psazadul@gmail.com",
      name: "Pixel 5",
      brand: "Google",
      type: "Phone",
      price: 120.0,
      quantity: 1,
      imageUrl: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    },
  ]);

  const handleDelete = (id) => {
    // Remove the item with the matching ID from the cart
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate the full total price of all items
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="bg-white h-screen ml-1">
      {/* Cart and payment */}
      <div className="flex justify-between px-5 py-8 text-black border-b border-black mx-2">
        <div>
          <p className="text-2xl font-bold">My Cart </p>
          <span className="text-md font-normal">{user?.displayName}: ({user?.email})</span>
        </div>
        <button className="text-xl px-10 py-1 bg-orange-500 hover:bg-orange-200 hover:text-black rounded-full text-white">
          Pay
        </button>
      </div>

      {/* Search and Total Price */}
      <div className="flex justify-between px-10 items-center">
        <label className="input border border-black flex items-center gap-2 w-1/2 my-4  bg-white">
          <input type="text" className="grow bg-white" placeholder="Search" />
          <svg className="h-4 w-4">
            <FaSearch className="text-black" />
          </svg>
        </label>
        {/* Display total price */}
        <div className="text-black text-lg font-bold flex items-center">
          Total Price: {totalPrice.toFixed(2)}{" "}
          <FaBangladeshiTakaSign className="ml-2" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-gray-100 m-2 mt-10">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-600 text-white">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-black font-semibold">
            {/* Rows dynamically generated from JSON */}
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-w-16"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.type}</td>
                <td>{item.quantity}</td>
                {/* Calculate total price for each item */}
                <td>{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex gap-2 bg-red-500 hover:bg-red-200 text-white hover:text-black py-3 px-5 rounded-2xl"
                  >
                    Delete <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
