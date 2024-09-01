import React from "react";

function Course({ course, onClick }) {
  return (
    <div onClick={onClick} className="h-[20rem] w-[22rem] border border-solid border-gray-300 rounded-lg shadow-2xl">
      {/** ------------------ Course Cover Image ------------------ */}
      <div
        className="flex flex-col  h-2/3 bg-red-500 w-full gap-8 rounded-lg rounded-b-none items-center bg-no-repeat bg-cover justify-between p-12"
        style={{
          backgroundImage: `url(${course.image})`,
        }}
      ></div>

      {/** ------------------ Course Details(Name,Price etc.) ------------------ */}
      <div className="w-full p-4">
        <h1 className="text-blue-700 font-semibold text-3xl">{course.title}</h1>
        <div className="bg-slate-200 inline-block px-4 justify-center content-center h-8 rounded-full mt-1">
          <h1 className="bgred overflow-hidden text-ellipsis text-md">
            <span className="text-xl">Price: </span>
            <span className="text-blue-700 text-2xl font-bold"> {course.price}</span>
            <span className="text-xl"> Rs</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Course;
