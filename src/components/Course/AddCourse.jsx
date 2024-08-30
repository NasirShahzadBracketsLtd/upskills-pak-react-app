import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCourse = ({ onClose }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [introVideoUrl, setIntroVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [lectures, setLectures] = useState([{ title: "", link: "" }]);

  const handleAddLecture = () => {
    setLectures([...lectures, { title: "", link: "" }]);
  };

  const handleLectureChange = (index, field, value) => {
    const updatedLectures = [...lectures];
    updatedLectures[index][field] = value;
    setLectures(updatedLectures);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const handleCancel = () => {
    navigate("/"); // Navigate back to the main courses page on cancel
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mx-36 mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Cover Image URL"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Intro Video URL"
            value={introVideoUrl}
            onChange={(e) => setIntroVideoUrl(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Course Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Lectures</h3>
          {lectures.map((lecture, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                placeholder="Lecture Title"
                value={lecture.title}
                onChange={(e) => handleLectureChange(index, "title", e.target.value)}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Lecture Link"
                value={lecture.link}
                onChange={(e) => handleLectureChange(index, "link", e.target.value)}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {index < lectures.length - 1 && <hr className="my-4" />}
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddLecture}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full mb-4"
          >
            Add Lecture
          </button>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={handleCancel}
            className="mr-4 bg-red-500 text-white hover:bg-red-500 px-6 py-2 rounded-full focus:outline-none"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded-full focus:outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
