import PropTypes from "prop-types";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const LaptopCard = ({ data, index, liked, toggleLike }) => {
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
                {data.Brand} {data.model}
              </h3>
              <h3 className="font-medium text-xl p-2 border border-gray-300">
                <span className="font-semibold">Condition</span> :{" "}
                {data.Condition}
              </h3>
              <h3 className="font-medium text-xl p-2 border border-gray-300">
                <span className="font-semibold">Release Date</span> :{" "}
                {data.ReleaseDate}
              </h3>
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold mt-4 py-2 px-10 w-full rounded-full mx-auto"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>

            {/* Right */}
            <div className="space-y-3">
              {/* Weight and Dimensions */}
              <div>
                <h4 className="font-bold text-lg py-1">Weight & Dimensions:</h4>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Height :</span>
                  {data.Dimensions.Height}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Width :</span>
                  {data.Dimensions.Width}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Depth :</span>
                  {data.Dimensions.Depth}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Weight :</span>
                  {data.Dimensions.Weight}{" "}
                  {/* Update if data provides weight */}
                </p>
              </div>

              {/* Display */}
              <div>
                <h4 className="font-bold text-lg py-1">Display:</h4>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Screen Size:</span>
                  {data.Display?.ScreenSize}{" "}
                  {/* Update if data provides Display info */}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Resolution :</span>
                  {data.Display?.Resolution}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Display Type :</span>
                  {data.Display?.DisplayType}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Touch Screen :</span>
                  {data.Display?.Touchscreen}
                </p>
              </div>

              {/* Performance */}
              <div>
                <h4 className="font-bold text-lg py-1">Performance:</h4>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Processor :</span>
                  {data.Performance?.Processor}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">RAM :</span>
                  {data.Performance?.RAM}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Storage :</span>
                  {data.Performance?.Storage}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">GraphicsCard :</span>
                  {data.Performance?.GraphicsCard}
                </p>
              </div>

              {/* Battery */}
              <div>
                <h4 className="font-bold text-lg py-1">Battery:</h4>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Battery Life :</span>
                  {data.Battery?.BatteryLife}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Battery Capacity :</span>
                  {data.Battery?.BatteryCapacity}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Charging Speed :</span>
                  {data.Battery?.ChargingSpeed}
                </p>
              </div>

              {/* Keyboard */}
              <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                <span className="font-semibold">Keyboard :</span>
                {data.Keyboard}
              </p>

              {/* TrackpadMouseInput */}
              <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                <span className="font-semibold">Track pad Mouse Input :</span>
                {data.TrackpadMouseInput}
              </p>

              {/* Biometrics */}
              <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                <span className="font-semibold">Biometrics :</span>
                {data.Biometrics}
              </p>

              {/* OtherFeatures */}
              <div>
                <h4 className="font-bold text-lg py-1">OtherFeatures:</h4>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Operating System :</span>
                  {data.OtherFeatures?.OperatingSystem}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Connectivity :</span>
                  {data.OtherFeatures?.Connectivity}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Webcam :</span>
                  {data.OtherFeatures?.Webcam}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Speakers :</span>
                  {data.OtherFeatures?.Speakers}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">ColorOptions :</span>
                  {data.OtherFeatures?.ColorOptions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

LaptopCard.propTypes = {
  data: PropTypes.shape({
    Brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inStock: PropTypes.bool,
    image: PropTypes.string.isRequired,
    Condition: PropTypes.string,
    operatingSystem: PropTypes.string,
    ReleaseDate: PropTypes.string,
    Keyboard: PropTypes.string,
    TrackpadMouseInput: PropTypes.string,
    Biometrics: PropTypes.string,
    Dimensions: PropTypes.shape({
      Height: PropTypes.string,
      Width: PropTypes.string,
      Depth: PropTypes.string,
      Weight: PropTypes.string,
    }),
    Display: PropTypes.shape({
      ScreenSize: PropTypes.string,
      Resolution: PropTypes.string,
      DisplayType: PropTypes.string,
      Touchscreen: PropTypes.string,
    }),
    Performance: PropTypes.shape({
      Processor: PropTypes.string,
      RAM: PropTypes.string,
      Storage: PropTypes.arrayOf(PropTypes.string),
      GraphicsCard: PropTypes.arrayOf(PropTypes.string),
    }),
    Battery: PropTypes.shape({
      BatteryLife: PropTypes.string,
      BatteryCapacity: PropTypes.string,
      ChargingSpeed: PropTypes.string,
    }),
    OtherFeatures: PropTypes.shape({
      OperatingSystem: PropTypes.string,
      Connectivity: PropTypes.string,
      Webcam: PropTypes.string,
      Speakers: PropTypes.string,
      ColorOptions: PropTypes.string,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default LaptopCard;
