import { useState } from "react";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const BlogsPage = () => {
  // State to track the currently selected blog (default to the first blog)
  const [selectedBlog, setSelectedBlog] = useState(null);

  // State to manage which set of blogs are visible in the vertical slider
  const [startIndex, setStartIndex] = useState(0);

  // The number of blogs to show at once
  const blogsToShow = 3;

  const axiosPublic = useAxiosPublic();

  // Fetching Blogs Data
  const {
    data: BlogsData,
    isLoading: BlogsIsLoading,
    error: BlogsError,
  } = useQuery({
    queryKey: ["Blogs"],
    queryFn: () => axiosPublic.get(`/Blogs`).then((res) => res.data), // Get all blogs
  });

  // Loading state
  if (BlogsIsLoading) {
    return <Loader />;
  }

  // Error state
  if (BlogsError) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 to-white">
        <p className="text-center text-red-500 font-bold text-3xl mb-8">
          Something went wrong. Please reload the page.
        </p>
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-300"
          onClick={() => window.location.reload()} // Inline reload function
        >
          Reload
        </button>
      </div>
    );
  }

  // Set the first blog as the default selected blog if it's not set
  if (!selectedBlog && BlogsData.length > 0) {
    setSelectedBlog(BlogsData[0]);
  }

  // Handle blog click event
  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  // Handle sliding up in the blog list
  const handleSlideUp = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Handle sliding down in the blog list
  const handleSlideDown = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, BlogsData.length - blogsToShow)
    );
  };

  return (
    <div className="bg-gradient-to-b from-green-500 to-white py-24 text-black">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mobile Brand Shop || Blogs Page</title>
      </Helmet>
      {/* Page Header */}
      <div className="text-center my-5">
        <p className="font-bold text-3xl">Our Blogs</p>
        <p className="text-xl">
          Read Our Blogs and know more about Electronics
        </p>
      </div>

      {/* Blog Content */}
      <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto gap-6">
        {/* Big Feature Blog */}
        {selectedBlog && ( // Ensure selectedBlog is set before rendering
          <div className="lg:w-2/3 bg-white shadow-lg rounded-lg p-6">
            <img
              className="w-full h-64 object-cover rounded-t-lg"
              src={selectedBlog.imageUrl}
              alt={selectedBlog.title}
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-3">{selectedBlog.title}</h2>
              <p className="mb-2 text-gray-500">
                By {selectedBlog.author} | {selectedBlog.publishedDate}
              </p>
              <p className="mb-5 text-gray-600">{selectedBlog.content}</p>
              <p className="italic text-gray-400">
                Category: {selectedBlog.category}
              </p>
              <button className="text-green-500 font-bold">Read More</button>
            </div>
          </div>
        )}

        {/* Smaller Blog Articles with Slider */}
        <div className="lg:w-1/3 space-y-4">
          {/* Slider Up Button */}
          <button
            onClick={handleSlideUp}
            className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
            disabled={startIndex === 0} // Disable button at the top
          >
            ▲
          </button>

          {/* Displaying the visible blogs */}
          {BlogsData.slice(startIndex, startIndex + blogsToShow).map((blog) => (
            <div
              key={blog._id} // Use `_id` for the unique key
              onClick={() => handleBlogClick(blog)}
              className="cursor-pointer bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="text-sm text-gray-500">
                By {blog.author} | {blog.publishedDate}
              </p>
              <img
                className="w-full h-40 object-cover mt-2 rounded-lg"
                src={blog.imageUrl}
                alt={blog.title}
              />
            </div>
          ))}

          {/* Slider Down Button */}
          <button
            onClick={handleSlideDown}
            className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
            disabled={startIndex + blogsToShow >= BlogsData.length} // Disable button at the bottom
          >
            ▼
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
