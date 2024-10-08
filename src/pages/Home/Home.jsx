import React, { useEffect, useState } from "react";
import Course from "../../components/Course/Course";
import { TypeAnimation } from "react-type-animation";
import Footer from "../../components/Footer/Footer";
import { getAllPublicCoursesApi } from "../../services/courses";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "../../utils/constants";
import ServiceCard from "../../components/Services/ServiceCard";

const PHONE_NUMBER = `923097786909 `;
const WHATSAPP_PREDEFINED_MESSAGE = `Hello! I am interested in learning more about your courses. Could you please provide details on course selection and pricing?`;
const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}?text=${WHATSAPP_PREDEFINED_MESSAGE}`;

function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const courses = await getAllPublicCoursesApi();
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

  return (
    <main className="h-full w-full">
      {/** --------------------- Main Cover Section --------------------- */}
      <section
        id="home"
        className="flex items-center justify-center h-[40rem] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./cover.png')",
        }}
      >
        <div className="text-center">
          <h1 className="text-7xl font-semibold text-white">
            <TypeAnimation
              sequence={[
                "Gain expert mentorship in Amazon",
                1000,
                "Trading",
                1000,
                "Shopify",
                1000,
                "Digital Marketing",
                1000,
                "Freelancing",
                1000,
              ]}
              wrapper="span"
              speed={10}
              className="inline-block text-white"
              repeat={Infinity}
            />
          </h1>
        </div>
      </section>

      {/** --------------------- Courses Section --------------------- */}
      <section
        id="courses"
        className="min-h-screen bg-slate-100 px-48 py-16 pt-[6rem]" // Adding padding-top to avoid header overlap
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-5xl font-bold">Courses</h2>
          <p className="text-lg text-blue-500 font-thin">Join to Learn and Go for Earn</p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course, index) => (
            <Course key={index} course={course} onClick={() => navigate(`/courses/public/${course._id}`)} />
          ))}
        </div>
      </section>

      {/** --------------------- Services Section --------------------- */}
      <section
        id="services"
        className="min-h-[35rem] bg-white py-16 px-48 pt-[6rem] " // Adding padding-top to avoid header overlap
      >
        {/** --------------------- Heading --------------------- */}
        <div className="flex flex-col items-center mb-12 justify-center px-32">
          <h2 className="text-5xl font-bold">Services</h2>
          <p className="text-2xl text-blue-500 font-thin text-center">
            At Upskills Pakistan, we offer a wide range of online courses designed to help you master in-demand skills
            and achieve your career goals.
          </p>
        </div>

        {/** --------------------- Service Cards --------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
          <ServiceCard image={"./courses.jpg"} count={`5`} title="Courses" />
          <ServiceCard image={"./clients.jpg"} count={`50+`} title="Clients" />
          <ServiceCard image={"./students.jpg"} count={`300+`} title="Students" />
        </div>
      </section>

      {/** ------------------- Whatsapp Icon ------------------- */}

      <img
        src="./whatsapp.png"
        alt=""
        className="fixed right-[30px] bottom-[30px] size-16 text-[#25D366] cursor-pointer"
        onClick={() => window.open(WHATSAPP_LINK, `_blank`)}
      />
      {/* /> */}

      <Footer />
    </main>
  );
}

export default Home;
