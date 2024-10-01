import { FaSearch } from "react-icons/fa";
import { FaBangladeshiTakaSign, FaTrash } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";
import Swal from "sweetalert2";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  // Fetching Cart Data
  const {
    data: MyCartData,
    isLoading: MyCartIsLoading,
    error: MyCartError,
    refetch: MyCartRefetch,
  } = useQuery({
    queryKey: ["MyCart"],
    queryFn: () =>
      axiosPublic.get(`/MyCart?email=${user.email}`).then((res) => res.data),
  });

  // Loading state
  if (MyCartIsLoading) {
    return <Loader />;
  }

  // Error state
  if (MyCartError) {
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

  // Delete item from cart
  const handleDelete = async (itemId, itemName) => {
    try {
      const result = await showConfirmationAlert(
        "Are you sure?",
        `You are about to delete "${itemName}". This action cannot be undone.`,
        "Delete"
      );

      if (result.isConfirmed) {
        await axiosPublic.delete(`/MyCart/${itemId}`);
        MyCartRefetch();
        showSuccessAlert(
          "Item Deleted!",
          "The item has been deleted successfully."
        );
      }
    } catch (error) {
      console.error(error);
      showErrorAlert(
        "Failed to Delete Item",
        "An error occurred while deleting the item."
      );
    }
  };

  // Calculate total price
  const totalPrice = MyCartData.reduce((acc, item) => {
    return acc + parseFloat(item.price) * item.quantity;
  }, 0);

  // Payment
  const handlePayment = async () => {
    try {
      const paymentData = {
        paidBy: user.email,
        totalAmount: totalPrice.toFixed(2),
        paymentStatus: "Payed",
        shippingStatus: "Ordered",
        paymentDate: new Date().toLocaleString(),
        items: MyCartData.map((item) => ({
          itemId: item._id,
          model: item.model,
          brand: item.brand,
          productType: item.productType,
          price: item.price,
          quantity: item.quantity,
        })),
      };

      // Send payment data to the server
      await axiosPublic.post("/SellHistory", paymentData);

      // Show payment success alert
      Swal.fire(
        "Payment Successful!",
        "Your payment has been processed.",
        "success"
      );

      // Delete each item from the cart after payment
      for (const item of MyCartData) {
        await axiosPublic.delete(`/MyCart/${item._id}`);
      }

      // Refetch the cart data after deletion
      MyCartRefetch();
    } catch (error) {
      console.error("Error processing payment:", error);
      Swal.fire(
        "Error!",
        "There was a problem processing your payment.",
        "error"
      );
    }
  };

  return (
    <div className="bg-white h-screen ml-1">
      {/* Cart and payment */}
      <div className="flex justify-between px-5 py-8 text-black border-b border-black mx-2">
        <div>
          <p className="text-2xl font-bold">My Cart</p>
          <span className="text-md font-normal">
            {user?.displayName}: ({user?.email})
          </span>
        </div>
        <button
          onClick={handlePayment}
          className="text-xl px-16 py-1 my-3 bg-orange-500 hover:bg-orange-600 rounded-full font-semibold text-white"
        >
          Pay
        </button>
      </div>

      {/* Search and Total Price */}
      <div className="flex justify-between px-10 items-center">
        <label className="input border border-black flex items-center gap-2 w-1/2 my-4 bg-white">
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
            {MyCartData.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.model}
                    className="w-16 h-16"
                  />
                </td>
                <td>{item.model}</td>
                <td>{item.brand}</td>
                <td>{item.productType}</td>
                <td>{item.quantity}</td>
                <td>{(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id, item.model)}
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

// Alert functions
const showSuccessAlert = (title, text) => {
  Swal.fire({
    icon: "success",
    title,
    text,
    showConfirmButton: false,
    timer: 2000,
  });
};

const showErrorAlert = (title, text) => {
  Swal.fire({
    icon: "error",
    title,
    text,
    showConfirmButton: true,
  });
};

const showConfirmationAlert = (title, text, confirmButtonText) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonText || "Yes, proceed!",
  });
};
