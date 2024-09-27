const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-green-300 to-white py-20">
      {/* Header Section */}
      <div className="text-center pt-10 mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-xl text-gray-600">
          Learn more about our mission, vision, and values.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our mission is to provide top-quality products and services that
            empower people and businesses to achieve their goals. We aim to
            deliver innovative solutions that make life easier, more efficient,
            and more connected.
          </p>
          <img
            className="w-full h-64 object-cover rounded-lg shadow-md"
            src="https://i.ibb.co.com/YQ9pGkG/download.png"
            alt="Our Mission"
          />
        </div>

        {/* Vision Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600 mb-6">
            We envision a world where technology seamlessly integrates with
            everyday life, enhancing the way people interact with each other,
            with information, and with the world around them. We strive to be at
            the forefront of this transformation, leading the way in innovation.
          </p>
          <img
            className="w-full h-64 object-cover rounded-lg shadow-md"
            src="https://i.ibb.co.com/KcPb7cd/download-1.png"
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
          <div className="bg-gradient-to-br from-blue-400 to-white p-6 rounded-lg shadow-md hover:shadow-2xl text-center ">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Integrity
            </h3>
            <p className="text-gray-600 leading-relaxed font-semibold">
              We conduct business with the highest level of ethics and
              transparency. Trust and honesty are at the core of everything we
              do.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-white p-6 rounded-lg shadow-md hover:shadow-2xl text-center ">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed font-semibold">
              We embrace creativity and innovation, constantly seeking to
              improve and challenge the status quo in everything we do.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-white p-6 rounded-lg shadow-md hover:shadow-2xl text-center ">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Customer Focus
            </h3>
            <p className="text-gray-600 leading-relaxed font-semibold">
              Our customers are at the center of everything we do. We work
              tirelessly to exceed their expectations and deliver exceptional
              value.
            </p>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="mt-16  py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our History</h2>
          <p className="text-lg text-gray-600 mb-8">
            Since our founding in [Year], we’ve been committed to driving
            innovation and pushing the boundaries of technology. Over the years,
            we’ve grown from a small startup into a leading industry player,
            with a global presence and a reputation for excellence. Our journey
            has been one of growth, learning, and continuous improvement.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Year [X]: The Beginning
              </h3>
              <p className="text-gray-600">
                Our company was founded with a vision to revolutionize the
                industry with innovative solutions and unmatched customer
                service.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Year [Y]: Major Milestone
              </h3>
              <p className="text-gray-600">
                We reached a major milestone, expanding our services globally
                and introducing groundbreaking products that set new industry
                standards.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Year [Z]: The Future
              </h3>
              <p className="text-gray-600">
                Looking ahead, we remain focused on innovation and growth,
                constantly evolving to meet the needs of our customers and
                exploring new possibilities in technology.
              </p>
            </div>
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
            Reach out to us with any questions or inquiries, and {"let's"} start a
            conversation!
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
