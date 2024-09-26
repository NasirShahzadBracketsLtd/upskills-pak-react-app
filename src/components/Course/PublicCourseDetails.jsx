import YouTube from "react-youtube";
import React, { useState, useEffect } from "react";
import { getSinglePublicCourseApi } from "../../services/courses";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const PublicCourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseResponse = await getSinglePublicCourseApi(courseId);
        setCourse(courseResponse);
      } catch (error) {
        console.log(`Error while getting Courses`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <BeatLoader size={32} color="#000099" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6">
      {/** ---------- Title ---------- */}
      <h1 className="text-5xl font-bold mb-6 text-center">{course.title}</h1>

      {/** ---------- Description ---------- */}
      <div className="bg-gray-200 p-6 rounded-lg">
        <p className="text-lg text-justify">{course.description}</p>
      </div>

      <div className="lg:col-span-3 mt-6 flex justify-center">
        <div className="max-w-full">
          <YouTube
            videoId={course.introVideoUrl.split("v=")[1]} // Extract video ID from YouTube link
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
    </div>
  );
};

export default PublicCourseDetails;
