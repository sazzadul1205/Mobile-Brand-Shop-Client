import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Components/Loader";

const History = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

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
                <td className="flex items-center">
                  {order.totalAmount} <FaBangladeshiTakaSign className="ml-2" />
                </td>
                <td>{order.paymentStatus}</td>
                <td>{order.shippingStatus}</td>
                <td>{order.paymentDate}</td>
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
