import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { courses } from "../../../data";
import { API_BASE_URL } from "../../utils/constants";
import ListUsers from "../../components/User/ListUsers";
import CreateUser from "../../components/User/CreateUser";

function User() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  /**---------------------------------------------------------------------
        * Get Token from local storage and set Headers (Bearer Token)
   ---------------------------------------------------------------------*/

  const token = localStorage.getItem(`token`);

  if (!token) navigate(`/login`);

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  /**---------------------------------------------------------------------
                        * Fet Users & Courses
   ---------------------------------------------------------------------*/
  useEffect(() => {
    const fetchUsersList = async () => {
      try {
        const usersResponse = await axios.get(`${API_BASE_URL}/users`, headers);
        setUsers(usersResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsersList();
  }, []);

  /**---------------------------------------------------------------------
                          * Handlee Create User
   ---------------------------------------------------------------------*/
  // const handleCreateOrUpdateUser = async (formData, selectedUser) => {
  //   try {
  //     if (selectedUser) {
  //       console.log("in selected user ==========================");

  //       await axios.patch(
  //         `${API_BASE_URL}/users/${selectedUser.id}`,
  //         formData,
  //         headers
  //       );
  //     } else {
  //       console.log("in create user ==========================");
  //       await axios.post(`${API_BASE_URL}/users`, formData, headers);
  //       setIsAddingUser(false); // Close form after creation
  //     }

  //     const userResponse = await axios.get(`${API_BASE_URL}/users`, headers);
  //     setUsers(userResponse.data);
  //   } catch (error) {
  //     console.error(
  //       `Error creating user:`,
  //       error.response ? error.response.data : error.message
  //     );
  //   }
  // };

  return (
    <div className="bg-gray-300 py-6 h-screen">
      <div className="flex justify-between items-center px-36 pb-6">
        <h1 className="text-2xl font-semibold">Users</h1>

        <button
          onClick={() => navigate("/users/create")}
          className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-full"
        >
          Add User
        </button>
      </div>

      <div>
        <ListUsers users={users} />
      </div>
    </div>
  );
}

export default User;
