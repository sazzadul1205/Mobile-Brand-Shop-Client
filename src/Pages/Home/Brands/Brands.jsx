import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types"; // Import PropTypes
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Brands = ({ HomeBrandData }) => {
  return (
    <div className="bg-gradient-to-b from-green-300 to-white py-24 text-center text-black">
      <div className="max-w-[1200px] mx-auto py-20">
        <h1 className="font-semibold pb-5">The Brands we work with</h1>

        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {HomeBrandData.map((brand) => (
            <SwiperSlide key={brand.id}>
              <img
                src={brand.imgUrl}
                alt={brand.name}
                className="w-48 h-auto"
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
