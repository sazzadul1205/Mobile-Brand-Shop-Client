import { useEffect, useState } from "react";
import Titles from "../../../Components/Titles";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AdvancedCard from "../../../Components/AdvancedCard";
import PropTypes from "prop-types";

const DesktopComponent = ({ DesktopProductsData }) => {
  // Create state to track liked items
  const [liked, setLiked] = useState(Array(8).fill(false));
  const [itemsToShow, setItemsToShow] = useState(8); // Default to show 8 items for large screens

  // Handle like click
  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index]; // Toggle the like state
    setLiked(updatedLikes);
  };

  // Helper function to update the number of items to show based on screen size
  const updateItemsToShow = () => {
    if (window.innerWidth >= 1024) {
      setItemsToShow(8); // Large screens (desktops)
    } else if (window.innerWidth >= 768) {
      setItemsToShow(6); // Tablets
    } else {
      setItemsToShow(4); // Mobile screens
    }
  };

  useEffect(() => {
    // Update the itemsToShow based on screen size on mount and when resizing
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  return (
    <div className=" bg-gradient-to-b from-green-100 to-green-300">
      <div className="max-w-[1200px] mx-auto gap-10 p-5">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-5">
          <Titles
            title={"Our Desktops"}
            subtitle={"New products with updated stocks"}
          />
          <Link to={"/Products-Desktop"}>
            <button className="py-2 px-5 font-bold rounded-full border-2 border-black hover:border-none text-black hover:text-white hover:bg-gray-500 flex items-center gap-4 mt-3 md:mt-0">
              View All <FaChevronRight />
            </button>
          </Link>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mx-2 gap-1 md:gap-4">
          {DesktopProductsData.slice(0, itemsToShow).map((mobile, index) => (
            <AdvancedCard
              data={mobile}
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

// Define PropTypes for the component
DesktopComponent.propTypes = {
  DesktopProductsData: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      condition: PropTypes.string.isRequired,
      inStock: PropTypes.bool.isRequired,
      price: PropTypes.number.isRequired,
      productType: PropTypes.string.isRequired,
      postedBy: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      weightAndDimensions: PropTypes.shape({
        height: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        depth: PropTypes.string.isRequired,
        weight: PropTypes.string.isRequired,
      }).isRequired,
      performance: PropTypes.shape({
        processor: PropTypes.string.isRequired,
        ram: PropTypes.string.isRequired,
        storage: PropTypes.string.isRequired,
        graphicsCard: PropTypes.string.isRequired,
        coolingSystem: PropTypes.string.isRequired,
      }).isRequired,
      inputsOutputs: PropTypes.shape({
        usbPorts: PropTypes.string.isRequired,
        hdmiDisplayPort: PropTypes.string.isRequired,
        ethernetPort: PropTypes.string.isRequired,
        audioInputOutput: PropTypes.string.isRequired,
        powerSupply: PropTypes.string.isRequired,
        expansionSlots: PropTypes.string.isRequired,
      }).isRequired,
      otherFeatures: PropTypes.shape({
        operatingSystem: PropTypes.string.isRequired,
        connectivity: PropTypes.string.isRequired,
        includedPeripherals: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default DesktopComponent;
