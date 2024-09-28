import PropTypes from "prop-types";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Swal from "sweetalert2";

const Card = ({ data, index, liked, toggleLike }) => {
  const handleAddToCart = () => {
    Swal.fire({
      title: "Added to Cart!",
      text: "The item has been added to your cart successfully.",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  return (
    <div className="group card bg-white w-full z-10 shadow-xl rounded-none border border-black p-5 relative overflow-hidden transition-transform duration-300 transform hover:scale-105">
      <figure className="relative">
        <img src={data.image} alt={data.model} className="w-full h-auto" />
        {/* Toggleable Favorite Icon */}
        <div
          className="absolute top-2 -right-10 group-hover:right-2 transition-all duration-500 ease-in-out cursor-pointer"
          onClick={() => toggleLike(index)}
        >
          {liked ? (
            <FcLike className="text-2xl" />
          ) : (
            <FcLikePlaceholder className="text-2xl" />
          )}
        </div>
      </figure>
      <div className="card-body text-left p-0">
        <h2 className="card-title">{data.model}</h2>

        {/* Conditionally render 'In Stock' based on the inStock prop */}
        {data.inStock && <p className="text-green-500">In Stock</p>}

        <div className="flex items-center gap-4">
          <FaBangladeshiTakaSign className="text-black" />
          <p>{data.price}</p>
        </div>

        {/* Add to Cart Button */}
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full mt-5"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

// Prop types validation
Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
    condition: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default Card;
