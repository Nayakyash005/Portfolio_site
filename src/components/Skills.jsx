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
      <div className="bg-gray-900 p-5">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 14 }}
          transition={{ ease: "easeOut", duration: 2 }}
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
                <h3 className="text-gray-200 text-2xl font-bold mb-2">
                  Front-End Development
                </h3>
                <p className="text-gray-300 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  ipsam veritatis autem vitae quibusdam eaque accusantium hic.
                  Deleniti, natus. Sequi neque illum blanditiis cumque veniam
                  asperiores corporis perspiciatis quo alias?
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-700 gap-5 max-w-96 px-5 rounded-lg p-6"
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
                <h3 className="text-gray-200 text-2xl font-bold mb-2">
                  Front-End Development
                </h3>
                <p className="text-gray-300 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  ipsam veritatis autem vitae quibusdam eaque accusantium hic.
                  Deleniti, natus. Sequi neque illum blanditiis cumque veniam
                  asperiores corporis perspiciatis quo alias?
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
                <h3 className="text-gray-200 text-2xl font-bold mb-2">
                  Back-End Development
                </h3>
                <p className="text-gray-300 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  ipsam veritatis autem vitae quibusdam eaque accusantium hic.
                  Deleniti, natus. Sequi neque illum blanditiis cumque veniam
                  asperiores corporis perspiciatis quo alias?
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
