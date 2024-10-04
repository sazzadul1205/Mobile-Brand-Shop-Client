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
    <div className="w-full h-[400px] lg:h-[800px] pt-20 lg:pt-24">
      {/* Banner Image */}
      <img
        src={HomeBannerData[currentIndex].Link}
        alt={HomeBannerData[currentIndex].name}
        className="w-full h-[400px] lg:h-[800px] transition-opacity duration-1000 ease-in-out"
      />

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
