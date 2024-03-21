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
          <motion.div
            initial={{ opacity: 0, y: -14, backgroundColor: "#1F2937" }} // Use the hexadecimal color value for "gray-900"
            whileInView={{ opacity: 1, y: 14, backgroundColor: "#374151" }} // Use the hexadecimal color value for "gray-800"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ ease: "easeOut", duration: 4 }}
            className="opacity-0"
          >
            {/* Your content here */}

            <h1 className="dark:bg-gray-900 text-white px-20 justify-center text-6xl text-center scale:150">
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
              className="w-full grid justify-center min-h-screen dark:"
            >
              <div className="w-full py-10 ml-0 px-0 max-w-6xl gap-32 h-fit md:grid grid-cols2">
                <div className="col-span-3 px-4 py-6 shadow-lg mr-20  ">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: 22, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className=" opacity-0"
                  >
                    <h2 className="text-4xl text-white flex font-bold mb-2">
                      My Education 🎓🎓
                    </h2>
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: 22, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className="col-span-2 px-12 py-8 shadow-lg bg-gray-800 rounded-xl"
                    style={{ boxShadow: " 10px 10px 8px black" }}
                  >
                    <div className="w-full flex">
                      <motion.div
                        initial={{ opacity: 0, y: -42 }}
                        whileInView={{ opacity: 1, y: 22 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          ease: "linear",
                          duration: 2,
                          x: { duration: 2 },
                        }}
                        className="opacity-0 flex-1"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: -42 }}
                          whileInView={{ opacity: 1, y: 6 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            ease: "linear",
                            duration: 2,
                            x: { duration: 2 },
                          }}
                          className="opacity-0"
                        >
                          <h3 className="text-gray-200 py-2 text-3xl">
                            Bachelor Degree's{" "}
                            <span className="text-2xl">(2022-2026)</span>
                          </h3>
                        </motion.div>
                        <hr />
                        <motion.div
                          initial={{ opacity: 0, y: -42 }}
                          whileInView={{ opacity: 1, y: 6 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            ease: "linear",
                            duration: 3,
                            x: { duration: 2 },
                          }}
                          className="opacity-0"
                        >
                          <p className="text-gray-300 py-3 text-2xl text-justify">
                            Bachelor of Technology in Computer Science and
                            Engineering
                          </p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: -42 }}
                          whileInView={{ opacity: 1, y: 6 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            ease: "linear",
                            duration: 5,
                            x: { duration: 2 },
                          }}
                          className="opacity-0"
                        >
                          <ul className="list-none">
                            <li className="px-5">
                              <p className="text-gray-400 text-sm">
                                1st year International Institute of Information
                                Technology Bhubaneshwar
                                <span className="ml-3">---> CGPA: 8.10</span>
                              </p>
                            </li>
                            <li className="px-5">
                              <p className="text-gray-400 text-sm">
                                2nd year International Institute of Information
                                Technology Bhubaneshwar
                                <span className="ml-3">---> CGPA: 8.42</span>
                              </p>
                            </li>
                          </ul>
                        </motion.div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: -42 }}
                        whileInView={{ opacity: 1, y: 22 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          ease: "linear",
                          duration: 4,
                          x: { duration: 2 },
                        }}
                        className="flex-1 flex flex-col justify-between items-center"
                      >
                        <div className="h-full w-full flex ml-40 justify-between items-center">
                          <div className="w-1/3"></div>
                          <img
                            src={logoImage4}
                            alt="iiit-Bhubaneswar"
                            className="w-1/2 rounded-3xl "
                          />
                          <div className="w-1/3"></div>{" "}
                          {/* This empty div helps in alignment */}
                        </div>
                      </motion.div>
                    </div>

                    <br />
                    <motion.div
                      initial={{ opacity: 0, y: -82 }}
                      whileInView={{ opacity: 1, y: 2 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        x: { duration: 2 },
                      }}
                      className="flex py-8"
                    >
                      <div className="flex-1">
                        <motion.div
                          initial={{ opacity: 0, y: -82 }}
                          whileInView={{ opacity: 1, y: 36 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            ease: "linear",
                            duration: 2,
                            x: { duration: 2 },
                          }}
                          className="flex py-8"
                        >
                          <h3 className="text-gray-200 py-2 text-3xl">
                            Higher Secondary Education
                          </h3>
                        </motion.div>
                        <hr />
                        <motion.div
                          initial={{ opacity: 0, y: -42 }}
                          whileInView={{ opacity: 1, y: 6 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            ease: "linear",
                            duration: 3,
                            x: { duration: 2 },
                          }}
                          className="opacity-0"
                        >
                          <p className="text-gray-300 py-3 text-2xl text-justify">
                            P.K Patel & J.B Patel Higher secondary school
                          </p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: -42 }}
                          whileInView={{ opacity: 1, y: 6 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            ease: "linear",
                            duration: 5,
                            x: { duration: 2 },
                          }}
                          className="opacity-0"
                        >
                          <ul className="list-none">
                            <li className="px-5">
                              <p className="text-gray-400 text-sm">
                                12th Standard (2021-2022)
                              </p>
                            </li>
                            <li className="px-5">
                              <p className="text-gray-400 text-sm">
                                10th Standard (2019-2020)
                              </p>
                            </li>
                          </ul>
                        </motion.div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between items-center">
                        <motion.div
                          initial={{ opacity: 0, y: -42 }}
                          whileInView={{ opacity: 1, y: 22 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            ease: "linear",
                            duration: 4,
                            x: { duration: 2 },
                          }}
                          className="flex-1 flex flex-col justify-between items-center"
                        >
                          <div className="h-full w-full  rounded-3xl ml-40 flex scale:150 justify-between items-center">
                            <div className="w-1/3"></div>
                            <img
                              src={logoImage3}
                              alt="iiit-Bhubaneswar"
                              className="w-60  rounded-2xl scale:150"
                            />
                            <div className="w-1/3"></div>{" "}
                            {/* This empty div helps in alignment */}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* <br /> */}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="bg-gray-900">
        <br />
        <br />
      </div>
    </>
  );
}
