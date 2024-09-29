import PropTypes from "prop-types";
import { FaBullseye, FaHandshake, FaPlaneArrival } from "react-icons/fa6";
import { AiOutlineTeam } from "react-icons/ai";

const AboutUs = ({ HomeAboutUsData }) => {
  // Assuming HomeAboutUsData is an array, we take the first item.
  const data = HomeAboutUsData[0];

  return (
    <div className="bg-gradient-to-b from-white to-green-300 py-24 text-black">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">{data.TitleData[0].title}</h1>
          <p className="w-[1000px] mx-auto text-lg font-medium">
            {data.TitleData[0].subTitle}
          </p>
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 pt-10 gap-10">
          {data.content.map((item, index) => (
            <div className="flex" key={item.id}>
              <div className="flex-shrink-0 mr-5 mt-2">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-green-700 text-white hover:shadow-2xl">
                  {/* Icon mapping based on index */}
                  {index === 0 && <FaBullseye className="text-2xl " />}
                  {index === 1 && <FaPlaneArrival className="text-2xl " />}
                  {index === 2 && <AiOutlineTeam className="text-2xl " />}
                  {index === 3 && <FaHandshake className="text-2xl " />}
                </div>
              </div>
              <div>
                <p className="text-xl font-bold">{item.title}</p>
                <p className="font-normal leading-7">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
AboutUs.propTypes = {
  HomeAboutUsData: PropTypes.arrayOf(
    PropTypes.shape({
      TitleData: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          subTitle: PropTypes.string.isRequired,
        })
      ).isRequired,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default AboutUs;
