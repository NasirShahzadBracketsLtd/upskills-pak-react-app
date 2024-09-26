import React from "react";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
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

      {/** ------------------------ Right ------------------------ */}
      <div className="flex flex-col gap-2 w-1/2 items-start pl-48">
        <div className="flex items-center gap-2">
          <h1 className="text-white font-bold">Phone:</h1>
          <span className="text-blue-200 font-semibold pl-2"> +92 309 77 86 909</span>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-white font-bold">Email:</h1>
          <span className="text-blue-200 font-semibold pl-4">upskillspakistan@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-white font-bold">Address:</h1>
          <span className="text-blue-200 font-semibold">
            Trafalgar Square Ikraam Heights New Metro City Sarai-Alamgir
          </span>
        </div>
        <div className="flex gap-2 items-center justify-center">
          {/**------------------- Facebook ------------------- */}
          <a
            href="https://www.facebook.com/profile.php?id=61563805991979&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className=" text-white size-8 hover:cursor-pointer" />
          </a>

          {/**------------------- LinkedIn ------------------- */}
          <a
            href="https://www.linkedin.com/in/toqeer-khalil-a74a50235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className=" text-white size-8 hover:cursor-pointer" />
          </a>

          {/**------------------- Instagram ------------------- */}
          <a
            href="https://www.instagram.com/invites/contact/?igsh=13gjtuq2g4od0&utm_content=vaeeg38"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiInstagramLogoFill className=" text-[#d62976] size-10 hover:cursor-pointer" />
          </a>

          {/**------------------- Whatsapp ------------------- */}
          <a href="https://wa.me/<+923338152157>?text=<message>" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp className=" text-[#59e732] size-10 hover:cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
