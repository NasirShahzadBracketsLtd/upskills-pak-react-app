import React from "react";

function Header({ isLoggedIn, isAdmin }) {
  return (
    <nav className="flex items-center bg-white h-[6rem] w-full justify-between px-24 fixed top-0 shadow-md z-10">
      {/* Logo */}
      <div className="flex justify-start w-1/4">
        <img
          className="w-18 h-24"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcm-dWwcZFlFnyd2RWI-_nPQp21tI2_4IbDQ&s"
          alt="Website Logo"
        />
      </div>

      {/* Menu */}
      <div className="flex gap-24 justify-start w-1/3">
        <div className="flex gap-6 text-2xl font-semibold">
          <a href="#home" className="hover:cursor-pointer hover:font-semibold hover:text-blue-700">
            Home
          </a>
          <a href="#courses" className="hover:cursor-pointer hover:font-semibold hover:text-blue-700">
            Courses
          </a>
          <a href="#services" className="hover:cursor-pointer hover:font-semibold hover:text-blue-700">
            Services
          </a>

          {/* Conditional Rendering based on User Role */}
          {isLoggedIn && isAdmin && (
            <>
              <a href="#create-user" className="hover:cursor-pointer hover:font-semibold hover:text-blue-700">
                Create User
              </a>
              <a href="#manage-courses" className="hover:cursor-pointer hover:font-semibold hover:text-blue-700">
                Manage Courses
              </a>
            </>
          )}
          {isLoggedIn && !isAdmin && (
            <a href="#my-courses" className="hover:cursor-pointer hover:font-semibold hover:text-blue-700">
              My Courses
            </a>
          )}
        </div>
      </div>

      {/* Login/Logout Button */}
      <div className="flex justify-end w-1/3">
        {isLoggedIn ? (
          <button className="px-4 py-2 border w-[7rem] text-xl border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
            Logout
          </button>
        ) : (
          <button className="px-4 py-2 border w-[7rem] text-xl border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Header;
