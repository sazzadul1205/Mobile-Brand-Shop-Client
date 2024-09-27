// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Brands = () => {
  // JSON data array for brand logos
  const brandData = [
    {
      id: 1,
      name: "Apple",
      imgUrl: "https://i.ibb.co.com/hdZFVDx/Apple.png",
    },
    {
      id: 2,
      name: "Asus",
      imgUrl: "https://i.ibb.co.com/Ssgs48w/Asus.png",
    },
    {
      id: 3,
      name: "Google",
      imgUrl: "https://i.ibb.co.com/4FhNXw9/Google.png",
    },
    {
      id: 4,
      name: "Nokia",
      imgUrl: "https://i.ibb.co.com/rtRkswf/Nokia.png",
    },
    {
      id: 5,
      name: "OnePlus",
      imgUrl: "https://i.ibb.co.com/H4swvBb/OnePlus.png",
    },
    {
      id: 6,
      name: "Oppo",
      imgUrl: "https://i.ibb.co.com/8KG5yjQ/Oppo.png",
    },
    {
      id: 7,
      name: "Samsung",
      imgUrl: "https://i.ibb.co.com/hVTCNNW/Samsung.png",
    },
    {
      id: 8,
      name: "Vivo",
      imgUrl: "https://i.ibb.co.com/j4Vty0F/Vivo.png",
    },
    {
      id: 9,
      name: "Xiaomi",
      imgUrl: "https://i.ibb.co.com/ZfRw7qF/Xiaomi.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-300 to-white py-24 text-center text-black">
      <div className="max-w-[1200px] mx-auto">
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
          {brandData.map((brand) => (
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

export default Brands;
