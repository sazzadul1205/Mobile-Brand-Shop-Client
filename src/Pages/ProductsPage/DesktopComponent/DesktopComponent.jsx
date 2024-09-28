import { useState } from "react";
import Titles from "../../../Components/Titles";
import { FaChevronRight } from "react-icons/fa6";
import Card from "../../../Components/Card";
import { Link } from "react-router-dom";

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

const DesktopComponent = () => {
  // Create state to track liked items
  const [liked, setLiked] = useState(Array(DesktopData.length).fill(false));

  // Handle like click
  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index]; // Toggle the like state
    setLiked(updatedLikes);
  };

  return (
    <div className=" bg-gradient-to-b from-green-100 to-green-300">
      <div className="max-w-[1200px] mx-auto gap-10">
        {/* Top */}
        <div className="flex justify-between items-center">
          <Titles
            title={"Our Desktops"}
            subtitle={"New products with updated stocks"}
          />
          <Link to={"/Products-Desktop"}>
            <button className="py-2 px-5 font-bold rounded-full border-2 border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 flex items-center gap-4">
              View All <FaChevronRight />
            </button>
          </Link>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-4 ">
          {DesktopData.map((mobile, index) => (
            <Card
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

export default DesktopComponent;
