import { Helmet } from "react-helmet";
import DesktopComponent from "./DesktopComponent/DesktopComponent";
import LaptopComponent from "./LaptopComponent/LaptopComponent";
import MobileComponent from "./MobileComponent/MobileComponent";
import ProductPageBanner from "./ProductPageBanner/ProductPageBanner";
import TabletComponent from "./TabletComponent/TabletComponent";
import TopSection from "./TopSection/TopSection";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Components/Loader";

const ProductsPage = () => {
  const axiosPublic = useAxiosPublic();

  // Fetching Product Banners
  const {
    data: ProductBannersData,
    isLoading: ProductBannersIsLoading,
    error: ProductBannersError,
  } = useQuery({
    queryKey: ["ProductBanners"],
    queryFn: () => axiosPublic.get(`/ProductBanners`).then((res) => res.data),
  });

  // Fetching Mobile Products
  const {
    data: MobileProductsData,
    isLoading: MobileProductsIsLoading,
    error: MobileProductsError,
  } = useQuery({
    queryKey: ["MobileProducts"],
    queryFn: () => {
      const limit = 8; 
      const productType = "Mobile"; 
      return axiosPublic
        .get(`/Products?limit=${limit}&productType=${productType}`)
        .then((res) => res.data);
    },
  });

  // Fetching Laptop Products
  const {
    data: LaptopProductsData,
    isLoading: LaptopProductsIsLoading,
    error: LaptopProductsError,
  } = useQuery({
    queryKey: ["LaptopProducts"],
    queryFn: () => {
      const limit = 8; 
      const productType = "Laptop"; 
      return axiosPublic
        .get(`/Products?limit=${limit}&productType=${productType}`)
        .then((res) => res.data);
    },
  });

  // Fetching Tablet Products
  const {
    data: TabletProductsData,
    isLoading: TabletProductsIsLoading,
    error: TabletProductsError,
  } = useQuery({
    queryKey: ["TabletProducts"],
    queryFn: () => {
      const limit = 8; 
      const productType = "Tablet"; 
      return axiosPublic
        .get(`/Products?limit=${limit}&productType=${productType}`)
        .then((res) => res.data);
    },
  });

  // Fetching Desktop Products
  const {
    data: DesktopProductsData,
    isLoading: DesktopProductsIsLoading,
    error: DesktopProductsError,
  } = useQuery({
    queryKey: ["DesktopProducts"],
    queryFn: () => {
      const limit = 8; 
      const productType = "Desktop"; 
      return axiosPublic
        .get(`/Products?limit=${limit}&productType=${productType}`)
        .then((res) => res.data);
    },
  });

  // Loading state
  if (
    ProductBannersIsLoading ||
    MobileProductsIsLoading ||
    LaptopProductsIsLoading ||
    TabletProductsIsLoading ||
    DesktopProductsIsLoading
  ) {
    return <Loader />;
  }

  // Error state
  if (
    ProductBannersError ||
    MobileProductsError ||
    LaptopProductsError ||
    TabletProductsError ||
    DesktopProductsError
  ) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 to-white">
        <p className="text-center text-red-500 font-bold text-3xl mb-8">
          Something went wrong. Please reload the page.
        </p>
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-300"
          onClick={() => window.location.reload()} // Inline reload function
        >
          Reload
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-green-100 to-green-300 py-10 pt-28 text-black">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mobile Brand Shop || Products Page</title>
      </Helmet>
      {/* Search and Categories */}
      <TopSection></TopSection>
      {/* Banner */}
      <ProductPageBanner
        ProductBannersData={ProductBannersData}
      ></ProductPageBanner>
      {/* Mobile */}
      <MobileComponent
        MobileProductsData={MobileProductsData}
      ></MobileComponent>
      {/* Laptop */}
      <LaptopComponent
        LaptopProductsData={LaptopProductsData}
      ></LaptopComponent>
      {/* Tablet */}
      <TabletComponent
        TabletProductsData={TabletProductsData}
      ></TabletComponent>
      {/* Desktop */}
      <DesktopComponent
        DesktopProductsData={DesktopProductsData}
      ></DesktopComponent>
    </div>
  );
};

export default ProductsPage;
