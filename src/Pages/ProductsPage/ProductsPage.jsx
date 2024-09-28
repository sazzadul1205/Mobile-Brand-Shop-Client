import DesktopComponent from "./DesktopComponent/DesktopComponent";
import LaptopComponent from "./LaptopComponent/LaptopComponent";
import MobileComponent from "./MobileComponent/MobileComponent";
import ProductPageBanner from "./ProductPageBanner/ProductPageBanner";
import TabletComponent from "./TabletComponent/TabletComponent";
import TopSection from "./TopSection/TopSection";

const ProductsPage = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-green-300 py-10 pt-28 text-black">
      {/* Search and Categories */}
      <TopSection></TopSection>
      {/* Banner */}
      <ProductPageBanner></ProductPageBanner>
      {/* Mobile */}
      <MobileComponent></MobileComponent>
      {/* Laptop */}
      <LaptopComponent></LaptopComponent>
      {/* Tablet */}
      <TabletComponent></TabletComponent>
      {/* Desktop */}
      <DesktopComponent></DesktopComponent>
    </div>
  );
};

export default ProductsPage;
