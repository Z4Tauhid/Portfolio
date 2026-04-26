"use client";
import { IoDocumentTextOutline} from "react-icons/io5";
import { FaLocationDot, FaUserGraduate } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaArrowCircleDown } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center pt-25"
    >
      <div className="w-full grid lg:grid-cols-3 gap-10 items-center ">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            About Me
            <span className="block w-12 h-1 bg-blue-500 mt-2"></span>
          </h2>

          {/* Bio */}
          <div className="mb-8 px-3">
            <h3 className="text-lg font-semibold  mb-2 flex flex-row items-center gap-1">
              <span className=" text-blue-400 transition transform hover:rotate-12"><IoDocumentTextOutline /></span> Bio
            </h3>
            <p className="text-gray-400 leading-relaxed ">
              Passionate Web Developer with hands-on experience in full-stack development 
              (MERN stack), RESTful APIs, and Linux-based environments. Strong foundation 
              in networking, system administration, and virtualization. 

              Focused on building scalable, efficient, and user-centric applications while 
              continuously exploring emerging technologies including AI.
            </p>
          </div>

          {/* Cards */}
         {/* Cards */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {/* Education 1 */}
  <div className="border border-gray-700 rounded-xl p-5 bg-[#0b1120]/70 backdrop-blur-lg">
    <h3 className="font-semibold mb-2 flex items-center gap-2">
      <span className="text-blue-400 text-xl"><FaUserGraduate /></span>
      Vocational Studies
    </h3>

    <p className="font-medium">
     Ammattiosaajien
    </p>
    <div className="flex gap-1 items-center">
      <FaLocationDot  className="text-xl text-blue-500 hover:rotate-12"/>
      <p className="text-gray-400 text-sm">Salpaus, Lahti, Finland</p>
      
    </div>
    
    <p className="text-gray-500 text-sm mt-2">
      Ongoing
    </p>
  </div>

  {/* Education 2 */}
  <div className="border border-gray-700 rounded-xl p-5 bg-[#0b1120]/70 backdrop-blur-lg">
    <h3 className="font-semibold mb-2 flex items-center gap-2">
      <span className="text-blue-400 text-xl"><FaUserGraduate /></span>
      Bachelor's Degree
    </h3>

    <p className="font-medium">
      BSc in Electronic & Electrical Engineering
    </p>
    <div className="flex gap-2 items-center"><FaLocationDot  className="text-xl text-blue-500 hover:rotate-12"/>
    <p className="text-gray-400 text-sm">
      American International University – Bangladesh (AIUB)
    </p></div>
    
  </div>

  {/* Education 3 */}
  <div className="border border-gray-700 rounded-xl p-5 bg-[#0b1120]/70 backdrop-blur-lg">
    <h3 className="font-semibold mb-2 flex items-center gap-2">
      <span className="text-blue-400 text-xl"><AiOutlineSafetyCertificate  /></span>
      Certifications
    </h3>

    <p className="font-medium">
      CCNA (Cisco Certified Network Associate)
    </p>
    <p className="text-gray-400 text-sm">
      Networking & Security
    </p>

    <p className="font-medium mt-3">
      Fortinet NSE 4
    </p>
    <p className="text-gray-400 text-sm">
      Network Security Professional
    </p>
  </div>

</div>
        </div>

        {/* RIGHT PROFILE */}
        <div className="flex flex-col items-center text-center">

          {/* Image */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full"></div>

            <img
              src="/profile.jpg"
              alt="profile"
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-blue-500/40"
            />

            {/* GPA Badge */}
            <span className="absolute bottom-0 right-0 bg-blue-500 text-xs px-3 py-1 rounded-full">
              Open To Work
            </span>
          </div>

          {/* Name */}
          <h3 className="text-xl font-bold">MD Tauhid</h3>
          <p className="text-gray-400 mb-4">
            
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {["MERN Stack", "Networking", "Linux", "Virtualization", "REST APIs",].map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1 border border-gray-600 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Button */}
          <a href="/MD TAUHID CV.pdf" target="_blank">
          <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg flex items-center gap-2">
            <FaArrowCircleDown /><span>Download Resume</span>
          </button></a>
          
         
        </div>
      </div>
    </section>
  );
}