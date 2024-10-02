import { FaSearch } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";
import { useState } from "react";
import ViewBlogs from "./ViewBlogs/ViewBlogs";
import AddBlogs from "./AddBlogs/AddBlogs";
import Swal from "sweetalert2";
import EditBlogs from "./EditBlogs/EditBlogs ";

const ManageBlogs = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetching BlogsData
  const {
    data: BlogsData = [],
    isLoading: BlogsDataIsLoading,
    error: BlogsDataError,
    refetch,
  } = useQuery({
    queryKey: ["BlogsData"],
    queryFn: () => axiosPublic.get(`/Blogs`).then((res) => res.data),
  });

  // Loading state
  if (BlogsDataIsLoading) {
    return <Loader />;
  }

  // Error state
  if (BlogsDataError) {
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
        await axiosPublic.delete(`/Blogs/${itemId}`);
        refetch();
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

  const closeModal = () => {
    document.querySelectorAll("dialog").forEach((modal) => modal.close());
    setSelectedBlog(null); // Clear the selected blog when closing modals
  };

  const openViewModal = (blog) => {
    setSelectedBlog(blog);
    document.getElementById("View_Blogs_Modal").showModal();
  };

  const openEditModal = (blog) => {
    setSelectedBlog(blog);
    document.getElementById("Edit_Blogs_Modal").showModal();
  };

  return (
    <div className="bg-white ml-1">
      {/* Title */}
      <div className="px-5 py-5 text-black border-b border-black bg-gray-200">
        <p className="text-2xl font-bold text-center">Manage Blogs</p>
      </div>

      {/* Filters */}
      <div className="flex px-10 justify-between items-center text-black gap-5">
        {/* Search by Title */}
        <label className="input border border-black flex items-center gap-2 w-1/2 my-4 bg-white">
          <input
            type="text"
            className="grow bg-white"
            placeholder="Search by title"
          />
          <FaSearch className="h-4 w-4 text-black" />
        </label>

        {/* Add Blogs */}
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2"
          onClick={() => document.getElementById("Add_Blogs_Modal").showModal()}
        >
          + Add Blogs
        </button>
      </div>

      {/* Blogs Table */}
      <div className="overflow-x-auto px-5 py-5">
        <table className="table text-black w-full">
          {/* Head */}
          <thead className="bg-gray-300 text-black font-bold">
            <tr className="bg-gray-200 py-2 text-center">
              <th>Image</th>
              <th>Title</th>
              <th>Author</th>
              <th>Published Date</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {BlogsData.map((blog) => (
              <tr key={blog._id} className="border-t">
                <td>
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{blog.publishedDate}</td>
                <td>{blog.category}</td>
                <td className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <button
                      className="bg-green-500 hover:bg-green-600 w-28 m-1 py-2 text-white font-semibold"
                      onClick={() => openEditModal(blog)} // Opens Edit modal with the selected blog
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 w-28 m-1 py-2 text-white font-semibold"
                      onClick={() => handleDelete(blog._id, blog.title)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 w-28 m-1 py-2 text-white font-semibold"
                      onClick={() => openViewModal(blog)}
                    >
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Blogs Modal */}
      <dialog id="Add_Blogs_Modal" className="modal">
        <AddBlogs closeModal={closeModal}></AddBlogs>
      </dialog>

      {/* Edit Blogs Modal */}
      <dialog id="Edit_Blogs_Modal" className="modal">
        <EditBlogs
          closeModal={closeModal}
          selectedBlog={selectedBlog}
          refetch={refetch}
        ></EditBlogs>
      </dialog>

      {/* View Blogs Modal */}
      <dialog id="View_Blogs_Modal" className="modal">
        <ViewBlogs
          closeModal={closeModal}
          selectedBlog={selectedBlog}
        ></ViewBlogs>
      </dialog>
    </div>
  );
};

export default ManageBlogs;

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
