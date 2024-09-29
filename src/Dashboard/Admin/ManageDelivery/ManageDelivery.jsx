import { useState } from "react";

const ManageDelivery = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderBy: "Sazzadul Islam",
      OrderEmail: "Psazzadul@gmail.com",
      totalQuantity: 5,
      paymentStatus: "Paid",
      totalPrice: 500,
      orderDate: "2024-09-29",
      status: "Pending",
      productData: [
        {
          productImage:
            "https://i.ibb.co.com/BLnmbF4/Samsung-Galaxy-A05-464-GB.webp",
          productBrand: "Samsung",
          productModel: "Galaxy A05",
          productPrice: "17886.08",
          productType: "Mobile",
          productQuantity: 2,
        },
        {
          productImage:
            "https://i.ibb.co.com/9WwXDtB/Samsung-Galaxy-A04e-332-GB.webp",
          productBrand: "Samsung",
          productModel: "Galaxy A04e",
          productPrice: "15485.26",
          productType: "Mobile",
          productQuantity: 1,
        },
      ],
    },
    // Add more orders here if needed
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  // Handle Approve action
  const handleApprove = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Approved" } : order
      )
    );
  };

  // Handle Reject action
  const handleReject = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Rejected" } : order
      )
    );
  };

  const openModal = (order) => {
    setSelectedOrder(order);
    document.getElementById("my_modal_2").showModal();
  };

  const closeModal = () => {
    setSelectedOrder(null);
    document.getElementById("my_modal_2").close();
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
              <th>Total Quantity</th>
              <th>Payment Status</th>
              <th>Total Price</th>
              <th>Order Date</th>
              <th>View</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <th>{index + 1}</th>
                <td>{order.orderBy}</td>
                <td>{order.totalQuantity}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.totalPrice}</td>
                <td>{order.orderDate}</td>
                <td>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded m-2"
                    onClick={() => openModal(order)}
                  >
                    View Order
                  </button>
                </td>
                <td>
                  {order.status === "Pending" ? (
                    <>
                      <button
                        onClick={() => handleApprove(order.id)}
                        className="bg-green-500 text-white py-2 px-4 rounded m-2"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(order.id)}
                        className="bg-red-500 text-white py-2 px-4 rounded m-2"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span
                      className={`${
                        order.status === "Approved"
                          ? "text-green-500"
                          : "text-red-500"
                      } font-bold`}
                    >
                      {order.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedOrder && (
        <dialog id="my_modal_2" className="modal">
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
                  {selectedOrder.orderBy}
                </span>
              </p>
              <p className="py-1 text-lg font-bold">
                Total Quantity:
                <span className="ml-5 font-semibold">
                  {selectedOrder.totalQuantity}
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
                  {selectedOrder.totalPrice}
                </span>
              </p>
              <p className="py-1 text-lg font-bold">
                Order Date:
                <span className="ml-5 font-semibold">
                  {selectedOrder.orderDate}
                </span>
              </p>
              <p className="py-1 text-lg font-bold">
                Status:
                <span className="ml-5 font-semibold">
                  {selectedOrder.status}
                </span>
              </p>
            </div>
            {/* List */}
            <div>
              <p className="font-bold text-2xl">Products</p>
            </div>
            {/* List content */}
            <div className="overflow-x-auto px-5 py-5">
              <table className="table text-black w-full">
                {/* Head */}
                <thead className="bg-gray-300 text-black font-bold">
                  <tr>
                    <th>No</th>
                    <th>Image</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.productData.map((product, idx) => (
                    <tr key={idx}>
                      <th>{idx + 1}</th>
                      <td>
                        <img
                          src={product.productImage}
                          alt={product.productModel}
                          className="w-12 h-12"
                        />
                      </td>
                      <td>{product.productBrand}</td>
                      <td>{product.productModel}</td>
                      <td>{product.productPrice}</td>
                      <td>{product.productType}</td>
                      <td>{product.productQuantity}</td>
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

export default ManageDelivery;
