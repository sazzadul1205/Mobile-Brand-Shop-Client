import PropTypes from "prop-types";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AdvancedCard = ({ data, index, liked, toggleLike }) => {
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
                {data.brand} {data.model}
              </h3>
              <h3 className="font-medium text-xl p-2 border border-gray-300">
                <span className="font-semibold">Condition</span> :{" "}
                {data.condition}
              </h3>
              <h3 className="font-medium text-xl p-2 border border-gray-300">
                <span className="font-semibold">Operating System</span> :{" "}
                {data.operatingSystem}
              </h3>
              <h3 className="font-medium text-xl p-2 border border-gray-300">
                <span className="font-semibold">Release Date</span> :{" "}
                {data.releaseDate}
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
                  {data.weightDimensions.height}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Width :</span>
                  {data.weightDimensions.width}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Depth :</span>
                  {data.weightDimensions.depth}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Weight :</span>
                  {data.weightDimensions.weight}
                </p>
              </div>

              {/* Display */}
              <div>
                <h4 className="font-bold text-lg py-1">Display:</h4>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Screen Size :</span>
                  {data.display.screenSize}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Resolution :</span>
                  {data.display.resolution}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Technology :</span>
                  {data.display.displayTechnology}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Refresh Rate :</span>
                  {data.display.refreshRate}
                </p>
              </div>

              {/* Performance */}
              <div>
                <h4 className="font-bold text-lg py-1">Performance:</h4>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Processor :</span>
                  {data.performance.processor}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">RAM :</span>
                  {data.performance.ram}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Storage :</span>
                  {data.performance.storageOptions.join(", ")}
                </p>
              </div>

              {/* Camera */}
              <div>
                <h4 className="font-bold text-lg py-1">Camera:</h4>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Main Camera :</span>
                  {data.camera.mainCamera}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Front Camera :</span>
                  {data.camera.frontCamera}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Video Recording :</span>
                  {data.camera.videoRecording}
                </p>
              </div>

              {/* Battery */}
              <div>
                <h4 className="font-bold text-lg py-1">Battery:</h4>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Battery Capacity :</span>
                  {data.battery.batteryCapacity}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Charging Speed :</span>
                  {data.battery.chargingSpeed}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Battery Life :</span>
                  {data.battery.batteryLife}
                </p>
              </div>

              {/* Inputs / Outputs */}
              <div>
                <h4 className="font-bold text-lg py-1">Inputs / Outputs:</h4>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Charging Port :</span>
                  {data.inputsOutputs.chargingPort}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Sim Card Type :</span>
                  {data.inputsOutputs.simCardType}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Headphone Jack:</span>
                  {data.inputsOutputs.headphoneJack}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Speaker:</span>
                  {data.inputsOutputs.speaker}
                </p>
              </div>

              {/* biometrics */}
              <div>
                <h4 className="font-bold text-lg py-1">biometrics:</h4>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Biometrics</span>
                  {data.biometrics}
                </p>
              </div>

              {/* Other Features */}
              <div>
                <h4 className="font-bold text-lg py-1">Other Features:</h4>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Connectivity:</span>
                  {data.otherFeatures.connectivity}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">
                    Water / Dust Resistance:
                  </span>
                  {data.otherFeatures.waterDustResistance}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Sensors:</span>
                  {data.otherFeatures.sensors}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">
                    Operating System Version:
                  </span>
                  {data.otherFeatures.operatingSystemVersion}
                </p>
                <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                  <span className="font-semibold">Color Options:</span>
                  {data.otherFeatures.colorOptions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

AdvancedCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
    condition: PropTypes.string.isRequired,
    operatingSystem: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    biometrics: PropTypes.string.isRequired,
    weightDimensions: PropTypes.shape({
      height: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired,
      depth: PropTypes.string.isRequired,
      weight: PropTypes.string.isRequired,
    }).isRequired,
    display: PropTypes.shape({
      screenSize: PropTypes.string.isRequired,
      resolution: PropTypes.string.isRequired,
      displayTechnology: PropTypes.string.isRequired,
      refreshRate: PropTypes.string.isRequired,
    }).isRequired,
    performance: PropTypes.shape({
      processor: PropTypes.string.isRequired,
      ram: PropTypes.string.isRequired,
      storageOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    camera: PropTypes.shape({
      mainCamera: PropTypes.string.isRequired,
      frontCamera: PropTypes.string.isRequired,
      videoRecording: PropTypes.string.isRequired,
    }).isRequired,
    battery: PropTypes.shape({
      batteryCapacity: PropTypes.string.isRequired,
      chargingSpeed: PropTypes.string.isRequired,
      batteryLife: PropTypes.string.isRequired,
    }).isRequired,
    inputsOutputs: PropTypes.shape({
      chargingPort: PropTypes.string.isRequired,
      simCardType: PropTypes.string.isRequired,
      headphoneJack: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
    }).isRequired,
    otherFeatures: PropTypes.shape({
      connectivity: PropTypes.string.isRequired,
      waterDustResistance: PropTypes.string.isRequired,
      sensors: PropTypes.string.isRequired,
      operatingSystemVersion: PropTypes.string.isRequired,
      colorOptions: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default AdvancedCard;
