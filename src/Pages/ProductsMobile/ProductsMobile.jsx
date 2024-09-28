import { useState } from "react";
import TopSection from "../ProductsPage/TopSection/TopSection";
import AdvancedCard from "../../Components/AdvancedCard";
import { Helmet } from "react-helmet";

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
    weightAndDimensions: {
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
      speakers: "Mono",
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
    weightAndDimensions: {
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
      speakers: "Mono",
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
    weightAndDimensions: {
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
      speakers: "Mono",
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
    weightAndDimensions: {
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
      speakers: "Mono",
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
    weightAndDimensions: {
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
      speakers: "Mono",
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
    weightAndDimensions: {
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
      speakers: "Mono",
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
    weightAndDimensions: {
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
      speakers: "Mono",
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
    weightAndDimensions: {
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
      speakers: "Stereo",
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
  {
    brand: "Apple",
    image: "https://i.ibb.co.com/TY2wTDB/GT-2-Pro.jpg",
    model: "iPhone 14",
    condition: "New",
    inStock: true,
    price: "79999.00",
    operatingSystem: "iOS",
    releaseDate: "2022",
    weightAndDimensions: {
      height: "146.7mm",
      width: "71.5mm",
      depth: "7.8mm",
      weight: "172g",
    },
    display: {
      screenSize: "6.1 inches",
      resolution: "2532 x 1170 pixels",
      displayTechnology: "Super Retina XDR",
      refreshRate: "60Hz",
    },
    performance: {
      processor: "A15 Bionic",
      ram: "6GB",
      storageOptions: ["128GB", "256GB", "512GB"],
    },
    camera: {
      mainCamera: "12MP wide, 12MP ultra-wide",
      frontCamera: "12MP",
      videoRecording: "4K at 60fps",
    },
    battery: {
      batteryCapacity: "3279mAh",
      chargingSpeed: "20W fast charging",
      batteryLife: "Up to 20 hours",
    },
    inputsOutputs: {
      chargingPort: "Lightning",
      simCardType: "Nano-SIM, eSIM",
      headphoneJack: "No",
      speakers: "Stereo",
    },
    biometrics: "Face ID",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.3, Wi-Fi 6",
      waterDustResistance: "IP68 rating",
      sensors: ["LiDAR Scanner", "Accelerometer", "Gyroscope"],
      operatingSystemVersion: "iOS 16",
      colorOptions: ["Midnight", "Starlight", "Product Red"],
    },
  },
  {
    brand: "Xiaomi",
    image: "https://i.ibb.co.com/2jyhJkT/i-Phone-14.jpg",
    model: "Redmi Note 11",
    condition: "New",
    inStock: true,
    price: "15999.00",
    operatingSystem: "Android",
    releaseDate: "2022",
    weightAndDimensions: {
      height: "159.9mm",
      width: "73.9mm",
      depth: "8.1mm",
      weight: "179g",
    },
    display: {
      screenSize: "6.43 inches",
      resolution: "2400 x 1080 pixels",
      displayTechnology: "AMOLED",
      refreshRate: "90Hz",
    },
    performance: {
      processor: "Snapdragon 680",
      ram: "4GB",
      storageOptions: ["64GB", "128GB"],
    },
    camera: {
      mainCamera: "50MP wide, 8MP ultra-wide, 2MP macro, 2MP depth",
      frontCamera: "13MP",
      videoRecording: "1080p at 30fps",
    },
    battery: {
      batteryCapacity: "5000mAh",
      chargingSpeed: "33W fast charging",
      batteryLife: "Up to 18 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speakers: "Stereo",
    },
    biometrics: "Side-mounted fingerprint scanner",
    otherFeatures: {
      connectivity: "4G, Bluetooth 5.0, Wi-Fi",
      waterDustResistance: "No official rating",
      sensors: ["Proximity sensor", "Accelerometer"],
      operatingSystemVersion: "Android 11",
      colorOptions: ["Graphite Gray", "Twilight Blue", "Starry Black"],
    },
  },
  {
    brand: "OnePlus",
    image: "https://i.ibb.co.com/tLb22Kn/One-Plus-10-Pro.jpg",
    model: "OnePlus 10 Pro",
    condition: "New",
    inStock: true,
    price: "66999.00",
    operatingSystem: "Android",
    releaseDate: "2022",
    weightAndDimensions: {
      height: "163mm",
      width: "73.9mm",
      depth: "8.5mm",
      weight: "200g",
    },
    display: {
      screenSize: "6.7 inches",
      resolution: "3216 x 1440 pixels",
      displayTechnology: "Fluid AMOLED",
      refreshRate: "120Hz",
    },
    performance: {
      processor: "Snapdragon 8 Gen 1",
      ram: "8GB/12GB",
      storageOptions: ["128GB", "256GB"],
    },
    camera: {
      mainCamera: "48MP wide, 50MP ultra-wide, 8MP telephoto",
      frontCamera: "32MP",
      videoRecording: "8K at 30fps",
    },
    battery: {
      batteryCapacity: "5000mAh",
      chargingSpeed: "80W fast charging",
      batteryLife: "Up to 20 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "No",
      speakers: "Stereo",
    },
    biometrics: "Under-display fingerprint scanner",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.2, Wi-Fi 6",
      waterDustResistance: "IP68 rating",
      sensors: ["Accelerometer", "Gyroscope", "Proximity sensor"],
      operatingSystemVersion: "Android 12",
      colorOptions: ["Volcanic Black", "Emerald Forest", "Alpine Green"],
    },
  },
  {
    brand: "Oppo",
    image: "https://i.ibb.co.com/L6nXj1G/Redmi-Note-11.jpg",
    model: "Find X5",
    condition: "New",
    inStock: true,
    price: "69999.00",
    operatingSystem: "Android",
    releaseDate: "2022",
    weightAndDimensions: {
      height: "159.3mm",
      width: "73.3mm",
      depth: "8.7mm",
      weight: "196g",
    },
    display: {
      screenSize: "6.55 inches",
      resolution: "2412 x 1080 pixels",
      displayTechnology: "AMOLED",
      refreshRate: "120Hz",
    },
    performance: {
      processor: "Snapdragon 8 Gen 1",
      ram: "8GB/12GB",
      storageOptions: ["256GB"],
    },
    camera: {
      mainCamera: "50MP wide, 13MP telephoto, 6MP ultra-wide",
      frontCamera: "32MP",
      videoRecording: "4K at 30fps",
    },
    battery: {
      batteryCapacity: "4800mAh",
      chargingSpeed: "80W fast charging",
      batteryLife: "Up to 19 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "No",
      speakers: "Stereo",
    },
    biometrics: "Under-display fingerprint scanner",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.2, Wi-Fi 6",
      waterDustResistance: "IP68 rating",
      sensors: ["Accelerometer", "Gyroscope", "Proximity sensor"],
      operatingSystemVersion: "Android 12",
      colorOptions: ["White", "Black"],
    },
  },
  {
    brand: "Realme",
    image: "https://i.ibb.co.com/Kb2hhbH/X20.jpg",
    model: "GT 2 Pro",
    condition: "New",
    inStock: true,
    price: "62999.00",
    operatingSystem: "Android",
    releaseDate: "2022",
    weightAndDimensions: {
      height: "163.2mm",
      width: "75.5mm",
      depth: "8.2mm",
      weight: "189g",
    },
    display: {
      screenSize: "6.7 inches",
      resolution: "3216 x 1440 pixels",
      displayTechnology: "LTPO2 AMOLED",
      refreshRate: "120Hz",
    },
    performance: {
      processor: "Snapdragon 8 Gen 1",
      ram: "8GB/12GB",
      storageOptions: ["128GB", "256GB"],
    },
    camera: {
      mainCamera: "50MP wide, 50MP ultra-wide, 2MP macro",
      frontCamera: "32MP",
      videoRecording: "8K at 24fps",
    },
    battery: {
      batteryCapacity: "5000mAh",
      chargingSpeed: "65W fast charging",
      batteryLife: "Up to 20 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "No",
      speakers: "Stereo",
    },
    biometrics: "Under-display fingerprint scanner",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.2, Wi-Fi 6",
      waterDustResistance: "IP68 rating",
      sensors: ["Accelerometer", "Proximity sensor", "Gyroscope"],
      operatingSystemVersion: "Android 12",
      colorOptions: ["White", "Black", "Green"],
    },
  },
  {
    brand: "Vivo",
    image: "https://i.ibb.co.com/JHQMHvS/X80.jpg",
    model: "X80",
    condition: "New",
    inStock: true,
    price: "59999.00",
    operatingSystem: "Android",
    releaseDate: "2022",
    weightAndDimensions: {
      height: "165.1mm",
      width: "75.2mm",
      depth: "8.3mm",
      weight: "206g",
    },
    display: {
      screenSize: "6.78 inches",
      resolution: "2400 x 1080 pixels",
      displayTechnology: "AMOLED",
      refreshRate: "120Hz",
    },
    performance: {
      processor: "Dimensity 9000",
      ram: "8GB/12GB",
      storageOptions: ["128GB", "256GB"],
    },
    camera: {
      mainCamera: "50MP wide, 12MP ultra-wide, 12MP portrait",
      frontCamera: "32MP",
      videoRecording: "4K at 60fps",
    },
    battery: {
      batteryCapacity: "4500mAh",
      chargingSpeed: "80W fast charging",
      batteryLife: "Up to 18 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "No",
      speakers: "Stereo",
    },
    biometrics: "Under-display fingerprint scanner",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.2, Wi-Fi 6",
      waterDustResistance: "IP68 rating",
      sensors: ["Accelerometer", "Gyroscope", "Proximity sensor"],
      operatingSystemVersion: "Android 12",
      colorOptions: ["Cosmic Black", "Urban Blue"],
    },
  },
  {
    brand: "Sony",
    image: "https://i.ibb.co.com/dkCBRVk/Xperia-1-III.jpg",
    model: "Xperia 1 III",
    condition: "New",
    inStock: true,
    price: "99999.00",
    operatingSystem: "Android",
    releaseDate: "2021",
    weightAndDimensions: {
      height: "165mm",
      width: "71mm",
      depth: "8.2mm",
      weight: "188g",
    },
    display: {
      screenSize: "6.5 inches",
      resolution: "3840 x 1644 pixels",
      displayTechnology: "OLED",
      refreshRate: "120Hz",
    },
    performance: {
      processor: "Snapdragon 888",
      ram: "12GB",
      storageOptions: ["256GB", "512GB"],
    },
    camera: {
      mainCamera: "12MP wide, 12MP ultra-wide, 12MP telephoto",
      frontCamera: "8MP",
      videoRecording: "4K at 120fps",
    },
    battery: {
      batteryCapacity: "4500mAh",
      chargingSpeed: "30W fast charging",
      batteryLife: "Up to 20 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speakers: "Stereo",
    },
    biometrics: "Fingerprint scanner (side-mounted)",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.1, Wi-Fi 6",
      waterDustResistance: "IP65/IP68 rating",
      sensors: ["Accelerometer", "Gyroscope", "Proximity sensor"],
      operatingSystemVersion: "Android 11",
      colorOptions: ["Black", "Purple", "White"],
    },
  },
  {
    brand: "Nokia",
    image: "https://i.ibb.co.com/rd5DJdf/P50.jpg",
    model: "X20",
    condition: "New",
    inStock: true,
    price: "34999.00",
    operatingSystem: "Android",
    releaseDate: "2021",
    weightAndDimensions: {
      height: "171mm",
      width: "78mm",
      depth: "9mm",
      weight: "220g",
    },
    display: {
      screenSize: "6.67 inches",
      resolution: "2400 x 1080 pixels",
      displayTechnology: "IPS LCD",
      refreshRate: "60Hz",
    },
    performance: {
      processor: "Snapdragon 480",
      ram: "8GB",
      storageOptions: ["128GB"],
    },
    camera: {
      mainCamera: "64MP wide, 5MP ultra-wide, 2MP macro, 2MP depth",
      frontCamera: "32MP",
      videoRecording: "4K at 30fps",
    },
    battery: {
      batteryCapacity: "4470mAh",
      chargingSpeed: "18W fast charging",
      batteryLife: "Up to 2 days",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speakers: "Mono",
    },
    biometrics: "Side-mounted fingerprint scanner",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.0, Wi-Fi",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer", "Proximity sensor"],
      operatingSystemVersion: "Android 11",
      colorOptions: ["Midnight Sun", "Nordic Blue"],
    },
  },
  {
    brand: "Huawei",
    image: "https://i.ibb.co.com/ZLSFGJY/Find-X5.jpg",
    model: "P50",
    condition: "New",
    inStock: true,
    price: "64999.00",
    operatingSystem: "HarmonyOS",
    releaseDate: "2021",
    weightAndDimensions: {
      height: "158.8mm",
      width: "73.4mm",
      depth: "7.9mm",
      weight: "181g",
    },
    display: {
      screenSize: "6.5 inches",
      resolution: "2700 x 1224 pixels",
      displayTechnology: "OLED",
      refreshRate: "90Hz",
    },
    performance: {
      processor: "Snapdragon 888",
      ram: "8GB",
      storageOptions: ["128GB", "256GB"],
    },
    camera: {
      mainCamera: "50MP wide, 12MP ultra-wide, 13MP telephoto",
      frontCamera: "13MP",
      videoRecording: "4K at 30fps",
    },
    battery: {
      batteryCapacity: "4100mAh",
      chargingSpeed: "66W fast charging",
      batteryLife: "Up to 15 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "No",
      speakers: "Stereo",
    },
    biometrics: "Under-display fingerprint scanner",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.2, Wi-Fi",
      waterDustResistance: "IP68 rating",
      sensors: ["Accelerometer", "Gyroscope", "Proximity sensor"],
      operatingSystemVersion: "HarmonyOS 2.0",
      colorOptions: ["White", "Black", "Blue"],
    },
  },
  {
    brand: "Apple",
    image: "https://i.ibb.co.com/M5V4C8w/i-Phone-13-Pro.jpg",
    model: "iPhone 13 Pro",
    condition: "New",
    inStock: true,
    price: "112990",
    operatingSystem: "iOS",
    releaseDate: "2021",
    weightAndDimensions: {
      height: "146.7mm",
      width: "71.5mm",
      depth: "7.65mm",
      weight: "204g",
    },
    display: {
      screenSize: "6.1 inches",
      resolution: "1170 x 2532 pixels",
      displayTechnology: "Super Retina XDR OLED",
      refreshRate: "120Hz",
    },
    performance: {
      processor: "A15 Bionic",
      ram: "6GB",
      storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    },
    camera: {
      mainCamera: "12MP wide, 12MP telephoto, 12MP ultrawide",
      frontCamera: "12MP",
      videoRecording: "4K at 60fps",
    },
    battery: {
      batteryCapacity: "3095mAh",
      chargingSpeed: "20W fast charging",
      batteryLife: "Up to 22 hours",
    },
    inputsOutputs: {
      chargingPort: "Lightning",
      simCardType: "Nano-SIM, eSIM",
      headphoneJack: "No",
      speakers: "Stereo",
    },
    biometrics: "Face ID",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.0, Wi-Fi 6",
      waterDustResistance: "IP68",
      sensors: ["Face ID, Accelerometer, Gyroscope"],
      operatingSystemVersion: "iOS 15",
      colorOptions: ["Graphite", "Gold", "Silver", "Sierra Blue"],
    },
  },
  {
    brand: "Xiaomi",
    image: "https://i.ibb.co.com/L6nXj1G/Redmi-Note-11.jpg",
    model: "Redmi Note 11",
    condition: "New",
    inStock: true,
    price: "18499",
    operatingSystem: "Android",
    releaseDate: "2022",
    weightAndDimensions: {
      height: "159.9mm",
      width: "73.9mm",
      depth: "8.1mm",
      weight: "179g",
    },
    display: {
      screenSize: "6.43 inches",
      resolution: "1080 x 2400 pixels",
      displayTechnology: "AMOLED",
      refreshRate: "90Hz",
    },
    performance: {
      processor: "Snapdragon 680",
      ram: "4GB",
      storageOptions: ["64GB", "128GB"],
    },
    camera: {
      mainCamera: "50MP wide, 8MP ultrawide, 2MP macro, 2MP depth",
      frontCamera: "13MP",
      videoRecording: "1080p at 30fps",
    },
    battery: {
      batteryCapacity: "5000mAh",
      chargingSpeed: "33W fast charging",
      batteryLife: "Up to 16 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speakers: "Stereo",
    },
    biometrics: "Fingerprint scanner (side-mounted), Face unlock",
    otherFeatures: {
      connectivity: "4G, Bluetooth 5.0, Wi-Fi",
      waterDustResistance: "IP53",
      sensors: ["Accelerometer, Proximity sensor"],
      operatingSystemVersion: "Android 12",
      colorOptions: ["Graphite Gray", "Twilight Blue", "Star Blue"],
    },
  },
  {
    brand: "OnePlus",
    image: "https://i.ibb.co.com/N2fW4N7/9-Pro.jpg",
    model: "9 Pro",
    condition: "New",
    inStock: true,
    price: "64999",
    operatingSystem: "Android",
    releaseDate: "2021",
    weightAndDimensions: {
      height: "163.2mm",
      width: "73.6mm",
      depth: "8.7mm",
      weight: "197g",
    },
    display: {
      screenSize: "6.7 inches",
      resolution: "1440 x 3216 pixels",
      displayTechnology: "Fluid AMOLED",
      refreshRate: "120Hz",
    },
    performance: {
      processor: "Snapdragon 888",
      ram: "8GB",
      storageOptions: ["128GB", "256GB"],
    },
    camera: {
      mainCamera: "48MP wide, 8MP telephoto, 50MP ultrawide, 2MP monochrome",
      frontCamera: "16MP",
      videoRecording: "8K at 30fps",
    },
    battery: {
      batteryCapacity: "4500mAh",
      chargingSpeed: "65W fast charging",
      batteryLife: "Up to 12 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "No",
      speakers: "Stereo",
    },
    biometrics: "Fingerprint scanner (under-display), Face unlock",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.2, Wi-Fi 6",
      waterDustResistance: "IP68",
      sensors: ["Accelerometer, Gyroscope, Proximity sensor"],
      operatingSystemVersion: "Android 12",
      colorOptions: ["Pine Green", "Morning Mist", "Stellar Black"],
    },
  },
  {
    brand: "Google",
    image: "https://i.ibb.co.com/mHPGvxp/Pixel-6-Pro.jpg",
    model: "Pixel 6 Pro",
    condition: "New",
    inStock: true,
    price: "71999",
    operatingSystem: "Android",
    releaseDate: "2021",
    weightAndDimensions: {
      height: "163.9mm",
      width: "75.9mm",
      depth: "8.9mm",
      weight: "210g",
    },
    display: {
      screenSize: "6.71 inches",
      resolution: "1440 x 3120 pixels",
      displayTechnology: "LTPO AMOLED",
      refreshRate: "120Hz",
    },
    performance: {
      processor: "Google Tensor",
      ram: "12GB",
      storageOptions: ["128GB", "256GB", "512GB"],
    },
    camera: {
      mainCamera: "50MP wide, 48MP telephoto, 12MP ultrawide",
      frontCamera: "11.1MP",
      videoRecording: "4K at 60fps",
    },
    battery: {
      batteryCapacity: "5003mAh",
      chargingSpeed: "30W fast charging",
      batteryLife: "Up to 13 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, eSIM",
      headphoneJack: "No",
      speakers: "Stereo",
    },
    biometrics: "Fingerprint scanner (under-display), Face unlock",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.2, Wi-Fi 6E",
      waterDustResistance: "IP68",
      sensors: ["Accelerometer, Gyroscope, Proximity sensor"],
      operatingSystemVersion: "Android 12",
      colorOptions: ["Stormy Black", "Cloudy White", "Sorta Sunny"],
    },
  },
  {
    brand: "Vivo",
    image: "https://i.ibb.co.com/YN8WVkN/Y21.jpg",
    model: "Y21",
    condition: "New",
    inStock: true,
    price: "14999",
    operatingSystem: "Android",
    releaseDate: "2021",
    weightAndDimensions: {
      height: "164.3mm",
      width: "76.1mm",
      depth: "8.4mm",
      weight: "182g",
    },
    display: {
      screenSize: "6.51 inches",
      resolution: "720 x 1600 pixels",
      displayTechnology: "IPS LCD",
      refreshRate: "60Hz",
    },
    performance: {
      processor: "Mediatek Helio P35",
      ram: "4GB",
      storageOptions: ["64GB", "128GB", "Expandable up to 1TB"],
    },
    camera: {
      mainCamera: "13MP wide, 2MP macro",
      frontCamera: "8MP",
      videoRecording: "1080p at 30fps",
    },
    battery: {
      batteryCapacity: "5000mAh",
      chargingSpeed: "18W fast charging",
      batteryLife: "Up to 14 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speakers: "Mono",
    },
    biometrics: "Fingerprint scanner (side-mounted), Face unlock",
    otherFeatures: {
      connectivity: "4G, Bluetooth 5.0, Wi-Fi",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer, Proximity sensor"],
      operatingSystemVersion: "Android 11",
      colorOptions: ["Diamond Glow", "Midnight Blue"],
    },
  },
  {
    brand: "Oppo",
    image: "https://i.ibb.co.com/QckwvGD/Reno6-5G.jpg",
    model: "Reno6 5G",
    condition: "New",
    inStock: true,
    price: "29999",
    operatingSystem: "Android",
    releaseDate: "2021",
    weightAndDimensions: {
      height: "156.8mm",
      width: "72.1mm",
      depth: "7.6mm",
      weight: "182g",
    },
    display: {
      screenSize: "6.43 inches",
      resolution: "1080 x 2400 pixels",
      displayTechnology: "AMOLED",
      refreshRate: "90Hz",
    },
    performance: {
      processor: "Mediatek Dimensity 900",
      ram: "8GB",
      storageOptions: ["128GB"],
    },
    camera: {
      mainCamera: "64MP wide, 8MP ultrawide, 2MP macro",
      frontCamera: "32MP",
      videoRecording: "4K at 30fps",
    },
    battery: {
      batteryCapacity: "4300mAh",
      chargingSpeed: "65W fast charging",
      batteryLife: "Up to 11 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "No",
      speakers: "Mono",
    },
    biometrics: "Fingerprint scanner (under-display), Face unlock",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.2, Wi-Fi 6",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer, Gyroscope, Proximity sensor"],
      operatingSystemVersion: "Android 11",
      colorOptions: ["Aurora", "Stellar Black"],
    },
  },
  {
    brand: "Realme",
    image: "https://i.ibb.co.com/xhbtmVz/GT-Master-Edition.jpg",
    model: "GT Master Edition",
    condition: "New",
    inStock: true,
    price: "25999",
    operatingSystem: "Android",
    releaseDate: "2021",
    weightAndDimensions: {
      height: "159.2mm",
      width: "73.5mm",
      depth: "8mm",
      weight: "174g",
    },
    display: {
      screenSize: "6.43 inches",
      resolution: "1080 x 2400 pixels",
      displayTechnology: "Super AMOLED",
      refreshRate: "120Hz",
    },
    performance: {
      processor: "Snapdragon 778G",
      ram: "6GB",
      storageOptions: ["128GB", "256GB"],
    },
    camera: {
      mainCamera: "64MP wide, 8MP ultrawide, 2MP macro",
      frontCamera: "32MP",
      videoRecording: "4K at 30fps",
    },
    battery: {
      batteryCapacity: "4300mAh",
      chargingSpeed: "65W fast charging",
      batteryLife: "Up to 12 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speakers: "Mono",
    },
    biometrics: "Fingerprint scanner (under-display), Face unlock",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.2, Wi-Fi 6",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer, Gyroscope, Proximity sensor"],
      operatingSystemVersion: "Android 11",
      colorOptions: ["Voyager Grey", "Daybreak Blue"],
    },
  },
  {
    brand: "Motorola",
    image: "https://i.ibb.co.com/gPg2cvs/Edge-20.jpg",
    model: "Edge 20",
    condition: "New",
    inStock: true,
    price: "34999",
    operatingSystem: "Android",
    releaseDate: "2021",
    weightAndDimensions: {
      height: "163mm",
      width: "76mm",
      depth: "7mm",
      weight: "163g",
    },
    display: {
      screenSize: "6.7 inches",
      resolution: "1080 x 2400 pixels",
      displayTechnology: "OLED",
      refreshRate: "144Hz",
    },
    performance: {
      processor: "Snapdragon 778G",
      ram: "8GB",
      storageOptions: ["128GB", "256GB"],
    },
    camera: {
      mainCamera: "108MP wide, 16MP ultrawide, 8MP telephoto",
      frontCamera: "32MP",
      videoRecording: "4K at 30fps",
    },
    battery: {
      batteryCapacity: "4000mAh",
      chargingSpeed: "30W fast charging",
      batteryLife: "Up to 10 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "No",
      speakers: "Mono",
    },
    biometrics: "Fingerprint scanner (side-mounted), Face unlock",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.2, Wi-Fi 6",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer, Gyroscope, Proximity sensor"],
      operatingSystemVersion: "Android 11",
      colorOptions: ["Frosted White", "Frosted Emerald", "Frosted Grey"],
    },
  },
  {
    brand: "Nokia",
    image: "https://i.ibb.co.com/qdFcnQq/G50.jpg",
    model: "G50",
    condition: "New",
    inStock: true,
    price: "19999",
    operatingSystem: "Android",
    releaseDate: "2021",
    weightAndDimensions: {
      height: "173.8mm",
      width: "77.7mm",
      depth: "8.9mm",
      weight: "220g",
    },
    display: {
      screenSize: "6.82 inches",
      resolution: "720 x 1560 pixels",
      displayTechnology: "IPS LCD",
      refreshRate: "60Hz",
    },
    performance: {
      processor: "Snapdragon 480 5G",
      ram: "4GB",
      storageOptions: ["64GB", "128GB", "Expandable up to 512GB"],
    },
    camera: {
      mainCamera: "48MP wide, 5MP ultrawide, 2MP depth sensor",
      frontCamera: "8MP",
      videoRecording: "1080p at 30fps",
    },
    battery: {
      batteryCapacity: "5000mAh",
      chargingSpeed: "18W fast charging",
      batteryLife: "Up to 15 hours",
    },
    inputsOutputs: {
      chargingPort: "USB Type-C",
      simCardType: "Nano-SIM, Dual SIM",
      headphoneJack: "Yes",
      speakers: "Mono",
    },
    biometrics: "Fingerprint scanner (side-mounted), Face unlock",
    otherFeatures: {
      connectivity: "5G, Bluetooth 5.0, Wi-Fi",
      waterDustResistance: "No official rating",
      sensors: ["Accelerometer, Proximity sensor"],
      operatingSystemVersion: "Android 11",
      colorOptions: ["Ocean Blue", "Midnight Sun"],
    },
  },
];

const ProductsMobile = () => {
  const itemsPerPage = 9; // Display 9 products per page

  // Extract unique filter options from mobileData
  const uniqueBrands = [...new Set(mobileData.map((item) => item.brand))];
  const uniqueConditions = [
    ...new Set(mobileData.map((item) => item.condition)),
  ];
  const uniqueOperatingSystems = [
    ...new Set(mobileData.map((item) => item.operatingSystem)),
  ];

  // States for filters and pagination
  const [filters, setFilters] = useState({
    brand: "",
    condition: "",
    priceRange: [0, 100000],
    operatingSystem: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered products based on filters
  const filteredProducts = mobileData.filter((product) => {
    const productPrice = parseFloat(product.price);
    return (
      (filters.brand ? product.brand === filters.brand : true) &&
      (filters.condition ? product.condition === filters.condition : true) &&
      (filters.operatingSystem
        ? product.operatingSystem === filters.operatingSystem
        : true) &&
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
  const [liked, setLiked] = useState(Array(mobileData.length).fill(false));

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mobile Brand Shop || Products Mobile</title>
      </Helmet>
      {/* Search and Categories */}
      <TopSection />
      <div className="text-center mb-8">
        <p className="font-bold text-3xl">View Our Mobiles</p>
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

          {/* Operating System Filter */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Operating System</label>
            <select
              name="operatingSystem"
              value={filters.operatingSystem}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded bg-white"
            >
              <option value="">All</option>
              {uniqueOperatingSystems.map((os, index) => (
                <option key={index} value={os}>
                  {os}
                </option>
              ))}
            </select>
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
                className={`join-item btn  text-lg text-white hover:text-black  ${
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
                className={`join-item btn  text-lg text-white hover:text-black  ${
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

export default ProductsMobile;
