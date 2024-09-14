import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Course from "../../components/Course/Course";
import AddCourse from "../../components/Course/AddCourse";
import { courses } from "../../../data";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";

function CoursesPage() {
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  const handleAddCourseClick = () => {
    navigate(`/courses/create-course`);
    setIsAddingCourse(true);
  };

  const handleCourseClick = (course_id) => {
    navigate(`/courses/${course_id}`);
  };

  const token = localStorage.getItem("token");

  if (!token) {
    navigate(`/login`);
  }

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/courses`, headers);

        if (response.status !== 200) {
          console.log(`Error while getting Courses`);
        }

        setCourses(response.data);
      } catch (error) {
        console.log(`Error while getting Courses`, error);
      }
    };
    fetchAllCourses();
  }, []);

  return (
    <div>
      <section id="courses" className="min-h-screen bg-slate-200 py-6 px-48">
        {/** ============================= Add Course Button ============================= */}

        <div className="items-end flex justify-end px-6">
          {!isAddingCourse && (
            <button
              onClick={handleAddCourseClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
            >
              Add Course
            </button>
          )}
        </div>

        {/** ============================= Show All Courses ============================= */}

        <div className="px-12 pt-6">
          {isAddingCourse ? (
            <AddCourse />
          ) : (
            <div className="grid grid-cols-3 gap-12">
              {courses.length > 0 ? (
                courses.map((course, index) => (
                  <Course
                    key={index}
                    course={course}
                    onClick={() => handleCourseClick(course._id)} // Pass courseId to navigate
                  />
                ))
              ) : (
                <h1>Courses not found</h1>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default CoursesPage;
