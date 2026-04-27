"use client";

import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useSwipeable } from "react-swipeable";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const projects = [
  {
    title: "SOC Network Monitor",
    desc: "SOC-style dashboard that captures and streams live network packets using TShark, with real-time visualization via WebSockets.",
    image: "/soc.png",
    github: "https://github.com/your-repo",
    live: null,
    tech: ["TShark", "Node.js", "Socket.IO", "Next.js"],
  },
  {
    title: "Profast - Role-Based Parcel Delivery Platform",
    desc: "Profast is a full-stack logistics web application that connects Users, Riders, and Admins into a unified parcel delivery ecosystem.",
    image: "/pro.png",
    github: "https://github.com/Z4Tauhid/Pro-Fast",
    live: "https://profast-5efce.web.app/",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
  },
  {
    title: "Rock-Paper-Scissor League Dashboard:",
    desc: "A full-stack Rock-Paper-Scissors League Dashboard that displays match history, live match updates, and analytics such as filtered results and leaderboard insights.",
    image: "/rps.png",
    github: "https://github.com/Z4Tauhid/rps-league-dashboard",
    live: null,
    tech: ["React", "Firebase", "Axios", "Node.js", "Express", "Server-Sent Events (SSE)"],
  },
  {
    title: "Wallex",
    desc: "A modern responsive web app built with React and Firebase for managing users and roles securely.",
    image: "/wallex.png",
    github: "https://github.com/Z4Tauhid/Wallex",
    live: "https://wallex-3173a.web.app/",
    tech: ["React", "Firebase", "Tailwind"],
  },
  {
    title: "Super Blog",
    desc: "Mange your Hobby and Blogs",
    image: "/superblog.png",
    github: "https://github.com/Z4Tauhid/HobbyHubClientSide",
    live: "https://superblog-592a4.web.app/",
    tech: ["React", "Firebase", "Tailwind"],
  },
];

export default function Projects() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const prev = () =>
    setCenterIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const next = () =>
    setCenterIndex((prev) => (prev + 1) % projects.length);

  const handlers = useSwipeable({
    onSwiping: ({ deltaX }) => setDragOffset(deltaX),
    onSwiped: ({ deltaX }) => {
      const threshold = 50;
      if (deltaX < -threshold) next();
      else if (deltaX > threshold) prev();
      setDragOffset(0);
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  const leftIndex = (centerIndex - 1 + projects.length) % projects.length;
  const rightIndex = (centerIndex + 1) % projects.length;
  const visibleIndexes = [leftIndex, centerIndex, rightIndex];

  const ProjectCard = ({ project, isCenter }) => (
    <div
      className={`flex flex-col ${
        isCenter ? "min-h-[380px]" : "min-h-[300px]"
      } justify-between rounded-2xl border backdrop-blur-lg p-5
      bg-[#0b1120] ${
        isCenter
          ? "border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
          : "border-gray-700 opacity-70"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
      />

      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm">{project.desc}</p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
            >
              • {t}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <a
          href={project.github}
          target="_blank"
          className="flex items-center gap-2 text-sm border border-gray-600 px-4 py-2 rounded-lg hover:border-blue-500 transition"
        >
          <FaGithub /> GitHub
        </a>

        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            className="text-sm border border-gray-600 px-4 py-2 rounded-lg hover:border-blue-500 transition"
          >
            Live
          </a>
        ) : (
          <span className="text-xs text-yellow-400 border border-yellow-500/30 px-3 py-2 rounded-lg">
            Runs Locally Only
          </span>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="pt-35">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Projects
          <span className="block w-12 h-1 bg-blue-500 mt-2 mx-auto"></span>
        </h2>
        <p className="text-gray-400 mt-2">Some of my recent work</p>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex relative max-w-6xl mx-auto justify-center items-center">
        {visibleIndexes.map((index, i) => {
          const isCenter = i === 1;
          const project = projects[index];

          return (
            <div
              key={index}
              className={`flex-[0_0_30%] px-2 relative transition-all duration-500 ${
                isCenter ? "-translate-y-3 -mx-5" : "translate-y-2"
              }`}
              style={{
                transform: `scale(${isCenter ? 1 : 0.9})`,
                zIndex: isCenter ? 30 : 10,
              }}
            >
              <ProjectCard project={project} isCenter={isCenter} />
            </div>
          );
        })}

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0b1120]/80 p-2 rounded-full border border-gray-600 hover:border-blue-500"
        >
          <IoChevronBack />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#0b1120]/80 p-2 rounded-full border border-gray-600 hover:border-blue-500"
        >
          <IoChevronForward />
        </button>
      </div>

      {/* Mobile */}
      <div
        {...(mounted ? handlers : {})}
        className="sm:hidden relative w-screen overflow-hidden "
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            width: `${projects.length * 100}vw`,
            transform: `translateX(calc(-${
              centerIndex * 100
            }vw + ${dragOffset}px))`,
          }}
        >
          {projects.map((project, index) => (
            <div key={index} className="shrink-0 w-screen px-2">
              <ProjectCard project={project} isCenter={true} />
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0b1120]/80 p-2 rounded-full border border-gray-600"
        >
          <IoChevronBack />
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0b1120]/80 p-2 rounded-full border border-gray-600"
        >
          <IoChevronForward />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition ${
              i === centerIndex
                ? "bg-blue-500 scale-125"
                : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}