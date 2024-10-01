import PropTypes from "prop-types";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AdvancedCard = ({ data, index, liked, toggleLike }) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  // Format current date and time
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const handleAddToCart = (productData) => {
    document.getElementById("my_modal_2").close();
    if (!user) {
      // Show login prompt modal if user is not logged in
      document.getElementById("login_prompt_modal").showModal();
      return;
    }

    const formattedDateTime = getCurrentDateTime(); // Get formatted date and time

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
          brand: productData.brand,
          image: productData.image,
          model: productData.model,
          price: productData.price,
          productType: productData.productType,
          ProductID: productData._id,
          quantity: 1,
          orderedDate: formattedDateTime,
          orderedBy: user?.email || "Guest", // Fallback for user email
        };
        axiosPublic
          .post("/MyCart", productDetails)
          .then((response) => {
            console.log(response);

            Swal.fire(
              "Added!",
              "The item has been added to your cart.",
              "success"
            );
          })
          .catch((error) => {
            console.error("Error adding to cart:", error);
            Swal.fire(
              "Error!",
              "There was a problem adding the item to your cart.",
              "error"
            );
          });
      }
    });
  };

  const openModal = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const closeModal = () => {
    document.getElementById("my_modal_2").close();
  };

  const closeLoginPrompt = () => {
    document.getElementById("login_prompt_modal").close();
  };

  const goToLogin = () => {
    // Replace with your actual login page route
    window.location.href = "/login"; // Change this to your login page path
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
          onClick={() => handleAddToCart(data)} // Pass the data to handleAddToCart
        >
          Add To Cart
        </button>
      </div>

      {/* Modal for detailed view */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white max-w-5xl max-h-[800px]">
          <div className="border-b border-black pb-3 flex justify-between items-center px-10">
            <p className="text-xl font-bold">View More</p>
            <button className="font-bold text-3xl" onClick={closeModal}>
              &times;
            </button>
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
                  <span className="font-semibold">Operating System</span>:{" "}
                  {data.operatingSystem}
                </h3>
              )}
              {data.condition && (
                <h3 className="font-medium text-xl p-2 border border-gray-300">
                  <span className="font-semibold">Condition</span>:{" "}
                  {data.condition}
                </h3>
              )}
              {data.releaseDate && (
                <h3 className="font-medium text-xl p-2 border border-gray-300">
                  <span className="font-semibold">Release Date</span>:{" "}
                  {data.releaseDate}
                </h3>
              )}
              {data.price && (
                <p className="font-medium text-xl pt-5 flex items-center">
                  <span className="font-semibold">Price</span>: {data.price}
                  <FaBangladeshiTakaSign className="text-black text-lg ml-2" />
                </p>
              )}
              {data.inStock && <p className="text-green-500">In Stock</p>}
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold mt-4 py-2 px-10 w-full rounded-full mx-auto"
                onClick={() => handleAddToCart(data)}
              >
                Add To Cart
              </button>
            </div>

            {/* Right */}
            <div className="space-y-3">
              {/* Weight and Dimensions */}
              {data.weightAndDimensions && (
                <div>
                  <h4 className="font-bold text-lg py-1">
                    Weight & Dimensions:
                  </h4>
                  {data.weightAndDimensions.height && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Height :</span>
                      {data.weightAndDimensions.height}
                    </p>
                  )}
                  {data.weightAndDimensions.width && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Width :</span>
                      {data.weightAndDimensions.width}
                    </p>
                  )}
                  {data.weightAndDimensions.depth && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Depth :</span>
                      {data.weightAndDimensions.depth}
                    </p>
                  )}
                  {data.weightAndDimensions.weight && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Weight :</span>
                      {data.weightAndDimensions.weight}
                    </p>
                  )}
                </div>
              )}

              {/* Display */}
              {data.display && (
                <div>
                  <h4 className="font-bold text-lg py-1">Display :</h4>
                  {data.display.screenSize && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Screen Size :</span>
                      {data.display.screenSize}
                    </p>
                  )}
                  {data.display.resolution && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Resolution :</span>
                      {data.display.resolution}
                    </p>
                  )}
                  {data.display.displayType && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Display Type :</span>
                      {data.display.displayType}
                    </p>
                  )}
                  {data.display.displayTechnology && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">
                        Display Technology :
                      </span>
                      {data.display.displayTechnology}
                    </p>
                  )}
                  {data.display.touchScreen && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Touch Screen :</span>
                      {data.display.touchScreen}
                    </p>
                  )}
                  {data.display.refreshRate && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Refresh Rate :</span>
                      {data.display.refreshRate}
                    </p>
                  )}
                </div>
              )}

              {/* Performance */}
              {data.performance && (
                <div>
                  <h4 className="font-bold text-lg py-1">Performance:</h4>
                  {data.performance.processor && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Processor :</span>
                      {data.performance.processor}
                    </p>
                  )}
                  {data.performance.ram && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">RAM :</span>
                      {data.performance.ram}
                    </p>
                  )}
                  {data.performance.storage && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Storage :</span>
                      {data.performance.storage}
                    </p>
                  )}
                  {data.performance.storageOptions && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Storage Options :</span>
                      {data.performance.storageOptions}
                    </p>
                  )}
                  {data.performance.graphicsCard && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Graphics Card :</span>
                      {data.performance.graphicsCard}
                    </p>
                  )}
                  {data.performance.coolingSystem && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Cooling System :</span>
                      {data.performance.coolingSystem}
                    </p>
                  )}
                </div>
              )}

              {/* camera */}
              {data.camera && (
                <div>
                  <h4 className="font-bold text-lg py-1">Camera:</h4>
                  {data.camera.rearCamera && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Rear Camera :</span>
                      {data.camera.rearCamera}
                    </p>
                  )}
                  {data.camera.mainCamera && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Main Camera :</span>
                      {data.camera.mainCamera}
                    </p>
                  )}
                  {data.camera.frontCamera && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Front Camera :</span>
                      {data.camera.frontCamera}
                    </p>
                  )}
                  {data.camera.videoRecording && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Video Recording :</span>
                      {data.camera.videoRecording}
                    </p>
                  )}
                </div>
              )}

              {/* Battery */}
              {data.battery && (
                <div>
                  <h4 className="font-bold text-lg py-1">Battery:</h4>
                  {data.battery.batteryCapacity && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Battery Capacity :</span>
                      {data.battery.batteryCapacity}
                    </p>
                  )}
                  {data.battery.chargingSpeed && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Charging Speed :</span>
                      {data.battery.chargingSpeed}
                    </p>
                  )}
                  {data.battery.batteryLife && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Battery Life :</span>
                      {data.battery.batteryLife}
                    </p>
                  )}
                </div>
              )}

              {/* Inputs / Outputs */}
              {data.inputsOutputs && (
                <div>
                  <h4 className="font-bold text-lg py-1">Inputs / Outputs:</h4>
                  {data.inputsOutputs.usbPorts && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">USB Ports:</span>
                      {data.inputsOutputs.usbPorts}
                    </p>
                  )}
                  {data.inputsOutputs.hdmiDisplayPort && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">HDMI Display Port :</span>
                      {data.inputsOutputs.hdmiDisplayPort}
                    </p>
                  )}
                  {data.inputsOutputs.ethernetPort && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Ethernet Port :</span>
                      {data.inputsOutputs.ethernetPort}
                    </p>
                  )}
                  {data.inputsOutputs.thunderboltPorts && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Thunderbolt Ports:</span>
                      {data.inputsOutputs.thunderboltPorts}
                    </p>
                  )}
                  {data.inputsOutputs.audioInputOutput && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">
                        Audio Input / Output :
                      </span>
                      {data.inputsOutputs.audioInputOutput}
                    </p>
                  )}
                  {data.inputsOutputs.powerSupply && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Power Supply :</span>
                      {data.inputsOutputs.powerSupply}
                    </p>
                  )}
                  {data.inputsOutputs.expansionSlots && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Expansion Slots :</span>
                      {data.inputsOutputs.expansionSlots}
                    </p>
                  )}
                  {data.inputsOutputs.chargingPort && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Charging Port :</span>
                      {data.inputsOutputs.chargingPort}
                    </p>
                  )}
                  {data.inputsOutputs.simCardType && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Sim Card Type :</span>
                      {data.inputsOutputs.simCardType}
                    </p>
                  )}
                  {data.inputsOutputs.simCardSlot && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Sim Card Slot :</span>
                      {data.inputsOutputs.simCardSlot}
                    </p>
                  )}
                  {data.inputsOutputs.headphoneJack && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Headphone Jack :</span>
                      {data.inputsOutputs.headphoneJack}
                    </p>
                  )}
                  {data.inputsOutputs.speakers && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Speakers :</span>
                      {data.inputsOutputs.speakers}
                    </p>
                  )}
                  {data.inputsOutputs.biometrics && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Biometrics :</span>
                      {data.inputsOutputs.biometrics}
                    </p>
                  )}
                  {data.inputsOutputs.sdCardSlot && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">SDCardSlot :</span>
                      {data.inputsOutputs.sdCardSlot}
                    </p>
                  )}
                </div>
              )}

              {/* Other Features */}
              {data.biometrics && (
                <div>
                  <h4 className="font-bold text-lg py-1">Biometrics:</h4>
                  {data.biometrics && (
                    <p className="border border-gray-400 py-2 px-5 ">
                      {data.biometrics}
                    </p>
                  )}
                </div>
              )}

              {/* Keyboard */}
              {data.keyboard && (
                <div>
                  <h4 className="font-bold text-lg py-1">Keyboard :</h4>
                  {data.keyboard && (
                    <p className="border border-gray-400 py-2 px-5 ">
                      {data.keyboard}
                    </p>
                  )}
                </div>
              )}

              {/* TrackpadMouseInput */}
              {data.trackpadMouseInput && (
                <div>
                  <h4 className="font-bold text-lg py-1">
                    Track Pad Mouse Input :
                  </h4>
                  {data.trackpadMouseInput && (
                    <p className="border border-gray-400 py-2 px-5 ">
                      {data.trackpadMouseInput}
                    </p>
                  )}
                </div>
              )}

              {/* Other Features */}
              {data.otherFeatures && (
                <div>
                  <h4 className="font-bold text-lg py-1">Other Features:</h4>
                  {data.otherFeatures.operatingSystem && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Operating System :</span>
                      {data.otherFeatures.operatingSystem}
                    </p>
                  )}
                  {data.otherFeatures.connectivity && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Connectivity :</span>
                      {data.otherFeatures.connectivity}
                    </p>
                  )}
                  {data.otherFeatures.includedPeripherals && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">
                        Included Peripherals :
                      </span>
                      {data.otherFeatures.includedPeripherals}
                    </p>
                  )}
                  {data.otherFeatures.accessoriesSupport && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">
                        Accessories Support :
                      </span>
                      {data.otherFeatures.accessoriesSupport}
                    </p>
                  )}
                  {data.otherFeatures.webcam && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Webcam :</span>
                      {data.otherFeatures.webcam}
                    </p>
                  )}
                  {data.otherFeatures.waterDustResistance && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">
                        Water Dust Resistance :
                      </span>
                      {data.otherFeatures.waterDustResistance}
                    </p>
                  )}
                  {data.otherFeatures.speakers && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Speakers :</span>
                      {data.otherFeatures.speakers}
                    </p>
                  )}
                  {data.otherFeatures.colorOptions && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">colorOptions :</span>
                      {data.otherFeatures.colorOptions}
                    </p>
                  )}
                  {data.otherFeatures.operatingSystemVersion && (
                    <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">
                        Operating System Version :
                      </span>
                      {data.otherFeatures.operatingSystemVersion}
                    </p>
                  )}
                  {data.otherFeatures.sensors && (
                    <div className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Sensors :</span>
                      <ul className="flex">
                        {data.otherFeatures.sensors.map((color, index) => (
                          <li className="mr-2 flex" key={index}>
                            {color},
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {data.otherFeatures.colorOptions && (
                    <div className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                      <span className="font-semibold">Color Options :</span>
                      <ul className="flex">
                        {data.otherFeatures.colorOptions.map((color, index) => (
                          <li className="mr-2 flex" key={index}>
                            {color},
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </dialog>

      {/* Login Prompt Modal */}
      <dialog id="login_prompt_modal" className="modal">
        <div className="modal-box bg-white max-w-md">
          <h2 className="text-xl font-bold mb-4">Please Login</h2>
          <p className="mb-4">
            You must be logged in to add items to your cart. Please log in to
            continue.
          </p>
          <div className="flex justify-between">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={goToLogin}
            >
              Go to Login
            </button>
            <button
              className="bg-gray-300 py-2 px-4 rounded"
              onClick={closeLoginPrompt}
            >
              Back
            </button>
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
