import React from "react";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer class="relative z-50 bg-gray-900 w-full text-gray-400 text-xl px-8 pb-6">
      <br />
      <br />
      <div class="max-w-full mx-auto">
        <div class="flex sm:flex-row flex-col mb-4 ">
          <div class="w-full">
            <div class="flex gap-4 mt-4 flex-wrap justify-center md:justify-start">
              <SocialLink>
                <FaGithub className="duration-500" />
              </SocialLink>
              <SocialLink>
                <FaTwitter className="duration-500" />
              </SocialLink>
              <SocialLink>
                <FaLinkedinIn className="duration-500" />
              </SocialLink>
              <SocialLink>
                <GrInstagram className="duration-500" />
              </SocialLink>
            </div>
          </div>
          <div class="px-4 mt-4 flex items-center flex-col md:flex-row md:justify-end gap-2 md:gap-8">
            <div className="flex gap-2 w-fit items-center h-full text-nowrap">
              <FaPhoneAlt />
              <span>+91 940 813 8090</span>
            </div>
            <div className="flex gap-2 w-fit items-center h-full">
              <MdEmail />
              <span>yashpankajkumarnayak@gmail.com</span>
            </div>
          </div>
        </div>
        <hr class="my-2 border-[#888]" />
        <div class="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div class="text-center lg:text-left">
            <div class="text-md mt-2 py-1 font-normal ">
              Copyright © 2024{" "}
              <span class="text-inherit transition-all" href="/">
                Material Tailwind
              </span>{" "}
              by{" "}
              <span
                href="https://www.creative-tim.com?ref=material-tailwind"
                target="_blank"
                rel="noreferrer"
                class="text-inherit transition-all"
              >
                Yash Nayak Made with ❤️ In{" "}
                <span className="text-blue-600">India</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SocialLink = ({ href = "/", children }) => (
  <a
    href={href}
    className="group relative grid place-items-center h-8 w-8  hover:text-[#4237b6]"
  >
    {children}
  </a>
);
