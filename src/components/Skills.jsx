import React, { useState, useEffect } from "react";
import logoImage2 from "./assets/2.png";
import logoImage5 from "./assets/5.png";
import l1 from "./assets/1.png";
import l2 from "./assets/8.png";
import { motion, useScroll } from "framer-motion";
import "./1.module.css";
import { Code2, Users, Database } from "lucide-react";
export default function Skills() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevIsVisible) => !prevIsVisible);
    }, 2000); // Change the interval duration as needed
    return () => clearInterval(interval);
  }, []);
  const skills = [
    {
      icon: <Code2 size={40} className="text-emerald-400" />,
      title: "Front-End Development",
      description:
        "I'm a frontend developer that thrives at creating visually stunning user experiences by combining JavaScript, HTML, and CSS. Having a thorough understanding of frontend frameworks such as React.js, my area of expertise is creating responsive and intuitive interfaces.",
    },
    {
      icon: <Users size={40} className="text-violet-400" />,
      title: "Additional Skills",
      description:
        "Because of my excellent time management abilities, I can efficiently prioritise my work and stick to deadlines in a hectic work setting. I work best in cooperative team environments that encourage candid communication and creative problem-solving.",
    },
    {
      icon: <Database size={40} className="text-cyan-400" />,
      title: "Back-End Development",
      description:
        "My area of expertise is Node.js backend programming; I am skilled with Express.js for creating reliable APIs and Socket.IO for instantaneous communication. Competent in communicating with external APIs and managing database operations.",
    },
  ];

  return (
    <div className="min-h-screen  py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <h2 className="text-4xl font-bold text-white">My Skills</h2>
          <div className="text-emerald-400 animate-pulse">
            <Code2 size={32} />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 scale-105 gap-4 w-full size-150">
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{ maxHeight: "500px" }}
              className="group relative overflow-y-auto  bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className="flex  flex-col items-center mb-6">
                <div className="p-3 rounded-full bg-slate-700/50 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white text-center">
                  {skill.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="text-gray-300 text-lg text-center leading-relaxed">
                {skill.description}
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
