import React, { useState, useEffect } from "react";
import "./1.module.css";
import { Navigate, useNavigate } from "react-router";
import { motion, useScroll } from "framer-motion";
import logoImage from "./assets/10.png";
import logoImage2 from "./assets/img2.jpg"; // Import the image
import Background from "./Background";
import { Github, Facebook, Instagram } from "lucide-react";

export default function () {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevIsVisible) => !prevIsVisible);
    }, 3000); // Change the interval duration as needed
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {" "}
      <Background />
      <div
        className="min-h-screen  w-full px-8 py-5 overflow-hidden z-10"
        id="foot-1"
      >
        <br />
        <br />
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="w-full grid justify-center px-5 min-h-screen y:50 dark:  md:mt-10 bg-opacity-40 opacity-0"
        >
          <div className="w-full px-4 py-32 max-w-6xl gap-24 h-fit md:grid  grid-cols-5 items-center">
            <div className="order-2 col-span-2 felx justify-top  rounded opacity-1">
              <motion.div
                animate={{ y: -15, opacity: 1 }}
                transition={{ ease: "backIn", duration: 2 }}
                className="relative overflow-hidden y:25 bottom-50 opacity-0 h-full w-full"
              >
                <img
                  src={logoImage2}
                  alt="Description"
                  className="w-full h-full aspect-square  bg-gray-400 opacity-85 rounded-full object-cover z-[-1] "
                />
                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-grey-200 rounded-3xl animate-pulse ease duration-5000"></div> */}
              </motion.div>
            </div>

            <motion.div
              animate={{ y: 25, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="col-span-3 py-6  x:-100 rounded opacity-0"
            >
              <div className="App flex-cols gap-2">
                <h2
                  className={`text-5xl text-white text-animation  font-bold mb-2 ${
                    isVisible ? "show-animation" : "hide-animation"
                  }`}
                >
                  HI, I am{" "}
                  <span className="text-teal-400 text-5xl font-bold">
                    {" "}
                    Yash Nayak{" "}
                  </span>
                </h2>

                <h4
                  className={`text- text-animation text-pink-600  font-bold mb-2 ${
                    isVisible ? "show-animation" : "hide-animation"
                  }`}
                >
                  FullStack Developer
                </h4>
              </div>
              <p
                className=" text-gray-300 text-2xl  text-justify "
                sx={{ width: "150%" }}
              >
                I am a passionate programmer skilled in C++, Java, and
                JavaScript, with strong problem-solving abilities and leadership
                experience. I thrive in team settings and am eager to contribute
                to a dynamic organization while continuously learning.
              </p>

              <br />
              <motion.div
                animate={{ y: 20, opacity: 1 }}
                transition={{ ease: "circInOut", duration: 4 }}
                className="opacity-0 flex"
              >
                <p className="text-white"> Connect With Me !</p>

                {/* <!-- Facebook --> */}

                <div className="flex gap-4 pl-4">
                  <a
                    href="#"
                    className="p-4 bg-gray-800 text-gray-200 hover:bg-teal-700 items-center justify-center  rounded-full transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-gray-800 text-gray-200 hover:bg-teal-700 rounded-full transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-gray-800 text-gray-200 hover:bg-teal-700 rounded-full transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
