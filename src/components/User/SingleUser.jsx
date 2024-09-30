import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // assuming you're using react-router
import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { USER_ROLE, USER_STATUS } from "../../utils/enum";
import { deleteUserApi, fetchUser } from "../../services/users";
import { TOAST_OPTIONS } from "../../utils/constants";
import "react-toastify/dist/ReactToastify.css";

const SingleUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  /**-------------------------------------------------------------------
                          * Get User Details
   -------------------------------------------------------------------*/
  useEffect(() => {
    const fetchUserDetails = async (id) => {
      try {
        const user = await fetchUser(id);
        console.log("---------------------", user);
        setUser(user);
      } catch (error) {
        console.log(`Error while fetching user`, error);
        toast.error(`Error while fetching user`, TOAST_OPTIONS);
      }
    };
    fetchUserDetails(userId);
  }, [userId]);

  /**-------------------------------------------------------------------
                          * Delete User
   -------------------------------------------------------------------*/
  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteUserApi(user._id);
      toast.success(`User deleted successfully`, TOAST_OPTIONS);
      navigate(`/users`);

      setShowConfirmation(false);
    } catch (error) {
      console.error(`Failed to delete user`, error);
      toast.error(`Failed to delete user`, TOAST_OPTIONS);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mx-36 mt-4">
      {user && (
        <>
          {/** ---------------------- Close, Edit, Delete ---------------------- */}
          <div className="flex justify-between pb-4">
            <div className="flex">
              <MdEdit
                className="text-3xl cursor-pointer text-blue-400"
                onClick={() => navigate(`/users/update/${user._id}`)}
              />
              <MdDeleteForever className="text-3xl cursor-pointer text-red-400" onClick={handleDeleteClick} />
            </div>
            <div>
              <RxCross1 className="text-4xl cursor-pointer text-red-400" onClick={() => navigate("/users")} />
            </div>
          </div>

          {/** ---------------------- Single User's Details ---------------------- */}
          <h2 className="text-3xl font-bold mb-4">{`${user.firstName} ${user.lastName}`}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Gender</h3>
              <p className="text-lg text-gray-700">{user.gender}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-lg text-gray-700">{user.email}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold">Phone Number</h3>
              <p className="text-lg text-gray-700">{user.phoneNumber}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold">Role</h3>
              <p
                className={`text-lg font-semibold ${
                  user.role === USER_ROLE.ADMIN ? "text-green-500" : "text-blue-500"
                }`}
              >
                {user.role}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Status</h3>
              <p
                className={`text-lg font-semibold ${
                  user.status === USER_STATUS.ACTIVE ? "text-green-500" : "text-red-500"
                }`}
              >
                {user.status === USER_STATUS.ACTIVE ? USER_STATUS.ACTIVE : USER_STATUS.INACTIVE}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Enrolled Courses</h3>
              <p className="text-lg text-gray-700 flex flex-wrap gap-2 mt-1">
                {user.enrolledCourses.length > 0 ? (
                  user.enrolledCourses.map((course, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-lg font-bold"
                    >
                      {course.title}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">N/A</span>
                )}
              </p>
            </div>
          </div>
        </>
      )}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p className="mb-4">Are you sure you want to delete this user?</p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={handleConfirmDelete}
                disabled={isDeleting} // Disable button during deletion
              >
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                onClick={handleCancelDelete}
                disabled={isDeleting}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleUser;
