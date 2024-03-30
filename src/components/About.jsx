import React from "react";
import logoImage from "./assets/1.png";
import { useState, useEffect } from "react";
// Import CSS file for animation
import { motion, useScroll } from "framer-motion";

import logoImage2 from "./assets/2.png";
import logoImage4 from "./assets/4.png";
import "./1.module.css";

import logoImage3 from "./assets/3.webp";
import Background from "./Background";
export default function About() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cards = [
    {
      title: "Front-End Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsam veritatis autem vitae quibusdam eaque accusantium hic. Deleniti, natus. Sequi neque illum blanditiis cumque veniam asperiores corporis perspiciatis quo alias?",
      imageUrl: logoImage2,
    },
    {
      title: "Back-End Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsam veritatis autem vitae quibusdam eaque accusantium hic. Deleniti, natus. Sequi neque illum blanditiis cumque veniam asperiores corporis perspiciatis quo alias?",
      imageUrl: logoImage2,
    },
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  //   }, 8000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div>
        <Background />{" "}
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossorigin="anonymous"
        ></script>
        <div className="bg-gray-900">
          <div className="bg-gray-900 scale-100">
            <motion.div
              initial={{ opacity: 0, y: -14, backgroundColor: "#1F2937" }}
              whileInView={{ opacity: 1, y: 14, backgroundColor: "#374151" }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ ease: "easeOut", duration: 4 }}
              className="opacity-0"
            >
              {/* Your content here */}
              <h1 className="dark:bg-gray-900 text-white px-6 md:px-20 justify-center text-3xl md:text-6xl text-center">
                About Me
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="bg-gray-900"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className="bg-gray-900"
              >
                <div className="w-full py-6 px-4 md:px-0 max-w-md md:max-w-6xl mx-auto md:grid grid-cols-1">
                  <div className="px-4 py-6 shadow-lg md:mr-20">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ y: 22, opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 2 }}
                      className="opacity-0"
                    >
                      <h2 className="text-2xl md:text-4xl text-white font-bold mb-2">
                        My Education 🎓🎓
                      </h2>
                    </motion.div>
                    <br />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ y: 22, opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 2 }}
                      className="col-span-2 px-4 md:px-12 py-8 shadow-lg w-full bg-gray-800 rounded-xl"
                      style={{ boxShadow: "10px 10px 8px black" }}
                    >
                      <div className="w-full flex flex-col md:flex-row justify-between items-center">
                        <div className="flex-1">
                          <motion.div
                            initial={{ opacity: 0, y: -22 }}
                            whileInView={{ opacity: 1, y: 10 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: "linear", duration: 2 }}
                            className="opacity-0"
                          >
                            <h3 className="text-gray-200 py-2 text-xl md:text-3xl">
                              Bachelor Degree's{" "}
                              <span className="text-lg md:text-2xl">
                                (2022-2026)
                              </span>
                            </h3>
                          </motion.div>
                          <hr />
                          <motion.div
                            initial={{ opacity: 0, y: -42 }}
                            whileInView={{ opacity: 1, y: 6 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: "linear", duration: 2 }}
                            className="opacity-0"
                          >
                            <p className="text-gray-300 py-3 text-lg md:text-2xl text-justify">
                              Bachelor of Technology in Computer Science and
                              Engineering
                            </p>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: -42 }}
                            whileInView={{ opacity: 1, y: 6 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: "linear", duration: 2 }}
                            className="opacity-0"
                          >
                            <ul className="list-none">
                              <li className="px-3 md:px-5">
                                <p className="text-gray-400 text-sm md:text-base">
                                  1st year IIIT Bhubaneshwar{" "}
                                  <span className="md:ml-3">
                                    ---> CGPA: 8.10
                                  </span>
                                </p>
                              </li>
                              <li className="px-3 md:px-5">
                                <p className="text-gray-400 text-sm md:text-base">
                                  2nd year IIIT Bhubaneshwar{" "}
                                  <span className="md:ml-3">
                                    ---> CGPA: 8.42
                                  </span>
                                </p>
                              </li>
                            </ul>
                          </motion.div>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                          <img
                            src={logoImage4}
                            alt="iiit-Bhubaneswar"
                            className="w-1/2 md:w-60 rounded-3xl"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full py-6 px-4 md:px-0 max-w-md md:max-w-6xl mx-auto md:grid grid-cols-1">
            <div className="px-4 py-6 shadow-lg md:mr-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ y: 22, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="opacity-0"
              >
                <h2 className="text-2xl md:text-4xl text-white font-bold mb-2">
                  Higher Secondary Education
                </h2>
              </motion.div>
              <br />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ y: 22, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="col-span-2 px-4 md:px-4 py-8 shadow-lg bg-gray-800 rounded-xl"
                style={{ boxShadow: "10px 10px 8px black" }}
              >
                <div className="w-full flex flex-col md:flex-row justify-between items-center">
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: -42 }}
                      whileInView={{ opacity: 1, y: 8 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "linear", duration: 2 }}
                      className="opacity-0"
                    >
                      <p className="text-gray-300 py-3 text-lg md:text-2xl text-justify">
                        P.K Patel & J.B Patel Higher secondary school
                      </p>
                    </motion.div>
                    <hr />
                    <motion.div
                      initial={{ opacity: 0, y: -42 }}
                      whileInView={{ opacity: 1, y: 6 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "linear", duration: 2 }}
                      className="opacity-0"
                    >
                      <ul className="list-none">
                        <li className="px-3 md:px-5">
                          <p className="text-gray-400 text-sm md:text-base">
                            12th Standard (2021-2022)
                          </p>
                        </li>
                        <li className="px-3 md:px-5">
                          <p className="text-gray-400 text-sm md:text-base">
                            10th Standard (2019-2020)
                          </p>
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                  <div className="flex-1 flex justify-center items-center">
                    <img
                      src={logoImage3}
                      alt="iiit-Bhubaneswar"
                      className="w-60 md:w-60 rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>{" "}
        <div className="bg-gray-900">
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
