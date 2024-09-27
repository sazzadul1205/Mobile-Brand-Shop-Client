import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import Titles from "../../../Components/Titles";
import Card from "../../../Components/Card";

// Define mobile data
const mobileData = [
  {
    brand: "Samsung",
    image: "https://i.ibb.co.com/BLnmbF4/Samsung-Galaxy-A05-464-GB.webp",
    model: "Galaxy A05",
    condition: "New",
    inStock: true,
    price: "17886.08",
    operatingSystem: "Android",
    releaseDate: "2023",
    weightDimensions: {
      height: "164.4mm",
      width: "76.8mm",
      depth: "9.1mm",
      weight: "195g",
    },
    display: {
      screenSize: "6.5 inches",
      resolution: "720 x 1600 pixels",
      displayTechnology: "PLS LCD",
      refreshRate: "60Hz",
    },
    performance: {
      processor: "MediaTek Helio G85",
      ram: "4GB",
      storageOptions: ["64GB", "Expandable up to 1TB"],
    },
    camera: {
      mainCamera: "50MP wide, 2MP depth sensor",
      frontCamera: "5MP",
      videoRecording: "1080p at 30fps",
    },
    battery: {
      batteryCapacity: "5000mAh",
      chargingSpeed: "25W fast charging",
      batteryLife: "Up to 15 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speaker: "Mono",
    },
    biometrics: "Fingerprint scanner (side-mounted), Face unlock",
    otherFeatures: {
      connectivity: "4G, Bluetooth 5.0, Wi-Fi",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer", "Proximity sensor"],
      operatingSystemVersion: "Android 13",
      colorOptions: ["Black", "Blue", "White"],
    },
  },
  {
    brand: "Samsung",
    image: "https://i.ibb.co.com/9WwXDtB/Samsung-Galaxy-A04e-332-GB.webp",
    model: "Galaxy A04e",
    condition: "New",
    inStock: true,
    price: "15485.26",
    operatingSystem: "Android",
    releaseDate: "2022",
    weightDimensions: {
      height: "164.2mm",
      width: "75.9mm",
      depth: "9.1mm",
      weight: "188g",
    },
    display: {
      screenSize: "6.5 inches",
      resolution: "720 x 1600 pixels",
      displayTechnology: "PLS LCD",
      refreshRate: "60Hz",
    },
    performance: {
      processor: "MediaTek Helio P35",
      ram: "3GB",
      storageOptions: ["32GB", "Expandable up to 1TB"],
    },
    camera: {
      mainCamera: "13MP wide, 2MP depth sensor",
      frontCamera: "5MP",
      videoRecording: "1080p at 30fps",
    },
    battery: {
      batteryCapacity: "5000mAh",
      chargingSpeed: "15W fast charging",
      batteryLife: "Up to 14 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speaker: "Mono",
    },
    biometrics: "Face unlock",
    otherFeatures: {
      connectivity: "4G, Bluetooth 5.0, Wi-Fi",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer", "Proximity sensor"],
      operatingSystemVersion: "Android 12",
      colorOptions: ["Black", "Copper", "Blue"],
    },
  },
  {
    brand: "Samsung",
    image: "https://i.ibb.co.com/7gR7yCJ/Samsung-Galaxy-A04-332-GB.webp",
    model: "Galaxy A04",
    condition: "Old",
    inStock: true,
    price: "16685.67",
    operatingSystem: "Android",
    releaseDate: "2022",
    weightDimensions: {
      height: "164.4mm",
      width: "76.3mm",
      depth: "9.1mm",
      weight: "192g",
    },
    display: {
      screenSize: "6.5 inches",
      resolution: "720 x 1600 pixels",
      displayTechnology: "PLS LCD",
      refreshRate: "60Hz",
    },
    performance: {
      processor: "Exynos 850",
      ram: "4GB",
      storageOptions: ["64GB", "Expandable up to 1TB"],
    },
    camera: {
      mainCamera: "50MP wide, 2MP depth sensor",
      frontCamera: "5MP",
      videoRecording: "1080p at 30fps",
    },
    battery: {
      batteryCapacity: "5000mAh",
      chargingSpeed: "15W fast charging",
      batteryLife: "Up to 15 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speaker: "Mono",
    },
    biometrics: "Face unlock",
    otherFeatures: {
      connectivity: "4G, Bluetooth 5.0, Wi-Fi",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer", "Proximity sensor"],
      operatingSystemVersion: "Android 12",
      colorOptions: ["Black", "Green", "Copper"],
    },
  },
  {
    brand: "Samsung",
    image: "https://i.ibb.co.com/MZx44qW/Samsung-Galaxy-M14-4-G-464-GB.webp",
    model: "Galaxy M14 4G",
    condition: "New",
    inStock: true,
    price: "23888.12",
    operatingSystem: "Android",
    releaseDate: "2023",
    weightDimensions: {
      height: "166.8mm",
      width: "77.2mm",
      depth: "9.4mm",
      weight: "206g",
    },
    display: {
      screenSize: "6.6 inches",
      resolution: "1080 x 2408 pixels",
      displayTechnology: "PLS LCD",
      refreshRate: "90Hz",
    },
    performance: {
      processor: "Exynos 1330",
      ram: "4GB",
      storageOptions: ["64GB", "Expandable up to 1TB"],
    },
    camera: {
      mainCamera: "50MP wide, 2MP macro, 2MP depth sensor",
      frontCamera: "13MP",
      videoRecording: "1080p at 30fps",
    },
    battery: {
      batteryCapacity: "6000mAh",
      chargingSpeed: "25W fast charging",
      batteryLife: "Up to 20 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speaker: "Mono",
    },
    biometrics: "Fingerprint scanner (side-mounted), Face unlock",
    otherFeatures: {
      connectivity: "4G, Bluetooth 5.2, Wi-Fi",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer", "Gyroscope", "Proximity sensor"],
      operatingSystemVersion: "Android 13",
      colorOptions: ["Navy Blue", "Light Blue", "Silver"],
    },
  },
  {
    brand: "Samsung",
    image: "https://i.ibb.co.com/d5vP0Cp/Samsung-Galaxy-A04s-464-GB.webp",
    model: "Galaxy A04s",
    condition: "New",
    inStock: true,
    price: "19086.49",
    operatingSystem: "Android",
    releaseDate: "2022",
    weightDimensions: {
      height: "164.7mm",
      width: "76.7mm",
      depth: "9.1mm",
      weight: "195g",
    },
    display: {
      screenSize: "6.5 inches",
      resolution: "720 x 1600 pixels",
      displayTechnology: "PLS LCD",
      refreshRate: "90Hz",
    },
    performance: {
      processor: "Exynos 850",
      ram: "4GB",
      storageOptions: ["64GB", "Expandable up to 1TB"],
    },
    camera: {
      mainCamera: "50MP wide, 2MP macro, 2MP depth sensor",
      frontCamera: "5MP",
      videoRecording: "1080p at 30fps",
    },
    battery: {
      batteryCapacity: "5000mAh",
      chargingSpeed: "15W fast charging",
      batteryLife: "Up to 16 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speaker: "Mono",
    },
    biometrics: "Fingerprint scanner (side-mounted), Face unlock",
    otherFeatures: {
      connectivity: "4G, Bluetooth 5.0, Wi-Fi",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer", "Proximity sensor"],
      operatingSystemVersion: "Android 12",
      colorOptions: ["Black", "White", "Green"],
    },
  },
  {
    brand: "Samsung",
    model: "Galaxy A05",
    image: "https://i.ibb.co.com/SnTZKCQ/Samsung-Galaxy-A05-6128-GB.webp",
    condition: "old",
    inStock: true,
    price: "17886.08",
    operatingSystem: "Android",
    releaseDate: "2023",
    weightDimensions: {
      height: "164.4mm",
      width: "76.8mm",
      depth: "9.1mm",
      weight: "195g",
    },
    display: {
      screenSize: "6.5 inches",
      resolution: "720 x 1600 pixels",
      displayTechnology: "PLS LCD",
      refreshRate: "60Hz",
    },
    performance: {
      processor: "MediaTek Helio G85",
      ram: "4GB",
      storageOptions: ["64GB", "Expandable up to 1TB"],
    },
    camera: {
      mainCamera: "50MP wide, 2MP depth sensor",
      frontCamera: "5MP",
      videoRecording: "1080p at 30fps",
    },
    battery: {
      batteryCapacity: "5000mAh",
      chargingSpeed: "25W fast charging",
      batteryLife: "Up to 15 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speaker: "Mono",
    },
    biometrics: "Fingerprint scanner (side-mounted), Face unlock",
    otherFeatures: {
      connectivity: "4G, Bluetooth 5.0, Wi-Fi",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer", "Proximity sensor"],
      operatingSystemVersion: "Android 13",
      colorOptions: ["Black", "Blue", "White"],
    },
  },
  {
    brand: "Samsung",
    model: "Galaxy A04s",
    image: "https://i.ibb.co.com/LhDbY6F/Samsung-Galaxy-A05s-464-GB.webp",
    condition: "New",
    inStock: true,
    price: "19086.49",
    operatingSystem: "Android",
    releaseDate: "2022",
    weightDimensions: {
      height: "164.7mm",
      width: "76.7mm",
      depth: "9.1mm",
      weight: "195g",
    },
    display: {
      screenSize: "6.5 inches",
      resolution: "720 x 1600 pixels",
      displayTechnology: "PLS LCD",
      refreshRate: "90Hz",
    },
    performance: {
      processor: "Exynos 850",
      ram: "4GB",
      storageOptions: ["64GB", "Expandable up to 1TB"],
    },
    camera: {
      mainCamera: "50MP wide, 2MP macro, 2MP depth sensor",
      frontCamera: "5MP",
      videoRecording: "1080p at 30fps",
    },
    battery: {
      batteryCapacity: "5000mAh",
      chargingSpeed: "15W fast charging",
      batteryLife: "Up to 16 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speaker: "Mono",
    },
    biometrics: "Fingerprint scanner (side-mounted), Face unlock",
    otherFeatures: {
      connectivity: "4G, Bluetooth 5.0, Wi-Fi",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer", "Proximity sensor"],
      operatingSystemVersion: "Android 12",
      colorOptions: ["Black", "White", "Green"],
    },
  },
  {
    brand: "Samsung",
    model: "Galaxy A05s",
    image: "https://i.ibb.co.com/qmJK7TM/Samsung-Galaxy-A04-464-GB.webp",
    condition: "New",
    inStock: true,
    price: "21487.30",
    operatingSystem: "Android",
    releaseDate: "2023",
    weightDimensions: {
      height: "166.7mm",
      width: "76.6mm",
      depth: "8.9mm",
      weight: "189g",
    },
    display: {
      screenSize: "6.7 inches",
      resolution: "1080 x 2400 pixels",
      displayTechnology: "PLS LCD",
      refreshRate: "90Hz",
    },
    performance: {
      processor: "Qualcomm Snapdragon 680",
      ram: "6GB",
      storageOptions: ["128GB", "Expandable up to 1TB"],
    },
    camera: {
      mainCamera: "50MP wide, 2MP macro, 2MP depth sensor",
      frontCamera: "13MP",
      videoRecording: "1080p at 30fps",
    },
    battery: {
      batteryCapacity: "5000mAh",
      chargingSpeed: "25W fast charging",
      batteryLife: "Up to 18 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speaker: "Stereo",
    },
    biometrics: "Fingerprint scanner (side-mounted), Face unlock",
    otherFeatures: {
      connectivity: "4G, Bluetooth 5.2, Wi-Fi",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer", "Proximity sensor", "Gyroscope"],
      operatingSystemVersion: "Android 13",
      colorOptions: ["Black", "Green", "White"],
    },
  },
];

const MobileSlider = () => {
  // Create state to track liked items
  const [liked, setLiked] = useState(Array(mobileData.length).fill(false));

  // Handle like click
  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index]; // Toggle the like state
    setLiked(updatedLikes);
  };

  return (
    <div className="max-w-[1200px] mx-auto gap-10">
      {/* Top */}
      <div className="flex justify-between items-center">
        <Titles
          title={"Our Mobiles"}
          subtitle={"New products with updated stocks"}
        />
        <button className="py-2 px-5 font-bold rounded-full border-2 border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 flex items-center gap-4">
          View All <FaChevronRight />
        </button>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-4 ">
        {mobileData.map((mobile, index) => (
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
  );
};

export default MobileSlider;
