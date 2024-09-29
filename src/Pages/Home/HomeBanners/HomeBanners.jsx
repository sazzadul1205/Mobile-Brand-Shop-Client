import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const HomeBanners = ({ HomeBannerData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically switch banners every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === HomeBannerData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [HomeBannerData.length]);

  return (
    <div className="relative w-full h-[800px] pt-24">
      {/* Banner Image */}
      <img
        src={HomeBannerData[currentIndex].Link}
        alt={HomeBannerData[currentIndex].name}
        className="w-full h-[800px] transition-opacity duration-1000 ease-in-out"
      />

      {/* Optional: Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {HomeBannerData.map((banner, index) => (
          <div
            key={banner._id}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-[#30A200]" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Define prop types for the component
HomeBanners.propTypes = {
  HomeBannerData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HomeBanners;
