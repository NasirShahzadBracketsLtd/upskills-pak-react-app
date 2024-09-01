import React from "react";

const SingleUser = ({ user, onClose }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mx-36 mt-6">
      <button onClick={onClose} className="text-red-500 text-lg font-semibold mb-4">
        Close
      </button>
      <h2 className="text-3xl font-bold mb-4">{`${user.firstName} ${user.lastName}`}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-lg text-gray-700">{user.email}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Role</h3>
          <p className={`text-lg font-semibold ${user.role === "ADMIN" ? "text-green-500" : "text-blue-500"}`}>
            {user.role}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Status</h3>
          <p className={`text-lg font-semibold ${user.status === "ACTIVE" ? "text-green-500" : "text-red-500"}`}>
            {user.status === "ACTIVE" ? "Active" : "Inactive"}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Enrolled Courses</h3>
          <p className="text-lg text-gray-700">
            {user.enrolledCourses.length > 0 ? user.enrolledCourses.join(", ") : "None"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
