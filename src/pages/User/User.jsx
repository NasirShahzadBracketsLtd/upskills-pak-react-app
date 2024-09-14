import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { courses } from "../../../data";
import { API_BASE_URL } from "../../utils/constants";
import ListUsers from "../../components/User/ListUsers";
import CreateUser from "../../components/User/CreateUser";
import SingleUser from "../../components/User/SingleUser";

function User() {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
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

  /**---------------------------------------------------------------------
        * Get Token from local storage and set Headers (Bearer Token)
   ---------------------------------------------------------------------*/

  const token = localStorage.getItem(`token`);

  if (!token) navigate(`/login`);

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const navigate = useNavigate();

  /**---------------------------------------------------------------------
                        * Fet Users & Courses
   ---------------------------------------------------------------------*/
  useEffect(() => {
    const fetchUsersAndCourses = async () => {
      try {
        const usersResponse = await axios.get(`${API_BASE_URL}/users`, headers);
        setUsers(usersResponse.data);

        const coursesResponse = await axios.get(`${API_BASE_URL}/courses`, headers);
        setCourses(coursesResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsersAndCourses();
  }, [navigate]);

  /**---------------------------------------------------------------------
                          * Handlee Create User
   ---------------------------------------------------------------------*/
  const handleCreateOrUpdateUser = async (formData) => {
    try {
      if (selectedUser) {
        console.log("in selected user ==========================");

        await axios.patch(`${API_BASE_URL}/users/${selectedUser.id}`, formData, headers);
      } else {
        console.log("in create user ==========================");
        await axios.post(`${API_BASE_URL}/users`, formData, headers);
        setIsAddingUser(false); // Close form after creation
      }

      const userResponse = await axios.get(`${API_BASE_URL}/users`, headers);
      setUsers(userResponse.data);
    } catch (error) {
      console.error(`Error creating user:`, error.response ? error.response.data : error.message);
    }
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
        {isAddingUser && (
          <CreateUser
            onCancel={handleCancel}
            courses={courses}
            // onSubmit={handleCreateOrUpdateUser}
            // user={selectedUser}
          />
        )}
        {!isAddingUser && selectedUser && <SingleUser user={selectedUser} onClose={handleCloseUserView} />}
        {!isAddingUser && !selectedUser && <ListUsers users={users} onSelectUser={handleSelectUser} />}
      </div>
    </div>
  );
}

export default User;
