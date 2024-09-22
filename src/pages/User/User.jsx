import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { API_BASE_URL } from "../../utils/constants";
import ListUsers from "../../components/User/ListUsers";
import { fetAllUsers } from "../../services/users";

function User() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  /**---------------------------------------------------------------------
                        * Fet Users & Courses
   ---------------------------------------------------------------------*/
  useEffect(() => {
    const fetchUsersList = async () => {
      try {
        const users = await fetAllUsers();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsersList();
  }, []);

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
