import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for type checking

const ProductPageBanner = ({ ProductBannersData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically switch ProductBannersData every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === ProductBannersData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [ProductBannersData.length]); 
  

  return (
    <div className="relative w-full overflow-hidden h-[500px]">
      {/* Banner Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {ProductBannersData.map((banner) => (
          <img
            key={banner._id} 
            src={banner.link} 
            alt={banner.name} 
            className="w-full h-[500px] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

// Prop types for type checking
ProductPageBanner.propTypes = {
  ProductBannersData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductPageBanner;
