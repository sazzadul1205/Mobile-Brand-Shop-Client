import { FaChevronRight } from "react-icons/fa6";
import Titles from "../../../Components/Titles";
import Card from "../../../Components/Card";
import { useState } from "react";

const LaptopData = [
  {
    Brand: "Apple",
    image: "https://i.ibb.co.com/PchFBnL/Mac-Book-Air-M2.jpg",
    model: "MacBook Air M2",
    Condition: "New",
    inStock: true,
    price: 119920.76,
    ReleaseDate: "2022",
    Dimensions: {
      Height: "0.41 inches",
      Width: "11.97 inches",
      Depth: "8.36 inches",
      Weight: "2.7 lbs",
    },
    Display: {
      ScreenSize: "13.6 inches",
      Resolution: "2560x1664",
      DisplayType: "Retina",
      Touchscreen: "No",
    },
    Performance: {
      Processor: "Apple M2",
      RAM: "8GB",
      Storage: "256GB SSD",
      GraphicsCard: "Integrated Apple GPU",
    },
    Battery: {
      BatteryLife: "Up to 18 hours",
      BatteryCapacity: "52.6 Wh",
      ChargingSpeed: "30W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "MagSafe 3",
      USBPorts: "2x USB 4",
      HDMIPort: "No",
      HeadphoneJack: "Yes",
      SDCardSlot: "No",
      EthernetPort: "No",
      ThunderboltPorts: "2x Thunderbolt 4",
    },
    Keyboard: "Backlit, Magic Keyboard",
    TrackpadMouseInput: "Large Force Touch trackpad",
    Biometrics: "Touch ID",
    OtherFeatures: {
      OperatingSystem: "macOS",
      Connectivity: "Wi-Fi 6E, Bluetooth 5.0",
      Webcam: "720p",
      Speakers: "Stereo with wide stereo sound",
      ColorOptions: ["Silver", "Space Grey", "Midnight"],
    },
  },
  {
    Brand: "Dell",
    image: "https://i.ibb.co.com/wMqqCXY/XPS-15.jpg",
    model: "XPS 15",
    Condition: "New",
    inStock: true,
    price: 191945.24,
    ReleaseDate: "2023",
    Dimensions: {
      Height: "0.71 inches",
      Width: "13.57 inches",
      Depth: "9.06 inches",
      Weight: "4.2 lbs",
    },
    Display: {
      ScreenSize: "15.6 inches",
      Resolution: "1920x1200",
      DisplayType: "IPS",
      Touchscreen: "Yes",
    },
    Performance: {
      Processor: "Intel Core i7-13700H",
      RAM: "16GB",
      Storage: "512GB SSD",
      GraphicsCard: "NVIDIA GeForce RTX 4050",
    },
    Battery: {
      BatteryLife: "Up to 12 hours",
      BatteryCapacity: "86 Wh",
      ChargingSpeed: "130W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "2x USB 3.2, 1x USB-C",
      HDMIPort: "Yes",
      HeadphoneJack: "Yes",
      SDCardSlot: "Yes",
      EthernetPort: "No",
      ThunderboltPorts: "2x Thunderbolt 4",
    },
    Keyboard: "Backlit, full-size keyboard",
    TrackpadMouseInput: "Precision touchpad",
    Biometrics: "Fingerprint scanner",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6E, Bluetooth 5.2",
      Webcam: "720p",
      Speakers: "Waves MaxxAudio Pro",
      ColorOptions: ["Platinum Silver", "Frost"],
    },
  },
  {
    Brand: "HP",
    image: "https://i.ibb.co.com/vPbq7TZ/Spectre-x360.jpg",
    model: "Spectre x360",
    Condition: "Refurbished",
    inStock: true,
    price: 143928.92,
    ReleaseDate: "2022",
    Dimensions: {
      Height: "0.67 inches",
      Width: "13.99 inches",
      Depth: "8.67 inches",
      Weight: "3.01 lbs",
    },
    Display: {
      ScreenSize: "13.5 inches",
      Resolution: "3000x2000",
      DisplayType: "OLED",
      Touchscreen: "Yes",
    },
    Performance: {
      Processor: "Intel Core i7-1260P",
      RAM: "16GB",
      Storage: "1TB SSD",
      GraphicsCard: "Integrated Intel Iris Xe",
    },
    Battery: {
      BatteryLife: "Up to 15 hours",
      BatteryCapacity: "66 Wh",
      ChargingSpeed: "65W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "2x USB-C, 1x USB-A",
      HDMIPort: "No",
      HeadphoneJack: "Yes",
      SDCardSlot: "Yes",
      EthernetPort: "No",
      ThunderboltPorts: "2x Thunderbolt 4",
    },
    Keyboard: "Backlit, full-size keyboard",
    TrackpadMouseInput: "Precision touchpad",
    Biometrics: "Fingerprint scanner, Windows Hello",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6, Bluetooth 5.0",
      Webcam: "720p",
      Speakers: "Bang & Olufsen",
      ColorOptions: ["Nightfall Black", "Silver"],
    },
  },
  {
    Brand: "Lenovo",
    image: "https://i.ibb.co.com/64LJCBJ/Think-Pad-X1-Carbon-Gen-10.jpg",
    model: "ThinkPad X1 Carbon Gen 10",
    Condition: "New",
    inStock: true,
    price: 209951.36,
    ReleaseDate: "2023",
    Dimensions: {
      Height: "0.59 inches",
      Width: "12.7 inches",
      Depth: "8.5 inches",
      Weight: "2.48 lbs",
    },
    Display: {
      ScreenSize: "14 inches",
      Resolution: "1920x1200",
      DisplayType: "IPS",
      Touchscreen: "Optional",
    },
    Performance: {
      Processor: "Intel Core i7-1260P",
      RAM: "16GB",
      Storage: "1TB SSD",
      GraphicsCard: "Integrated Intel Iris Xe",
    },
    Battery: {
      BatteryLife: "Up to 15 hours",
      BatteryCapacity: "57 Wh",
      ChargingSpeed: "65W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "2x USB-A, 2x USB-C",
      HDMIPort: "No",
      HeadphoneJack: "Yes",
      SDCardSlot: "Yes",
      EthernetPort: "No",
      ThunderboltPorts: "2x Thunderbolt 4",
    },
    Keyboard: "Backlit, spill-resistant keyboard",
    TrackpadMouseInput: "Precision touchpad",
    Biometrics: "Fingerprint reader, IR camera for Windows Hello",
    OtherFeatures: {
      OperatingSystem: "Windows 11 Pro",
      Connectivity: "Wi-Fi 6E, Bluetooth 5.2",
      Webcam: "1080p",
      Speakers: "Dolby Audio",
      ColorOptions: ["Black"],
    },
  },
  {
    Brand: "Asus",
    image: "https://i.ibb.co.com/rG1q23r/ROG-Zephyrus-G14.jpg",
    model: "ROG Zephyrus G14",
    Condition: "New",
    inStock: true,
    price: 179941.16,
    ReleaseDate: "2023",
    Dimensions: {
      Height: "0.70 inches",
      Width: "12.76 inches",
      Depth: "8.74 inches",
      Weight: "3.64 lbs",
    },
    Display: {
      ScreenSize: "14 inches",
      Resolution: "2560x1600",
      DisplayType: "IPS",
      Touchscreen: "No",
    },
    Performance: {
      Processor: "AMD Ryzen 9 7940HS",
      RAM: "16GB",
      Storage: "1TB SSD",
      GraphicsCard: "NVIDIA GeForce RTX 4060",
    },
    Battery: {
      BatteryLife: "Up to 10 hours",
      BatteryCapacity: "76 Wh",
      ChargingSpeed: "100W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "2x USB-C, 1x USB-A",
      HDMIPort: "Yes",
      HeadphoneJack: "Yes",
      SDCardSlot: "No",
      EthernetPort: "No",
      ThunderboltPorts: "1x Thunderbolt 4",
    },
    Keyboard: "Backlit, RGB keyboard",
    TrackpadMouseInput: "Precision touchpad",
    Biometrics: "None",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6E, Bluetooth 5.1",
      Webcam: "720p",
      Speakers: "Dolby Atmos",
      ColorOptions: ["Moonlight White", "Eclipse Grey"],
    },
  },
  {
    Brand: "Microsoft",
    image: "https://i.ibb.co.com/Z1y9NjT/Surface-Laptop-5.jpg",
    model: "Surface Laptop 5",
    Condition: "New",
    inStock: true,
    price: 155933.0,
    ReleaseDate: "2022",
    Dimensions: {
      Height: "0.57 inches",
      Width: "13.5 inches",
      Depth: "9.14 inches",
      Weight: "2.8 lbs",
    },
    Display: {
      ScreenSize: "13.5 inches",
      Resolution: "2256x1504",
      DisplayType: "PixelSense",
      Touchscreen: "Yes",
    },
    Performance: {
      Processor: "Intel Core i5-1235U",
      RAM: "8GB",
      Storage: "512GB SSD",
      GraphicsCard: "Integrated Intel Iris Xe",
    },
    Battery: {
      BatteryLife: "Up to 18 hours",
      BatteryCapacity: "47.4 Wh",
      ChargingSpeed: "65W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "1x USB-A, 1x USB-C",
      HDMIPort: "No",
      HeadphoneJack: "Yes",
      SDCardSlot: "No",
      EthernetPort: "No",
      ThunderboltPorts: "1x Thunderbolt 4",
    },
    Keyboard: "Backlit, full-size keyboard",
    TrackpadMouseInput: "Large precision trackpad",
    Biometrics: "Windows Hello facial recognition",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6, Bluetooth 5.1",
      Webcam: "720p",
      Speakers: "Omnisonic speakers with Dolby Audio",
      ColorOptions: ["Platinum", "Matte Black"],
    },
  },
  {
    Brand: "Acer",
    image: "https://i.ibb.co.com/k4Ddqmx/Swift-X-14.jpg",
    model: "Swift X 14",
    Condition: "New",
    inStock: true,
    price: 167937.08,
    ReleaseDate: "2023",
    Dimensions: {
      Height: "0.63 inches",
      Width: "12.76 inches",
      Depth: "8.78 inches",
      Weight: "3.06 lbs",
    },
    Display: {
      ScreenSize: "14 inches",
      Resolution: "2560x1600",
      DisplayType: "IPS",
      Touchscreen: "No",
    },
    Performance: {
      Processor: "AMD Ryzen 7 5800U",
      RAM: "16GB",
      Storage: "1TB SSD",
      GraphicsCard: "NVIDIA GeForce RTX 3050 Ti",
    },
    Battery: {
      BatteryLife: "Up to 12 hours",
      BatteryCapacity: "56 Wh",
      ChargingSpeed: "90W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "2x USB-C, 1x USB-A",
      HDMIPort: "Yes",
      HeadphoneJack: "Yes",
      SDCardSlot: "Yes",
      EthernetPort: "No",
      ThunderboltPorts: "1x Thunderbolt 4",
    },
    Keyboard: "Backlit, full-size keyboard",
    TrackpadMouseInput: "Precision touchpad",
    Biometrics: "None",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6, Bluetooth 5.2",
      Webcam: "720p",
      Speakers: "Stereo speakers",
      ColorOptions: ["Silver", "Green"],
    },
  },
  {
    Brand: "Lenovo",
    image: "https://i.ibb.co.com/W5PPd3k/Think-Pad-X1-Carbon-Gen-10.jpg",
    model: "ThinkPad X1 Carbon Gen 10",
    Condition: "New",
    inStock: true,
    price: 215953.4,
    peleaseDate: "2023",
    Dimensions: {
      Height: "0.6 inches",
      Width: "14.9 inches",
      Depth: "9.0 inches",
      Weight: "2.48 lbs",
    },
    Display: {
      ScreenSize: "14 inches",
      Resolution: "2560x1600",
      DisplayType: "IPS",
      Touchscreen: "Yes",
    },
    Performance: {
      Processor: "Intel Core i7-1260P",
      RAM: "16GB",
      Storage: "1TB SSD",
      GraphicsCard: "Integrated Intel Iris Xe",
    },
    Battery: {
      BatteryLife: "Up to 15 hours",
      BatteryCapacity: "57 Wh",
      ChargingSpeed: "65W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "2x USB-C, 2x USB-A",
      HDMIPort: "Yes",
      HeadphoneJack: "Yes",
      SDCardSlot: "No",
      EthernetPort: "No",
      ThunderboltPorts: "2x Thunderbolt 4",
    },
    Keyboard: "Backlit, spill-resistant keyboard",
    TrackpadMouseInput: "Large precision trackpad",
    Biometrics: "Fingerprint reader and IR camera",
    OtherFeatures: {
      OperatingSystem: "Windows 11 Pro",
      Connectivity: "Wi-Fi 6E, Bluetooth 5.2",
      Webcam: "1080p",
      Speakers: "4x speakers with Dolby Atmos",
      ColorOptions: ["Black", "Carbon Fiber"],
    },
  },
];

const LaptopSlider = () => {
  // Create state to track liked items
  const [liked, setLiked] = useState(Array(LaptopData.length).fill(false));

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
          title={"Our Laptops"}
          subtitle={"New products with updated stocks"}
        />
        <button className="py-2 px-5 font-bold rounded-full border-2 border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 flex items-center gap-4">
          View All <FaChevronRight />
        </button>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-4 ">
        {LaptopData.map((data, index) => (
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

export default LaptopSlider;
