import React, { useState, useEffect } from "react";
import logoImage2 from "./assets/2.png";
import logoImage5 from "./assets/5.png";
import l1 from "./assets/1.png";
import l2 from "./assets/8.png";
import { motion, useScroll } from "framer-motion";
import "./1.module.css";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevIsVisible) => !prevIsVisible);
    }, 2000); // Change the interval duration as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="skills" className="bg-gray-900 p-5">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 14 }}
          transition={{ ease: "easeOut", duration: 3 }}
          id="foot-3"
          className="bg-gray-900 grid col-span-2"
        >
          <div className="flex align-middle justify-center">
            <div className="relative group inline-block justify-start h-fit">
              {/* <div className="absolute inset-0 dark:bg-gray-700 duration-1000 ease-linear "></div> */}
              <div className="absolute top-0 left-0 duration-300 bg-slate-800 h-full w-0 group-hover:w-full"></div>
              <h1 className="relative z-index text-white text-6xl inset-0 justify-center hover:cursor-pointer">
                My Skills
              </h1>
            </div>

            <div className="bg-gray-900 ">
              <img
                className="w-40 h-40 object-cover rounded-full mx-auto animate-bounce"
                src={l1}
                alt=""
              />
            </div>
          </div>

          <motion.div className="flex justify-center items-center  py-0 bg-gray-900">
            <div className="max-w-7xl flex flex-wrap gap-14">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: -18 }}
                whileInView={{ opacity: 1, y: 24 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className="bg-gray-700 gap-5 max-w-96 px-5 rounded-lg p-6"
                id="kem"
              >
                <img
                  initial={{ opacity: 0, y: -18 }}
                  whileInView={{ opacity: 1, y: 24 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                  src={logoImage2}
                  alt="Front-End Development"
                />
                <h3 className="text-gray-200 text-2xl px-2 py-4 font-bold mb-4">
                  Front-End Development
                </h3>
                <div className="">
                  <p className="text-gray-300 max-h-44 overflow-y-scroll text-lg">
                    I'm a frontend developer that thrives at creating visually
                    stunning user experiences by combining JavaScript, HTML, and
                    CSS. Having a thorough understanding of frontend frameworks
                    such as React.js, my area of expertise is creating dynamic,
                    responsive websites that offer flawless user experiences. I
                    also know how to use template engines, including Embedded
                    JavaScript (EJS), which makes data integration and
                    server-side rendering go smoothly. In addition, I use
                    contemporary CSS frameworks like Tailwind CSS to keep code
                    uniformity and streamline design. I constantly produce
                    aesthetically beautiful and user-friendly interfaces that
                    increase user happiness and engagement by paying close
                    attention to detail and making a commitment to keep up with
                    the most recent developments in web development.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-700 gap-5 max-w-96 px-5 max- rounded-lg p-6"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 24 }}
                transition={{ ease: "easeOut", duration: 2 }}
                id="kem"
              >
                <img
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                  src={l2}
                  alt="Front-End Development"
                />
                <h3 className="text-gray-200 text-2xl px-2 py-4 font-bold mb-4">
                  Additional Skills
                </h3>
                <p className="text-gray-300 max-h-44 overflow-y-scroll text-lg">
                  Because of my excellent time management abilities, I can
                  efficiently prioritise my work and stick to deadlines in a
                  hectic work setting. I work best in cooperative team
                  environments that encourage candid communication and
                  cooperation to accomplish shared objectives. Having a natural
                  tendency towards leadership, I provide direction and guidance
                  as needed to guarantee project success and team cohesiveness.
                  I'm also renowned for having a great work ethic and frequently
                  going above and beyond to produce excellent results. I can
                  easily handle problems and uphold a pleasant work atmosphere
                  because of my empathy and understanding of team dynamics."
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: -44 }}
                whileInView={{ opacity: 1, y: 24 }}
                transition={{ ease: "easeOut", duration: 3 }}
                className="bg-gray-700 max-w-96 rounded-lg p-6"
                id="kem"
              >
                <img
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                  src={logoImage5}
                  alt="Back-End Development"
                />
                <h3 className="text-gray-200 text-2xl px-2 py-4 font-bold mb-4">
                  Back-End Development
                </h3>
                <p className="text-gray-300 max-h-44 overflow-y-scroll text-lg scrollbar-hide">
                  "My area of expertise is Node.js backend programming; I am
                  skilled with Express.js for creating reliable APIs and
                  Socket.IO for instantaneous communication. competent in
                  communicating with external APIs and using Axios for HTTP
                  requests. Moreover, adept in managing databases, especially
                  PostgreSQL, to guarantee effective data archiving and
                  retrieval. My main goal is to provide web apps with scalable
                  and maintainable solutions."
                </p>
              </motion.div>
            </div>
          </motion.div>
          <br />
          <br />
        </motion.div>
      </div>
    </>
  );
}
