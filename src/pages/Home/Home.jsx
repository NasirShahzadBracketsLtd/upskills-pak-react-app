import React from "react";
import Course from "../../components/Course/Course";
import { TypeAnimation } from "react-type-animation";
import TextField from "../../components/TextField/TextField";

import { courses } from "../../../data";

function Home() {
  return (
    <div className="h-full w-full pt-24">
      {/** ======================= Main Cover Page ======================= */}
      <div
        className="flex text-center h-[40rem] bg-red-500 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://www.webfx.com/wp-content/uploads/2008/12/012412_website_footer_examples.png)",
        }}
      >
        {/** ------------------- Text Animation ------------------- */}

        <div className="pl-64 pt-24">
          <span className="text-7xl font-semibold text-white">
            <TypeAnimation
              sequence={[
                "Master Your Skills in",
                1000,
                "Amazon Trading",
                1000,
                "Shopify",
                1000,
                "Fiver",
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
              className="text-6xl inline-block text-white"
              repeat={Infinity}
            />

            {/* Building Digital <br /> Experience That <br /> Inspire */}
          </span>
        </div>
        {/* <h1 className="font-bold text-5xl text-white">
          Become a pro with <br /> thousands of <br />
          creative classes
        </h1> */}
      </div>

      {/** ======================= Courses ======================= */}
      <div className="min-h-screen bg-slate-100 px-20 py-8">
        {/** ----------------- Courses's Heading -----------------  */}
        <div className="flex flex-col items-center justify-center h-[10rem]">
          <h1 className="text-5xl font-bold font-sans">Courses</h1>
          <p className="text-lg text-blue-500 font-thin">Join to Learn and Go for Earn</p>
        </div>

        {/** ----------------- Courses -----------------  */}
        <div className="grid grid-cols-3 gap-y-12 justify-items-center items-center px-20 py-12 ">
          {courses.map((course, index) => (
            <Course key={index} course={course} />
          ))}
        </div>
      </div>

      {/** ======================= Analytics ======================= */}
      <div className="min-h-[35rem] bg-white py-8">
        {/** ----------------- Analytics's Heading -----------------  */}
        <div className="flex flex-col items-center justify-center h-[10rem]">
          <h1 className="text-5xl font-bold font-sans">Services</h1>
          <p className="text-lg text-blue-500 font-thin">Join to Learn and Go for Earn</p>
        </div>

        {/** ----------------- Analytics -----------------  */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full py-12 px-36">
          {/**  Single Card   */}
          <div
            className="bg-red-500 h-40 flex flex-col justify-center items-center"
            style={{
              backgroundImage:
                "url(https://png.pngtree.com/thumb_back/fh260/background/20200729/pngtree-colorful-flow-background-with-fluid-form-image_372440.jpg)",
            }}
          >
            <h1 className="text-7xl font-bold ">10+</h1>
            <h1 className="text-2xl font-semibold">Courses</h1>
          </div>

          <div
            className="bg-red-500 h-full flex flex-col justify-center items-center bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlqlKIYVdDhCNTpSM_u08fsAQfAGmNwtkyg&s",
            }}
          >
            <h1 className="text-7xl font-bold ">12+</h1>
            <h1 className="text-2xl font-semibold">Clients</h1>
          </div>

          <div
            className="bg-red-500 h-40 flex flex-col justify-center items-center"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgT79WmO40PVml-JFlthHXJi90DnQy9ozQRokKpITqUtYDPPH4B3nhtmFptVgDhiNovg&usqp=CAU)",
            }}
          >
            <h1 className="text-7xl font-bold ">80+</h1>
            <h1 className="text-2xl font-semibold">Students</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// {
/* <div className="flex gap-12 bg-red-400 items-center px-20 py-32">
{/** 
<div>
  <h1 className="text-6xl  font-bold">In the World of online </h1>
  <p>
    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
    type specimen book. It has surv
  </p>
</div>


<div>
  <h1 className="text-6xl  font-bold">In the World of online </h1>
  <p>
    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
    type specimen book. It has surv
  </p>
</div>
</div> */
// }

// {
/**-------------------  YouTube Video Example -------------------  */
// }
// {
/* <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-2xl aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            // src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&controls=0&showinfo=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div> */
// }
