import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  return (
    <div className="h-screen bg-gradient-to-b from-green-300 to-green-100  flex items-center justify-center">
      <div className="text-center">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500">
          Something Went Wrong
        </p>
        <p className="text-8xl md:text-9xl font-black text-green-700">404</p>
        <button
          onClick={handleBack}
          className="mt-5 text-xl md:text-2xl bg-green-600 hover:bg-green-900 px-10 md:px-20 py-2 rounded-full text-white"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Error;
