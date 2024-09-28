import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Swal from "sweetalert2";

const History = () => {
  const { user } = useContext(AuthContext);

  // Sample order data (in-page JSON)
  const orderHistory = [
    {
      id: 1,
      totalPrice: "200",
      totalQuantity: 3,
      paymentStatus: "Paid",
      shippingStatus: "On Transit",
      orderDate: "02/15/2024",
    },
    {
      id: 2,
      totalPrice: "500",
      totalQuantity: 5,
      paymentStatus: "Pending",
      shippingStatus: "Preparing",
      orderDate: "03/10/2024",
    },
  ];

  // Function to handle the invoice download
  const handleDownloadInvoice = (orderId) => {
    Swal.fire({
      title: "Downloading Invoice",
      text: `Your invoice for Order #${orderId} is being downloaded.`,
      icon: "success",
      button: "OK",
    });
  };

  return (
    <div className="bg-white h-screen ml-1">
      {/* Transaction History */}
      <div className="flex justify-between px-5 py-8 text-black border-b border-black mx-2">
        <div>
          <p className="text-2xl font-bold">My History</p>
          <span className="text-md font-normal">
            {user?.displayName}: ({user?.email})
          </span>
        </div>
      </div>

      {/* List */}
      <div className="overflow-x-auto px-5 py-5">
        <table className="table text-black">
          {/* head */}
          <thead className="bg-gray-300 text-black font-bold">
            <tr>
              <th>No</th>
              <th>Total Price</th>
              <th>Total Quantity</th>
              <th>Payment Status</th>
              <th>Shipping Status</th>
              <th>Order Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the orderHistory array to display rows */}
            {orderHistory.map((order, index) => (
              <tr key={order.id}>
                <th>{index + 1}</th>
                <td className="flex items-center">
                  {order.totalPrice} <FaBangladeshiTakaSign className="ml-2" />
                </td>
                <td>{order.totalQuantity}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.shippingStatus}</td>
                <td>{order.orderDate}</td>
                <td>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDownloadInvoice(order.id)}
                  >
                    Download Invoice
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

export default History;
