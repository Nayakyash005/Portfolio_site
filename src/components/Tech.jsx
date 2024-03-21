import React from "react";
import texh from "./assets/tech.json";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Tech() {
  return (
    <>
      <div className="bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: -14 }} // Use the hexadecimal color value for "gray-900"
          whileInView={{ opacity: 1, y: 14 }} // Use the hexadecimal color value for "gray-800"
          transition={{ ease: "easeOut", duration: 2 }}
          className="bg-gray-900 opacity-0"
        >
          <h1 className="dark:bg-gray-900 text-white px-20 justify-center text-6xl text-center scale:150">
            My Tech-Stack
          </h1>
          <br />
          <div className="flex flex-wrap gap-12 md:gap-32 md:px-20 py-10 justify-center scale-75 ml-20 bg-gray-900 md:mr-20">
            {texh.map((ele, i) => (
              <motion.div
                initial={{ opacity: 0, y: -14 }} // Use the hexadecimal color value for "gray-900"
                whileInView={{ opacity: 1, y: 14 }} // Use the hexadecimal color value for "gray-800"
                transition={{ duration: 0.2 * i + 1 }}
                className="w-20 hover:scale:150  opacity-0 "
              >
                {/* <div className="w-1/3"></div> */}
                <img
                  src={ele.icon}
                  alt=""
                  className="h-20 rounded-xl object-contain hover:scale-150 cursor-pointer "
                />
                <p className="text-2xl text-gray-200 hover:scale-125">
                  {ele.name}
                </p>
                {/* {setval(i)} */}
                {/* <div className="w-1/3"></div>{" "} */}
                {/* This empty div helps in alignment */}
              </motion.div>
            ))}
          </div>
          <br />
        </motion.div>
      </div>
    </>
  );
}
