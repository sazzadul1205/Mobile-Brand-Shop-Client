import { useState } from "react";
import Titles from "../../../Components/Titles";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AdvancedCard from "../../../Components/AdvancedCard";
import PropTypes from "prop-types"; // Import PropTypes

const LaptopComponent = ({ LaptopProductsData }) => {
  // Create state to track liked items
  const [liked, setLiked] = useState(Array(8).fill(false));

  // Handle like click
  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index]; // Toggle the like state
    setLiked(updatedLikes);
  };

  return (
    <div className="bg-gradient-to-b from-green-100 to-green-300">
      <div className="max-w-[1200px] mx-auto gap-10">
        {/* Top */}
        <div className="flex justify-between items-center px-5">
          <Titles
            title={"Our Laptops"}
            subtitle={"New products with updated stocks"}
          />
          <Link to={"/Products-Laptop"}>
            <button className="py-2 px-5 font-bold rounded-full border-2 border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 flex items-center gap-4">
              View All <FaChevronRight />
            </button>
          </Link>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-4 mx-2 gap-1">
          {LaptopProductsData.slice(0, 8).map((data, index) => (
            <AdvancedCard
              data={data}
              key={index}
              index={index}
              liked={liked[index]} // Pass the liked state for the current card
              toggleLike={toggleLike} // Pass the toggleLike function
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for LaptopComponent
LaptopComponent.propTypes = {
  LaptopProductsData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      condition: PropTypes.string.isRequired,
      inStock: PropTypes.bool.isRequired,
      price: PropTypes.string.isRequired,
      operatingSystem: PropTypes.string.isRequired,
      productType: PropTypes.string.isRequired,
      postedBy: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      weightAndDimensions: PropTypes.shape({
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
        speakers: PropTypes.string.isRequired,
      }).isRequired,
      biometrics: PropTypes.string.isRequired,
      otherFeatures: PropTypes.shape({
        connectivity: PropTypes.string.isRequired,
        waterDustResistance: PropTypes.string.isRequired,
        sensors: PropTypes.arrayOf(PropTypes.string).isRequired,
        operatingSystemVersion: PropTypes.string.isRequired,
        colorOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default LaptopComponent;
