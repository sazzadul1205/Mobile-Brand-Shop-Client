import { FaChevronRight } from "react-icons/fa6";
import Titles from "../../../Components/Titles";
import Card from "../../../Components/Card";
import { useState } from "react";

const TabletData = [
  {
    brand: "Apple",
    image: "https://i.ibb.co.com/fdNJX8Z/i-Pad-Air-5th-Gen.jpg",
    model: "iPad Air 5th Gen",
    condition: "New",
    inStock: true,
    price: 71904.44,
    operatingSystem: "iPadOS",
    weightAndDimensions: {
      height: "9.74 inches",
      width: "7.02 inches",
      depth: "0.24 inches",
      weight: "1.02 pounds",
    },
    display: {
      screenSize: "10.9 inches",
      resolution: "2360x1640 pixels",
      displayType: "LCD",
      refreshRate: "60Hz",
    },
    performance: {
      processor: "A15 Bionic",
      ram: "6GB",
      storageOptions: "256GB",
    },
    camera: {
      rearCamera: "12MP wide",
      frontCamera: "12MP ultra-wide",
      videoRecording: "4K recording at 30fps",
    },
    battery: {
      batteryLife: "10 hours",
      chargingSpeed: "18W fast charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      simCardSlot: "No",
      headphoneJack: "No",
      speakers: "Stereo speakers",
      biometrics: "Touch ID",
    },
    otherFeatures: {
      connectivity: "Wi-Fi 6, Bluetooth 5.0",
      accessoriesSupport: "Apple Pencil 2, Smart Keyboard",
      operatingSystemVersion: "iPadOS 16",
      colorOptions: "Space Gray, Blue, Pink",
    },
  },
  {
    brand: "Samsung",
    image: "https://i.ibb.co.com/xCtDZ4t/Galaxy-Tab-S8.jpg",
    model: "Galaxy Tab S8",
    condition: "New",
    inStock: true,
    price: 83908.52,
    operatingSystem: "Android",
    weightAndDimensions: {
      height: "9.99 inches",
      width: "6.51 inches",
      depth: "0.25 inches",
      weight: "1.10 pounds",
    },
    display: {
      screenSize: "11 inches",
      resolution: "2560x1600 pixels",
      displayType: "AMOLED",
      refreshRate: "120Hz",
    },
    performance: {
      processor: "Snapdragon 8 Gen 1",
      ram: "8GB",
      storageOptions: "128GB, expandable via microSD",
    },
    camera: {
      rearCamera: "13MP wide, 6MP ultra-wide",
      frontCamera: "12MP ultra-wide",
      videoRecording: "4K recording at 30fps",
    },
    battery: {
      batteryLife: "12 hours",
      chargingSpeed: "45W fast charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      simCardSlot: "Yes",
      headphoneJack: "No",
      speakers: "Stereo speakers",
      biometrics: "Face Recognition, Fingerprint Scanner",
    },
    otherFeatures: {
      connectivity: "Wi-Fi 6E, Bluetooth 5.2, 5G",
      accessoriesSupport: "S Pen, Keyboard Cover",
      operatingSystemVersion: "Android 13",
      colorOptions: "Graphite, Silver, Pink Gold",
    },
  },
  {
    brand: "Apple",
    image: "https://i.ibb.co.com/G7wD8HR/i-Pad-Pro-11-inch-3rd-Gen.jpg",
    model: "iPad Pro 11-inch (3rd Gen)",
    condition: "Refurbished",
    inStock: true,
    price: 89910.56,
    operatingSystem: "iPadOS",
    weightAndDimensions: {
      height: "9.74 inches",
      width: "7.02 inches",
      depth: "0.23 inches",
      weight: "1.03 pounds",
    },
    display: {
      screenSize: "11 inches",
      resolution: "2388x1668 pixels",
      displayType: "Liquid Retina",
      refreshRate: "120Hz",
    },
    performance: {
      processor: "M1 chip",
      ram: "8GB",
      storageOptions: "256GB",
    },
    camera: {
      rearCamera: "12MP wide, 10MP ultra-wide",
      frontCamera: "12MP TrueDepth",
      videoRecording: "4K recording at 60fps",
    },
    battery: {
      batteryLife: "10 hours",
      chargingSpeed: "20W fast charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      simCardSlot: "Yes",
      headphoneJack: "No",
      speakers: "Quad speakers",
      biometrics: "Face ID",
    },
    otherFeatures: {
      connectivity: "Wi-Fi 6, Bluetooth 5.0",
      accessoriesSupport: "Apple Pencil 2, Magic Keyboard",
      operatingSystemVersion: "iPadOS 16",
      colorOptions: "Space Gray, Silver",
    },
  },
  {
    brand: "Samsung",
    image: "https://i.ibb.co.com/LYx6xQS/Galaxy-Tab-A8.jpg",
    model: "Galaxy Tab A8",
    condition: "Used",
    inStock: true,
    price: 35892.2,
    operatingSystem: "Android",
    weightAndDimensions: {
      height: "9.72 inches",
      width: "6.37 inches",
      depth: "0.28 inches",
      weight: "1.12 pounds",
    },
    display: {
      screenSize: "10.5 inches",
      resolution: "1920x1200 pixels",
      displayType: "TFT",
      refreshRate: "60Hz",
    },
    performance: {
      processor: "Unisoc T618",
      ram: "4GB",
      storageOptions: "64GB, expandable via microSD",
    },
    camera: {
      rearCamera: "8MP",
      frontCamera: "5MP",
      videoRecording: "1080p recording",
    },
    battery: {
      batteryLife: "8 hours",
      chargingSpeed: "15W fast charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      simCardSlot: "No",
      headphoneJack: "Yes",
      speakers: "Dual speakers",
      biometrics: "None",
    },
    otherFeatures: {
      connectivity: "Wi-Fi 5, Bluetooth 5.0",
      accessoriesSupport: "None",
      operatingSystemVersion: "Android 12",
      colorOptions: "Gray, Silver",
    },
  },
  {
    brand: "Microsoft",
    image: "https://i.ibb.co.com/GQDsD3J/Surface-Go-3.jpg",
    model: "Surface Go 3",
    condition: "New",
    inStock: true,
    price: 59900.36,
    operatingSystem: "Windows 11",
    weightAndDimensions: {
      height: "9.65 inches",
      width: "6.90 inches",
      depth: "0.33 inches",
      weight: "1.20 pounds",
    },
    display: {
      screenSize: "10.5 inches",
      resolution: "1920x1280 pixels",
      displayType: "PixelSense",
      refreshRate: "60Hz",
    },
    performance: {
      processor: "Intel Pentium Gold",
      ram: "4GB",
      storageOptions: "128GB",
    },
    camera: {
      rearCamera: "8MP",
      frontCamera: "5MP",
      videoRecording: "1080p recording",
    },
    battery: {
      batteryLife: "11 hours",
      chargingSpeed: "20W fast charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      simCardSlot: "No",
      headphoneJack: "Yes",
      speakers: "Dual speakers",
      biometrics: "Windows Hello",
    },
    otherFeatures: {
      connectivity: "Wi-Fi 6, Bluetooth 5.1",
      accessoriesSupport: "Surface Pen, Surface Type Cover",
      operatingSystemVersion: "Windows 11",
      colorOptions: "Platinum",
    },
  },
  {
    brand: "Lenovo",
    image: "https://i.ibb.co.com/Qc9cXL5/Tab-P11-Pro-Gen-2.jpg",
    model: "Tab P11 Pro Gen 2",
    condition: "New",
    inStock: true,
    price: 59900.36,
    operatingSystem: "Android",
    weightAndDimensions: {
      height: "10.43 inches",
      width: "6.67 inches",
      depth: "0.26 inches",
      weight: "1.06 pounds",
    },
    display: {
      screenSize: "11.2 inches",
      resolution: "2560x1536 pixels",
      displayType: "OLED",
      refreshRate: "120Hz",
    },
    performance: {
      processor: "MediaTek Kompanio 1300T",
      ram: "6GB",
      storageOptions: "128GB, expandable via microSD",
    },
    camera: {
      rearCamera: "13MP",
      frontCamera: "8MP",
      videoRecording: "1080p recording",
    },
    battery: {
      batteryLife: "12 hours",
      chargingSpeed: "30W fast charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      simCardSlot: "Yes",
      headphoneJack: "No",
      speakers: "Quad speakers",
      biometrics: "Fingerprint Scanner",
    },
    otherFeatures: {
      connectivity: "Wi-Fi 6, Bluetooth 5.2",
      accessoriesSupport: "Precision Pen, Keyboard Pack",
      operatingSystemVersion: "Android 12",
      colorOptions: "Storm Grey, Oat",
    },
  },
  {
    brand: "Amazon",
    image: "https://i.ibb.co.com/4MSsFsy/Fire-HD-10.jpg",
    model: "Fire HD 10",
    condition: "New",
    inStock: true,
    price: 17886.08,
    operatingSystem: "Fire OS",
    weightAndDimensions: {
      height: "9.73 inches",
      width: "6.53 inches",
      depth: "0.36 inches",
      weight: "1.03 pounds",
    },
    display: {
      screenSize: "10.1 inches",
      resolution: "1920x1200 pixels",
      displayType: "LCD",
      refreshRate: "60Hz",
    },
    performance: {
      processor: "Octa-core 2.0 GHz",
      ram: "3GB",
      storageOptions: "64GB, expandable via microSD",
    },
    camera: {
      rearCamera: "5MP",
      frontCamera: "2MP",
      videoRecording: "720p recording",
    },
    battery: {
      batteryLife: "12 hours",
      chargingSpeed: "15W fast charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      simCardSlot: "No",
      headphoneJack: "Yes",
      speakers: "Dual speakers",
      biometrics: "None",
    },
    otherFeatures: {
      connectivity: "Wi-Fi 5, Bluetooth 4.1",
      accessoriesSupport: "None",
      operatingSystemVersion: "Fire OS 7",
      colorOptions: "Black, Blue, Plum",
    },
  },
  {
    brand: "Huawei",
    image: "https://i.ibb.co.com/v196hJ7/Mate-Pad-Pro-12-6.jpg",
    model: "MatePad Pro 12.6",
    condition: "New",
    inStock: true,
    price: 95912.6,
    operatingSystem: "HarmonyOS",
    weightAndDimensions: {
      height: "11.57 inches",
      width: "7.60 inches",
      depth: "0.25 inches",
      weight: "1.36 pounds",
    },
    display: {
      screenSize: "12.6 inches",
      resolution: "2560x1600 pixels",
      displayType: "OLED",
      refreshRate: "60Hz",
    },
    performance: {
      processor: "Kirin 9000E",
      ram: "8GB",
      storageOptions: "256GB",
    },
    camera: {
      rearCamera: "13MP, 8MP ultra-wide",
      frontCamera: "8MP",
      videoRecording: "4K recording",
    },
    battery: {
      batteryLife: "14 hours",
      chargingSpeed: "40W fast charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      simCardSlot: "Yes",
      headphoneJack: "No",
      speakers: "Quad speakers",
      biometrics: "Face Recognition",
    },
    otherFeatures: {
      connectivity: "Wi-Fi 6, Bluetooth 5.2",
      accessoriesSupport: "M-Pencil, Smart Magnetic Keyboard",
      operatingSystemVersion: "HarmonyOS 2.0",
      colorOptions: "Midnight Grey",
    },
  },
];

const TabletSlider = () => {
  // Create state to track liked items
  const [liked, setLiked] = useState(Array(TabletData.length).fill(false));

  // Handle like click
  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index]; // Toggle the like state
    setLiked(updatedLikes);
  };
  return (
    <div className="max-w-[1200px] mx-auto gap-10 mt-10">
      {/* Top */}
      <div className="flex justify-between items-center">
        <Titles
          title={"Our Tablets"}
          subtitle={"New products with updated stocks"}
        />
        <button className="py-2 px-5 font-bold rounded-full border-2 border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 flex items-center gap-4">
          View All <FaChevronRight />
        </button>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-4 ">
        {TabletData.map((data, index) => (
          <Card
            data={data}
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

export default TabletSlider;
