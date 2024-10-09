import React from "react";
import texh from "./assets/tech.json";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Tech() {
  return (
    <>
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: -14 }} // Use the hexadecimal color value for "gray-900"
          whileInView={{ opacity: 1, y: 14 }} // Use the hexadecimal color value for "gray-800"
          transition={{ ease: "easeOut", duration: 2 }}
          className=" opacity-0"
        >
          <h1 className=" text-white px-20 justify-center text-6xl text-center scale:150">
            My Tech-Stack
          </h1>
          <br />
          <div className="flex flex-wrap gap-12 md:gap-32 md:px-20 py-10 justify-center scale-75 md:ml-20  md:mr-20">
            {texh.map((ele, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="group relative flex flex-col items-center"
              >
                {/* Tech Icon Container */}
                <div
                  className="w-20 h-20 md:w-24 md:h-24 relative
                                bg-slate-800/30 rounded-xl p-4
                                backdrop-blur-sm
                                shadow-[0_8px_16px_-6px] shadow-blue-500/20
                                transition-all duration-300
                                group-hover:shadow-[0_12px_24px_-8px] group-hover:shadow-blue-400/30 scale-125"
                >
                  <img
                    src={ele.icon}
                    alt={ele.name}
                    className="w-full h-full object-contain
                               filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                  />
                </div>

                {/* ele Name */}
                <p
                  className="mt-3 text-gray-200 text-lg font-medium
                              tracking-wide text-center
                              transition-colors duration-300
                              group-hover:text-white"
                >
                  {ele.name}
                </p>

                {/* Hover Glow Effect */}
                <div
                  className="absolute -inset-2 rounded-xl
                                bg-blue-500/10 opacity-0 blur-xl
                                group-hover:opacity-100
                                transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
          <br />
        </motion.div>
      </div>
    </>
  );
}
