import { useState } from "react";
import TopSection from "../ProductsPage/TopSection/TopSection";
import AdvancedCard from "../../Components/AdvancedCard";

const DesktopData = [
  {
    brand: "Dell",
    image: "https://i.ibb.co.com/xm9kR46/Inspiron-3880.jpg",
    model: "Inspiron 3880",
    condition: "New",
    inStock: true,
    price: 95912.6,
    releaseDate: "2022",
    weightAndDimensions: {
      height: "14.80 inches",
      width: "6.30 inches",
      depth: "11.50 inches",
      weight: "13.89 pounds",
    },
    performance: {
      processor: "Intel Core i5-10400",
      ram: "16GB",
      storage: "1TB SSD",
      graphicsCard: "Intel UHD Graphics 630",
      coolingSystem: "Air cooling",
    },
    inputsOutputs: {
      usbPorts: "4x USB 3.2, 2x USB 2.0",
      hdmiDisplayPort: "HDMI 1.4",
      ethernetPort: "Yes, 1GbE",
      audioInputOutput: "Headphone jack, microphone jack",
      powerSupply: "300W, 80+ Bronze",
      expansionSlots: "1x PCIe, 2x RAM slots",
    },
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 5, Bluetooth 4.2",
      includedPeripherals: "Keyboard, Mouse",
    },
  },
  {
    brand: "HP",
    image: "https://i.ibb.co.com/Xy4xnHK/Omen-25L.jpg",
    model: "Omen 25L",
    condition: "New",
    inStock: true,
    price: 167937.08,
    releaseDate: "2023",
    weightAndDimensions: {
      height: "17.05 inches",
      width: "6.50 inches",
      depth: "15.53 inches",
      weight: "27.60 pounds",
    },
    performance: {
      processor: "AMD Ryzen 7 5800X",
      ram: "32GB",
      storage: "1TB SSD, 2TB HDD",
      graphicsCard: "NVIDIA RTX 3070",
      coolingSystem: "Liquid cooling",
    },
    inputsOutputs: {
      usbPorts: "6x USB 3.2, 2x USB-C",
      hdmiDisplayPort: "HDMI 2.1, DisplayPort 1.4",
      ethernetPort: "Yes, 2.5GbE",
      audioInputOutput: "Headphone jack, microphone jack",
      powerSupply: "750W, 80+ Gold",
      expansionSlots: "2x PCIe, 4x RAM slots",
    },
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6E, Bluetooth 5.2",
      includedPeripherals: "Keyboard, Mouse",
    },
  },
  {
    brand: "Custom-built",
    image: "https://i.ibb.co.com/FJC7zg0/Elite-Gaming-PC.jpg",
    model: "Elite Gaming PC",
    condition: "New",
    inStock: true,
    price: 360002.36,
    releaseDate: "2024",
    weightAndDimensions: {
      height: "18.30 inches",
      width: "8.60 inches",
      depth: "17.50 inches",
      weight: "30.45 pounds",
    },
    performance: {
      processor: "Intel Core i9-13900K",
      ram: "64GB",
      storage: "2TB SSD",
      graphicsCard: "NVIDIA RTX 4080",
      coolingSystem: "Liquid cooling",
    },
    inputsOutputs: {
      usbPorts: "8x USB 3.2, 2x USB-C",
      hdmiDisplayPort: "HDMI 2.1, DisplayPort 1.4",
      ethernetPort: "Yes, 10GbE",
      audioInputOutput: "Headphone jack, microphone jack",
      powerSupply: "1000W, 80+ Platinum",
      expansionSlots: "4x PCIe, 4x RAM slots",
    },
    otherFeatures: {
      operatingSystem: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, Bluetooth 5.3",
      includedPeripherals: "None",
    },
  },
  {
    brand: "Lenovo",
    image: "https://i.ibb.co.com/FJgcWw0/Think-Centre-M90a.jpg",
    model: "ThinkCentre M90a",
    condition: "New",
    inStock: true,
    price: 131924.84,
    releaseDate: "2022",
    weightAndDimensions: {
      height: "14.80 inches",
      width: "7.10 inches",
      depth: "11.40 inches",
      weight: "18.50 pounds",
    },
    performance: {
      processor: "Intel Core i7-11700",
      ram: "32GB",
      storage: "1TB SSD",
      graphicsCard: "Intel UHD Graphics 750",
      coolingSystem: "Air cooling",
    },
    inputsOutputs: {
      usbPorts: "5x USB 3.2, 1x USB-C",
      hdmiDisplayPort: "HDMI 1.4, DisplayPort 1.2",
      ethernetPort: "Yes, 1GbE",
      audioInputOutput: "Headphone jack, microphone jack",
      powerSupply: "450W, 80+ Silver",
      expansionSlots: "2x PCIe, 2x RAM slots",
    },
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.1",
      includedPeripherals: "None",
    },
  },
  {
    brand: "Acer",
    image: "https://i.ibb.co.com/yhSRQW0/Predator-Orion-5000.jpg",
    model: "Predator Orion 5000",
    condition: "New",
    inStock: true,
    price: 239961.56,
    releaseDate: "2023",
    weightAndDimensions: {
      height: "18.50 inches",
      width: "8.50 inches",
      depth: "19.80 inches",
      weight: "30.30 pounds",
    },
    performance: {
      processor: "Intel Core i7-12700KF",
      ram: "32GB",
      storage: "1TB SSD, 1TB HDD",
      graphicsCard: "NVIDIA RTX 3080",
      coolingSystem: "Liquid cooling",
    },
    inputsOutputs: {
      usbPorts: "4x USB 3.2, 4x USB-C",
      hdmiDisplayPort: "HDMI 2.1, DisplayPort 1.4",
      ethernetPort: "Yes, 2.5GbE",
      audioInputOutput: "Headphone jack, microphone jack",
      powerSupply: "850W, 80+ Gold",
      expansionSlots: "3x PCIe, 4x RAM slots",
    },
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6E, Bluetooth 5.2",
      includedPeripherals: "None",
    },
  },
  {
    brand: "ASUS",
    image: "https://i.ibb.co.com/hyTFw1r/ROG-Strix-G15.jpg",
    model: "ROG Strix G15",
    condition: "New",
    inStock: true,
    price: 203949.32,
    releaseDate: "2023",
    weightAndDimensions: {
      height: "19.20 inches",
      width: "9.60 inches",
      depth: "18.00 inches",
      weight: "28.00 pounds",
    },
    performance: {
      processor: "AMD Ryzen 9 5900X",
      ram: "32GB",
      storage: "1TB SSD",
      graphicsCard: "AMD Radeon RX 6800 XT",
      coolingSystem: "Liquid cooling",
    },
    inputsOutputs: {
      usbPorts: "5x USB 3.2, 1x USB-C",
      hdmiDisplayPort: "HDMI 2.1, DisplayPort 1.4",
      ethernetPort: "Yes, 2.5GbE",
      audioInputOutput: "Headphone jack, microphone jack",
      powerSupply: "750W, 80+ Gold",
      expansionSlots: "2x PCIe, 4x RAM slots",
    },
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6E, Bluetooth 5.2",
      includedPeripherals: "Keyboard, Mouse",
    },
  },
  {
    brand: "MSI",
    image: "https://i.ibb.co.com/2cQZ9g9/MEG-Aegis-Ti5.jpg",
    model: "MEG Aegis Ti5",
    condition: "New",
    inStock: true,
    price: 600083.96,
    releaseDate: "2024",
    weightAndDimensions: {
      height: "19.60 inches",
      width: "10.40 inches",
      depth: "20.20 inches",
      weight: "37.50 pounds",
    },
    performance: {
      processor: "Intel Core i9-13900K",
      ram: "128GB",
      storage: "2TB SSD, 4TB HDD",
      graphicsCard: "NVIDIA RTX 4090",
      coolingSystem: "Liquid cooling",
    },
    inputsOutputs: {
      usbPorts: "6x USB 3.2, 3x USB-C",
      hdmiDisplayPort: "HDMI 2.1, DisplayPort 1.4",
      ethernetPort: "Yes, 10GbE",
      audioInputOutput: "Headphone jack, microphone jack",
      powerSupply: "1000W, 80+ Platinum",
      expansionSlots: "4x PCIe, 4x RAM slots",
    },
    otherFeatures: {
      operatingSystem: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, Bluetooth 5.3",
      includedPeripherals: "None",
    },
  },
  {
    brand: "CyberPowerPC",
    image: "https://i.ibb.co.com/44CDC1L/Gamer-Xtreme-VR.jpg",
    model: "Gamer Xtreme VR",
    condition: "Used",
    inStock: true,
    price: 131924.84,
    releaseDate: "2021",
    weightAndDimensions: {
      height: "18.20 inches",
      width: "8.00 inches",
      depth: "17.60 inches",
      weight: "26.40 pounds",
    },
    performance: {
      processor: "Intel Core i7-10700F",
      ram: "16GB",
      storage: "1TB SSD",
      graphicsCard: "NVIDIA GTX 1660 Super",
      coolingSystem: "Air cooling",
    },
    inputsOutputs: {
      usbPorts: "4x USB 3.2, 2x USB 2.0",
      hdmiDisplayPort: "HDMI 1.4, DisplayPort 1.2",
      ethernetPort: "Yes, 1GbE",
      audioInputOutput: "Headphone jack, microphone jack",
      powerSupply: "500W, 80+ Bronze",
      expansionSlots: "2x PCIe, 2x RAM slots",
    },
    otherFeatures: {
      operatingSystem: "Windows 10",
      connectivity: "Wi-Fi 5, Bluetooth 4.2",
      includedPeripherals: "None",
    },
  },
];

const ProductsDesktops = () => {
  const itemsPerPage = 9;

  // Extract unique filter options from DesktopData
  const uniqueBrands = [...new Set(DesktopData.map((item) => item.brand))];
  const uniqueConditions = [
    ...new Set(DesktopData.map((item) => item.condition)),
  ];

  // States for filters and pagination
  const [filters, setFilters] = useState({
    brand: "",
    condition: "",
    priceRange: [0, 10000000],
  });
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered products based on filters
  const filteredProducts = DesktopData.filter((product) => {
    const productPrice = parseFloat(product.price);
    return (
      (filters.brand ? product.brand === filters.brand : true) &&
      (filters.condition ? product.condition === filters.condition : true) &&
      productPrice >= filters.priceRange[0] &&
      productPrice <= filters.priceRange[1]
    );
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Slice the products for the current page
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    setCurrentPage(1); // Reset to page 1 when filters change
  };

  const handlePriceRangeChange = (e, index) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = parseFloat(e.target.value) || 0;
    setFilters({
      ...filters,
      priceRange: newPriceRange,
    });
    setCurrentPage(1); // Reset to page 1 when price range changes
  };

  // Create state to track liked items
  const [liked, setLiked] = useState(Array(DesktopData.length).fill(false));

  // Handle like click
  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index]; // Toggle the like state
    setLiked(updatedLikes);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="bg-gradient-to-b from-green-500 to-white py-24 text-black">
      {/* Search and Categories */}
      <TopSection />
      <div className="text-center mb-8">
        <p className="font-bold text-3xl">View Our Tablets</p>
      </div>
      <div className="flex w-full max-w-[1200px] mx-auto">
        {/* Filter Sidebar */}
        <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-bold mb-4">Filter by:</h3>

          {/* Brand Filter */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Brand</label>
            <select
              name="brand"
              value={filters.brand}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded bg-white"
            >
              <option value="">All</option>
              {uniqueBrands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Condition Filter */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Condition</label>
            <select
              name="condition"
              value={filters.condition}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded bg-white"
            >
              <option value="">All</option>
              {uniqueConditions.map((condition, index) => (
                <option key={index} value={condition}>
                  {condition}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Price Range</label>
            <div className="flex space-x-2">
              <div>
                <label className="block mb-1">From</label>
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(e, 0)}
                  className="w-full p-2 border rounded bg-white"
                />
              </div>
              <div>
                <label className="block mb-1">To</label>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(e, 1)}
                  className="w-full p-2 border rounded bg-white"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {filters.priceRange[0]} - {filters.priceRange[1]} BDT
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-3/4 ml-6">
          {/* Pagination */}
          <div className="join py-5 flex justify-end">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`join-item btn text-lg text-white hover:text-black ${
                  index + 1 === currentPage
                    ? "btn-active bg-blue-200 hover:bg-neutral-50"
                    : "hover:bg-neutral-50"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Products */}
          <div className="grid grid-cols-3 gap-6">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product, index) => (
                <AdvancedCard
                  data={product}
                  key={index}
                  index={index}
                  liked={liked[index]}
                  toggleLike={() => toggleLike(index)}
                />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>

          {/* Pagination */}
          <div className="join py-5 flex justify-end">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`join-item btn text-lg text-white hover:text-black ${
                  index + 1 === currentPage
                    ? "btn-active bg-blue-200 hover:bg-neutral-50"
                    : "hover:bg-neutral-50"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDesktops;
