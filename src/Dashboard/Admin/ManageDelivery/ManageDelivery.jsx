import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loader from "../../../Components/Loader";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ManageDelivery = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetching Cart Data
  const {
    data: SellHistoryData,
    isLoading: SellHistoryIsLoading,
    error: SellHistoryError,
    refetch,
  } = useQuery({
    queryKey: ["SellHistory"],
    queryFn: () => axiosPublic.get(`/SellHistory`).then((res) => res.data),
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

  // Helper function to show alerts
  const showSuccessAlert = (title, text) => {
    Swal.fire({ icon: "success", title, text });
  };

  const showErrorAlert = (title, text) => {
    Swal.fire({ icon: "error", title, text });
  };

  const showConfirmationAlert = (title, text) => {
    return Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    });
  };

  // Handle Approve action
  const handleApprove = (order) => {
    const updatedHistory = {
      paidBy: order.paidBy,
      totalAmount: order.totalAmount,
      paymentStatus: order.paymentStatus,
      shippingStatus: "Delivered", // Update the shipping status
      paymentDate: order.paymentDate,
      items: order.items,
    };

    axiosPublic
      .put(`/SellHistory/${order._id}`, updatedHistory)
      .then(() => {
        showSuccessAlert("Order Approved", "The order has been approved.");
        refetch(); // Refetch data to update the UI
      })
      .catch(() => {
        showErrorAlert(
          "Error",
          "Could not approve the order. Please try again."
        );
      });
  };

  // Handle Reject action
  const handleReject = (order) => {
    showConfirmationAlert(
      "Are you sure?",
      "You won't be able to revert this!"
    ).then((result) => {
      if (result.isConfirmed) {
        const updatedHistory = {
          paidBy: order.paidBy,
          totalAmount: order.totalAmount,
          paymentStatus: order.paymentStatus,
          shippingStatus: "Rejected", // Update the shipping status
          paymentDate: order.paymentDate,
          items: order.items,
        };

        axiosPublic
          .delete(`/SellHistory/${order._id}`, updatedHistory)
          .then(() => {
            showSuccessAlert("Order Rejected", "The order has been rejected.");
            refetch(); // Refetch data to update the UI
          })
          .catch(() => {
            showErrorAlert(
              "Error",
              "Could not reject the order. Please try again."
            );
          });
      }
    });
  };

  // Handle "Delivered" action
  const handleDelivered = (order) => {
    const updatedHistory = {
      paidBy: order.paidBy,
      totalAmount: order.totalAmount,
      paymentStatus: order.paymentStatus,
      shippingStatus: "Delivered", // Update the shipping status
      paymentDate: order.paymentDate,
      items: order.items,
    };

    axiosPublic
      .put(`/SellHistory/${order._id}`, updatedHistory)
      .then(() => {
        showSuccessAlert("Order Delivered", "The order has been delivered.");
        refetch();
      })
      .catch(() => {
        showErrorAlert(
          "Error",
          "Could not mark the order as delivered. Please try again."
        );
      });
  };

  // Handle "Halt Transit" action
  const handleHaltTransit = (order) => {
    showConfirmationAlert(
      "Are you sure?",
      "You won't be able to revert this!"
    ).then((result) => {
      if (result.isConfirmed) {
        const updatedHistory = {
          paidBy: order.paidBy,
          totalAmount: order.totalAmount,
          paymentStatus: order.paymentStatus,
          shippingStatus: "Halted", // Update the shipping status
          paymentDate: order.paymentDate,
          items: order.items,
        };

        axiosPublic
          .delete(`/SellHistory/${order._id}`, updatedHistory)
          .then(() => {
            showSuccessAlert("Order Halted", "The order has been halted.");
            refetch(); // Refetch data to update the UI
          })
          .catch(() => {
            showErrorAlert(
              "Error",
              "Could not halt the order. Please try again."
            );
          });
      }
    });
  };

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white h-screen ml-1">
      {/* Title */}
      <div className="px-5 py-5 text-black border-b border-black bg-gray-200">
        <p className="text-2xl font-bold text-center">Manage Delivery</p>
      </div>

      {/* List */}
      <div className="overflow-x-auto px-5 py-5">
        <table className="table text-black w-full">
          {/* Head */}
          <thead className="bg-gray-300 text-black font-bold">
            <tr>
              <th>No</th>
              <th>Order By</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Total Price</th>
              <th>Order Date</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {SellHistoryData.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.paidBy}</td>
                <td>
                  {order.items.reduce((sum, item) => sum + item.quantity, 0)}
                </td>
                <td>{order.paymentStatus}</td>
                <td>{order.totalAmount}</td>
                <td>{order.paymentDate}</td>
                <td>
                  {order.shippingStatus === "Ordered" ? (
                    <div className="border border-gray-200 text-white">
                      <p className="text-black font-semibold text-center pt-2">
                        Ordered
                      </p>
                      <button
                        onClick={() => handleApprove(order)}
                        className="bg-green-500 hover:bg-green-600 w-32 flex justify-center py-2 px-4 rounded m-2"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(order)}
                        className="bg-red-500 hover:bg-red-600 w-32 flex justify-center py-2 px-4 rounded m-2"
                      >
                        Reject
                      </button>
                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 w-32 flex justify-center py-2 px-4 rounded m-2"
                        onClick={() => openModal(order)}
                      >
                        View Order
                      </button>
                    </div>
                  ) : order.shippingStatus === "On Transit" ? (
                    <div className="border border-gray-200 text-white">
                      <p className="text-black font-semibold text-center pt-2">
                        On Transit
                      </p>
                      <button
                        onClick={() => handleDelivered(order)}
                        className="bg-blue-500 hover:bg-blue-600 w-32 flex justify-center py-2 px-4 rounded m-2"
                      >
                        Delivered
                      </button>
                      <button
                        onClick={() => handleHaltTransit(order)}
                        className="bg-red-500 hover:bg-red-600 w-32 flex justify-center py-2 px-4 rounded m-2"
                      >
                        Halt Transit
                      </button>
                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 w-32 flex justify-center py-2 px-4 rounded m-2"
                        onClick={() => openModal(order)}
                      >
                        View Order
                      </button>
                    </div>
                  ) : order.shippingStatus === "Halted" ? (
                    <div className="border border-gray-200 text-white">
                      <p className="text-black font-semibold text-center pt-2">
                        Halted
                      </p>
                      <button
                        onClick={() => handleApprove(order)}
                        className="bg-blue-500 hover:bg-blue-600 w-32 flex justify-center py-2 px-4 rounded m-2"
                      >
                        Re-Deliver
                      </button>
                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 w-32 flex justify-center py-2 px-4 rounded m-2"
                        onClick={() => openModal(order)}
                      >
                        View Order
                      </button>
                    </div>
                  ) : (
                    <span
                      className={`${
                        order.shippingStatus === "Approved"
                          ? "text-green-500"
                          : order.shippingStatus === "Delivered"
                          ? "text-blue-500"
                          : "text-red-500"
                      } font-bold`}
                    >
                      {order.shippingStatus}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedOrder && isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box bg-white text-black max-w-[1000px]">
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
        </dialog>
      )}
    </div>
  );
};

export default ManageDelivery