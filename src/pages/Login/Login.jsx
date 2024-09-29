import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHome } from "react-icons/fa";
import { USER_ROLE } from "../../utils/enum";
import { getRoleApi } from "../../services/users";
import { loginApi } from "../../services/auth";
import { TOAST_OPTIONS } from "../../utils/constants";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const name = await loginApi(email, password);

      const role = await getRoleApi();

      localStorage.setItem(`user`, JSON.stringify({ isLoggedIn: true, isAdmin: role === USER_ROLE.ADMIN, name }));

      toast.success(`Login successful!`, TOAST_OPTIONS);

      navigate(`/`);

      setLoading(false);
    } catch (error) {
      console.log(error);

      if (error.response && error.response.status === 401) {
        toast.error(`Invalid Credentials!`, TOAST_OPTIONS);
      } else {
        toast.error(`An error occurred. Please try again later.`, TOAST_OPTIONS);
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 h-screen flex justify-center items-center bg-blue-900">
      <form onSubmit={handleLogin}>
        <div className="w-96 p-5 flex flex-col gap-2 h-full bg-zinc-100 rounded-xl text-center items-center py-12">
          <h1 className="text-lg font-bold text-blue-600">Welcome to</h1>
          <h1 className="text-4xl font-bold text-blue-600">UpSkills Pakistan</h1>
          {/* ----------------------- Email Input ----------------------- */}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="h-12 w-full mt-12 border border-solid px-4 outline-none border-gray-300 bg-zinc-100 border-t-0 border-l-0 border-r-0"
            onInvalid={(e) => e.target.setCustomValidity(`Email is required`)}
            onInput={(e) => e.target.setCustomValidity(``)}
            required
          />
          {/* ----------------------- Password Input ----------------------- */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="h-12 w-full border border-solid px-4 outline-none border-gray-300 bg-zinc-100 border-t-0 border-l-0 border-r-0 "
            onInvalid={(e) => e.target.setCustomValidity(`Password is required`)}
            onInput={(e) => e.target.setCustomValidity(``)}
            required
          />

          {/* ----------------------- Login Button -----------------------*/}
          <button
            type="submit"
            className="h-12 w-full rounded-md px-4 mt-3 bg-blue-600 text-white font-semibold text-lg hover:bg-blue-800"
          >
            {loading ? `Logging in...` : `Login`}
          </button>

          {/* <h1 className="text-md text-blue-600 cursor-pointer">Forgot Password?</h1> */}

          {/* ----------------------- Back to Website -----------------------*/}
          <div className="flex justify-center items-center gap-2 mt-32 cursor-pointer" onClick={() => navigate(`/`)}>
            <h1 className="text-red-600">Back to Website</h1>
            <FaHome className="text-lg text-red-600 cursor-pointer" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
