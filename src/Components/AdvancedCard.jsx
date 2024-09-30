import PropTypes from "prop-types";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AdvancedCard = ({ data, index, liked, toggleLike }) => {
  const { user } = useContext(AuthContext);

  const currentDate = new Date();
  const formattedDateTime = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const handleAddToCart = () => {
    closeModal(); // Close the modal before showing SweetAlert

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to add this item to your cart?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, add it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const productDetails = {
          brand: data.brand,
          image: data.image,
          model: data.model,
          price: data.price,
          productType: data.productType,
          _id: data._id,
          quantity: 1,
          orderedDate: formattedDateTime,
          orderedBy: user.email,
        };

        // Log the product details to the console or send it to your cart function
        console.log("Product added to cart:", productDetails);

        Swal.fire("Added!", "The item has been added to your cart.", "success");
      } else {
        openModal(); // Reopen the modal if the user cancels
      }
    });
  };

  const openModal = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const closeModal = () => {
    document.getElementById("my_modal_2").close();
  };

  return (
    <div className="group card bg-white w-full z-10 shadow-xl rounded-none p-5 relative overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
      <figure className="relative">
        <img src={data.image} alt={data.model} className="w-full h-auto" />
        <div>
          <div
            className="absolute top-2 -right-10 group-hover:right-2 transition-all duration-500 ease-in-out cursor-pointer border border-gray-300 p-1"
            onClick={() => toggleLike(index)}
          >
            {liked ? (
              <FcLike className="text-2xl" />
            ) : (
              <FcLikePlaceholder className="text-2xl" />
            )}
          </div>
          <div
            className="absolute top-10 -right-10 group-hover:right-2 transition-all duration-500 ease-in-out cursor-pointer border border-gray-300 p-1"
            onClick={openModal}
          >
            <FaExpandArrowsAlt className="text-2xl text-gray-500 hover:text-blue-600" />
          </div>
        </div>
      </figure>

      <div className="card-body text-left p-0">
        <h2 className="card-title">{data.model}</h2>
        {data.inStock && <p className="text-green-500">In Stock</p>}
        <div className="flex items-center gap-4">
          <FaBangladeshiTakaSign className="text-black" />
          <p>{data.price}</p>
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full mt-5"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white max-w-5xl max-h-[800px]">
          <div className="border-b border-black pb-3 flex justify-between items-center px-10">
            <p className="text-xl font-bold">View More</p>
            <p
              className="font-bold text-3xl cursor-pointer"
              onClick={closeModal}
            >
              x
            </p>
          </div>
          <div className="flex justify-between px-10 py-5 gap-5">
            {/* Left */}
            <div>
              <img src={data.image} alt={data.model} className="w-[400px]" />
              <h3 className="font-bold text-xl p-2 border border-gray-300">
                {data.brand} {data.model}
              </h3>
              {data.operatingSystem && (
                <h3 className="font-medium text-xl p-2 border border-gray-300">
                  <span className="font-semibold">Operating System</span> :{" "}
                  {data.operatingSystem}
                </h3>
              )}
              {data.condition && (
                <h3 className="font-medium text-xl p-2 border border-gray-300">
                  <span className="font-semibold">Condition</span> :{" "}
                  {data.condition}
                </h3>
              )}
              {data.releaseDate && (
                <h3 className="font-medium text-xl p-2 border border-gray-300">
                  <span className="font-semibold">Release Date</span> :{" "}
                  {data.releaseDate}
                </h3>
              )}
              {data.price && (
                <p className="font-medium text-xl pt-5 flex items-center">
                  <span className="font-semibold">Price</span> : {data.price}
                  <FaBangladeshiTakaSign className="text-black text-lg ml-2" />
                </p>
              )}
              {data.inStock && <p className="text-green-500">In Stock</p>}
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold mt-4 py-2 px-10 w-full rounded-full mx-auto"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

AdvancedCard.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default AdvancedCard;
