import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedProductType, setSelectedProductType] = useState("");
  const [productTypes, setProductTypes] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const axiosPublic = useAxiosPublic();

  // Fetching Products
  const {
    data: ProductsData = [],
    isLoading: ProductsIsLoading,
    error: ProductsError,
    refetch: MyCartRefetch,
  } = useQuery({
    queryKey: ["Products"],
    queryFn: () => {
      return axiosPublic.get(`/Products`).then((res) => res.data);
    },
  });

  // Fetching Brands
  const {
    data: BrandsData = [],
    isLoading: BrandsIsLoading,
    error: BrandsError,
  } = useQuery({
    queryKey: ["Brands"],
    queryFn: () => {
      return axiosPublic.get(`/Product/brands`).then((res) => res.data);
    },
  });

  // Fetching unique product types from ProductsData
  useEffect(() => {
    const uniqueProductTypes = Array.from(
      new Set(ProductsData.map((item) => item.productType))
    );
    setProductTypes(uniqueProductTypes);
    // Set initial filtered data to all products
    setFilteredData(ProductsData);
  }, [ProductsData]);

  // Function to handle filtering
  const filterData = () => {
    const filtered = ProductsData.filter((product) => {
      const matchesBrand = selectedBrand
        ? product.brand === selectedBrand
        : true;
      const matchesProductType = selectedProductType
        ? product.productType === selectedProductType
        : true;
      const matchesSearch = product.model
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesBrand && matchesProductType && matchesSearch;
    });
    setFilteredData(filtered);
  };

  // Effect to filter data whenever filters or search change
  useEffect(() => {
    filterData();
  }, [selectedBrand, selectedProductType, searchQuery, ProductsData]);

  const openModal = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_2").showModal();
  };

  const closeModal = () => {
    document.getElementById("my_modal_2").close();
    setSelectedProduct(null);
  };

  // Delete item from cart
  const handleDelete = async (itemId, itemName) => {
    try {
      const result = await showConfirmationAlert(
        "Are you sure?",
        `You are about to delete "${itemName}". This action cannot be undone.`,
        "Delete"
      );

      if (result.isConfirmed) {
        await axiosPublic.delete(`/Products/${itemId}`);
        MyCartRefetch();
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

  // Loading state
  if (ProductsIsLoading || BrandsIsLoading) {
    return <Loader />;
  }

  // Error state
  if (ProductsError || BrandsError) {
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

  return (
    <div className="bg-white ml-1">
      {/* Title */}
      <div className="px-5 py-5 text-black border-b border-black bg-gray-200">
        <p className="text-2xl font-bold text-center">Manage Products</p>
      </div>

      {/* Filters */}
      <div className="flex px-10 items-center text-black gap-5">
        {/* Search by Model */}
        <label className="input border border-black flex items-center gap-2 w-1/2 my-4 bg-white">
          <input
            type="text"
            className="grow bg-white"
            placeholder="Search by model"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="h-4 w-4 text-black" />
        </label>

        {/* Dropdown for Brand Filter */}
        <select
          className="border border-gray-300 p-2 w-1/4 bg-white"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          {BrandsData.map((brand, index) => (
            <option key={index} value={brand.brand}>
              {brand.brand}
            </option>
          ))}
        </select>

        {/* Dropdown for Product Type Filter */}
        <select
          className="border border-gray-300 p-2 w-1/4 bg-white"
          value={selectedProductType}
          onChange={(e) => setSelectedProductType(e.target.value)}
        >
          <option value="">All Product Types</option>
          {productTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <div className="overflow-x-auto px-5 py-5">
        <table className="table text-black w-full">
          <thead className="bg-gray-300 text-black font-bold">
            <tr>
              <th>Image</th>
              <th>Model</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Condition</th>
              <th>Product Type</th>
              <th>View More</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((product, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={product.image}
                    alt={product.model}
                    className="w-12 h-12"
                  />
                </td>
                <td>{product.model}</td>
                <td>
                  <div className="flex items-center">
                    {product.price}
                    <FaBangladeshiTakaSign className="inline ml-2" />
                  </div>
                </td>
                <td>{product.brand}</td>
                <td>{product.condition}</td>
                <td>{product.productType}</td>
                <td>
                  <button
                    className="bg-orange-500 hover:bg-orange-400 w-36 font-bold text-white px-5 py-2 m-1"
                    onClick={() => openModal(product)}
                  >
                    View More
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-400 w-36 font-bold text-white px-5 py-2 m-1"
                    onClick={() => handleDelete(product._id, product.model)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box bg-white max-w-5xl max-h-[800px] text-black">
            <div className="border-b border-black pb-3 flex justify-between items-center px-10">
              <p className="text-xl font-bold">View More</p>
              <p
                className="font-bold text-3xl cursor-pointer"
                onClick={closeModal}
              >
                x
              </p>
            </div>
            <div className="flex justify-between px-10 py-5 gap-5 ">
              {/* Left */}
              <div>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.model}
                  className="w-[400px]"
                />
                <h3 className="font-bold text-xl p-2 border border-gray-300">
                  {selectedProduct.brand} {selectedProduct.model}
                </h3>
                {selectedProduct.operatingSystem && (
                  <h3 className="font-medium text-xl p-2 border border-gray-300">
                    <span className="font-semibold">Operating System</span> :{" "}
                    {selectedProduct.operatingSystem}
                  </h3>
                )}
                {selectedProduct.condition && (
                  <h3 className="font-medium text-xl p-2 border border-gray-300">
                    <span className="font-semibold">Condition</span> :{" "}
                    {selectedProduct.condition}
                  </h3>
                )}
                {selectedProduct.releaseDate && (
                  <h3 className="font-medium text-xl p-2 border border-gray-300">
                    <span className="font-semibold">Release Date</span> :{" "}
                    {selectedProduct.releaseDate}
                  </h3>
                )}
                {selectedProduct.price && (
                  <p className="font-medium text-xl pt-5 flex items-center">
                    <span className="font-semibold">Price</span> :{" "}
                    {selectedProduct.price}
                    <FaBangladeshiTakaSign className="text-black text-lg ml-2" />
                  </p>
                )}
                {selectedProduct.inStock && (
                  <p className="text-green-500">In Stock</p>
                )}
              </div>

              {/* Right */}
              <div className="space-y-3">
                {/* Weight and Dimensions */}
                {selectedProduct.weightAndDimensions && (
                  <div>
                    <h4 className="font-bold text-lg py-1">
                      Weight & Dimensions:
                    </h4>
                    {selectedProduct.weightAndDimensions.height && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Height :</span>
                        {selectedProduct.weightAndDimensions.height}
                      </p>
                    )}
                    {selectedProduct.weightAndDimensions.width && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Width :</span>
                        {selectedProduct.weightAndDimensions.width}
                      </p>
                    )}
                    {selectedProduct.weightAndDimensions.depth && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Depth :</span>
                        {selectedProduct.weightAndDimensions.depth}
                      </p>
                    )}
                    {selectedProduct.weightAndDimensions.weight && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Weight :</span>
                        {selectedProduct.weightAndDimensions.weight}
                      </p>
                    )}
                  </div>
                )}

                {/* Display */}
                {selectedProduct.display && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Display :</h4>
                    {selectedProduct.display.screenSize && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Screen Size :</span>
                        {selectedProduct.display.screenSize}
                      </p>
                    )}
                    {selectedProduct.display.resolution && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Resolution :</span>
                        {selectedProduct.display.resolution}
                      </p>
                    )}
                    {selectedProduct.display.displayType && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Display Type :</span>
                        {selectedProduct.display.displayType}
                      </p>
                    )}
                    {selectedProduct.display.displayTechnology && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Display Technology :
                        </span>
                        {selectedProduct.display.displayTechnology}
                      </p>
                    )}
                    {selectedProduct.display.touchScreen && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Touch Screen :</span>
                        {selectedProduct.display.touchScreen}
                      </p>
                    )}
                    {selectedProduct.display.refreshRate && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Refresh Rate :</span>
                        {selectedProduct.display.refreshRate}
                      </p>
                    )}
                  </div>
                )}

                {/* Performance */}
                {selectedProduct.performance && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Performance:</h4>
                    {selectedProduct.performance.processor && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Processor :</span>
                        {selectedProduct.performance.processor}
                      </p>
                    )}
                    {selectedProduct.performance.ram && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">RAM :</span>
                        {selectedProduct.performance.ram}
                      </p>
                    )}
                    {selectedProduct.performance.storage && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Storage :</span>
                        {selectedProduct.performance.storage}
                      </p>
                    )}
                    {selectedProduct.performance.storageOptions && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Storage Options :</span>
                        {selectedProduct.performance.storageOptions}
                      </p>
                    )}
                    {selectedProduct.performance.graphicsCard && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Graphics Card :</span>
                        {selectedProduct.performance.graphicsCard}
                      </p>
                    )}
                    {selectedProduct.performance.coolingSystem && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Cooling System :</span>
                        {selectedProduct.performance.coolingSystem}
                      </p>
                    )}
                  </div>
                )}

                {/* camera */}
                {selectedProduct.camera && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Camera:</h4>
                    {selectedProduct.camera.rearCamera && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Rear Camera :</span>
                        {selectedProduct.camera.rearCamera}
                      </p>
                    )}
                    {selectedProduct.camera.mainCamera && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Main Camera :</span>
                        {selectedProduct.camera.mainCamera}
                      </p>
                    )}
                    {selectedProduct.camera.frontCamera && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Front Camera :</span>
                        {selectedProduct.camera.frontCamera}
                      </p>
                    )}
                    {selectedProduct.camera.videoRecording && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Video Recording :</span>
                        {selectedProduct.camera.videoRecording}
                      </p>
                    )}
                  </div>
                )}

                {/* Battery */}
                {selectedProduct.battery && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Battery:</h4>
                    {selectedProduct.battery.batteryCapacity && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Battery Capacity :
                        </span>
                        {selectedProduct.battery.batteryCapacity}
                      </p>
                    )}
                    {selectedProduct.battery.chargingSpeed && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Charging Speed :</span>
                        {selectedProduct.battery.chargingSpeed}
                      </p>
                    )}
                    {selectedProduct.battery.batteryLife && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Battery Life :</span>
                        {selectedProduct.battery.batteryLife}
                      </p>
                    )}
                  </div>
                )}

                {/* Inputs / Outputs */}
                {selectedProduct.inputsOutputs && (
                  <div>
                    <h4 className="font-bold text-lg py-1">
                      Inputs / Outputs:
                    </h4>
                    {selectedProduct.inputsOutputs.usbPorts && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">USB Ports:</span>
                        {selectedProduct.inputsOutputs.usbPorts}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.hdmiDisplayPort && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          HDMI Display Port :
                        </span>
                        {selectedProduct.inputsOutputs.hdmiDisplayPort}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.ethernetPort && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Ethernet Port :</span>
                        {selectedProduct.inputsOutputs.ethernetPort}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.thunderboltPorts && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Thunderbolt Ports:
                        </span>
                        {selectedProduct.inputsOutputs.thunderboltPorts}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.audioInputOutput && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Audio Input / Output :
                        </span>
                        {selectedProduct.inputsOutputs.audioInputOutput}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.powerSupply && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Power Supply :</span>
                        {selectedProduct.inputsOutputs.powerSupply}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.expansionSlots && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Expansion Slots :</span>
                        {selectedProduct.inputsOutputs.expansionSlots}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.chargingPort && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Charging Port :</span>
                        {selectedProduct.inputsOutputs.chargingPort}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.simCardType && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Sim Card Type :</span>
                        {selectedProduct.inputsOutputs.simCardType}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.simCardSlot && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Sim Card Slot :</span>
                        {selectedProduct.inputsOutputs.simCardSlot}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.headphoneJack && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Headphone Jack :</span>
                        {selectedProduct.inputsOutputs.headphoneJack}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.speakers && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Speakers :</span>
                        {selectedProduct.inputsOutputs.speakers}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.biometrics && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Biometrics :</span>
                        {selectedProduct.inputsOutputs.biometrics}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.sdCardSlot && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">SDCardSlot :</span>
                        {selectedProduct.inputsOutputs.sdCardSlot}
                      </p>
                    )}
                  </div>
                )}

                {/* Other Features */}
                {selectedProduct.biometrics && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Biometrics:</h4>
                    {selectedProduct.biometrics && (
                      <p className="border border-gray-400 py-2 px-5 ">
                        {selectedProduct.biometrics}
                      </p>
                    )}
                  </div>
                )}

                {/* Keyboard */}
                {selectedProduct.keyboard && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Keyboard :</h4>
                    {selectedProduct.keyboard && (
                      <p className="border border-gray-400 py-2 px-5 ">
                        {selectedProduct.keyboard}
                      </p>
                    )}
                  </div>
                )}

                {/* TrackpadMouseInput */}
                {selectedProduct.trackpadMouseInput && (
                  <div>
                    <h4 className="font-bold text-lg py-1">
                      Track Pad Mouse Input :
                    </h4>
                    {selectedProduct.trackpadMouseInput && (
                      <p className="border border-gray-400 py-2 px-5 ">
                        {selectedProduct.trackpadMouseInput}
                      </p>
                    )}
                  </div>
                )}

                {/* Other Features */}
                {selectedProduct.otherFeatures && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Other Features:</h4>
                    {selectedProduct.otherFeatures.operatingSystem && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Operating System :
                        </span>
                        {selectedProduct.otherFeatures.operatingSystem}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.connectivity && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Connectivity :</span>
                        {selectedProduct.otherFeatures.connectivity}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.includedPeripherals && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Included Peripherals :
                        </span>
                        {selectedProduct.otherFeatures.includedPeripherals}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.accessoriesSupport && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Accessories Support :
                        </span>
                        {selectedProduct.otherFeatures.accessoriesSupport}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.webcam && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Webcam :</span>
                        {selectedProduct.otherFeatures.webcam}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.waterDustResistance && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Water Dust Resistance :
                        </span>
                        {selectedProduct.otherFeatures.waterDustResistance}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.speakers && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Speakers :</span>
                        {selectedProduct.otherFeatures.speakers}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.colorOptions && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">colorOptions :</span>
                        {selectedProduct.otherFeatures.colorOptions}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.operatingSystemVersion && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Operating System Version :
                        </span>
                        {selectedProduct.otherFeatures.operatingSystemVersion}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.sensors && (
                      <div className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Sensors :</span>
                        <ul className="flex">
                          {selectedProduct.otherFeatures.sensors.map(
                            (color, index) => (
                              <li className="mr-2 flex" key={index}>
                                {color},
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                    {selectedProduct.otherFeatures.colorOptions && (
                      <div className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Color Options :</span>
                        <ul className="flex">
                          {selectedProduct.otherFeatures.colorOptions.map(
                            (color, index) => (
                              <li className="mr-2 flex" key={index}>
                                {color},
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ManageProducts;

// Helper functions for alerts
const showConfirmationAlert = (title, text, confirmButtonText) => {
  return Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText: "Cancel",
  });
};

const showSuccessAlert = (title, text) => {
  Swal.fire({
    title,
    text,
    icon: "success",
  });
};

const showErrorAlert = (title, text) => {
  Swal.fire({
    title,
    text,
    icon: "error",
  });
};
