import { useState } from "react";
import PropTypes from "prop-types";

const Faq = ({ HomeFAQData }) => {
  const [visibleFaqs, setVisibleFaqs] = useState(5);
  const showMoreFaqs = () => setVisibleFaqs(HomeFAQData.length);

  return (
    <div className="bg-gradient-to-b from-green-300 to-white py-24 text-black">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <div className="mb-10 text-center">
          <p className="text-3xl font-bold">Customer Support</p>
          <p className="text-lg mt-2">
            Have a question? {"We're"} here to help. Check out our {"FAQ's"}{" "}
            below.
          </p>
        </div>

        {/* Accordion */}
        <div className="w-[900px] mx-auto">
          {HomeFAQData.slice(0, visibleFaqs).map((faq, index) => (
            <div key={index} className="collapse collapse-arrow bg-white mb-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}

          {/* Button to view more */}
          {visibleFaqs < HomeFAQData.length && (
            <div className="text-right mt-6">
              <button
                onClick={showMoreFaqs}
                className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-400 transition"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
Faq.propTypes = {
  HomeFAQData: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Faq;
