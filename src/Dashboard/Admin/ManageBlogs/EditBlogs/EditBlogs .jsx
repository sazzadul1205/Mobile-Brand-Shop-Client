import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const EditBlogs = ({ closeModal, selectedBlog, refetch }) => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (selectedBlog) {
      reset(selectedBlog); // Populate form with the selected blog's data
    }
  }, [selectedBlog, reset]);

  const onSubmit = (data) => {
    const updatedData = {
      title: data.title,
      content: data.content,
      imageUrl: data.imageUrl,
      author: data.author,
      category: data.category,
      postedBy: {
        email: user?.email,
        name: user?.displayName,
      },
    };

    // Update the blog post
    axiosPublic
      .put(`/Blogs/${selectedBlog._id}`, updatedData)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Blog updated successfully.",
          });
          closeModal(); // Close modal after successful submission
          refetch();
        }
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong while updating the blog.",
        });
      });
  };

  return (
    <div className="modal-box bg-white max-w-3xl max-h-[800px] text-black">
      <div className="border-b border-black pb-3 flex justify-between items-center px-4 py-2 bg-gray-200">
        <p className="text-xl font-bold">Edit Blog</p>
        <p className="font-bold text-3xl cursor-pointer" onClick={closeModal}>
          x
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">
        {/* Blog Title */}
        <div>
          <label className="block font-semibold mb-2">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Enter the blog title"
            className="input w-full border border-gray-300 px-3 py-2 bg-white"
          />
        </div>

        {/* Blog Content */}
        <div>
          <label className="block font-semibold mb-2">Content</label>
          <textarea
            {...register("content", { required: true })}
            placeholder="Enter the blog content"
            className="textarea w-full border border-gray-300 px-3 py-2 bg-white h-36"
          />
        </div>

        {/* Blog Image URL */}
        <div>
          <label className="block font-semibold mb-2">Image URL</label>
          <input
            type="text"
            {...register("imageUrl")}
            placeholder="Enter image URL"
            className="input w-full border border-gray-300 px-3 py-2 bg-white"
          />
        </div>

        {/* Blog Author */}
        <div>
          <label className="block font-semibold mb-2">Author</label>
          <input
            type="text"
            {...register("author", { required: true })}
            placeholder="Enter the author name"
            className="input w-full border border-gray-300 px-3 py-2 bg-white"
          />
        </div>

        {/* Blog Category */}
        <div>
          <label className="block font-semibold mb-2">Category</label>
          <input
            type="text"
            {...register("category", { required: true })}
            placeholder="Enter the blog category"
            className="input w-full border border-gray-300 px-3 py-2 bg-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 mt-4"
        >
          Edit Blog
        </button>
      </form>
    </div>
  );
};

EditBlogs.propTypes = {
  closeModal: PropTypes.func.isRequired,
  selectedBlog: PropTypes.object.isRequired,
  refetch: PropTypes.object.isRequired,
};

export default EditBlogs;
