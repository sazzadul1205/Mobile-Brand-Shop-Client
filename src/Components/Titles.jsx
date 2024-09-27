import PropTypes from "prop-types";

const Titles = ({ title, subtitle }) => {
  return (
    <div className="py-10">
      <p className="text-3xl font-bold">{title}</p>
      <p className="text-xl text-gray-600 font-semibold">{subtitle}</p>
    </div>
  );
};

// Prop types validation
Titles.propTypes = {
  title: PropTypes.string.isRequired, 
  subtitle: PropTypes.string.isRequired, 
};

export default Titles;
