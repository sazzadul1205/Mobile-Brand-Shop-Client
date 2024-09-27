import { useState } from "react";
import TopSection from "../ProductsPage/TopSection/TopSection";
import LaptopCard from "../../Components/LaptopCard";

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
  {
    Brand: "Dell",
    image: "https://i.ibb.co.com/hRv1Fvq/Dell-XPS-13.jpg",
    model: "Dell XPS 13",
    Condition: "New",
    inStock: true,
    price: 139900.0,
    ReleaseDate: "2023",
    Dimensions: {
      Height: "0.58 inches",
      Width: "11.6 inches",
      Depth: "7.8 inches",
      Weight: "2.8 lbs",
    },
    Display: {
      ScreenSize: "13.4 inches",
      Resolution: "1920x1200",
      DisplayType: "InfinityEdge",
      Touchscreen: "Yes",
    },
    Performance: {
      Processor: "Intel Core i7",
      RAM: "16GB",
      Storage: "512GB SSD",
      GraphicsCard: "Intel Iris Xe",
    },
    Battery: {
      BatteryLife: "Up to 14 hours",
      BatteryCapacity: "52 Wh",
      ChargingSpeed: "65W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "2x USB-C 3.2",
      HDMIPort: "No",
      HeadphoneJack: "Yes",
      SDCardSlot: "No",
      EthernetPort: "No",
      ThunderboltPorts: "2x Thunderbolt 4",
    },
    Keyboard: "Backlit Keyboard",
    TrackpadMouseInput: "Precision Touchpad",
    Biometrics: "Fingerprint Reader",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6, Bluetooth 5.1",
      Webcam: "720p",
      Speakers: "Waves MaxxAudio Pro",
      ColorOptions: ["Platinum Silver", "Black"],
    },
  },
  {
    Brand: "HP",
    image: "https://i.ibb.co.com/k5CFw5D/HP-Spectre-x360.jpg",
    model: "HP Spectre x360",
    Condition: "New",
    inStock: true,
    price: 159999.99,
    ReleaseDate: "2023",
    Dimensions: {
      Height: "0.67 inches",
      Width: "13.5 inches",
      Depth: "8.6 inches",
      Weight: "2.95 lbs",
    },
    Display: {
      ScreenSize: "13.5 inches",
      Resolution: "3000x2000",
      DisplayType: "OLED",
      Touchscreen: "Yes",
    },
    Performance: {
      Processor: "Intel Core i7",
      RAM: "16GB",
      Storage: "1TB SSD",
      GraphicsCard: "Intel Iris Xe",
    },
    Battery: {
      BatteryLife: "Up to 15 hours",
      BatteryCapacity: "60 Wh",
      ChargingSpeed: "65W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "2x USB-C 3.1",
      HDMIPort: "Yes",
      HeadphoneJack: "Yes",
      SDCardSlot: "No",
      EthernetPort: "No",
      ThunderboltPorts: "2x Thunderbolt 4",
    },
    Keyboard: "Backlit Keyboard",
    TrackpadMouseInput: "Precision Touchpad",
    Biometrics: "Fingerprint Reader",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6, Bluetooth 5.1",
      Webcam: "720p",
      Speakers: "Bang & Olufsen",
      ColorOptions: ["Nightfall Black", "Poseidon Blue"],
    },
  },
  {
    Brand: "Lenovo",
    image: "https://i.ibb.co.com/XCBQ763/Lenovo-Think-Pad-X1-Carbon.jpg",
    model: "Lenovo ThinkPad X1 Carbon",
    Condition: "New",
    inStock: true,
    price: 189999.99,
    ReleaseDate: "2023",
    Dimensions: {
      Height: "0.59 inches",
      Width: "13.0 inches",
      Depth: "9.0 inches",
      Weight: "2.5 lbs",
    },
    Display: {
      ScreenSize: "14 inches",
      Resolution: "1920x1200",
      DisplayType: "IPS",
      Touchscreen: "Optional",
    },
    Performance: {
      Processor: "Intel Core i7",
      RAM: "16GB",
      Storage: "1TB SSD",
      GraphicsCard: "Intel Iris Xe",
    },
    Battery: {
      BatteryLife: "Up to 20 hours",
      BatteryCapacity: "57 Wh",
      ChargingSpeed: "65W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "2x USB 3.2",
      HDMIPort: "Yes",
      HeadphoneJack: "Yes",
      SDCardSlot: "No",
      EthernetPort: "No",
      ThunderboltPorts: "2x Thunderbolt 4",
    },
    Keyboard: "Backlit Keyboard",
    TrackpadMouseInput: "Precision Touchpad",
    Biometrics: "Fingerprint Reader",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6, Bluetooth 5.1",
      Webcam: "720p",
      Speakers: "Dolby Atmos",
      ColorOptions: ["Black"],
    },
  },
  {
    Brand: "Asus",
    image: "https://i.ibb.co.com/Zh07pGm/Asus-Zen-Book-14.jpg",
    model: "Asus ZenBook 14",
    Condition: "New",
    inStock: true,
    price: 109999.0,
    ReleaseDate: "2023",
    Dimensions: {
      Height: "0.67 inches",
      Width: "12.5 inches",
      Depth: "7.9 inches",
      Weight: "2.6 lbs",
    },
    Display: {
      ScreenSize: "14 inches",
      Resolution: "1920x1080",
      DisplayType: "IPS",
      Touchscreen: "No",
    },
    Performance: {
      Processor: "Intel Core i5",
      RAM: "16GB",
      Storage: "512GB SSD",
      GraphicsCard: "Intel Iris Xe",
    },
    Battery: {
      BatteryLife: "Up to 16 hours",
      BatteryCapacity: "67 Wh",
      ChargingSpeed: "65W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "1x USB 3.2, 1x USB-C 3.2",
      HDMIPort: "Yes",
      HeadphoneJack: "Yes",
      SDCardSlot: "Yes",
      EthernetPort: "No",
      ThunderboltPorts: "1x Thunderbolt 4",
    },
    Keyboard: "Backlit Keyboard",
    TrackpadMouseInput: "Precision Touchpad",
    Biometrics: "Fingerprint Reader",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6, Bluetooth 5.0",
      Webcam: "720p",
      Speakers: "Harman Kardon",
      ColorOptions: ["Royal Blue", "Slate Grey"],
    },
  },
  {
    Brand: "Acer",
    image: "https://i.ibb.co.com/NWsXRcJ/Acer-Swift-3.jpg",
    model: "Acer Swift 3",
    Condition: "New",
    inStock: true,
    price: 89999.99,
    ReleaseDate: "2023",
    Dimensions: {
      Height: "0.63 inches",
      Width: "12.7 inches",
      Depth: "8.4 inches",
      Weight: "2.65 lbs",
    },
    Display: {
      ScreenSize: "14 inches",
      Resolution: "1920x1080",
      DisplayType: "IPS",
      Touchscreen: "No",
    },
    Performance: {
      Processor: "Intel Core i5",
      RAM: "8GB",
      Storage: "256GB SSD",
      GraphicsCard: "Intel Iris Xe",
    },
    Battery: {
      BatteryLife: "Up to 15 hours",
      BatteryCapacity: "48 Wh",
      ChargingSpeed: "65W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "2x USB 3.2",
      HDMIPort: "Yes",
      HeadphoneJack: "Yes",
      SDCardSlot: "No",
      EthernetPort: "No",
      ThunderboltPorts: "No",
    },
    Keyboard: "Backlit Keyboard",
    TrackpadMouseInput: "Precision Touchpad",
    Biometrics: "No",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6, Bluetooth 5.1",
      Webcam: "720p",
      Speakers: "Stereo",
      ColorOptions: ["Silver", "Gold"],
    },
  },
  {
    Brand: "Microsoft",
    image: "https://i.ibb.co.com/gzpb4n3/Microsoft-Surface-Laptop-4.jpg",
    model: "Microsoft Surface Laptop 4",
    Condition: "New",
    inStock: true,
    price: 129999.99,
    ReleaseDate: "2023",
    Dimensions: {
      Height: "0.57 inches",
      Width: "12.1 inches",
      Depth: "8.8 inches",
      Weight: "2.79 lbs",
    },
    Display: {
      ScreenSize: "13.5 inches",
      Resolution: "2256x1504",
      DisplayType: "PixelSense",
      Touchscreen: "Yes",
    },
    Performance: {
      Processor: "Intel Core i5",
      RAM: "8GB",
      Storage: "512GB SSD",
      GraphicsCard: "Intel Iris Xe",
    },
    Battery: {
      BatteryLife: "Up to 19 hours",
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
      ThunderboltPorts: "No",
    },
    Keyboard: "Backlit Keyboard",
    TrackpadMouseInput: "Precision Touchpad",
    Biometrics: "No",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6, Bluetooth 5.0",
      Webcam: "720p",
      Speakers: "OmniSonic",
      ColorOptions: ["Platinum", "Matte Black"],
    },
  },
  {
    Brand: "Razer",
    image: "https://i.ibb.co.com/dmdXkxY/Razer-Blade-15.jpg",
    model: "Razer Blade 15",
    Condition: "New",
    inStock: true,
    price: 229999.99,
    ReleaseDate: "2023",
    Dimensions: {
      Height: "0.67 inches",
      Width: "15.6 inches",
      Depth: "10.2 inches",
      Weight: "4.4 lbs",
    },
    Display: {
      ScreenSize: "15.6 inches",
      Resolution: "1920x1080",
      DisplayType: "OLED",
      Touchscreen: "No",
    },
    Performance: {
      Processor: "Intel Core i7",
      RAM: "16GB",
      Storage: "1TB SSD",
      GraphicsCard: "NVIDIA GeForce RTX 3060",
    },
    Battery: {
      BatteryLife: "Up to 6 hours",
      BatteryCapacity: "80 Wh",
      ChargingSpeed: "230W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "3x USB 3.2",
      HDMIPort: "Yes",
      HeadphoneJack: "Yes",
      SDCardSlot: "No",
      EthernetPort: "No",
      ThunderboltPorts: "2x Thunderbolt 4",
    },
    Keyboard: "RGB Backlit Keyboard",
    TrackpadMouseInput: "Precision Touchpad",
    Biometrics: "No",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6, Bluetooth 5.2",
      Webcam: "HD",
      Speakers: "Stereo",
      ColorOptions: ["Black"],
    },
  },
  {
    Brand: "MSI",
    image: "https://i.ibb.co.com/k8DjPkt/MSI-Prestige-14.jpg",
    model: "MSI Prestige 14",
    Condition: "New",
    inStock: true,
    price: 119999.0,
    ReleaseDate: "2023",
    Dimensions: {
      Height: "0.63 inches",
      Width: "12.6 inches",
      Depth: "8.6 inches",
      Weight: "2.84 lbs",
    },
    Display: {
      ScreenSize: "14 inches",
      Resolution: "1920x1080",
      DisplayType: "IPS",
      Touchscreen: "No",
    },
    Performance: {
      Processor: "Intel Core i7",
      RAM: "16GB",
      Storage: "512GB SSD",
      GraphicsCard: "NVIDIA GeForce GTX 1650",
    },
    Battery: {
      BatteryLife: "Up to 10 hours",
      BatteryCapacity: "50 Wh",
      ChargingSpeed: "65W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "2x USB 3.2",
      HDMIPort: "Yes",
      HeadphoneJack: "Yes",
      SDCardSlot: "No",
      EthernetPort: "No",
      ThunderboltPorts: "No",
    },
    Keyboard: "Backlit Keyboard",
    TrackpadMouseInput: "Precision Touchpad",
    Biometrics: "No",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6, Bluetooth 5.1",
      Webcam: "720p",
      Speakers: "Hi-Res Audio",
      ColorOptions: ["Mystic Grey", "Rose Pink"],
    },
  },
  {
    Brand: "Samsung",
    image: "https://i.ibb.co.com/s5BBrPD/Samsung-Galaxy-Book-Pro.jpg",
    model: "Samsung Galaxy Book Pro",
    Condition: "New",
    inStock: true,
    price: 99999.99,
    ReleaseDate: "2023",
    Dimensions: {
      Height: "0.45 inches",
      Width: "11.2 inches",
      Depth: "7.2 inches",
      Weight: "2.31 lbs",
    },
    Display: {
      ScreenSize: "13.3 inches",
      Resolution: "1920x1080",
      DisplayType: "AMOLED",
      Touchscreen: "Yes",
    },
    Performance: {
      Processor: "Intel Core i5",
      RAM: "8GB",
      Storage: "256GB SSD",
      GraphicsCard: "Intel Iris Xe",
    },
    Battery: {
      BatteryLife: "Up to 20 hours",
      BatteryCapacity: "63 Wh",
      ChargingSpeed: "65W USB-C charging",
    },
    InputsOutputs: {
      ChargingPort: "USB-C",
      USBPorts: "2x USB-C",
      HDMIPort: "Yes",
      HeadphoneJack: "Yes",
      SDCardSlot: "No",
      EthernetPort: "No",
      ThunderboltPorts: "No",
    },
    Keyboard: "Backlit Keyboard",
    TrackpadMouseInput: "Precision Touchpad",
    Biometrics: "No",
    OtherFeatures: {
      OperatingSystem: "Windows 11",
      Connectivity: "Wi-Fi 6, Bluetooth 5.1",
      Webcam: "720p",
      Speakers: "AKG",
      ColorOptions: ["Silver", "Graphite"],
    },
  },
];

const ProductLaptop = () => {
  const itemsPerPage = 9; // Display 9 products per page

  // Extract unique filter options from LaptopData
  const uniqueBrands = [...new Set(LaptopData.map((item) => item.Brand))];
  const uniqueConditions = [
    ...new Set(LaptopData.map((item) => item.Condition)),
  ];

  // States for filters and pagination
  const [filters, setFilters] = useState({
    brand: "", // Changed to lowercase
    condition: "", // Changed to lowercase
    priceRange: [0, 10000000],
  });
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered products based on filters
  const filteredProducts = LaptopData.filter((product) => {
    const productPrice = parseFloat(product.price);
    return (
      (filters.brand ? product.Brand === filters.brand : true) &&
      (filters.condition ? product.Condition === filters.condition : true) &&
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
  const [liked, setLiked] = useState(Array(LaptopData.length).fill(false));

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

  console.log(displayedProducts);

  return (
    <div className="bg-gradient-to-b from-green-500 to-white py-24 text-black">
      {/* Search and Categories */}
      <TopSection />
      <div className="text-center mb-8">
        <p className="font-bold text-3xl">View Our Laptops</p>
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
                <LaptopCard
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

export default ProductLaptop;
