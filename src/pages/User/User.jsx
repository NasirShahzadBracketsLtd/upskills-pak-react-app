import React, { useState } from "react";
import { courses, users } from "../../../data";
import ListUsers from "../../components/User/ListUsers";
import CreateUser from "../../components/User/CreateUser";
import SingleUser from "../../components/User/SingleUser";

function User() {
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = () => {
    setIsAddingUser(true);
    setSelectedUser(null); // Reset selected user when adding a new user
  };

  const handleCancel = () => {
    setIsAddingUser(false);
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setIsAddingUser(false); // Hide the add user form if any user is selected
  };

  const handleCloseUserView = () => {
    setSelectedUser(null);
  };

  return (
    <div className="bg-gray-300 py-6 h-screen">
      <div className="flex justify-between items-center px-36 pb-6">
        <h1 className="text-2xl font-semibold">Users</h1>
        {!isAddingUser && (
          <button onClick={handleAddUser} className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-full">
            Add User
          </button>
        )}
      </div>

      <div>
        {isAddingUser && <CreateUser onCancel={handleCancel} courses={courses} />}
        {!isAddingUser && selectedUser && <SingleUser user={selectedUser} onClose={handleCloseUserView} />}
        {!isAddingUser && !selectedUser && <ListUsers users={users} onSelectUser={handleSelectUser} />}
      </div>
    </div>
  );
}

export default User;
