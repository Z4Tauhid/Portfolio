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
  const [startTyping, setStartTyping] = useState(false);

  const cardRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  //  Intersection Observer
  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  //  Tokens (with colors)
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
    { text: ": [", className: "" },
    { text: "'React'", className: "text-green-400" },
    { text: ", ", className: "" },
    { text: "'Node.js'", className: "text-green-400" },
    { text: ", ", className: "" },
    { text: "'Next.js'", className: "text-green-400" },
    { text: ", ", className: "" },
    { text: "'Python'", className: "text-green-400" },
    { text: "],\n", className: "" },

    { text: "  focuses", className: "text-purple-400" },
    { text: ": [", className: "" },
    { text: "'Full-Stack'", className: "text-green-400" },
    { text: ", ", className: "" },
    { text: "'UI/UX'", className: "text-green-400" },
    { text: ", ", className: "" },
    { text: "'AI'", className: "text-green-400" },
    { text: "],\n", className: "" },

    { text: "  learning", className: "text-purple-400" },
    { text: ": ", className: "" },
    { text: "'Always'", className: "text-green-400" },
    { text: "\n};", className: "" },
  ];

  //  Letter-by-letter typing
  useEffect(() => {
    if (!mounted || !startTyping) return;

    if (tokenIndex >= codeTokens.length) return;

    const currentToken = codeTokens[tokenIndex];

    if (charIndex < currentToken.text.length) {
      const char = currentToken.text[charIndex];

      let delay = 10;

      if (char === "\n") delay = 10;
      else if (char === " ") delay = 10;
      else delay = 10 + Math.random() * 10;

      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      // move to next token
      setTokenIndex((prev) => prev + 1);
      setCharIndex(0);
    }
  }, [charIndex, tokenIndex, mounted, startTyping]);

  // ✨ Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

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

  return ( 
    <section id="home" className="flex flex-col lg:flex-row items-center justify-center pt-20 lg:pt-25 flex-wrap gap-10 lg:gap-25 min-h-screen">

      {/* LEFT */}
      <div className="max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full"></div>
          <img
            src="/profile.jpg"
            alt="Profile"
            className="relative w-40 h-40 object-cover rounded-full border-2 border-blue-500/40"
          />
        </div>

        <p className="text-blue-400 mb-2">Hello! I'm</p>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
          MD{" "}
          <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Tauhid
          </span>
        </h1>

        <h2 className="text-lg sm:text-xl text-gray-300 mb-4">
          Full-Stack Developer
        </h2>

        <p className="text-gray-400 mb-6">
          Building elegant solutions to complex problems with modern technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={() => handleScroll("contact")} className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg">
            Contact Me
          </button>

          
          <button onClick={() => handleScroll("projects")} className="border border-gray-500 hover:border-white px-6 py-2 rounded-lg">
            View Projects
          </button>
          

          <div className="flex gap-6 text-3xl items-center">
            
            <a href="https://github.com/Z4Tauhid?tab=repositories" target="_blank"><FaGithub className="text-gray-500 hover:text-blue-500 hover:rotate-12" /></a>
            <a href="https://www.linkedin.com/in/mdtauhiddev/" target="_blank"><FaLinkedin className="text-gray-500 hover:text-blue-500 hover:rotate-12" /></a>
            
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div
        ref={cardRef}
        className="relative w-full max-w-md lg:max-w-lg"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-2xl"></div>

        {mounted && hover && (
          <>
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.6), transparent 70%)`,
              }}
            />
            <div
              className="absolute inset-0 rounded-2xl blur-2xl pointer-events-none"
              style={{
                background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.3), transparent 70%)`,
              }}
            />
          </>
        )}

        <div className="relative bg-[#0b1120]/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-5 shadow-xl">

          <div className="flex justify-between mb-4">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-xs text-gray-400">developer.js</span>
          </div>

          {/* Typed Code */}
          <div className="text-xs sm:text-sm font-mono whitespace-pre-wrap">
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

            <span className={showCursor ? "opacity-100" : "opacity-0"}>
              |
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}