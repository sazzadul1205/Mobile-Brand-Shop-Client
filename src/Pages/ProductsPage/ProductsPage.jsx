import DesktopSlider from "./DesktopSlider/DesktopSlider";
import LaptopSlider from "./LaptopSlider/LaptopSlider";
import MobileSlider from "./MobileSlider/MobileSlider";
import ProductPageBanner from "./ProductPageBanner/ProductPageBanner";
import TabletSlider from "./TabletSlider/TabletSlider";
import TopSection from "./TopSection/TopSection";

const ProductsPage = () => {
  return (
    <div className="bg-gradient-to-b from-green-500 to-white py-24 text-black">
      {/* Search and Categories */}
      <TopSection></TopSection>
      {/* Banner */}
      <ProductPageBanner></ProductPageBanner>
      {/* Mobile */}
      <MobileSlider></MobileSlider>
      {/* Laptop */}
      <LaptopSlider></LaptopSlider>
      {/* Tablet */}
      <TabletSlider></TabletSlider>
      {/* Desktop */}
      <DesktopSlider></DesktopSlider>
    </div>
  );
};

export default ProductsPage;
