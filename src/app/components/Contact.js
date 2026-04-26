"use client";

import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume  } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-10 lg:px-20 bg-[#050914] text-white"
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Get In Touch
          <span className="block w-12 h-1 bg-blue-500 mt-2 mx-auto"></span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Have a question or want to work together? Feel free to reach out. I'd
          love to hear from you!
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto text-center">
        
        {/* Email */}
        <div className="flex items-center gap-2">
            <FaEnvelope className="text-2xl text-blue-500 hover:rotate-12"/>
            <p className="text-gray-300 text-sm sm:text-base">md.tauhid.dev@gmail.com</p>
        </div>
        

        {/* Phone */}
        <div className="flex items-center gap-2">
            <FaPhoneVolume  className="text-2xl text-blue-500 hover:rotate-12"/>
            <p className="text-gray-300 text-sm sm:text-base">+358417402576</p>
        </div>

        {/* Location */}
         <div className="flex items-center gap-2">
            <FaLocationDot  className="text-2xl text-blue-500 hover:rotate-12"/>
            <p className="text-gray-300 text-sm sm:text-base">Lahti, Finland</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-3xl items-center">
             <a href="https://github.com/Z4Tauhid?tab=repositories" target="_blank"><FaGithub className="text-gray-500 hover:text-blue-500 hover:rotate-12" /></a>
            <a href="https://www.linkedin.com/in/mdtauhiddev/" target="_blank"><FaLinkedin className="text-gray-500 hover:text-blue-500 hover:rotate-12" /></a>
          </div>
      </div>
    </section>
  );
}