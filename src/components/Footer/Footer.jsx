import React from "react";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-blue-900 flex px-12 py-6 ">
      {/** ------------------------ Left ------------------------ */}
      <div className="flex flex-col gap-2 w-1/2 items-start">
        <h1 className="font-bold text-3xl text-white">Let's Talk</h1>
        <p className=" text-white text-justify">
          At Upskills Pakistan, we’re committed to fostering a professional environment for learning and growth. If you
          have any questions about our courses or need assistance, feel free to reach out. Our team is here to guide you
          in making informed decisions about your future. Let’s connect and begin this transformative journey together!
        </p>
      </div>

      {/** ------------------------ Right ------------------------ */}
      <div className="flex flex-col gap-2 w-1/2 items-start pl-32">
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
            <img src="./facebook.png" alt="" className="w-10" />
            {/* <FaFacebook className=" text-white size-8 hover:cursor-pointer" /> */}
          </a>

          {/**------------------- LinkedIn ------------------- */}
          <a
            href="https://www.linkedin.com/in/toqeer-khalil-a74a50235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./linkedin.png" alt="" className="w-10" />
            {/* <FaLinkedin className=" text-white size-8 hover:cursor-pointer" /> */}
          </a>

          {/**------------------- Instagram ------------------- */}
          <a
            href="https://www.instagram.com/invites/contact/?igsh=13gjtuq2g4od0&utm_content=vaeeg38"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./instagram.png" alt="" className="w-10" />
            {/* <PiInstagramLogoFill className=" text-[#d62976] size-10 hover:cursor-pointer" /> */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
