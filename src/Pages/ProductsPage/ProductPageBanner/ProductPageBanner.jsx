import { useEffect, useState } from "react";

const ProductPageBanner = () => {
  // Define the banner URLs directly in the array
  const banners = [
    "https://i.ibb.co/5nxwWnS/PB1.png",
    "https://i.ibb.co/XJNG2Bb/PB2.png",
    "https://i.ibb.co/S7DHBn4/PB3.png",
    "https://i.ibb.co/1GSHvVj/PB4.png",
    "https://i.ibb.co/5GpH7KC/PB5.png",
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
    <div className="relative w-full overflow-hidden h-[500px]">
      {/* Banner Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            className="w-full h-[500px] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPageBanner;
