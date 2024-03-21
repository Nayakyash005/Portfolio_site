import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function Headers() {
  const [active, setActive] = useState("");

  useEffect(() => {
    function handleScroll() {
      const foot3 = document.getElementById("foot-3");

      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > foot3.offsetTop) {
        setActive((p) => {
          console.log("ugiug: ", p);
          return "about";
        });
      } else {
        setActive((p) => {
          console.log("ugiug: ", p);
          return "home";
        });
      }
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 overflow-hidden z-10">
      <motion.div
        initial={{ opacity: 0, y: -22 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: 12, opacity: 1 }}
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
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <motion.div
              initial={{ opacity: 0, y: -22 }}
              whileInView={{ opacity: 1 }}
              animate={{ y: 12, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <li>
                <a
                  href="#"
                  className={
                    "block py-2 px-3 rounded md:bg-transparent md:p-0  " +
                    (active === "home" ? "text-blue-400" : "text-white")
                  }
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1 }}
              animate={{ y: 12, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3 }}
            >
              <li>
                <a
                  href="#"
                  className={
                    "block py-2 px-3 rounded md:bg-transparent md:p-0  " +
                    (active === "about" ? "text-blue-400" : "text-white")
                  }
                  aria-current="page"
                >
                  About
                </a>
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1 }}
              animate={{ y: 12, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3 }}
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -38 }}
              whileInView={{ opacity: 1 }}
              animate={{ y: 12, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3 }}
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -42 }}
              whileInView={{ opacity: 1 }}
              animate={{ y: 12, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3 }}
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </motion.div>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}
