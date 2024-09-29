import React from "react";

function Course({ course, onClick }) {
  return (
    <div onClick={onClick} className="h-[20rem] w-[22rem] border border-solid border-gray-300 rounded-lg shadow-2xl">
      {/** ------------------ Course Cover Image ------------------ */}
      <div
        className="flex flex-col  h-2/3 bg-red-500 w-full gap-8 rounded-lg rounded-b-none items-center bg-no-repeat bg-cover justify-between p-12"
        style={{
          backgroundImage: `url(${course.coverImage})`,
        }}
      ></div>

      {/** ------------------ Course Details(Name,Price etc.) ------------------ */}
      <div className="w-full p-2">
        <div className="h-12">
          <h1 className="text-blue-700 font-semibold text-xl">{course.title}</h1>
        </div>
        <div className="bg-slate-300 inline-block px-4 justify-center h-7 rounded-full mt-2">
          <span className="text-sm">Price: </span>
          <span className="text-blue-700 text-lg font-bold "> {course.price}</span>
          <span className="text-sm"> Rs</span>
        </div>
      </div>
    </div>
  );
}

export default Course;
