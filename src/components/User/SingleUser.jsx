import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // assuming you're using react-router
import { ToastContainer, toast } from "react-toastify";

import { RxCross1 } from "react-icons/rx";
import { MdEdit, MdDeleteForever } from "react-icons/md";

import { USER_ROLE, USER_STATUS } from "../../utils/enum";
import { API_BASE_URL } from "../../utils/constants";

const SingleUser = ({ user, onClose, onDeleteSuccess = () => {} }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // Add loading state
  const navigate = useNavigate(); // for navigation to login if token is missing

  const handleUpdateClick = () => {
    navigate(`/update-user/${user._id}`, { state: { user } });
  };

  // Function to confirm deletion
  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  // Function to actually delete the user after confirmation
  const handleConfirmDelete = async () => {
    setIsDeleting(true); // Set loading state
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const headers = { headers: { Authorization: `Bearer ${token}` } };

      const response = await axios.delete(`${API_BASE_URL}/users/${user._id}`, headers);

      if (response.status === 200) {
        toast.success(`User deleted successfully`);

        setTimeout(() => {
          navigate("/");
        }, 2000);

        // If delete was successful, trigger a callback to update UI or close modal
        onDeleteSuccess();
      }

      // If delete was successful, trigger a callback to update UI or close modal
      onDeleteSuccess();
      setShowConfirmation(false);
    } catch (error) {
      console.error(`Failed to delete user`, error);
    } finally {
      setIsDeleting(false); // Reset loading state
    }
  };

  // Function to cancel the deletion
  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mx-36 mt-4">
      <ToastContainer />
      {/** ---------------------- Close, Edit, Delete ---------------------- */}
      <div className="flex justify-between pb-4">
        <div className="flex">
          <MdEdit
            className="text-3xl cursor-pointer text-blue-400"
            onClick={() => navigate(`/update-user/${user._id}`, { state: { user } })}
          />
          <MdDeleteForever className="text-3xl cursor-pointer text-red-400" onClick={handleDeleteClick} />
        </div>
        <div>
          <RxCross1 className="text-4xl cursor-pointer text-red-400" onClick={onClose} />
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
          <p className={`text-lg font-semibold ${user.role === USER_ROLE.ADMIN ? "text-green-500" : "text-blue-500"}`}>
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
                  {course}
                </span>
              ))
            ) : (
              <span className="text-gray-500">N/A</span>
            )}
          </p>
        </div>
      </div>
      {/** ---------------------- Confirmation Modal ---------------------- */}
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
