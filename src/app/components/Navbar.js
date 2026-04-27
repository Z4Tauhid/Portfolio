"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Experiences", id: "experiences" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  // 👇 Detect active section on scroll
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // adjust for sensitivity
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setSidebarOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 sm:px-10 py-4 bg-[#020617] sticky w-full top-0 z-50">

        {/* Logo */}
        <div className="flex gap-3 items-center pt-5 md:pt-0">
            <img
              src="/T.jpg"
              alt="Profile"
              className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full border-2 border-blue-500/40"
            />
            <h3 className="text-xl font-bold text-blue-500">MT.</h3>
          </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li
                key={item.name}
                onClick={() => handleScroll(item.id)}
                className="cursor-pointer flex flex-col items-center group"
              >
                <span
                  className={`transition ${
                    isActive ? "text-white" : "group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>

                {/* ACTIVE UNDERLINE */}
                {isActive && (
                  <span className="block w-14 h-1 bg-blue-500 mt-2 rounded-full"></span>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4 pt-5 md:pt-0">
          <a href="/MD TAUHID Resume.pdf" target="_blank">
            <button className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg text-sm">
            Resume</button>
          </a>
          

          {/* Hamburger */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-5"
          >
            <span className={`h-0.5 bg-gray-300 ${sidebarOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-gray-300 ${sidebarOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-gray-300 ${sidebarOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            className="fixed top-0 left-0 h-full w-64 bg-[#020617]/90 backdrop-blur-xl z-40 shadow-lg"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
          >
            <ul className="flex flex-col mt-24 ml-6 space-y-6 text-white text-lg font-semibold">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleScroll(item.id)}
                  className={`cursor-pointer ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}