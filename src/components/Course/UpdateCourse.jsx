import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getSingleCourse, updateCourseApi } from "../../services/courses";
import { TOAST_OPTIONS } from "../../utils/constants";
import "react-toastify/dist/ReactToastify.css";

const UpdateCourse = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    coverImage: "",
    introVideoUrl: "",
    description: "",
    price: "",
    lectures: [{ title: "", link: "" }],
  });

  /**-------------------------------------------------------------------------------
                            * Handle Lecture Change
   --------------------------------------------------------------------------------*/
  const handleLectureChange = (index, field, value) => {
    const updatedLectures = [...formData.lectures];
    updatedLectures[index][field] = value;
    setFormData({ ...formData, lectures: updatedLectures });
  };

  const handleAddLecture = () => {
    setFormData({
      ...formData,
      lectures: [...formData.lectures, { title: "", link: "" }],
    });
  };

  /**-----------------------------------------------------------------------------
                      * Handle Form Submit (Update Course)
   -----------------------------------------------------------------------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateCourseApi(courseId, formData);
      toast.success(`Course updated successfully.`, TOAST_OPTIONS);
      navigate(`/courses/${courseId}`);
    } catch (error) {
      console.error(`Error updating course:`, error);
      toast.error(`Error while updating course.`, TOAST_OPTIONS);
    }
  };

  useEffect(() => {
    const fetchCourseDetails = async (id) => {
      try {
        const course = await getSingleCourse(id);
        setFormData({
          title: course.title || "",
          coverImage: course.coverImage || "",
          introVideoUrl: course.introVideoUrl || "",
          description: course.description || "",
          price: course.price || "",
          lectures: course.lectures || [{ title: "", link: "" }],
        });
      } catch (error) {
        console.error(`Error fetching course:`, error);
      }
    };

    if (courseId) {
      fetchCourseDetails(courseId);
    }
  }, [courseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    navigate(`/courses`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mx-36 mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Course</h2>

      <form onSubmit={handleSubmit}>
        {/** ---------- Title ---------- */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Course Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/** ---------- Cover Image ---------- */}

        <div className="mb-4">
          <input
            type="text"
            placeholder="Cover Image URL"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/** ---------- Intro Video URL ---------- */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Intro Video URL"
            name="introVideoUrl"
            value={formData.introVideoUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/** ---------- Description ---------- */}
        <div className="mb-4">
          <textarea
            placeholder="Course Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>

        {/** ---------- Price ---------- */}
        <div className="mb-4">
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/** ---------- Lectures ---------- */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Lectures</h3>
          {formData.lectures.map((lecture, index) => (
            <div key={index} className="mb-4">
              {/** ---------- Lecture Title ---------- */}
              <input
                type="text"
                placeholder="Lecture Title"
                value={lecture.title}
                onChange={(e) => handleLectureChange(index, "title", e.target.value)}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/** ---------- Lecture URL ---------- */}
              <input
                type="text"
                placeholder="Lecture Link"
                value={lecture.link}
                onChange={(e) => handleLectureChange(index, "link", e.target.value)}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {index < formData.lectures.length - 1 && <hr className="my-4" />}
            </div>
          ))}

          {/** ---------- Add Lecture Button ---------- */}

          <button
            type="button"
            onClick={handleAddLecture}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full mb-4"
          >
            Add Lecture
          </button>
        </div>

        {/** ---------- Update Button ---------- */}
        <div className="flex justify-end mt-6 gap-2">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-500 text-white hover:bg-red-500 px-6 py-2 rounded-full focus:outline-none"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded-full focus:outline-none"
          >
            {loading ? `Updating...` : `Update`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCourse;
