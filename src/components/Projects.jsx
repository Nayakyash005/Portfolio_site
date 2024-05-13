import React from "react";
import logoImage5 from "./assets/11.png";
import logoImage2 from "./assets/2.gif";
import logoImage3 from "./assets/3.gif";
import logoImage1 from "./assets/4.gif";
import logoImage4 from "./assets/6.gif";
import logoImage0 from "./assets/chat_ap.gif";

import { FaExternalLinkAlt } from "react-icons/fa";

import { SiGithub } from "react-icons/si";
export default function () {
  const arr = [
    {
      img: logoImage3,
      text: "I developed a dynamic blog website using HTML, EJS, and CSS for an engaging frontend, PostgreSQL for efficient data management, and Node.js for a robust backend. This project showcases my collaboration with full-stack developers to blend technical expertise with creative design, resulting in a seamless and visually appealing user interface.",
    },
    {
      img: logoImage0,
      text: "A dynamic chat app that allows you to chat with your friends, I made this chat app using the react.JS framework in frontend and node.JS backend serving with express.JS. I use socketIO library for the web-socket connection, and tailwind CSS for the designing the website. And by using all this I made an dynamic chat app that stores the phone number, details and their chat they done with the other person in Postgres database",
    },
    {
      img: logoImage5,
      text: "I developed a dynamic blog website using HTML, React.JS, Postgres SQL for database for  an engaging frontend, PostgreSQL for efficient data management, and Node.js for a robust backend. This project showcases my collaboration with full-stack developers to blend technical expertise with creative design, resulting in a seamless and visually appealing user interface",
    },
    {
      img: logoImage4,
      text: "A simple project that i made for the basic authentication using passport module(server side authentication) This is an App where you can create an account and secretly post your secret and no one can see this",
    },
    {
      img: logoImage2,
      text: "I create a website with node.js and express.js Backend and Html,css ,Ejs javascript And using PredictHQ API to get the real time information of the on Going Events like ( Hackathon, fests, sports, festivals, concerts… Etc ). And also you can filter the events on your preference of your location",
    },
    {
      img: logoImage1,
      text: "A simple website that will helps you to find the reciepy of the food I created this website while learning the Embedded js ,html,css,javacsript and nodejs and express js for routing and serving the backend",
    },
  ];
  return (
    <>
      <div
        id="projects"
        className="bg-gray-900 min-h-screen justify-center items-center"
      >
        {/* <div className="absolute inset-0 dark:bg-gray-700 duration-1000 ease-linear "></div> */}
        <h1 className="relative z-index text-white text-6xl inset-0 text-center justify-center hover:cursor-pointer">
          Projects
        </h1>

        <br />
        <br />
        <div className="justify-center items-center text-center flex flex-wrap md:gap-12 p-4 gap-6 md:max-w-7xl mx-auto">
          {arr.map((ele, index) => {
            return (
              <div className="max-w-96  bg-gray-800   text-gray-100 border border-gray-700 p-3  rounded-md flex flex-col gap-2">
                <img
                  className="w-full  aspect-video bg-gray-600 rounded"
                  src={ele.img}
                  alt=""
                />
                <h2 className=" font-semibold px-1 text-xl max-h">
                  Project {index}
                </h2>
                <div className=" max-h-40 overflow-y-scroll px-5">
                  <p className="text-gray-300 scroll max-h-96 text-lg text-justify px-1">
                    {ele.text}
                  </p>
                </div>
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
