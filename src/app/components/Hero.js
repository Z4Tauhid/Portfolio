"use client";

import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [tokenIndex, setTokenIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const cardRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing effect (FIXED)
  useEffect(() => {
    if (!mounted) return;
    if (tokenIndex >= codeTokens.length) return;

    const currentToken = codeTokens[tokenIndex];

    if (!currentToken) return;

    if (charIndex < currentToken.text.length) {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 15);

      return () => clearTimeout(timeout);
    } else {
      setTokenIndex((prev) => prev + 1);
      setCharIndex(0);
    }
  }, [charIndex, tokenIndex, mounted]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const codeTokens = [
    { text: "// Full-Stack Developer\n\n", className: "text-gray-400" },

    { text: "const ", className: "text-pink-500" },
    { text: "developer", className: "text-blue-400" },
    { text: " = {\n", className: "" },

    { text: "  name", className: "text-purple-400" },
    { text: ": ", className: "" },
    { text: "'MD Tauhid'", className: "text-green-400" },
    { text: ",\n", className: "" },

    { text: "  skills", className: "text-purple-400" },
    { text: ": ['React', 'Node.js', 'Next.js', 'Python'],\n", className: "" },

    { text: "  focuses", className: "text-purple-400" },
    { text: ": ['Full-Stack', 'UI/UX', 'AI'],\n", className: "" },

    { text: "  learning", className: "text-purple-400" },
    { text: ": 'Always'\n};", className: "" },
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const CodeBox = () => (
    <div className="relative bg-[#0b1120]/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-5 shadow-xl w-full">

      {/* 🔥 HEADER (ADDED BACK) */}
      <div className="flex justify-between mb-4">
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="text-xs text-gray-400">developer.js</span>
      </div>

      {/* CODE */}
      <div className="text-xs sm:text-sm font-mono whitespace-pre-wrap text-left">
        {codeTokens.map((token, i) => {
          if (i < tokenIndex) {
            return (
              <span key={i} className={token.className}>
                {token.text}
              </span>
            );
          }

          if (i === tokenIndex) {
            return (
              <span key={i} className={token.className}>
                {token.text.slice(0, charIndex)}
              </span>
            );
          }

          return null;
        })}

        <span className={showCursor ? "opacity-100" : "opacity-0"}>|</span>
      </div>
    </div>
  );

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center md:pt-20 lg:pt-25 flex-wrap gap-5 lg:gap-25 min-h-screen">

      {/* LEFT */}
      <div className="max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left">

        <div className="relative mb-4">
          <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full"></div>
          <img
            src="/profile.jpg"
            className="relative w-40 h-40 object-cover rounded-full border-2 border-blue-500/40"
          />
        </div>

        <p className="text-blue-400 mb-2">Hello! I'm</p>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">
          MD{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Tauhid
          </span>
        </h1>

        {/* 📱 MOBILE CODE */}
        <div className="block lg:hidden my-4 w-full text-left">
          <CodeBox />
        </div>

        <h2 className="text-lg sm:text-xl text-gray-300 mb-2 md:mb-4">
          Full-Stack Developer
        </h2>

        <p className="text-gray-400 mb-2 md:mb-4">
          Building elegant solutions to complex problems with modern technologies.
        </p>

        <div className="flex gap-4">
          <button onClick={() => handleScroll("contact")} className="bg-blue-500 px-6 py-2 rounded-lg">
            Contact Me
          </button>

          <button onClick={() => handleScroll("projects")} className="border border-gray-500 px-6 py-2 rounded-lg">
            View Projects
          </button>
        </div>
      </div>

      {/* RIGHT (desktop only) */}
      <div className="hidden lg:block w-full max-w-md lg:max-w-lg">
        <CodeBox />
      </div>

    </section>
  );
}