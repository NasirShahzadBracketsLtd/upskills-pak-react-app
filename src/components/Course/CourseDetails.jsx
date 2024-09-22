import YouTube from "react-youtube";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { MdEdit, MdDeleteForever } from "react-icons/md";
import { deleteCourseApi, getSingleCourse } from "../../services/courses";
import { getRoleApi } from "../../services/users";
import { USER_ROLE } from "../../utils/enum";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedLecture, setSelectedLecture] = useState("");
  const [loading, setLoading] = useState(true); // New loading state
  const [role, setRole] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // Add loading state

  const navigate = useNavigate();

  useEffect(() => {
    const getLoggedInRole = async () => {
      try {
        const role = await getRoleApi();

        setRole(role);
      } catch (error) {
        console.log(`Error while getting role`, error);
      }
    };
    getLoggedInRole();
  }, []);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseResponse = await getSingleCourse(courseId);
        setCourse(courseResponse);
        setSelectedLecture(courseResponse.introVideoUrl);
      } catch (error) {
        console.log(`Error while getting Courses`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center py-24 text-4xl font-bold">Loading ...</div>;
  }

  const handleLectureClick = (link) => {
    setSelectedLecture(link);
  };

  /**---------------------------------------------------------------------
                            * Delete Course
   ---------------------------------------------------------------------*/

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteCourseApi(courseId);
      navigate(`/courses`);

      setShowConfirmation(false);
    } catch (error) {
      console.error(`Failed to delete course`, error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-">
      {/** ---------------------- Course Edit/Delete Icons ---------------------- */}
      {role === USER_ROLE.ADMIN && (
        <div className="flex justify-end">
          <MdEdit
            className="text-3xl cursor-pointer text-blue-400"
            onClick={() => navigate(`/courses/update/${course._id}`, { state: { course } })}
          />
          <MdDeleteForever className="text-3xl cursor-pointer text-red-400" onClick={handleDeleteClick} />
        </div>
      )}

      {/** ---------- Title ---------- */}
      <h1 className="text-5xl font-bold mb-6">{course.title}</h1>

      {/** ---------- Description ---------- */}
      <p className="text-lg mb-6 text-gray-600">{course.description}</p>

      {/** ---------- Lectures ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 ">
          <h2 className="text-4xl font-bold mb-4">Lectures</h2>
          <ul className="space-y-4 bg-gray-200 p-4 rounded-lg">
            {/** ---------------------- Highlight the intro video when it's selected ---------------------- */}

            <li
              className={`cursor-pointer hover:underline ${
                selectedLecture === course.introVideoUrl ? "font-bold text-red-500 text-xl" : "text-blue-600"
              }`}
              onClick={() => handleLectureClick(course.introVideoUrl)}
            >
              Introduction of Course
            </li>
            {course.lectures.map((lecture, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:underline ${
                  selectedLecture === lecture.link ? "font-bold text-red-500 text-xl" : "text-blue-600"
                }`}
                onClick={() => handleLectureClick(lecture.link)}
              >
                {lecture.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 ">
          <YouTube
            videoId={selectedLecture.split("v=")[1]} // Extract video ID from YouTube link
            className="w-full h-64 lg:h-96"
            opts={{
              playerVars: {
                controls: 0, // Basic controls
                modestbranding: 1, // Reduces YouTube branding
                rel: 0, // Prevents showing related videos
                disablekb: 1, // Disables keyboard controls
                iv_load_policy: 3, // Hides video annotations
                playsinline: 1, // Plays the video inline on mobile devices
                cc_load_policy: 0, // Hides closed captions (if available)
                BlockCopyLink: 1,
              },
            }}
          />
        </div>
      </div>

      {/** ---------------------- Delete Confirmation Modal ---------------------- */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p className="mb-4">Are you sure you want to delete this course?</p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={handleConfirmDelete}
                disabled={isDeleting} // Disable button during deletion
              >
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                onClick={handleCancelDelete}
                disabled={isDeleting}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
