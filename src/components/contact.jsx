import React, { useState, useEffect } from "react";
import img from "./assets/contact1.png";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import axios from "axios";
import "./1.module.css";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function () {
  const [loading, setloading] = useState(false);
  const form = useRef();

  const handleform = (e) => {
    setloading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(process.env.REACT_APP_PUBLIC_KEY);

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        data,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SuccessFully Sent Mail");
          setloading(false);
          toast.success("message sent ");
          form.current.reset();
        },
        (error) => {
          console.log("failed...", error);
          setloading(false);
          toast.error("Something went wrong");
        }
      );
  };

  return (
    <div className="bg-gray-900 justify-center item-center">
      <section class="justify-center items-center" id="contact">
        <h2 class="heading text-center scale-150 text-gray-200 md:p-10 md:mb-6">
          <i class="fas fa-headset"></i> Get in{" "}
          <span className="text-blue-600">Touch</span>
        </h2>

        <div className="w-screen mt-20 sm:mt-0 justify-center items-center">
          <div class=" max-w-5xl mx-auto rounded-lg bg-gray-800 justify-center items-center border-gray-600 p-9 border">
            <div class="content flex w-full justify-center items-center lg:grid grid-cols-2 flex-col md:gap-10">
              <div class="image-box hidden sm:block mt-10">
                <img className="" draggable="false" src={img} alt="" />
              </div>
              <form
                id="contact-form"
                onSubmit={handleform}
                ref={form}
                className="py-8 px-2 w-full text-gray-300"
              >
                <div className="form-group ">
                  <div class="field flex bg-slate-700 h-3xl border border-gray-500 mb-7 rounded-lg gap-5">
                    <div className="text-white rounded-lg scale-75 md:ml-3 mx-auto py-3 justify-center items-center bg-slate-700 border-gray-300">
                      <FaUser />
                    </div>
                    <input
                      type="text"
                      className="rounded-lg text-xl py-2 w-full bg-slate-700 border-gray-300 border-spacing-3"
                      name="name"
                      placeholder="Name..."
                      required
                    />
                    <i class="fas fa-user"></i>
                  </div>

                  <div class="field flex bg-slate-700 border-gray-500 border h-3xl mb-7 rounded-lg gap-5">
                    <div className="text-white rounded-lg items-center scale-75 md:ml-3 py-3 bg-slate-700 border-gray-300">
                      <MdEmail />
                    </div>
                    <input
                      className="rounded-lg p-2 text-xl w-full bg-slate-700 border-gray-300"
                      type="email"
                      name="email"
                      placeholder="Email..."
                      required
                    />
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="field flex bg-slate-700 h-3xl mb-7 border border-gray-500 rounded-lg gap-5">
                    <div className="text-white rounded-lg items-center scale-75 md:ml-3 py-3 bg-slate-700 border-gray-300">
                      <FaPhoneAlt />
                    </div>
                    <input
                      className="rounded-lg text-xl p-2 w-full bg-slate-700 border-gray-300"
                      type="number"
                      name="phone"
                      placeholder="Phone..."
                    />
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div class="field flex bg-slate-700 h-3xl mb-7 border-gray-500 border rounded-lg gap-5 ">
                    <div className="text-white rounded-lg items-center h-12 scale-75 md:ml-3 py-3 bg-slate-700  border-gray-300">
                      <SiGooglemessages />
                    </div>
                    <textarea
                      className="rounded-lg py-3 px-2 text-xl w-full h-40  bg-slate-700"
                      placeholder="Message..."
                      name="message"
                      required
                    ></textarea>
                    <i class="fas fa-comment-dots"></i>
                  </div>
                </div>
                <div
                  class="button-area flex bg-blue-800 text-white text-center h-3xl mb-7 max-w-full justify-center items-center rounded-lg gap-2 hover:scale-105 hover:bg-slate-50 hover:text-blue-600"
                  style={{ boxShadow: "4px 4px 5px black" }}
                >
                  <button className="text-center text-xl " type="submit">
                    {loading ? "Sending..." : "Submit"}
                  </button>
                  <div className=" rounded-lg items-center scale-75  py-2 border-gray-300 ">
                    <FaTelegramPlane />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
