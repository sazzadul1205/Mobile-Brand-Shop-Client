import { FaMobileScreen } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth"; // This should be your custom hook for using AuthContext
import Swal from "sweetalert2";
import { useState } from "react"; // Import useState
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, signInWithGoogle } = useAuth(); // Fixed method name from 'singIn' to 'signIn'
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const [loading, setLoading] = useState(false); // Add loading state

  const from = location.state?.from?.pathname || "/";

  const currentDate = new Date();
  const formattedDateTime = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // Normal login
  const onSubmit = (data) => {
    setLoading(true); // Start loading
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        showSuccessLogInAlert();
        navigate(from, { replace: true });
        window.location.reload(); // Reload the page after navigation
      })
      .catch((error) => {
        console.log(error);
        showFailedLogInAlert(error.message);
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true); // Start loading
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const userData = {
          displayName: user.displayName,
          email: user.email,
          role: "member",
          photoURL: user.photoURL,
          createdDate: formattedDateTime,
        };

        // Check if user already exists
        axiosPublic
          .get("/usersData?email=" + user.email) // Check for existing user
          .then((response) => {
            if (response.data) {
              // User exists, just log them in
              showSuccessLogInAlert();
              navigate(from, { replace: true });
              window.location.reload(); // Reload the page after navigation
            } else {
              // User does not exist, insert user data
              axiosPublic
                .post("/users", userData) // Replace with your actual server endpoint
                .then((response) => {
                  console.log("User data pushed to the server:", response.data);
                  showSuccessLogInAlert();
                  navigate(from, { replace: true });
                  window.location.reload(); // Reload the page after navigation
                })
                .catch((error) => {
                  console.error("Failed to send user data:", error);
                  showFailedLogInAlert(error.message);
                });
            }
          })
          .catch((error) => {
            console.error("Error checking user data:", error);
            showFailedLogInAlert(error.message);
          });
      })
      .catch((error) => {
        console.error(error);
        showFailedLogInAlert(error.message);
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  const showSuccessLogInAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Login Successful!",
      text: "You are now logged in.",
    });
  };

  const showFailedLogInAlert = (errorMessage) => {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: errorMessage,
    });
  };

  return (
    <section className="bg-gradient-to-b from-green-300 to-green-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* Title */}
        <a className="text-4xl font-bold flex items-center text-black mb-4">
          <FaMobileScreen className="mr-2" />
          Mobile Brand Shop
        </a>
        <div className="w-1/4 h-auto bg-gradient-to-br from-green-500 to-green-200 rounded-xl shadow-xl hover:shadow-2xl border-2 p-6">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-center text-2xl font-bold text-black pt-2 mb-6">
              Please Log In
            </p>
            {/* Email */}
            <div className="mb-4">
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

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 px-4 text-lg rounded-xl ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"} {/* Loading text */}
            </button>
          </form>
          <p className="text-lg font-light text-black mt-2">
            Don`t have an account?{" "}
            <Link
              to="/SignUp"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign Up
            </Link>
          </p>

          <div className="py-[1px] w-full bg-gray-500 my-10 "></div>

          {/* Google Sign-In */}
          <div className="flex justify-center">
            <button
              onClick={handleGoogleSignIn}
              className={`flex items-center justify-center w-full gap-3 border-2 border-black py-3 text-xl rounded-xl text-black hover:bg-gray-400 hover:text-white ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={loading}
            >
              <FcGoogle className="mr-4 text-2xl" />{" "}
              <span className="font-bold">
                {loading ? "Signing In..." : "Google"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
