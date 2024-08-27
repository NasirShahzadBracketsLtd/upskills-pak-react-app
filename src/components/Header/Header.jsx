import React from "react";
import { Link } from "react-router-dom";

function Header({ isLoggedIn, isAdmin }) {
  isLoggedIn = true;
  isAdmin = true;
  return (
    <header className="bg-blue-900 h-[6rem] text-white w-full fixed top-0 shadow-md z-10 ">
      <nav className="flex items-center justify-between px-24 h-full">
        {/* Logo */}
        <section className="w-1/5 flex justify-start">
          <Link to="/">
            <img
              className="w-18 h-24 p-4 rounded-full "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcm-dWwcZFlFnyd2RWI-_nPQp21tI2_4IbDQ&s"
              alt="Website Logo"
            />
          </Link>
        </section>

        {/* Menu */}
        <ul className="flex gap-8 w-3/5">
          <li className="text-xl font-semibold">
            <Link to="/" className="hover:font-semibold hover:text-gray-400 ">
              Home
            </Link>
          </li>
          {!isLoggedIn && (
            <>
              <li className="text-xl font-semibold">
                <a href="#courses" className="hover:font-semibold hover:text-blue-700">
                  Courses
                </a>
              </li>
              <li className="text-xl font-semibold">
                <a href="#services" className="hover:font-semibold hover:text-blue-700">
                  Services
                </a>
              </li>
            </>
          )}
          {isLoggedIn && isAdmin && (
            <>
              <li className="text-xl font-semibold">
                <Link to="/users" className="hover:font-semibold hover:text-blue-700">
                  User
                </Link>
              </li>
              <li className="text-xl font-semibold">
                <a href="/courses" className="hover:font-semibold hover:text-blue-700">
                  Courses
                </a>
              </li>
            </>
          )}
          {isLoggedIn && !isAdmin && (
            <li className="text-xl font-semibold">
              <Link to="/my-learnings" className="hover:font-semibold hover:text-blue-700">
                My Learnings
              </Link>
            </li>
          )}
        </ul>

        {/* Login/Logout Button */}
        <section className="w-1/5 flex justify-end">
          <Link
            to={isLoggedIn ? "/" : "/login"}
            className="px-4 py-2 flex items-center justify-center border w-[7rem] text-xl bg-orange-500 border-none text-white rounded-full hover:bg-orange-700"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Link>
        </section>
      </nav>
    </header>
  );
}

export default Header;
