import React from "react";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
function Footer() {
  return (
    <div className="bg-blue-900 flex px-12 py-6 ">
      {/** ------------------------ Left ------------------------ */}
      <div className="flex flex-col gap-2 w-1/2 items-start">
        <h1 className="font-bold text-3xl text-white">Let's Talk</h1>
        <p className=" text-white text-justify">
          Unlock your business's full potential with our expert guidance. We specialize in expanding your reach and
          empowering your team with top-tier online training, equipping them with the skills needed to thrive in the
          digital marketplace. Whether you're looking to grow your business or train people for online work, we've got
          you covered.
        </p>
      </div>

      {/** ------------------------ Left ------------------------ */}
      <div className="flex flex-col gap-2 w-1/2 items-start pl-48">
        <div className="flex items-center gap-2">
          <h1 className="text-white font-bold">Phone:</h1>
          <span className="text-blue-500 font-semibold pl-2"> +92 300 12 12 123</span>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-white font-bold">Email:</h1>
          <span className="text-blue-500 font-semibold pl-4">upskillspakistan@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-white font-bold">Address:</h1>
          <span className="text-blue-500 font-semibold">
            Trafalgar Square Ikraam Heights New Metro City Sarai-Alamgir
          </span>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <FaFacebook className=" text-white size-8 hover:cursor-pointer" />
          <PiInstagramLogoFill className=" text-[#d62976] size-10 hover:cursor-pointer" />
          <FaLinkedin className=" text-white size-8 hover:cursor-pointer" />
          <SiFiverr className=" text-[#59e732] text-7xl hover:cursor-pointer" />
        </div>
      </div>
    </div>

    // <div className="flex flex-col bg-slate-300 pb-6">
    //   {/** ------------------------ Social Media Links ------------------------ */}
    //   <div className="flex gap-2 items-center justify-center">
    //     <FaFacebook className=" text-white size-8" />
    //     <PiInstagramLogoFill className=" text-[#d62976] size-10" />
    //     <FaLinkedin className=" text-white size-8" />
    //     <SiFiverr className=" text-[#59e732] text-7xl" />
    //   </div>

    //   {/** ------------------------ Contact Details ------------------------ */}
    //   <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
    //     <div className="flex items-center gap-2">
    //       <SiGmail className="text-red-700 size-8" />
    //       <span className="text-white font-semibold text-xl">test@gmail.com</span>
    //     </div>

    //     <div className="flex items-center gap-2">
    //       <IoLogoWhatsapp className="text-[#25D366] size-8" />
    //       <span className="text-white font-semibold text-xl">+923001212123</span>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Footer;
