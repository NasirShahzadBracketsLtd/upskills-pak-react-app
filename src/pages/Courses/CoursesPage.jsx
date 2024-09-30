import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Course from "../../components/Course/Course";
import { getAllCourses } from "../../services/courses";
import { getRoleApi } from "../../services/users";
import { USER_ROLE } from "../../utils/enum";
import { TOAST_OPTIONS } from "../../utils/constants";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  /**-------------------------------------------------------------------
                  * Get User's Role and All Courses
   -------------------------------------------------------------------*/
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const role = await getRoleApi();
        setRole(role);

        const courses = await getAllCourses();
        setCourses(courses);

        setLoading(true);
      } catch (error) {
        toast.error(`Error while fetching courses data.`, TOAST_OPTIONS);
        console.log(`Error while fetching data.`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  /**-------------------------------------------------------------------
                                * Loading
   -------------------------------------------------------------------*/
  if (loading) {
    return (
      <div className="flex justify-center items-center text-2xl font-semibold py-12 body:bg-red-200">
        Courses Loading...
      </div>
    );
  }
  return (
    <div>
      <section id="courses" className="min-h-screen bg-slate-200 py-6 px-48">
        {/** ------------------- Add Course Button ------------------- */}
        <div className="items-end flex justify-end px-6">
          {role === USER_ROLE.ADMIN && (
            <button
              onClick={() => navigate(`/courses/create`)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
            >
              Add Course
            </button>
          )}
        </div>

        {/** ------------------- Show All Courses ------------------- */}
        <div className="p-6">
          <div className="grid grid-cols-3 gap-12 ">
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <Course key={index} course={course} onClick={() => navigate(`/courses/${course._id}`)} />
              ))
            ) : (
              <div>No courses available</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoursesPage;
