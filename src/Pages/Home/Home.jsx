import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AboutUs from "./AboutUs/AboutUs";
import Brands from "./Brands/Brands";
import Faq from "./FAQ/FAQ";
import HomeBanners from "./HomeBanners/HomeBanners";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader";

const Home = () => {
  const axiosPublic = useAxiosPublic();

  // Fetching Home Banner
  const {
    data: HomeBannerData,
    isLoading: HomeBannerIsLoading,
    error: HomeBannerError,
  } = useQuery({
    queryKey: ["HomeBanner"],
    queryFn: () => axiosPublic.get(`/HomeBanner`).then((res) => res.data),
  });

  // Fetching Home Brand
  const {
    data: HomeBrandData,
    isLoading: HomeBrandIsLoading,
    error: HomeBrandError,
  } = useQuery({
    queryKey: ["HomeBrand"],
    queryFn: () => axiosPublic.get(`/HomeBrand`).then((res) => res.data),
  });

  // Fetching Home AboutUs
  const {
    data: HomeAboutUsData,
    isLoading: HomeAboutUsIsLoading,
    error: HomeAboutUsError,
  } = useQuery({
    queryKey: ["HomeAboutUs"],
    queryFn: () => axiosPublic.get(`/HomeAboutUs`).then((res) => res.data),
  });

  // Fetching Home FAQ
  const {
    data: HomeFAQData,
    isLoading: HomeFAQIsLoading,
    error: HomeFAQError,
  } = useQuery({
    queryKey: ["HomeFAQ"],
    queryFn: () => axiosPublic.get(`/HomeFAQ`).then((res) => res.data),
  });

  // Loading state
  if (
    HomeBannerIsLoading ||
    HomeBrandIsLoading ||
    HomeAboutUsIsLoading ||
    HomeFAQIsLoading
  ) {
    return <Loader />;
  }

  // Error state
  if (HomeBannerError || HomeBrandError || HomeAboutUsError || HomeFAQError) {
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
    <div className="lg:mt-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mobile Brand Shop || Home</title>
      </Helmet>
      <HomeBanners HomeBannerData={HomeBannerData}></HomeBanners>
      <Brands HomeBrandData={HomeBrandData}></Brands>
      <AboutUs HomeAboutUsData={HomeAboutUsData}></AboutUs>
      <Faq HomeFAQData={HomeFAQData}></Faq>
    </div>
  );
};

export default Home;
