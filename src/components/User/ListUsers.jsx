import React from "react";

const ListUsers = ({ users, onSelectUser }) => {
  return (
    <div className="overflow-x-auto px-36">
      <table className="min-w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-blue-200 text-lg">
            <th className="py-3 px-4 border-b border-gray-300 text-left font-medium">Sr No.</th>
            <th className="py-3 px-4 border-b border-gray-300 text-left font-medium">Name</th>
            <th className="py-3 px-4 border-b border-gray-300 text-left font-medium">Email</th>
            <th className="py-3 px-4 border-b border-gray-300 text-left font-medium">Role</th>
            <th className="py-3 px-4 border-b border-gray-300 text-left font-medium">Is Active</th>
            <th className="py-3 px-4 border-b border-gray-300 text-left font-medium">Enrolled Courses</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 transition duration-200 ease-in-out text-md cursor-pointer"
              onClick={() => onSelectUser(user)}
            >
              <td className="py-2 px-4 border-b border-gray-300">{index + 1}</td>
              <td className="py-2 px-4 border-b border-gray-300">{`${user.firstName} ${user.lastName}`}</td>
              <td className="py-2 px-4 border-b border-gray-300">{user.email}</td>
              <td className="py-2 px-4 border-b border-gray-300">
                <span
                  className={`px-4 py-1 rounded-full font-semibold ${
                    user.role === "ADMIN" ? "bg-green-400 text-white" : "bg-blue-400 text-white"
                  }`}
                >
                  {user.role}
                </span>
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {user.status === "ACTIVE" ? (
                  <span className="text-green-500 font-semibold">Yes</span>
                ) : (
                  <span className="text-red-500 font-semibold">No</span>
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {user.enrolledCourses.length > 0 ? (
                  user.enrolledCourses.join(", ")
                ) : (
                  <span className="text-gray-500">None</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUsers;
