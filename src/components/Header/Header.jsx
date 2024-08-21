import React from "react";
const color = "#000099";
function Header() {
  return (
    <div className="flex items-center bg-white h-[6rem] w-full justify-between px-24 fixed top-0">
      {/** ------------------------ Logo ------------------------ */}
      <div className="flex justify-start w-1/4 ">
        <img
          className="w-18 h-24"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcm-dWwcZFlFnyd2RWI-_nPQp21tI2_4IbDQ&s"
          alt=""
        />
      </div>

      {/** ------------------------ Menu ------------------------ */}
      <div className="flex gap-24 justify-start w-1/3 ">
        <div className="flex gap-6 text-2xl font-semibold ">
          <span className="hover:cursor-pointer hover:font-semibold hover:text-blue-700">Home</span>
          <span className="hover:cursor-pointer hover:font-semibold hover:text-blue-700">Courses</span>
          <span className="hover:cursor-pointer hover:font-semibold hover:text-blue-700">Contact Us</span>
        </div>
      </div>

      {/** ------------------------ Login Button ------------------------ */}
      <div className="flex justify-end w-1/3 ">
        <button className="px-4 py-2 border w-[7rem] text-xl border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
