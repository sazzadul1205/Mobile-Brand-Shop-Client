import { useState, useEffect } from "react";

const HomeBanners = () => {
  const banners = [
    "https://i.ibb.co.com/M9d1y49/Home-Banner3.jpg",
    "https://i.ibb.co.com/27BWLdh/Home-Banner4.jpg",
    "https://i.ibb.co.com/LJCHW0F/Home-Banner1.jpg",
    "https://i.ibb.co.com/ZYCgn6L/Home-Banner2.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically switch banners every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative w-full h-[800px] pt-24">
      {/* Banner Image */}
      <img
        src={banners[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
        className="w-full h-[800px] transition-opacity duration-1000 ease-in-out"
      />

      {/* Optional: Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <div
            key={index}
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

export default HomeBanners;
