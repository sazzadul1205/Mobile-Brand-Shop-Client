import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Components/Loader";

const ManageUsers = () => {
  const axiosPublic = useAxiosPublic();

  // Fetching UsersData
  const {
    data: UsersData = [], // Changed name for clarity
    isLoading: UsersDataIsLoading,
    error: UsersDataError,
  } = useQuery({
    queryKey: ["UsersData"],
    queryFn: () => {
      return axiosPublic.get(`/usersData`).then((res) => res.data);
    },
  });

  // Loading state
  if (UsersDataIsLoading) {
    return <Loader />;
  }

  // Error state
  if (UsersDataError) {
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
    <div className="bg-white ml-1">
      {/* Title */}
      <div className="px-5 py-5 text-black border-b border-black bg-gray-200">
        <p className="text-2xl font-bold text-center">Manage Users</p>
      </div>
      {/* List */}
      <div className="bg-white h-screen">
        <div className="overflow-x-auto px-5 py-5">
          <table className="table text-black w-full">
            <thead className="bg-gray-300 text-black font-bold">
              {/* head */}
              <tr>
                <th></th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {UsersData.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={user.photoURL}
                      alt={user.name}
                      className="w-12 h-12 rounded-full"
                    />
                  </td>
                  <td>{user.name || user.displayName}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
