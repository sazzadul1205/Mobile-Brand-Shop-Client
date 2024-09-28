import AboutUs from "./AboutUs/AboutUs";
import Brands from "./Brands/Brands";
import Faq from "./FAQ/FAQ";
import HomeBanners from "./HomeBanners/HomeBanners";
import {Helmet} from "react-helmet";


const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mobile Brand Shop || Home</title>
      </Helmet>
      <HomeBanners></HomeBanners>
      <Brands></Brands>
      <AboutUs></AboutUs>
      <Faq></Faq>
    </div>
  );
};

export default Home;
