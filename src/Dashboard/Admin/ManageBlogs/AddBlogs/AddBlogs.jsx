import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useContext } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddBlogs = ({ closeModal }) => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const formattedData = {
      title: data.title,
      content: data.content,
      imageUrl: data.imageUrl,
      author: data.author,
      publishedDate: new Date().toLocaleDateString(), // Automatically set current date
      category: data.category,
      postedBy: {
        email: user?.email,
        name: user?.displayName,
      },
    };

    // Post request to add a new blog
    axiosPublic
      .post("/Blogs", formattedData)
      .then(() => {
        // Display success alert
        Swal.fire({
          title: "Blog Added!",
          text: "Your blog post has been added successfully.",
          icon: "success",
        });

        // Reset form fields after successful submission
        reset();

        // Close modal after successful submission
        closeModal();
      })
      .catch((error) => {
        console.error("Error adding blog:", error);

        // Display error alert
        Swal.fire({
          title: "Error!",
          text: "There was an issue adding your blog. Please try again.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="modal-box bg-white max-w-3xl max-h-[800px] text-black">
      <div className="border-b border-black pb-3 flex justify-between items-center px-4 py-2 bg-gray-200">
        <p className="text-xl font-bold">Add Blog</p>
        <p className="font-bold text-3xl cursor-pointer" onClick={closeModal}>
          x
        </p>
      </div>

      {/* Blog Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-4 py-6">
        {/* Image URL */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2">Image URL</label>
          <input
            type="text"
            {...register("imageUrl", { required: true })}
            className="border border-gray-300 p-2 bg-white"
            placeholder="Enter image URL"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="border border-gray-300 p-2 bg-white"
            placeholder="Enter blog title"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2">Content</label>
          <textarea
            {...register("content", { required: true })}
            className="border border-gray-300 p-2 h-36 bg-white"
            placeholder="Enter blog content"
          ></textarea>
        </div>

        {/* Author */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2">Author</label>
          <input
            type="text"
            {...register("author", { required: true })}
            className="border border-gray-300 p-2 bg-white"
            placeholder="Enter author name"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2">Category</label>
          <input
            type="text"
            {...register("category", { required: true })}
            className="border border-gray-300 p-2 bg-white"
            placeholder="Enter blog category"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 mt-4"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

AddBlogs.propTypes = {
  closeModal: PropTypes.func.isRequired, // Define closeModal as a required prop
};

export default AddBlogs;
