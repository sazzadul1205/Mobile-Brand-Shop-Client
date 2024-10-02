import PropTypes from "prop-types";

const ViewBlogs = ({ closeModal, selectedBlog }) => {
  return (
    <div className="modal-box bg-white max-w-5xl max-h-[800px] text-black">
      <div className="border-b border-black pb-3 flex justify-between items-center px-4 py-2 bg-gray-200">
        <p className="text-xl font-bold">View Blog</p>
        <p className="font-bold text-3xl cursor-pointer" onClick={closeModal}>
          x
        </p>
      </div>
      {selectedBlog && (
        <div className="flex bg-white shadow-lg rounded-lg p-6">
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
          </div>
        </div>
      )}
    </div>
  );
};

ViewBlogs.propTypes = {
  closeModal: PropTypes.func.isRequired,
  selectedBlog: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default ViewBlogs;
