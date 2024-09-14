import axios from "axios";
import YouTube from "react-youtube";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { RxCross1 } from "react-icons/rx";
import { MdEdit, MdDeleteForever } from "react-icons/md";

import { API_BASE_URL } from "../../utils/constants";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedLecture, setSelectedLecture] = useState("");
  const [loading, setLoading] = useState(true); // New loading state

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // Add loading state

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) navigate(`/courses`);

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/courses/${courseId}`, headers);

        if (response.status === 200) {
          // navigate(`/courses`);
          const courseData = response.data;
          setCourse(courseData);
          setSelectedLecture(courseData.introVideoUrl); // Set intro video as default
          // return;
        } else {
          alert(`Course not found`);
        }
      } catch (error) {
        console.log(`Error while getting Courses`, error);
        navigate(`/courses`); // Redirect on error
      } finally {
        setLoading(false); // Stop loading after data fetch is complete
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) {
    return <div className="flex items-center justify-center py-24 text-4xl font-bold">Loading ...</div>;
  }

  if (!course) return <div>Course not found</div>;

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
    setIsDeleting(true); // Set loading state
    try {
      const response = await axios.delete(`${API_BASE_URL}/courses/${course._id}`, headers);

      if (response.status === 200) {
        toast.success(`Course Deleted Successfully!!`);

        setTimeout(() => {
          navigate(`/courses`);
        }, 2000);
      }

      setShowConfirmation(false);
    } catch (error) {
      console.error(`Failed to delete course`, error);
    } finally {
      setIsDeleting(false); // Reset loading state
    }
  };

  // Function to cancel the deletion
  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-">
      <ToastContainer />

      {/** ---------------------- Course Edit/Delete Icons ---------------------- */}
      <div className="flex justify-end">
        <MdEdit
          className="text-3xl cursor-pointer text-blue-400"
          onClick={() => navigate(`/courses/update-course/${course._id}`, { state: { course } })}
        />
        <MdDeleteForever className="text-3xl cursor-pointer text-red-400" onClick={handleDeleteClick} />
      </div>

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
                autoplay: 1,
                controls: 1, // Basic controls
                modestbranding: 1, // Reduces YouTube branding
                rel: 0, // Prevents showing related videos
                disablekb: 1, // Disables keyboard controls
                iv_load_policy: 3, // Hides video annotations
                playsinline: 1, // Plays the video inline on mobile devices
                cc_load_policy: 0, // Hides closed captions (if available)
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
