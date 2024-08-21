import React from "react";
import Course from "../../components/Course/Course";
import { TypeAnimation } from "react-type-animation";
import { courses } from "../../../data";

function Home() {
  return (
    <main className="h-full w-full pt-24">
      {/** ======================= Main Cover Section ======================= */}
      <section
        id="home"
        className="flex items-center justify-center h-[40rem] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://www.webfx.com/wp-content/uploads/2008/12/012412_website_footer_examples.png)",
        }}
      >
        <div className="text-center">
          <h1 className="text-7xl font-semibold text-white">
            <TypeAnimation
              sequence={[
                "Master Your Skills in",
                1000,
                "Amazon Trading",
                1000,
                "Shopify",
                1000,
                "Fiverr",
                1000,
                "Gig Expert",
                1000,
                "Freelance Pro",
                1000,
                "E-Commerce Success",
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

      {/** ======================= Courses Section ======================= */}
      <section
        id="courses"
        className="min-h-screen bg-slate-100 px-20 py-16 pt-[6rem]" // Adding padding-top to avoid header overlap
      >
        <header className="flex flex-col items-center mb-12">
          <h2 className="text-5xl font-bold">Courses</h2>
          <p className="text-lg text-blue-500 font-thin">Join to Learn and Go for Earn</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course, index) => (
            <Course key={index} course={course} />
          ))}
        </div>
      </section>

      {/** ======================= Services Section ======================= */}
      <section
        id="services"
        className="min-h-[35rem] bg-white py-16 pt-[6rem]" // Adding padding-top to avoid header overlap
      >
        <header className="flex flex-col items-center mb-12">
          <h2 className="text-5xl font-bold">Services</h2>
          <p className="text-lg text-blue-500 font-thin">Join to Learn and Go for Earn</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
          <div
            className="bg-red-500 h-40 flex flex-col justify-center items-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://png.pngtree.com/thumb_back/fh260/background/20200729/pngtree-colorful-flow-background-with-fluid-form-image_372440.jpg)",
            }}
          >
            <h3 className="text-7xl font-bold">10+</h3>
            <p className="text-2xl font-semibold">Courses</p>
          </div>

          <div
            className="bg-red-500 h-40 flex flex-col justify-center items-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlqlKIYVdDhCNTpSM_u08fsAQfAGmNwtkyg&s)",
            }}
          >
            <h3 className="text-7xl font-bold">12+</h3>
            <p className="text-2xl font-semibold">Clients</p>
          </div>

          <div
            className="bg-red-500 h-40 flex flex-col justify-center items-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgT79WmO40PVml-JFlthHXJi90DnQy9ozQRokKpITqUtYDPPH4B3nhtmFptVgDhiNovg&usqp=CAU)",
            }}
          >
            <h3 className="text-7xl font-bold">80+</h3>
            <p className="text-2xl font-semibold">Students</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
