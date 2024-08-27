import React, { useState } from "react";
import Course from "../../components/Course/Course";
import AddCourse from "../../components/Course/AddCourse";
import { courses } from "../../../data";

function CoursesPage() {
  const [isAddingCourse, setIsAddingCourse] = useState(false);

  const handleAddCourseClick = () => {
    setIsAddingCourse(true);
  };

  return (
    <div>
      <section id="courses" className="min-h-screen bg-slate-200 py-6 px-48">
        <div className="items-end flex justify-end px-12">
          {!isAddingCourse && (
            <button
              onClick={handleAddCourseClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
            >
              Add Course
            </button>
          )}
        </div>

        <div className="px-12 pt-6">
          {isAddingCourse ? (
            <AddCourse />
          ) : (
            <div className="grid grid-cols-3 gap-12">
              {courses.map((course, index) => (
                <Course key={index} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default CoursesPage;
