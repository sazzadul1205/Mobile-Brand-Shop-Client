import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Components/Loader";
import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const ManageFAQ = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const [isModalOpen, setModalOpen] = useState(false); // Modal state

  // Fetching HomeFAQ Data
  const {
    data: HomeFAQData = [],
    isLoading: HomeFAQIsLoading,
    error: HomeFAQError,
    refetch,
  } = useQuery({
    queryKey: ["HomeFAQData"],
    queryFn: () => axiosPublic.get(`/HomeFAQ`).then((res) => res.data),
  });

  // Loading state
  if (HomeFAQIsLoading) {
    return <Loader />;
  }

  // Error state
  if (HomeFAQError) {
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

  // Form submission handler
  const onSubmit = (data) => {
    const formattedData = {
      question: data.question,
      answer: data.answer,
    };

    axiosPublic
      .post("/HomeFAQ", formattedData) // Corrected POST endpoint
      .then(() => {
        Swal.fire({
          title: "Brand Added!",
          text: "The home brand has been added successfully.",
          icon: "success",
        });
        refetch(); // Refetch data
        reset(); // Reset form fields
        setModalOpen(false); // Close modal
      })
      .catch((error) => {
        console.error("Error adding brand:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an issue adding your brand. Please try again.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  // Delete item handler
  const handleDelete = async (itemId, itemName) => {
    try {
      const result = await showConfirmationAlert(
        "Are you sure?",
        `You are about to delete "${itemName}". This action cannot be undone.`,
        "Delete"
      );

      if (result.isConfirmed) {
        await axiosPublic.delete(`/HomeFAQ/${itemId}`);
        refetch(); // Refetch data after deletion
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
  return (
    <div className="bg-white ml-1">
      {/* Title */}
      <div className="px-5 py-5 text-black border-b border-black bg-gray-200">
        <p className="text-2xl font-bold text-center">Manage Brands</p>
      </div>

      {/* Add Button */}
      <div className="flex justify-end mt-5 mx-10">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-5 py-1"
          onClick={() => setModalOpen(true)} // Open modal
        >
          + Add Brand
        </button>
      </div>
      <div>
        {/* Brand Table */}
        <div className="overflow-x-auto px-5 py-5">
          <table className="table text-black w-full">
            {/* Head */}
            <thead className="bg-gray-300 text-black font-bold">
              <tr className="bg-gray-200 py-2 text-center">
                <th>Question</th>
                <th>Answer</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {HomeFAQData.map((brand) => (
                <tr key={brand._id} className="border-t">
                  <td>{brand.question}</td>
                  <td className="w-[500px]">{brand.answer}</td>
                  <td className="flex justify-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 w-28 m-1 py-2 text-white font-semibold"
                      onClick={() => handleDelete(brand._id, brand.name)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Brand Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3 text-black">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl font-bold">Add Brand</p>
              <button
                className="text-3xl font-bold cursor-pointer"
                onClick={() => setModalOpen(false)} // Close modal
              >
                ×
              </button>
            </div>

            {/* Brand Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Question */}
              <div>
                <label className="font-semibold pb-2 text-lg">Question</label>
                <input
                  type="text"
                  {...register("question", { required: true })}
                  className="border border-gray-300 p-2 w-full bg-white"
                  placeholder="Enter Question"
                />
              </div>

              {/* Answer */}
              <div className="flex flex-col">
                <label className="font-semibold pb-2 text-lg">Answer</label>
                <textarea
                  {...register("answer", { required: true })}
                  className="border border-gray-300 p-2 h-36 bg-white"
                  placeholder="Enter blog content"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 mt-4"
              >
                Add Brand
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageFAQ;

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
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonText || "Yes, proceed!",
  });
};
