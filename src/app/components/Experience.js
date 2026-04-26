"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 30%"],
  });

  // Line grows with scroll
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  const experiences = [
    {
      role: "Web Developer Intern",
      org: "Spark Traineeships • Finland",
      tech: ["MongoDB", "Express", "React", "Node", "Firebase", "REST API", "Python"],
    },
    {
      role: "IT Volunteer",
      org: "DILA • Finland",
      tech: ["IT Support", "Digital Systems", "User Assistance"],
    },
    {
      role: "Engineer (Technical Services)",
      org: "Express System Limited",
      tech: ["Fortinet", "VPN", "SD-WAN", "OSPF", "DHCP", "NetFlow"],
    },
    {
      role: "IT Officer",
      org: "Akij Assets Ltd.",
      tech: ["VLAN", "Routing", "NAT", "OSPF", "ESXi", "Active Directory"],
    },
  ];

  return (
    <section id="experiences"
      ref={ref}
      className="pt-20 px-4 sm:px-10 lg:px-20 bg-[#050914] text-white"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Experience
          <span className="block w-14 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* SCROLL-DRIVEN LINE */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-blue-500 md:-translate-x-1/2 origin-top"
        />

        <div className="flex flex-col gap-24">
          {experiences.map((exp, index) => {
            const isTop = index % 2 === 0;

            // Each item gets its own scroll range
            const start = index * 0.2;
            const end = start + 0.2;

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0, 1]
            );

            const y = useTransform(
              scrollYProgress,
              [start, end],
              [50, 0]
            );

            const scale = useTransform(
              scrollYProgress,
              [start, end],
              [0.6, 1]
            );

            return (
              <div key={index} className="relative flex items-center w-full">

                {/* LEFT CARD */}
                <div className="hidden md:flex w-1/2 justify-end pr-10">
                  {isTop && (
                    <motion.div
                      style={{ opacity, y }}
                      className="bg-[#0b1120]/80 border border-blue-500/20 p-5 rounded-xl backdrop-blur-md w-[90%]"
                    >
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <p className="text-blue-400 text-sm">{exp.org}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                          >
                            • {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* DOT */}
                <motion.div
                  style={{ scale, opacity }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#050914] md:-translate-x-1/2 z-10"
                />

                {/* RIGHT CARD */}
                <div className="hidden md:flex w-1/2 justify-start pl-10">
                  {!isTop && (
                    <motion.div
                      style={{ opacity, y }}
                      className="bg-[#0b1120]/80 border border-blue-500/20 p-5 rounded-xl backdrop-blur-md w-[90%]"
                    >
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <p className="text-blue-400 text-sm">{exp.org}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                          >
                            • {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* MOBILE */}
                <div className="md:hidden ml-12 w-full">
                  <motion.div
                    style={{ opacity, y }}
                    className="bg-[#0b1120]/80 border border-blue-500/20 p-5 rounded-xl backdrop-blur-md"
                  >
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <p className="text-blue-400 text-sm">{exp.org}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        >
                          • {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}