import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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
    productType: "Mobile",
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

const ManageProducts = () => {
  const [filteredData, setFilteredData] = useState(mobileData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedProductType, setSelectedProductType] = useState("");
  const [brands, setBrands] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetching unique brands and product types from mobileData
  useEffect(() => {
    const uniqueBrands = Array.from(
      new Set(mobileData.map((item) => item.brand))
    );
    setBrands(uniqueBrands);

    const uniqueProductTypes = Array.from(
      new Set(mobileData.map((item) => item.productType))
    );
    setProductTypes(uniqueProductTypes);
  }, []);

  // Function to handle filtering
  const filterData = () => {
    const filtered = mobileData.filter((product) => {
      const matchesBrand = selectedBrand
        ? product.brand === selectedBrand
        : true;
      const matchesProductType = selectedProductType
        ? product.productType === selectedProductType
        : true;
      return matchesBrand && matchesProductType;
    });
    setFilteredData(filtered);
  };

  // Effect to filter data whenever filters change
  useEffect(() => {
    filterData();
  }, [selectedBrand, selectedProductType]);

  const openModal = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_2").showModal();
  };

  const closeModal = () => {
    document.getElementById("my_modal_2").close();
    setSelectedProduct(null);
  };


  return (
    <div className="bg-white ml-1">
      {/* Title */}
      <div className="px-5 py-5 text-black border-b border-black bg-gray-200">
        <p className="text-2xl font-bold text-center">Manage Products</p>
      </div>

      {/* Filters */}
      <div className="flex px-10 items-center text-black gap-5">
        {/* Search by Model */}
        <label className="input border border-black flex items-center gap-2 w-1/2 my-4 bg-white">
          <input
            type="text"
            className="grow bg-white"
            placeholder="Search by model"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              filterData(); // Call filter function directly
            }}
          />
          <FaSearch className="h-4 w-4 text-black" />
        </label>

        {/* Dropdown for Brand Filter */}
        <select
          className="border border-gray-300 p-2 w-1/4 bg-white"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Dropdown for Product Type Filter */}
        <select
          className="border border-gray-300 p-2 w-1/4 bg-white"
          value={selectedProductType}
          onChange={(e) => setSelectedProductType(e.target.value)}
        >
          <option value="">All Product Types</option>
          {productTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <div className="overflow-x-auto px-5 py-5">
        <table className="table text-black w-full">
          <thead className="bg-gray-300 text-black font-bold">
            <tr>
              <th>Image</th>
              <th>Model</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Condition</th>
              <th>Product Type</th>
              <th>View More</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((product, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={product.image}
                    alt={product.model}
                    className="w-12 h-12"
                  />
                </td>
                <td>{product.model}</td>
                <td>
                  <div className="flex items-center">
                    {product.price}
                    <FaBangladeshiTakaSign className="inline ml-2" />
                  </div>
                </td>
                <td>{product.brand}</td>
                <td>{product.condition}</td>
                <td>{product.productType}</td>
                <td>
                  <button
                    className="bg-orange-500 hover:bg-orange-400 font-bold text-white px-5 py-2"
                    onClick={() => openModal(product)}
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      {selectedProduct && (
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box bg-white max-w-5xl max-h-[800px] text-black">
            <div className="border-b border-black pb-3 flex justify-between items-center px-10">
              <p className="text-xl font-bold">View More</p>
              <p
                className="font-bold text-3xl cursor-pointer"
                onClick={closeModal}
              >
                x
              </p>
            </div>
            <div className="flex justify-between px-10 py-5 gap-5 ">
              {/* Left */}
              <div>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.model}
                  className="w-[400px]"
                />
                <h3 className="font-bold text-xl p-2 border border-gray-300">
                  {selectedProduct.brand} {selectedProduct.model}
                </h3>
                {selectedProduct.operatingSystem && (
                  <h3 className="font-medium text-xl p-2 border border-gray-300">
                    <span className="font-semibold">Operating System</span> :{" "}
                    {selectedProduct.operatingSystem}
                  </h3>
                )}
                {selectedProduct.condition && (
                  <h3 className="font-medium text-xl p-2 border border-gray-300">
                    <span className="font-semibold">Condition</span> :{" "}
                    {selectedProduct.condition}
                  </h3>
                )}
                {selectedProduct.releaseDate && (
                  <h3 className="font-medium text-xl p-2 border border-gray-300">
                    <span className="font-semibold">Release Date</span> :{" "}
                    {selectedProduct.releaseDate}
                  </h3>
                )}
                {selectedProduct.price && (
                  <p className="font-medium text-xl pt-5 flex items-center">
                    <span className="font-semibold">Price</span> :{" "}
                    {selectedProduct.price}
                    <FaBangladeshiTakaSign className="text-black text-lg ml-2" />
                  </p>
                )}
                {selectedProduct.inStock && (
                  <p className="text-green-500">In Stock</p>
                )}
              </div>

              {/* Right */}
              <div className="space-y-3">
                {/* Weight and Dimensions */}
                {selectedProduct.weightAndDimensions && (
                  <div>
                    <h4 className="font-bold text-lg py-1">
                      Weight & Dimensions:
                    </h4>
                    {selectedProduct.weightAndDimensions.height && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Height :</span>
                        {selectedProduct.weightAndDimensions.height}
                      </p>
                    )}
                    {selectedProduct.weightAndDimensions.width && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Width :</span>
                        {selectedProduct.weightAndDimensions.width}
                      </p>
                    )}
                    {selectedProduct.weightAndDimensions.depth && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Depth :</span>
                        {selectedProduct.weightAndDimensions.depth}
                      </p>
                    )}
                    {selectedProduct.weightAndDimensions.weight && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Weight :</span>
                        {selectedProduct.weightAndDimensions.weight}
                      </p>
                    )}
                  </div>
                )}

                {/* Display */}
                {selectedProduct.display && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Display :</h4>
                    {selectedProduct.display.screenSize && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Screen Size :</span>
                        {selectedProduct.display.screenSize}
                      </p>
                    )}
                    {selectedProduct.display.resolution && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Resolution :</span>
                        {selectedProduct.display.resolution}
                      </p>
                    )}
                    {selectedProduct.display.displayType && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Display Type :</span>
                        {selectedProduct.display.displayType}
                      </p>
                    )}
                    {selectedProduct.display.displayTechnology && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Display Technology :
                        </span>
                        {selectedProduct.display.displayTechnology}
                      </p>
                    )}
                    {selectedProduct.display.touchScreen && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Touch Screen :</span>
                        {selectedProduct.display.touchScreen}
                      </p>
                    )}
                    {selectedProduct.display.refreshRate && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Refresh Rate :</span>
                        {selectedProduct.display.refreshRate}
                      </p>
                    )}
                  </div>
                )}

                {/* Performance */}
                {selectedProduct.performance && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Performance:</h4>
                    {selectedProduct.performance.processor && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Processor :</span>
                        {selectedProduct.performance.processor}
                      </p>
                    )}
                    {selectedProduct.performance.ram && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">RAM :</span>
                        {selectedProduct.performance.ram}
                      </p>
                    )}
                    {selectedProduct.performance.storage && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Storage :</span>
                        {selectedProduct.performance.storage}
                      </p>
                    )}
                    {selectedProduct.performance.storageOptions && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Storage Options :</span>
                        {selectedProduct.performance.storageOptions}
                      </p>
                    )}
                    {selectedProduct.performance.graphicsCard && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Graphics Card :</span>
                        {selectedProduct.performance.graphicsCard}
                      </p>
                    )}
                    {selectedProduct.performance.coolingSystem && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Cooling System :</span>
                        {selectedProduct.performance.coolingSystem}
                      </p>
                    )}
                  </div>
                )}

                {/* camera */}
                {selectedProduct.camera && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Camera:</h4>
                    {selectedProduct.camera.rearCamera && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Rear Camera :</span>
                        {selectedProduct.camera.rearCamera}
                      </p>
                    )}
                    {selectedProduct.camera.mainCamera && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Main Camera :</span>
                        {selectedProduct.camera.mainCamera}
                      </p>
                    )}
                    {selectedProduct.camera.frontCamera && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Front Camera :</span>
                        {selectedProduct.camera.frontCamera}
                      </p>
                    )}
                    {selectedProduct.camera.videoRecording && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Video Recording :</span>
                        {selectedProduct.camera.videoRecording}
                      </p>
                    )}
                  </div>
                )}

                {/* Battery */}
                {selectedProduct.battery && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Battery:</h4>
                    {selectedProduct.battery.batteryCapacity && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Battery Capacity :
                        </span>
                        {selectedProduct.battery.batteryCapacity}
                      </p>
                    )}
                    {selectedProduct.battery.chargingSpeed && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Charging Speed :</span>
                        {selectedProduct.battery.chargingSpeed}
                      </p>
                    )}
                    {selectedProduct.battery.batteryLife && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Battery Life :</span>
                        {selectedProduct.battery.batteryLife}
                      </p>
                    )}
                  </div>
                )}

                {/* Inputs / Outputs */}
                {selectedProduct.inputsOutputs && (
                  <div>
                    <h4 className="font-bold text-lg py-1">
                      Inputs / Outputs:
                    </h4>
                    {selectedProduct.inputsOutputs.usbPorts && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">USB Ports:</span>
                        {selectedProduct.inputsOutputs.usbPorts}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.hdmiDisplayPort && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          HDMI Display Port :
                        </span>
                        {selectedProduct.inputsOutputs.hdmiDisplayPort}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.ethernetPort && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Ethernet Port :</span>
                        {selectedProduct.inputsOutputs.ethernetPort}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.thunderboltPorts && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Thunderbolt Ports:
                        </span>
                        {selectedProduct.inputsOutputs.thunderboltPorts}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.audioInputOutput && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Audio Input / Output :
                        </span>
                        {selectedProduct.inputsOutputs.audioInputOutput}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.powerSupply && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Power Supply :</span>
                        {selectedProduct.inputsOutputs.powerSupply}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.expansionSlots && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Expansion Slots :</span>
                        {selectedProduct.inputsOutputs.expansionSlots}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.chargingPort && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Charging Port :</span>
                        {selectedProduct.inputsOutputs.chargingPort}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.simCardType && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Sim Card Type :</span>
                        {selectedProduct.inputsOutputs.simCardType}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.simCardSlot && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Sim Card Slot :</span>
                        {selectedProduct.inputsOutputs.simCardSlot}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.headphoneJack && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Headphone Jack :</span>
                        {selectedProduct.inputsOutputs.headphoneJack}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.speakers && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Speakers :</span>
                        {selectedProduct.inputsOutputs.speakers}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.biometrics && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Biometrics :</span>
                        {selectedProduct.inputsOutputs.biometrics}
                      </p>
                    )}
                    {selectedProduct.inputsOutputs.sdCardSlot && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">SDCardSlot :</span>
                        {selectedProduct.inputsOutputs.sdCardSlot}
                      </p>
                    )}
                  </div>
                )}

                {/* Other Features */}
                {selectedProduct.biometrics && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Biometrics:</h4>
                    {selectedProduct.biometrics && (
                      <p className="border border-gray-400 py-2 px-5 ">
                        {selectedProduct.biometrics}
                      </p>
                    )}
                  </div>
                )}

                {/* Keyboard */}
                {selectedProduct.keyboard && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Keyboard :</h4>
                    {selectedProduct.keyboard && (
                      <p className="border border-gray-400 py-2 px-5 ">
                        {selectedProduct.keyboard}
                      </p>
                    )}
                  </div>
                )}

                {/* TrackpadMouseInput */}
                {selectedProduct.trackpadMouseInput && (
                  <div>
                    <h4 className="font-bold text-lg py-1">
                      Track Pad Mouse Input :
                    </h4>
                    {selectedProduct.trackpadMouseInput && (
                      <p className="border border-gray-400 py-2 px-5 ">
                        {selectedProduct.trackpadMouseInput}
                      </p>
                    )}
                  </div>
                )}

                {/* Other Features */}
                {selectedProduct.otherFeatures && (
                  <div>
                    <h4 className="font-bold text-lg py-1">Other Features:</h4>
                    {selectedProduct.otherFeatures.operatingSystem && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Operating System :
                        </span>
                        {selectedProduct.otherFeatures.operatingSystem}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.connectivity && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Connectivity :</span>
                        {selectedProduct.otherFeatures.connectivity}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.includedPeripherals && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Included Peripherals :
                        </span>
                        {selectedProduct.otherFeatures.includedPeripherals}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.accessoriesSupport && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Accessories Support :
                        </span>
                        {selectedProduct.otherFeatures.accessoriesSupport}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.webcam && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Webcam :</span>
                        {selectedProduct.otherFeatures.webcam}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.waterDustResistance && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Water Dust Resistance :
                        </span>
                        {selectedProduct.otherFeatures.waterDustResistance}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.speakers && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Speakers :</span>
                        {selectedProduct.otherFeatures.speakers}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.colorOptions && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">colorOptions :</span>
                        {selectedProduct.otherFeatures.colorOptions}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.operatingSystemVersion && (
                      <p className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">
                          Operating System Version :
                        </span>
                        {selectedProduct.otherFeatures.operatingSystemVersion}
                      </p>
                    )}
                    {selectedProduct.otherFeatures.sensors && (
                      <div className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Sensors :</span>
                        <ul className="flex">
                          {selectedProduct.otherFeatures.sensors.map(
                            (color, index) => (
                              <li className="mr-2 flex" key={index}>
                                {color},
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                    {selectedProduct.otherFeatures.colorOptions && (
                      <div className="border border-gray-400 py-2 px-5 grid grid-cols-2">
                        <span className="font-semibold">Color Options :</span>
                        <ul className="flex">
                          {selectedProduct.otherFeatures.colorOptions.map(
                            (color, index) => (
                              <li className="mr-2 flex" key={index}>
                                {color},
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ManageProducts;
