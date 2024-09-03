import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API_BASE_URL } from "../../utils/constants";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });

      console.log(response);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Store token in localStorage
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        toast.error("Invalid Credentials!!"); // Show error toast
      } else {
        toast.error("An error occurred. Please try again later."); // Show error toast
      }
    }
  };

  return (
    <>
      <div className="px-[550px] py-12 h-screen items-center bg-blue-900">
        <ToastContainer /> {/* Toast container to display toasts */}
        <div className="flex flex-col gap-2 h-full bg-zinc-100 rounded-xl text-center items-center py-12">
          <h1 className="text-lg font-bold text-blue-600">Welcome to</h1>
          <h1 className="text-4xl font-bold text-blue-600">UpSkills Pakistan</h1>

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-[400px] mt-12 border border-solid px-4 outline-none border-gray-300 bg-zinc-100 border-t-0 border-l-0 border-r-0"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 w-[400px] border border-solid px-4 outline-none border-gray-300 bg-zinc-100 border-t-0 border-l-0 border-r-0 "
          />

          <button
            onClick={handleLogin}
            className="h-12 w-[400px] rounded-md px-4 mt-3 bg-blue-600 text-white font-semibold text-lg hover:bg-blue-800"
          >
            Login
          </button>

          <h1 className="text-md text-blue-600 cursor-pointer">Forgot Password?</h1>
        </div>
      </div>
    </>
  );
}

export default Login;
