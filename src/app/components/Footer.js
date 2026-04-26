"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  // Nav items (same as navbar)
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experiences", id: "experiences" },
    { name: "Contact", id: "contact" },
  ];

  // Show button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#050914] text-white px-4 sm:px-10 lg:px-20 py-10 border-t border-gray-800">
      
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        
        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex gap-3 items-center">
            <img
              src="/T.jpg"
              alt="Profile"
              className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full border-2 border-blue-500/40"
            />
            <h3 className="text-xl font-bold text-blue-500">MT.</h3>
          </div>

          <p className="text-gray-400 text-sm mt-2 max-w-xs">
            Building elegant digital solutions with a focus on user experience and technical excellence.
          </p>
        </div>

        {/* CENTER (Nav Items + Copyright) */}
        <div className="flex flex-col  items-center justify-center gap-4">
          
          {/* Nav Items */}
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-gray-400 text-sm">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => handleScrollTo(item.id)}
                className="cursor-pointer hover:text-blue-500 transition"
              >
                {item.name}
              </li>
            ))}
          </ul>

          
        </div>

        {/* RIGHT (Socials) */}
        <div className="flex gap-5 text-xl">
         {/* Copyright */}
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} MD Tauhid | Built with React and Tailwind
          </p>
        </div>
      </div>

      {/* Scroll To Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition duration-300 hover:scale-110"
        >
          ↑
        </button>
      )}
    </footer>
  );
}