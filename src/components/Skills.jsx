import React, { useState, useEffect } from "react";
import logoImage2 from "./assets/2.png";
import logoImage5 from "./assets/5.png";
import l1 from "./assets/1.png";
import l2 from "./assets/8.png";
import { motion, useScroll } from "framer-motion";
import "./1.css";

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
      <div id="foot-3" className="bg-gray-900 grid col-span-2">
        <div className="flex align-middle justify-center">
          <h1 className="dark:bg-gray-900 text-white text-6xl px-20 justify-center mt-14 text-center animate-pulse">
            My Skills
          </h1>
          <div className="bg-gray-900">
            <img
              className="w-40 h-40 object-cover rounded-full mx-auto animate-bounce"
              src={l1}
              alt=""
            />
          </div>
        </div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="flex justify-center items-center  py-0 bg-gray-900"
        >
          <div className="max-w-7xl flex gap-14">
            {/* Card 1 */}
            <div className="bg-gray-700 gap-5 px-5 rounded-lg p-6" id="kem">
              <img
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
            </div>

            <div className="bg-gray-700 gap-5 px-5 rounded-lg p-6" id="kem">
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
            </div>

            {/* Card 2 */}
            <div className="bg-gray-700 rounded-lg p-6" id="kem">
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
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
