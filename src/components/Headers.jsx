import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Headers() {
  const [active, setActive] = useState("");
  // const hPage = document.getElementById("foot-1");
  const navref = useRef(null);
  const [prevScroll, setprevScroll] = useState(-1);
  const [open, setopen] = useState(false);
  function toggle() {
    setopen((prev) => !prev);
  }

  useEffect(() => {
    window.onscroll = function () {
      let curr_Pos = window.scrollY;
      if (navref.current) {
        if (prevScroll > curr_Pos) {
          navref.current.style.top = "-30px";
          // navref.current.style.position = "sticky";
          console.log("upar");
        } else {
          navref.current.style.top = "-120px";
          // navref.current.style.position = "absolute";
          console.log("niche");
        }
      }
      setprevScroll(curr_Pos);
    };
    return () => {
      window.onscroll = null;
    };
  }, [prevScroll]);

  return (
    <nav
      className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full pt-4 duration-200 z-10"
      id="nav"
      ref={navref}
    >
      <motion.div
        initial={{ opacity: 0, y: -28 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: 4, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a
          href="#yellow"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:text-blue-600">
            Portfolio
          </span>
        </a>
        <nav x-data="{ open: false }" className="flex sm:hidden items-end ">
          <button
            className="text-white w-10 h-10 relative focus:outline-none item-end bg-transparent"
            onClick={toggle}
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={
                  "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " +
                  (open ? "-rotate-45" : "-translate-y-1.5")
                }
              ></span>
              <span
                aria-hidden="true"
                className={
                  "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " +
                  (open ? "opacity-0" : "")
                }
              ></span>
              <span
                aria-hidden="true"
                className={
                  "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " +
                  (open ? "rotate-45" : "translate-y-1.5")
                }
              ></span>
            </div>
          </button>
        </nav>

        <div
          className={
            "flex fixed top-20 border px-8 border-gray-600 rounded-md backdrop-blur-md bg-gray-800 bg-opacity-40 sm:border-none sm:right-0 sm:top-0 sm:relative sm:bg-transparent flex-col sm:gap-4 text-white sm:flex-row overflow-hidden duration-300 text-xl font-bold text-center " +
            (open ? "right-4" : " -right-40")
          }
          onClick={toggle}
        >
          <a className="py-4 text-2xl" href="/#home">
            Home
          </a>
          <a className="py-4 text-2xl" href="/#skills">
            Skills
          </a>
          <a className="py-4 text-2xl" href="/#projects">
            Projects
          </a>
          <a className="py-4 text-2xl" href="/#contact">
            Contact
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
