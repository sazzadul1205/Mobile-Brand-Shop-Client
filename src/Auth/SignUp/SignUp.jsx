import Swal from "sweetalert2";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { FaMobileScreen } from "react-icons/fa6";

const SignInPage = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, displayName, photoURL, phoneNumber } = data;

    // Validate password
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password must be at least 6 characters long",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password must contain at least one capital letter",
      });
      return;
    }

    // Register user without posting to an external server
    createUser(email, password, displayName, photoURL, phoneNumber)
      .then((result) => {
        // Navigate to home or any specified page
        navigate(location?.state ? location.state : "/");

        // Success alert
        Swal.fire({
          title: "Success!",
          text: "New User has been Created",
          icon: "success",
          confirmButtonText: "Cool",
        });

        // Reset the form
        reset();
      })
      .catch((error) => {
        // Handle error
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
  };

  return (
    <section className="bg-gradient-to-b from-green-300 to-green-100">
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen pt-20">
        {/* Title */}
        <a className="text-4xl font-bold flex items-center text-black mb-4">
          <FaMobileScreen className="mr-2" />
          Mobile Brand Shop
        </a>
        <div className="w-1/4 h-auto bg-gradient-to-br from-green-500 to-green-200 rounded-xl shadow-xl hover:shadow-2xl border-2 p-6">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-center text-2xl font-bold text-black pt-2 mb-6">
              Please Sign Up
            </p>
            {/* Name */}
            <div className="mb-6">
              <label className="block mb-1 text-gray-700 text-xl font-semibold">
                Your Name
              </label>
              <input
                type="text"
                {...register("displayName", {
                  required: "Name is required",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="John Doe"
              />
              {errors.displayName && (
                <p className="text-red-500">{errors.displayName.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block mb-1 text-gray-700 text-xl font-semibold">
                Email :
              </label>
              <input
                type="email"
                placeholder="name@mail.com"
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Image */}
            <div className="mb-6">
              <label className="block mb-1 text-gray-700 text-xl font-semibold">
                Image URL
              </label>
              <input
                type="url"
                {...register("photoURL")}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="https://i.ibb.co/p3HZ1Kb/ubisoft.png"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block mb-1 text-gray-700 text-xl font-semibold">
                Password :
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Recheck Password */}
            <div className="mb-6">
              <label className="block mb-1 text-gray-700 text-xl font-semibold">
                Retype password :
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-300 text-white font-bold py-3 px-4 rounded"
            >
              Sign Up
            </button>

            <p className="text-lg font-light text-black mt-2">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
