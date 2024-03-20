import React from "react";
import logoImage from "./assets/1.png";
import { useState, useEffect } from "react";
// Import CSS file for animation
import { motion, useScroll } from "framer-motion";

import logoImage2 from "./assets/2.png";
import logoImage4 from "./assets/4.png";

import logoImage3 from "./assets/3.webp";
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
      <script
        src="https://kit.fontawesome.com/a076d05399.js"
        crossorigin="anonymous"
      ></script>
      <div className="bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ ease: "easeOut", duration: 4 }}
          className="opacity-0 bg-gray-900"
        >
          <h1 className="dark:bg-gray-900 text-white px-20 justify-center text-6xl text-center scale:150">
            About Me
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ ease: "easeOut", duration: 5 }}
          className="bg-gray-900"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="bg-gray-900"
            className="w-full grid justify-center min-h-screen dark:bg-gray-900"
          >
            <div className="w-full py-10 ml-0 px-0 max-w-6xl gap-32 h-fit md:grid grid-cols2">
              <div className="col-span-2 px-2 py-6 shadow-lg mr-20 bg-gray-900 ">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  animate={{ x: 25, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  className="bg-gray-900 opacity-0"
                >
                  <h2 className="text-4xl text-white flex font-bold mb-2">
                    My Education 🎓🎓
                  </h2>
                </motion.div>
                <br />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  animate={{ x: 25, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  className="col-span-2 px-12 py-8 shadow-lg bg-gray-800 rounded-xl"
                  style={{ boxShadow: " 10px 10px 8px black" }}
                >
                  <div className="w-full flex">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: 12, opacity: 1 }}
                      transition={{
                        ease: "linear",
                        duration: 8,
                        x: { duration: 2 },
                      }}
                      className="opacity-0"
                    >
                      <h3 className="text-gray-200 py-2 text-3xl">
                        Bachelor Degree's{" "}
                        <span className="text-2xl">(2022-2026)</span>
                      </h3>
                      <hr />
                      <p className="text-gray-300 py-3 text-2xl text-justify">
                        Bachelor of Technology in Computer Science and
                        Engineering
                      </p>

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
                    <div className="h-full flex flex-col ">
                      <div className="h-20  scale-150 mt-2 justify-between ml-40 items-center">
                        <p className="w-full  text-sm text-gray-300 mb-5">
                          P.k Patel High. Sec school
                        </p>
                        <img src={logoImage4} alt="iiit-Bhubaneswar" />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="flex py-8">
                    <div>
                      <h3 className="text-gray-200 py-2 text-3xl">
                        Higher Secondary Education
                      </h3>
                      <hr />
                      <p className="text-gray-300 py-3 text-2xl text-justify">
                        P.K Patel & J.B Patel Higher secondary school
                      </p>

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
                    </div>
                    <div className="h-full flex flex-col ">
                      <div className="h-20 w-20 scale-150 mt-2 justify-between ml-80 items-center">
                        <h5 className="w-full  text-sm text-gray-300 mb-5">
                          IIIT-Bhubaneswar
                        </h5>
                        <img src={logoImage3} alt="iiit-Bhubaneswar" />
                      </div>
                    </div>
                    {/* <br /> */}
                  </div>
                  {/* <br /> */}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
