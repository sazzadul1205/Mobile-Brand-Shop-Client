import { useState } from "react";
import TopSection from "../ProductsPage/TopSection/TopSection";
import AdvancedCard from "../../Components/AdvancedCard";
import { Helmet } from "react-helmet";

const LaptopData = [
  {
    brand: "Apple",
    image: "https://i.ibb.co.com/PchFBnL/Mac-Book-Air-M2.jpg",
    model: "MacBook Air M2",
    Condition: "New",
    inStock: true,
    price: 119920.76,
    ReleaseDate: "2022",
    weightAndDimensions: {
      height: "0.41 inches",
      width: "11.97 inches",
      depth: "8.36 inches",
      weight: "2.7 lbs",
    },
    display: {
      screenSize: "13.6 inches",
      resolution: "2560x1664",
      displayType: "Retina",
      touchScreen: "No",
    },
    performance: {
      processor: "Apple M2",
      ram: "8GB",
      storage: "256GB SSD",
      graphicsCard: "Integrated Apple GPU",
    },
    battery: {
      batteryLife: "Up to 18 hours",
      batteryCapacity: "52.6 Wh",
      chargingSpeed: "30W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "MagSafe 3",
      usbPorts: "2x USB 4",
      hdmiDisplayPort: "No",
      headphoneJack: "Yes",
      sdCardSlot: "No",
      ethernetPort: "No",
      thunderboltPorts: "2x Thunderbolt 4",
    },
    keyboard: "Backlit, Magic keyboard",
    trackpadMouseInput: "Large Force Touch trackpad",
    biometrics: "Touch ID",
    otherFeatures: {
      operatingSystem: "macOS",
      connectivity: "Wi-Fi 6E, Bluetooth 5.0",
      webcam: "720p",
      speakers: "Stereo with wide stereo sound",
      colorOptions: ["Silver", "Space Grey", "Midnight"],
    },
  },
  {
    brand: "Dell",
    image: "https://i.ibb.co.com/wMqqCXY/XPS-15.jpg",
    model: "XPS 15",
    Condition: "New",
    inStock: true,
    price: 191945.24,
    ReleaseDate: "2023",
    weightAndDimensions: {
      height: "0.71 inches",
      width: "13.57 inches",
      depth: "9.06 inches",
      weight: "4.2 lbs",
    },
    display: {
      screenSize: "15.6 inches",
      resolution: "1920x1200",
      displayType: "IPS",
      touchScreen: "Yes",
    },
    performance: {
      processor: "Intel Core i7-13700H",
      ram: "16GB",
      storage: "512GB SSD",
      graphicsCard: "NVIDIA GeForce RTX 4050",
    },
    battery: {
      batteryLife: "Up to 12 hours",
      batteryCapacity: "86 Wh",
      chargingSpeed: "130W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "2x USB 3.2, 1x USB-C",
      hdmiDisplayPort: "Yes",
      headphoneJack: "Yes",
      sdCardSlot: "Yes",
      ethernetPort: "No",
      thunderboltPorts: "2x Thunderbolt 4",
    },
    keyboard: "Backlit, full-size keyboard",
    trackpadMouseInput: "Precision touchpad",
    biometrics: "Fingerprint scanner",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6E, Bluetooth 5.2",
      webcam: "720p",
      speakers: "Waves MaxxAudio Pro",
      colorOptions: ["Platinum Silver", "Frost"],
    },
  },
  {
    brand: "HP",
    image: "https://i.ibb.co.com/vPbq7TZ/Spectre-x360.jpg",
    model: "Spectre x360",
    Condition: "Refurbished",
    inStock: true,
    price: 143928.92,
    ReleaseDate: "2022",
    weightAndDimensions: {
      height: "0.67 inches",
      width: "13.99 inches",
      depth: "8.67 inches",
      weight: "3.01 lbs",
    },
    display: {
      screenSize: "13.5 inches",
      resolution: "3000x2000",
      displayType: "OLED",
      touchScreen: "Yes",
    },
    performance: {
      processor: "Intel Core i7-1260P",
      ram: "16GB",
      storage: "1TB SSD",
      graphicsCard: "Integrated Intel Iris Xe",
    },
    battery: {
      batteryLife: "Up to 15 hours",
      batteryCapacity: "66 Wh",
      chargingSpeed: "65W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "2x USB-C, 1x USB-A",
      hdmiDisplayPort: "No",
      headphoneJack: "Yes",
      sdCardSlot: "Yes",
      ethernetPort: "No",
      thunderboltPorts: "2x Thunderbolt 4",
    },
    keyboard: "Backlit, full-size keyboard",
    trackpadMouseInput: "Precision touchpad",
    biometrics: "Fingerprint scanner, Windows Hello",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.0",
      webcam: "720p",
      speakers: "Bang & Olufsen",
      colorOptions: ["Nightfall Black", "Silver"],
    },
  },
  {
    brand: "Lenovo",
    image: "https://i.ibb.co.com/64LJCBJ/Think-Pad-X1-Carbon-Gen-10.jpg",
    model: "ThinkPad X1 Carbon Gen 10",
    Condition: "New",
    inStock: true,
    price: 209951.36,
    ReleaseDate: "2023",
    weightAndDimensions: {
      height: "0.59 inches",
      width: "12.7 inches",
      depth: "8.5 inches",
      weight: "2.48 lbs",
    },
    display: {
      screenSize: "14 inches",
      resolution: "1920x1200",
      displayType: "IPS",
      touchScreen: "Optional",
    },
    performance: {
      processor: "Intel Core i7-1260P",
      ram: "16GB",
      storage: "1TB SSD",
      graphicsCard: "Integrated Intel Iris Xe",
    },
    battery: {
      batteryLife: "Up to 15 hours",
      batteryCapacity: "57 Wh",
      chargingSpeed: "65W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "2x USB-A, 2x USB-C",
      hdmiDisplayPort: "No",
      headphoneJack: "Yes",
      sdCardSlot: "Yes",
      ethernetPort: "No",
      thunderboltPorts: "2x Thunderbolt 4",
    },
    keyboard: "Backlit, spill-resistant keyboard",
    trackpadMouseInput: "Precision touchpad",
    biometrics: "Fingerprint reader, IR camera for Windows Hello",
    otherFeatures: {
      operatingSystem: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, Bluetooth 5.2",
      webcam: "1080p",
      speakers: "Dolby Audio",
      colorOptions: ["Black"],
    },
  },
  {
    brand: "Asus",
    image: "https://i.ibb.co.com/rG1q23r/ROG-Zephyrus-G14.jpg",
    model: "ROG Zephyrus G14",
    Condition: "New",
    inStock: true,
    price: 179941.16,
    ReleaseDate: "2023",
    weightAndDimensions: {
      height: "0.70 inches",
      width: "12.76 inches",
      depth: "8.74 inches",
      weight: "3.64 lbs",
    },
    display: {
      screenSize: "14 inches",
      resolution: "2560x1600",
      displayType: "IPS",
      touchScreen: "No",
    },
    performance: {
      processor: "AMD Ryzen 9 7940HS",
      ram: "16GB",
      storage: "1TB SSD",
      graphicsCard: "NVIDIA GeForce RTX 4060",
    },
    battery: {
      batteryLife: "Up to 10 hours",
      batteryCapacity: "76 Wh",
      chargingSpeed: "100W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "2x USB-C, 1x USB-A",
      hdmiDisplayPort: "Yes",
      headphoneJack: "Yes",
      sdCardSlot: "No",
      ethernetPort: "No",
      thunderboltPorts: "1x Thunderbolt 4",
    },
    keyboard: "Backlit, RGB keyboard",
    trackpadMouseInput: "Precision touchpad",
    biometrics: "None",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6E, Bluetooth 5.1",
      webcam: "720p",
      speakers: "Dolby Atmos",
      colorOptions: ["Moonlight White", "Eclipse Grey"],
    },
  },
  {
    brand: "Microsoft",
    image: "https://i.ibb.co.com/Z1y9NjT/Surface-Laptop-5.jpg",
    model: "Surface Laptop 5",
    Condition: "New",
    inStock: true,
    price: 155933.0,
    ReleaseDate: "2022",
    weightAndDimensions: {
      height: "0.57 inches",
      width: "13.5 inches",
      depth: "9.14 inches",
      weight: "2.8 lbs",
    },
    display: {
      screenSize: "13.5 inches",
      resolution: "2256x1504",
      displayType: "PixelSense",
      touchScreen: "Yes",
    },
    performance: {
      processor: "Intel Core i5-1235U",
      ram: "8GB",
      storage: "512GB SSD",
      graphicsCard: "Integrated Intel Iris Xe",
    },
    battery: {
      batteryLife: "Up to 18 hours",
      batteryCapacity: "47.4 Wh",
      chargingSpeed: "65W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "1x USB-A, 1x USB-C",
      hdmiDisplayPort: "No",
      headphoneJack: "Yes",
      sdCardSlot: "No",
      ethernetPort: "No",
      thunderboltPorts: "1x Thunderbolt 4",
    },
    keyboard: "Backlit, full-size keyboard",
    trackpadMouseInput: "Large precision trackpad",
    biometrics: "Windows Hello facial recognition",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.1",
      webcam: "720p",
      speakers: "Omnisonic speakers with Dolby Audio",
      colorOptions: ["Platinum", "Matte Black"],
    },
  },
  {
    brand: "Acer",
    image: "https://i.ibb.co.com/k4Ddqmx/Swift-X-14.jpg",
    model: "Swift X 14",
    Condition: "New",
    inStock: true,
    price: 167937.08,
    ReleaseDate: "2023",
    weightAndDimensions: {
      height: "0.63 inches",
      width: "12.76 inches",
      depth: "8.78 inches",
      weight: "3.06 lbs",
    },
    display: {
      screenSize: "14 inches",
      resolution: "2560x1600",
      displayType: "IPS",
      touchScreen: "No",
    },
    performance: {
      processor: "AMD Ryzen 7 5800U",
      ram: "16GB",
      storage: "1TB SSD",
      graphicsCard: "NVIDIA GeForce RTX 3050 Ti",
    },
    battery: {
      batteryLife: "Up to 12 hours",
      batteryCapacity: "56 Wh",
      chargingSpeed: "90W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "2x USB-C, 1x USB-A",
      hdmiDisplayPort: "Yes",
      headphoneJack: "Yes",
      sdCardSlot: "Yes",
      ethernetPort: "No",
      thunderboltPorts: "1x Thunderbolt 4",
    },
    keyboard: "Backlit, full-size keyboard",
    trackpadMouseInput: "Precision touchpad",
    biometrics: "None",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.2",
      webcam: "720p",
      speakers: "Stereo speakers",
      colorOptions: ["Silver", "Green"],
    },
  },
  {
    brand: "Lenovo",
    image: "https://i.ibb.co.com/W5PPd3k/Think-Pad-X1-Carbon-Gen-10.jpg",
    model: "ThinkPad X1 Carbon Gen 10",
    Condition: "New",
    inStock: true,
    price: 215953.4,
    peleaseDate: "2023",
    weightAndDimensions: {
      height: "0.6 inches",
      width: "14.9 inches",
      depth: "9.0 inches",
      weight: "2.48 lbs",
    },
    display: {
      screenSize: "14 inches",
      resolution: "2560x1600",
      displayType: "IPS",
      touchScreen: "Yes",
    },
    performance: {
      processor: "Intel Core i7-1260P",
      ram: "16GB",
      storage: "1TB SSD",
      graphicsCard: "Integrated Intel Iris Xe",
    },
    battery: {
      batteryLife: "Up to 15 hours",
      batteryCapacity: "57 Wh",
      chargingSpeed: "65W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "2x USB-C, 2x USB-A",
      hdmiDisplayPort: "Yes",
      headphoneJack: "Yes",
      sdCardSlot: "No",
      ethernetPort: "No",
      thunderboltPorts: "2x Thunderbolt 4",
    },
    keyboard: "Backlit, spill-resistant keyboard",
    trackpadMouseInput: "Large precision trackpad",
    biometrics: "Fingerprint reader and IR camera",
    otherFeatures: {
      operatingSystem: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, Bluetooth 5.2",
      webcam: "1080p",
      speakers: "4x speakers with Dolby Atmos",
      colorOptions: ["Black", "Carbon Fiber"],
    },
  },
  {
    brand: "Dell",
    image: "https://i.ibb.co.com/hRv1Fvq/Dell-XPS-13.jpg",
    model: "Dell XPS 13",
    Condition: "New",
    inStock: true,
    price: 139900.0,
    ReleaseDate: "2023",
    weightAndDimensions: {
      height: "0.58 inches",
      width: "11.6 inches",
      depth: "7.8 inches",
      weight: "2.8 lbs",
    },
    display: {
      screenSize: "13.4 inches",
      resolution: "1920x1200",
      displayType: "InfinityEdge",
      touchScreen: "Yes",
    },
    performance: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      graphicsCard: "Intel Iris Xe",
    },
    battery: {
      batteryLife: "Up to 14 hours",
      batteryCapacity: "52 Wh",
      chargingSpeed: "65W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "2x USB-C 3.2",
      hdmiDisplayPort: "No",
      headphoneJack: "Yes",
      sdCardSlot: "No",
      ethernetPort: "No",
      thunderboltPorts: "2x Thunderbolt 4",
    },
    keyboard: "Backlit keyboard",
    trackpadMouseInput: "Precision Touchpad",
    biometrics: "Fingerprint Reader",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.1",
      webcam: "720p",
      speakers: "Waves MaxxAudio Pro",
      colorOptions: ["Platinum Silver", "Black"],
    },
  },
  {
    brand: "HP",
    image: "https://i.ibb.co.com/k5CFw5D/HP-Spectre-x360.jpg",
    model: "HP Spectre x360",
    Condition: "New",
    inStock: true,
    price: 159999.99,
    ReleaseDate: "2023",
    weightAndDimensions: {
      height: "0.67 inches",
      width: "13.5 inches",
      depth: "8.6 inches",
      weight: "2.95 lbs",
    },
    display: {
      screenSize: "13.5 inches",
      resolution: "3000x2000",
      displayType: "OLED",
      touchScreen: "Yes",
    },
    performance: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "1TB SSD",
      graphicsCard: "Intel Iris Xe",
    },
    battery: {
      batteryLife: "Up to 15 hours",
      batteryCapacity: "60 Wh",
      chargingSpeed: "65W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "2x USB-C 3.1",
      hdmiDisplayPort: "Yes",
      headphoneJack: "Yes",
      sdCardSlot: "No",
      ethernetPort: "No",
      thunderboltPorts: "2x Thunderbolt 4",
    },
    keyboard: "Backlit keyboard",
    trackpadMouseInput: "Precision Touchpad",
    biometrics: "Fingerprint Reader",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.1",
      webcam: "720p",
      speakers: "Bang & Olufsen",
      colorOptions: ["Nightfall Black", "Poseidon Blue"],
    },
  },
  {
    brand: "Lenovo",
    image: "https://i.ibb.co.com/XCBQ763/Lenovo-Think-Pad-X1-Carbon.jpg",
    model: "Lenovo ThinkPad X1 Carbon",
    Condition: "New",
    inStock: true,
    price: 189999.99,
    ReleaseDate: "2023",
    weightAndDimensions: {
      height: "0.59 inches",
      width: "13.0 inches",
      depth: "9.0 inches",
      weight: "2.5 lbs",
    },
    display: {
      screenSize: "14 inches",
      resolution: "1920x1200",
      displayType: "IPS",
      touchScreen: "Optional",
    },
    performance: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "1TB SSD",
      graphicsCard: "Intel Iris Xe",
    },
    battery: {
      batteryLife: "Up to 20 hours",
      batteryCapacity: "57 Wh",
      chargingSpeed: "65W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "2x USB 3.2",
      hdmiDisplayPort: "Yes",
      headphoneJack: "Yes",
      sdCardSlot: "No",
      ethernetPort: "No",
      thunderboltPorts: "2x Thunderbolt 4",
    },
    keyboard: "Backlit keyboard",
    trackpadMouseInput: "Precision Touchpad",
    biometrics: "Fingerprint Reader",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.1",
      webcam: "720p",
      speakers: "Dolby Atmos",
      colorOptions: ["Black"],
    },
  },
  {
    brand: "Asus",
    image: "https://i.ibb.co.com/Zh07pGm/Asus-Zen-Book-14.jpg",
    model: "Asus ZenBook 14",
    Condition: "New",
    inStock: true,
    price: 109999.0,
    ReleaseDate: "2023",
    weightAndDimensions: {
      height: "0.67 inches",
      width: "12.5 inches",
      depth: "7.9 inches",
      weight: "2.6 lbs",
    },
    display: {
      screenSize: "14 inches",
      resolution: "1920x1080",
      displayType: "IPS",
      touchScreen: "No",
    },
    performance: {
      processor: "Intel Core i5",
      ram: "16GB",
      storage: "512GB SSD",
      graphicsCard: "Intel Iris Xe",
    },
    battery: {
      batteryLife: "Up to 16 hours",
      batteryCapacity: "67 Wh",
      chargingSpeed: "65W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "1x USB 3.2, 1x USB-C 3.2",
      hdmiDisplayPort: "Yes",
      headphoneJack: "Yes",
      sdCardSlot: "Yes",
      ethernetPort: "No",
      thunderboltPorts: "1x Thunderbolt 4",
    },
    keyboard: "Backlit keyboard",
    trackpadMouseInput: "Precision Touchpad",
    biometrics: "Fingerprint Reader",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.0",
      webcam: "720p",
      speakers: "Harman Kardon",
      colorOptions: ["Royal Blue", "Slate Grey"],
    },
  },
  {
    brand: "Acer",
    image: "https://i.ibb.co.com/NWsXRcJ/Acer-Swift-3.jpg",
    model: "Acer Swift 3",
    Condition: "New",
    inStock: true,
    price: 89999.99,
    ReleaseDate: "2023",
    weightAndDimensions: {
      height: "0.63 inches",
      width: "12.7 inches",
      depth: "8.4 inches",
      weight: "2.65 lbs",
    },
    display: {
      screenSize: "14 inches",
      resolution: "1920x1080",
      displayType: "IPS",
      touchScreen: "No",
    },
    performance: {
      processor: "Intel Core i5",
      ram: "8GB",
      storage: "256GB SSD",
      graphicsCard: "Intel Iris Xe",
    },
    battery: {
      batteryLife: "Up to 15 hours",
      batteryCapacity: "48 Wh",
      chargingSpeed: "65W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "2x USB 3.2",
      hdmiDisplayPort: "Yes",
      headphoneJack: "Yes",
      sdCardSlot: "No",
      ethernetPort: "No",
      thunderboltPorts: "No",
    },
    keyboard: "Backlit keyboard",
    trackpadMouseInput: "Precision Touchpad",
    biometrics: "No",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.1",
      webcam: "720p",
      speakers: "Stereo",
      colorOptions: ["Silver", "Gold"],
    },
  },
  {
    brand: "Microsoft",
    image: "https://i.ibb.co.com/gzpb4n3/Microsoft-Surface-Laptop-4.jpg",
    model: "Microsoft Surface Laptop 4",
    Condition: "New",
    inStock: true,
    price: 129999.99,
    ReleaseDate: "2023",
    weightAndDimensions: {
      height: "0.57 inches",
      width: "12.1 inches",
      depth: "8.8 inches",
      weight: "2.79 lbs",
    },
    display: {
      screenSize: "13.5 inches",
      resolution: "2256x1504",
      displayType: "PixelSense",
      touchScreen: "Yes",
    },
    performance: {
      processor: "Intel Core i5",
      ram: "8GB",
      storage: "512GB SSD",
      graphicsCard: "Intel Iris Xe",
    },
    battery: {
      batteryLife: "Up to 19 hours",
      batteryCapacity: "47.4 Wh",
      chargingSpeed: "65W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "1x USB-A, 1x USB-C",
      hdmiDisplayPort: "No",
      headphoneJack: "Yes",
      sdCardSlot: "No",
      ethernetPort: "No",
      thunderboltPorts: "No",
    },
    keyboard: "Backlit keyboard",
    trackpadMouseInput: "Precision Touchpad",
    biometrics: "No",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.0",
      webcam: "720p",
      speakers: "OmniSonic",
      colorOptions: ["Platinum", "Matte Black"],
    },
  },
  {
    brand: "Razer",
    image: "https://i.ibb.co.com/dmdXkxY/Razer-Blade-15.jpg",
    model: "Razer Blade 15",
    Condition: "New",
    inStock: true,
    price: 229999.99,
    ReleaseDate: "2023",
    weightAndDimensions: {
      height: "0.67 inches",
      width: "15.6 inches",
      depth: "10.2 inches",
      weight: "4.4 lbs",
    },
    display: {
      screenSize: "15.6 inches",
      resolution: "1920x1080",
      displayType: "OLED",
      touchScreen: "No",
    },
    performance: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "1TB SSD",
      graphicsCard: "NVIDIA GeForce RTX 3060",
    },
    battery: {
      batteryLife: "Up to 6 hours",
      batteryCapacity: "80 Wh",
      chargingSpeed: "230W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "3x USB 3.2",
      hdmiDisplayPort: "Yes",
      headphoneJack: "Yes",
      sdCardSlot: "No",
      ethernetPort: "No",
      thunderboltPorts: "2x Thunderbolt 4",
    },
    keyboard: "RGB Backlit keyboard",
    trackpadMouseInput: "Precision Touchpad",
    biometrics: "No",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.2",
      webcam: "HD",
      speakers: "Stereo",
      colorOptions: ["Black"],
    },
  },
  {
    brand: "MSI",
    image: "https://i.ibb.co.com/k8DjPkt/MSI-Prestige-14.jpg",
    model: "MSI Prestige 14",
    Condition: "New",
    inStock: true,
    price: 119999.0,
    ReleaseDate: "2023",
    weightAndDimensions: {
      height: "0.63 inches",
      width: "12.6 inches",
      depth: "8.6 inches",
      weight: "2.84 lbs",
    },
    display: {
      screenSize: "14 inches",
      resolution: "1920x1080",
      displayType: "IPS",
      touchScreen: "No",
    },
    performance: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      graphicsCard: "NVIDIA GeForce GTX 1650",
    },
    battery: {
      batteryLife: "Up to 10 hours",
      batteryCapacity: "50 Wh",
      chargingSpeed: "65W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "2x USB 3.2",
      hdmiDisplayPort: "Yes",
      headphoneJack: "Yes",
      sdCardSlot: "No",
      ethernetPort: "No",
      thunderboltPorts: "No",
    },
    keyboard: "Backlit keyboard",
    trackpadMouseInput: "Precision Touchpad",
    biometrics: "No",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.1",
      webcam: "720p",
      speakers: "Hi-Res Audio",
      colorOptions: ["Mystic Grey", "Rose Pink"],
    },
  },
  {
    brand: "Samsung",
    image: "https://i.ibb.co.com/s5BBrPD/Samsung-Galaxy-Book-Pro.jpg",
    model: "Samsung Galaxy Book Pro",
    Condition: "New",
    inStock: true,
    price: 99999.99,
    ReleaseDate: "2023",
    weightAndDimensions: {
      height: "0.45 inches",
      width: "11.2 inches",
      depth: "7.2 inches",
      weight: "2.31 lbs",
    },
    display: {
      screenSize: "13.3 inches",
      resolution: "1920x1080",
      displayType: "AMOLED",
      touchScreen: "Yes",
    },
    performance: {
      processor: "Intel Core i5",
      ram: "8GB",
      storage: "256GB SSD",
      graphicsCard: "Intel Iris Xe",
    },
    battery: {
      batteryLife: "Up to 20 hours",
      batteryCapacity: "63 Wh",
      chargingSpeed: "65W USB-C charging",
    },
    inputsOutputs: {
      chargingPort: "USB-C",
      usbPorts: "2x USB-C",
      hdmiDisplayPort: "Yes",
      headphoneJack: "Yes",
      sdCardSlot: "No",
      ethernetPort: "No",
      thunderboltPorts: "No",
    },
    keyboard: "Backlit keyboard",
    trackpadMouseInput: "Precision Touchpad",
    biometrics: "No",
    otherFeatures: {
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.1",
      webcam: "720p",
      speakers: "AKG",
      colorOptions: ["Silver", "Graphite"],
    },
  },
];

const ProductLaptop = () => {
  const itemsPerPage = 9; // display 9 products per page

  // Extract unique filter options from LaptopData
  const uniquebrands = [...new Set(LaptopData.map((item) => item.brand))];
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
      (filters.brand ? product.brand === filters.brand : true) &&
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mobile Brand Shop || Products Laptop</title>
      </Helmet>
      {/* Search and Categories */}
      <TopSection />
      <div className="text-center mb-8">
        <p className="font-bold text-3xl">View Our Laptops</p>
      </div>
      <div className="flex w-full max-w-[1200px] mx-auto">
        {/* Filter Sidebar */}
        <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-bold mb-4">Filter by:</h3>

          {/* brand Filter */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">brand</label>
            <select
              name="brand"
              value={filters.brand}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded bg-white"
            >
              <option value="">All</option>
              {uniquebrands.map((brand, index) => (
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

export default ProductLaptop;
