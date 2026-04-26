"use client";

import Image from "next/image";

import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiVercel,
  SiPostman,
  SiCisco,
  SiVmware,
  SiLinux,
  SiSharp,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: IoLogoCss3 , color: "#1572B6" },

    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },

    { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
    { name: "Express.js", icon: SiExpress, color: "#ffffff" },
    { name: "REST API", icon: SiSharp, color: "#A100FF" },

    { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },

    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },

    { name: "CCNA Networking", icon: SiCisco, color: "#1BA0D7" },
    { name: "Virtualization", icon: SiVmware, color: "#607078" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },

    // NSE4 Certification (image)
    { name: "NSE 4 Fortinet", image: "/NSE4.png" },
  ];

  return (
    <section
      id="skills"
      className="pt-20 px-4 sm:px-10 lg:px-20 bg-[#050914] text-white"
    >
      {/* Heading */}
      <div className="mb-14 text-center">
         <h2 className="text-3xl sm:text-4xl font-bold">
          Skills
          <span className="block w-12 h-1 bg-blue-500 mt-2 mx-auto"></span>
        </h2>
        
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-10 max-w-6xl mx-auto place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 "
            title={skill.name}
          >
            {/* Icon OR Image */}
            {skill.icon ? (
              <skill.icon className="rounded-xl" size={42} style={{ color: skill.color }} />
            ) : (
              <Image
                src={skill.image}
                alt={skill.name}
                width={50}
                height={50}
                className="object-contain"
              />
            )}

            {/* Name under logo */}
            <span className="text-xs text-gray-300 text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}