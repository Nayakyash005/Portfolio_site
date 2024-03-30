import React from "react";
import logoImage5 from "./assets/11.png";
import logoImage2 from "./assets/2.gif";
import logoImage3 from "./assets/3.gif";
import logoImage1 from "./assets/4.gif";
import logoImage4 from "./assets/6.gif";

import { FaExternalLinkAlt } from "react-icons/fa";

import { SiGithub } from "react-icons/si";
export default function Projects() {
  const arr = [
    {
      img: logoImage2,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia iusto voluptates sapiente  youtis mais  perspiciatis, ab laudantiumaccusantium",
    },
    {
      img: logoImage2,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia iusto voluptates sapiente  youtis mais  perspiciatis, ab laudantiumaccusantium",
    },
    {
      img: logoImage5,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia iusto voluptates sapiente  youtis mais  perspiciatis, ab laudantiumaccusantium",
    },
    {
      img: logoImage4,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia iusto voluptates sapiente  youtis mais  perspiciatis, ab laudantiumaccusantium",
    },
    {
      img: logoImage3,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia iusto voluptates sapiente youtis mais  perspiciatis, ab laudantiumaccusantium",
    },
    {
      img: logoImage1,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia iusto voluptates sapiente  youtis mais  perspiciatis, ab laudantiumaccusantium",
    },
  ];
  return (
    <>
      <div className="bg-gray-900 min-h-screen justify-center items-center">
        {/* <div className="absolute inset-0 dark:bg-gray-700 duration-1000 ease-linear "></div> */}
        <h1 className="relative z-index text-white text-6xl inset-0 text-center justify-center hover:cursor-pointer">
          Projects
        </h1>

        <br />
        <br />
        <div className="justify-center items-center text-center flex flex-wrap md:gap-12 p-4 gap-6 md:max-w-7xl mx-auto">
          {arr.map((ele, index) => {
            return (
              <div className="max-w-96 bg-gray-800 text-gray-100 border border-gray-700 p-3  rounded-md flex flex-col gap-2">
                <img
                  className="w-full  aspect-video bg-gray-600 rounded"
                  src={ele.img}
                  alt=""
                />
                <h2 className=" font-semibold px-1 text-xl">Project {index}</h2>
                <p className="text-gray-300 text-lg text-justify px-1">
                  {ele.text}
                </p>
                <div className="flex gap-2 flex-wrap text-base">
                  <a
                    className="group flex items-center gap-2 bg-gray-700 hover:bg-gray-600 shadow-md transition text-white w-fit py-1.5 px-4 rounded"
                    href=""
                  >
                    <span>View</span>{" "}
                    <FaExternalLinkAlt className="h-4 w-4 group-hover:ml-2 duration-300" />
                  </a>
                  <a
                    className="group flex items-center gap-2 bg-gray-700 hover:bg-gray-600 shadow-md transition text-white w-fit py-1.5 px-4 rounded"
                    href=""
                  >
                    <span>Code</span>{" "}
                    <SiGithub className="h-5 w-5 group-hover:ml-2 duration-300" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <br />
      </div>
    </>
  );
}
