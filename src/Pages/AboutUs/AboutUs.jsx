import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Components/Loader";

const AboutUs = () => {
  const axiosPublic = useAxiosPublic();

  // Fetching About Us Data
  const {
    data: AboutUsData,
    isLoading: AboutUsIsLoading,
    error: AboutUsError,
  } = useQuery({
    queryKey: ["AboutUs"],
    queryFn: () => axiosPublic.get(`/AboutUs`).then((res) => res.data[0]), // Access the first item in the array
  });

  // Loading state
  if (AboutUsIsLoading) {
    return <Loader />;
  }

  // Error state
  if (AboutUsError) {
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
    <div className="bg-gradient-to-b from-green-300 to-white py-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mobile Brand Shop || About Us</title>
      </Helmet>
      {/* Header Section */}
      <div className="text-center pt-10 mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 font-bold">
          Learn more about our mission, vision, and values.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {AboutUsData.mission.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {AboutUsData.mission.description}
          </p>
          <img
            className="w-full h-64 object-cover rounded-lg shadow-md"
            src={AboutUsData.mission.imageUrl}
            alt="Our Mission"
          />
        </div>

        {/* Vision Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {AboutUsData.vision.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {AboutUsData.vision.description}
          </p>
          <img
            className="w-full h-64 object-cover rounded-lg shadow-md"
            src={AboutUsData.vision.imageUrl}
            alt="Our Vision"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-12 max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {AboutUsData.coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-400 to-white p-6 rounded-lg shadow-md hover:shadow-2xl text-center"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-semibold">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* History Section */}
      <div className="mt-16 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our History
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {AboutUsData.history.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md bg-gradient-to-br from-orange-300 to-white"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Year {item.year}: {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-green-600 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-lg text-gray-100 mb-6">
            Reach out to us with any questions or inquiries, and {"let's"} start
            a conversation!
          </p>
          <button className="bg-white text-green-600 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
