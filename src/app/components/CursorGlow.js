"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.25), transparent 70%)`,
        }}
      />

      {/* Soft Glow Layer */}
      <div
        className="pointer-events-none fixed inset-0 z-0 blur-2xl"
        style={{
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.15), transparent 70%)`,
        }}
      />
    </>
  );
}