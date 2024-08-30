import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

// Define the hardcoded course data
const courses = [
  {
    id: "1",
    title: "React Basics",
    description:
      "Learn the fundamentals of React, including components, state, and props. Learn the fundamentals of React, including components, state, and props. Learn the fundamentals and props.Learn the fundamentals of React, including components, state, and props.",
    introVideoUrl: "https://www.youtube.com/watch?v=BHy9kXR1n-c",
    lectures: [
      { title: "Introduction to React", link: "https://www.youtube.com/watch?v=KUpwupYj_tY" },
      { title: "React Components", link: "https://www.youtube.com/watch?v=8sLS2knUa6Y" },
      { title: "State and Props", link: "https://www.youtube.com/watch?v=LK7-_dgAVQE" },
    ],
  },
  {
    id: "2",
    title: "Advanced React",
    description: "Dive deeper into React with hooks, context, and advanced patterns.",
    introVideoUrl: "https://www.youtube.com/watch?v=example2",
    lectures: [
      { title: "Hooks in React", link: "https://www.youtube.com/watch?v=lecture4" },
      { title: "Context API", link: "https://www.youtube.com/watch?v=lecture5" },
      { title: "React Patterns", link: "https://www.youtube.com/watch?v=lecture6" },
    ],
  },
  // More courses...
];

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedLecture, setSelectedLecture] = useState("");

  useEffect(() => {
    const selectedCourse = courses.find((course) => course.id === `1`);
    if (selectedCourse) {
      setCourse(selectedCourse);
      setSelectedLecture(selectedCourse.introVideoUrl); // Set intro video as default
    }
  }, [courseId]);

  if (!course) return <div>Course not found</div>;

  const handleLectureClick = (link) => {
    setSelectedLecture(link);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6">{course.title}</h1>
      <p className="text-lg mb-6">{course.description}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Lectures</h2>
          <ul className="space-y-4">
            {course.lectures.map((lecture, index) => (
              <li
                key={index}
                className="cursor-pointer text-blue-600 hover:underline"
                onClick={() => handleLectureClick(lecture.link)}
              >
                {lecture.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
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
                fs: 0, // Hides fullscreen button
                iv_load_policy: 3, // Hides video annotations
                playsinline: 1, // Plays the video inline on mobile devices
                cc_load_policy: 0, // Hides closed captions (if available)
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
