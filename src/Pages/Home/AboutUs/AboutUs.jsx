import { FaBullseye, FaHandshake, FaPlaneArrival } from "react-icons/fa6";
import { AiOutlineTeam } from "react-icons/ai";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-green-300 py-24  text-black">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <div className="text-center ">
          <h1 className="text-4xl font-bold">Welcome To Our Tech World</h1>
          <p className="w-[1000px] mx-auto text-lg font-medium">
            At Tech World, we are passionate about delivering the latest tech
            news, product reviews, and insightful articles to keep you updated
            with the ever-evolving world of technology.
          </p>
        </div>
        {/* Info */}
        <div className="grid grid-cols-2 pt-10 gap-10">
          {/* Val-1 */}
          <div className="flex">
            <div className="flex-shrink-0 mr-5 mt-2">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-green-700 text-white">
                <FaBullseye className="text-2xl" />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold">Our Mission</p>
              <p className="font-normal">
                To provide our readers with the most comprehensive and engaging
                content related to the tech world and its dynamic advancements.
              </p>
            </div>
          </div>
          {/* Val-2 */}
          <div className="flex">
            <div className="flex-shrink-0 mr-5 mt-2">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-green-700 text-white">
                <FaPlaneArrival className="text-2xl" />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold">Our Values</p>
              <p className="font-normal">
                We are committed to integrity, quality, and innovation, ensuring
                that our readers receive accurate and insightful information
                every time.
              </p>
            </div>
          </div>
          {/* Val-3 */}
          <div className="flex">
            <div className="flex-shrink-0 mr-5 mt-2">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-green-700 text-white">
                <AiOutlineTeam className="text-2xl" />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold">Our Team</p>
              <p className="font-normal">
                Comprised of dedicated and passionate individuals, our diverse
                team brings together expertise from various tech disciplines,
                ensuring comprehensive and reliable coverage of the tech
                industry.
              </p>
            </div>
          </div>
          {/* Val-4 */}
          <div className="flex">
            <div className="flex-shrink-0 mr-5 mt-2">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-green-700 text-white">
                <FaHandshake className="text-2xl" />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold">Our Commitment</p>
              <p className="font-normal">
                Committed to providing accurate, unbiased, and insightful tech
                content, we strive to be a trusted source of information for
                tech enthusiasts, businesses, and professionals alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
