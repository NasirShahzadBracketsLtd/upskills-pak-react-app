import React, { useState } from "react";

const CreateCourseForm = () => {
  const [course, setCourse] = useState({
    coverImage: "",
    title: "",
    introVideoUrl: "",
    description: "",
    pricingDetails: {
      originalPrice: "",
      discountedPrice: "",
      isOnSale: false,
    },
    lectures: [{ title: "", link: "" }],
    reviews: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: value,
    });
  };

  const handlePricingChange = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      pricingDetails: {
        ...course.pricingDetails,
        [name]: value,
      },
    });
  };

  const handleLectureChange = (index, e) => {
    const { name, value } = e.target;
    const newLectures = course.lectures.map((lecture, i) => (i === index ? { ...lecture, [name]: value } : lecture));
    setCourse({ ...course, lectures: newLectures });
  };

  const addLecture = () => {
    setCourse({ ...course, lectures: [...course.lectures, { title: "", link: "" }] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(course);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Course</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="coverImage"
          value={course.coverImage}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Cover Image URL"
        />

        <input
          name="title"
          value={course.title}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Course Title"
          required
        />

        <input
          type="text"
          name="introVideoUrl"
          value={course.introVideoUrl}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Intro Video URL"
        />

        <input
          type="text"
          name="description"
          value={course.description}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Course Description"
        />

        <input
          type="number"
          name="originalPrice"
          value={course.pricingDetails.originalPrice}
          onChange={handlePricingChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Original Price"
        />

        <input
          type="number"
          name="discountedPrice"
          value={course.pricingDetails.discountedPrice}
          onChange={handlePricingChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Discounted Price"
        />

        <div className="col-span-2 mt-1 flex items-center">
          <input
            type="checkbox"
            name="isOnSale"
            checked={course.pricingDetails.isOnSale}
            onChange={(e) =>
              setCourse({
                ...course,
                pricingDetails: { ...course.pricingDetails, isOnSale: e.target.checked },
              })
            }
            className="mr-2"
          />
          <span>Is On Sale?</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Lectures</h3>
        {course.lectures.map((lecture, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 mb-2">
            <input
              type="text"
              name="title"
              value={lecture.title}
              onChange={(e) => handleLectureChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Lecture Title"
              required
            />

            <input
              type="text"
              name="link"
              value={lecture.link}
              onChange={(e) => handleLectureChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Lecture Link"
              required
            />
          </div>
        ))}
        <button type="button" onClick={addLecture} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Add Another Lecture
        </button>
      </div>

      <button type="submit" className="w-full mt-4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
        Create Course
      </button>
    </form>
  );
};

export default CreateCourseForm;

// import React from "react";

// function CreateCourse() {
//   return (
//     <div className="bg-red-500 h-screen p-24">
//       <div className="bg-green-500 h-full">
//         <h1 className="justify-center content-center items-center text-center font-bold text-4xl">Create Course</h1>
//         <div>
//           <input
//             type="text"
//             name="title"
//             placeholder="Course Title"
//             className="w-[20rem] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />

//           <input
//             type="text"
//             name="introVideoUrl"
//             placeholder="Introduction Video URL"
//             className="w-[20rem] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateCourse;

// {
//   /* <input
//           type="text"
//           name="instructor"
//           //   value={courseData.instructor}
//           //   onChange={handleChange}
//           placeholder="Instructor Name"
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         /> */
// }
