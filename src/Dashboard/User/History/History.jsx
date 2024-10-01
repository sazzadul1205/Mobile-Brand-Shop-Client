import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Components/Loader";

const History = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetching Cart Data
  const {
    data: SellHistoryData,
    isLoading: SellHistoryIsLoading,
    error: SellHistoryError,
  } = useQuery({
    queryKey: ["SellHistory"],
    queryFn: () =>
      axiosPublic
        .get(`/SellHistory?email=${user.email}`)
        .then((res) => res.data),
  });

  // Loading state
  if (SellHistoryIsLoading) {
    return <Loader />;
  }

  // Error state
  if (SellHistoryError) {
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

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

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
              <th>Payment Status</th>
              <th>Shipping Status</th>
              <th>Order Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the orderHistory array to display rows */}
            {SellHistoryData.map((order, index) => (
              <tr key={order.id}>
                <th>{index + 1}</th>
                <td>{order.totalAmount}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.shippingStatus}</td>
                <td>{order.paymentDate}</td>
                <td className="text-white font-sem">
                  <div className="border border-gray-200 text-white p-2 w-40">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 w-32 font-bold py-2 px-5 m-2"
                      onClick={() => handleDownloadInvoice(order.id)}
                    >
                      Download Invoice
                    </button>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-700 w-32 font-bold py-2 px-5 m-2"
                      onClick={() => openModal(order)}
                    >
                      View Order
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="modal-box bg-white text-black max-w-[1000px] p-5">
            {/* Top */}
            <div className="flex justify-between border-b border-gray-500 py-2">
              <h3 className="font-bold text-lg">Order Details</h3>
              <button className="font-bold text-xl" onClick={closeModal}>
                X
              </button>
            </div>
            {/* Content */}
            <div className="mt-2 border-b border-gray-400">
              <p className="py-1 text-lg font-bold">
                Order By:
                <span className="ml-5 font-semibold">
                  {selectedOrder.paidBy}
                </span>
              </p>
              <p className="py-1 text-lg font-bold">
                Total Quantity:
                <span className="ml-5 font-semibold">
                  {selectedOrder.items.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                  )}
                </span>
              </p>
              <p className="py-1 text-lg font-bold">
                Payment Status:
                <span className="ml-5 font-semibold">
                  {selectedOrder.paymentStatus}
                </span>
              </p>
              <p className="py-1 text-lg font-bold">
                Total Price:
                <span className="ml-5 font-semibold">
                  {selectedOrder.totalAmount}
                </span>
              </p>
              <p className="py-1 text-lg font-bold">
                Order Date:
                <span className="ml-5 font-semibold">
                  {selectedOrder.paymentDate}
                </span>
              </p>
              <p className="py-1 text-lg font-bold">
                Status:
                <span className="ml-5 font-semibold">
                  {selectedOrder.shippingStatus}
                </span>
              </p>
            </div>
            {/* Product List */}
            <div>
              <p className="font-bold text-2xl">Products</p>
            </div>
            <div className="overflow-x-auto px-5 py-5">
              <table className="table text-black w-full">
                {/* Head */}
                <thead className="bg-gray-300 text-black font-bold">
                  <tr>
                    <th>No</th>
                    <th>Model</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.items.map((product, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{product.model}</td>
                      <td>{product.brand}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price * product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
