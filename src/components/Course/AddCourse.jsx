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
    // onClose(); // This line seems unnecessary if you're not passing the `onClose` prop
  };

  const handleCancel = () => {
    navigate("/"); // Navigate back to the main courses page on cancel
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Course</h2>

        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Intro Video URL"
          value={introVideoUrl}
          onChange={(e) => setIntroVideoUrl(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />

        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          rows="4"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full mb-6 p-2 border rounded"
        />

        <h3 className="text-lg font-semibold mb-2">Lectures</h3>
        {lectures.map((lecture, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              placeholder="Lecture Title"
              value={lecture.title}
              onChange={(e) => handleLectureChange(index, "title", e.target.value)}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Lecture Link"
              value={lecture.link}
              onChange={(e) => handleLectureChange(index, "link", e.target.value)}
              className="w-full mb-2 p-2 border rounded"
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

        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
