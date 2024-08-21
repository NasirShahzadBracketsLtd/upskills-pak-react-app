import React from "react";

const ListOfAllUsers = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-red-300 border border-solid">
            <th className="py-2 px-4 border-b border-gray-300 text-left">Id</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">Name</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">Email</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">Role</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">IsActive</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300 text-left">{user.id}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-left">{user.name}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-left">{user.email}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-left">{user.role}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-left">{user.isActive}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfAllUsers;
