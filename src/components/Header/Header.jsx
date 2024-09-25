import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HiUser } from "react-icons/hi2";
import { logoutApi } from "../../services/auth";

const Header = ({ isLoggedIn, isAdmin, name }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logoutApi();
      toast.success(`Logout Successfully`, { autoClose: 5000 });
      setLoading(false);
      navigate(`/login`);
    } catch (error) {
      console.log(`Error while logged out`, error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="bg-blue-900 h-[6rem] text-white w-full fixed top-0 shadow-md z-10 ">
      <nav className="flex items-center justify-between px-24 h-full">
        {/** ---------------------- Logo ---------------------- */}
        <section className="w-1/5 flex justify-start">
          <Link to="/">
            <img className="w-18 h-24 p-4 rounded-full " src="/logo.JPG" alt="Website Logo" />
          </Link>
        </section>

        <ul className="flex gap-8 w-3/5">
          <li className="text-xl font-semibold">
            <Link to="/" className="hover:font-semibold hover:text-gray-400 ">
              Home
            </Link>
          </li>

          {!isLoggedIn && (
            <>
              <li className="text-xl font-semibold">
                <a href="#courses" className="hover:font-semibold hover:text-gray-400">
                  Courses
                </a>
              </li>
              <li className="text-xl font-semibold">
                <a href="#services" className="hover:font-semibold hover:text-gray-400">
                  Services
                </a>
              </li>
            </>
          )}
          {isLoggedIn && isAdmin && (
            <>
              <li className="text-xl font-semibold">
                <Link to="/users" className="hover:font-semibold hover:text-gray-400">
                  User
                </Link>
              </li>
              <li className="text-xl font-semibold">
                <a href="/courses" className="hover:font-semibold hover:text-gray-400">
                  Courses
                </a>
              </li>
            </>
          )}

          {isLoggedIn && !isAdmin && (
            <li className="text-xl font-semibold">
              <Link to="/courses" className="hover:font-semibold hover:text-gray-400">
                My Learnings
              </Link>
            </li>
          )}
        </ul>

        {/** ---------------------- Login/Logout Button ---------------------- */}
        <section className="w-1/5 flex justify-end gap-4">
          {/** ---------------------- Logged-In User Name ---------------------- */}
          {name && (
            <div className="flex gap-1 items-center">
              <HiUser className="size-5 font-bold " />
              <h1 className="text-xl inline-block truncate max-w-xs">{name}</h1>
            </div>
          )}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 flex items-center justify-center border w-[7rem] text-xl bg-orange-500 border-none text-white rounded-full hover:bg-orange-700"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                </>
              ) : (
                `Logout`
              )}
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 flex items-center justify-center border w-[7rem] text-xl bg-orange-500 border-none text-white rounded-full hover:bg-orange-700"
            >
              Login
            </Link>
          )}
        </section>
      </nav>
    </header>
  );
};

export default Header;
