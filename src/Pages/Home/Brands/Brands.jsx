import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types"; // Import PropTypes
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";

const Brands = ({ HomeBrandData }) => {
  const [slidesPerView, setSlidesPerView] = useState(5); // Default to 5 slides for large screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(3); // Mobile view
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setSlidesPerView(4); // Tablet view
      } else {
        setSlidesPerView(5); // Desktop view
      }
    };

    handleResize(); // Set the initial value on component mount
    window.addEventListener("resize", handleResize); // Update on window resize

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-green-300 to-white py-10 lg:py-24 text-center text-black">
      <div className="max-w-[1200px] mx-auto py-20">
        <h1 className="font-semibold md:text-4xl pb-5">The Brands we work with</h1>

        <Swiper
          spaceBetween={20}
          slidesPerView={slidesPerView} // Dynamically set slidesPerView based on screen size
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper py-5"
        >
          {HomeBrandData.map((brand) => (
            <SwiperSlide key={brand.id}>
              <img
                src={brand.imgUrl}
                alt={brand.name}
                className="md:w-48 h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// Define prop types for the component
Brands.propTypes = {
  HomeBrandData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Brands;
