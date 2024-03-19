import React from "react";
import logoImage from "./assets/1.png";
import { useState, useEffect } from "react";
import "./RotatingCards.css"; // Import CSS file for animation
import logoImage2 from "./assets/2.png";

export default function About() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cards = [
    {
      title: "Front-End Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsam veritatis autem vitae quibusdam eaque accusantium hic. Deleniti, natus. Sequi neque illum blanditiis cumque veniam asperiores corporis perspiciatis quo alias?",
      imageUrl: logoImage2,
    },
    {
      title: "Back-End Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsam veritatis autem vitae quibusdam eaque accusantium hic. Deleniti, natus. Sequi neque illum blanditiis cumque veniam asperiores corporis perspiciatis quo alias?",
      imageUrl: logoImage2,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <script
        src="https://kit.fontawesome.com/a076d05399.js"
        crossorigin="anonymous"
      ></script>
      <h1 className="dark:bg-gray-900 text-white px-20 justify-center text-center">
        About Me
      </h1>
      <div className="w-full grid justify-center min-h-screen dark:bg-gray-900">
        <div className="w-full py-10 ml-0 px-0 max-w-6xl gap-32 h-fit md:grid grid-cols-3">
          <div className="order-2 py-6 felx justify-top min-w-100 rounded shadow-md">
            <h2 className="text-4xl px-2 text-white flex font-bold mb-2">
              My Skills{" "}
              <img
                className="relative w-20 h-8 object-cover"
                src={logoImage}
                alt=""
              />
            </h2>
            <div className="flex justify-center items-center h-screen">
              <div className="max-w-xl mx-auto">
                <div className="cube">
                  <div
                    className={`card ${currentCardIndex === 0 ? "active" : ""}`}
                  >
                    <h3 className="text-gray-300 text-2xl flex py-10 text-justify">
                      {cards[0].title}
                    </h3>
                    <img
                      className="w-40 h-40 object-contain mx-auto"
                      src={cards[0].imageUrl}
                      alt=""
                    />
                    <div>
                      <p className="text-gray-400 text-xl flex py-10 text-justify">
                        {cards[0].description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`card ${currentCardIndex === 1 ? "active" : ""}`}
                  >
                    <h3 className="text-gray-300 text-2xl flex py-10 text-justify">
                      {cards[1].title}
                    </h3>
                    <img
                      className="w-40 h-40 object-contain mx-auto"
                      src={cards[1].imageUrl}
                      alt=""
                    />
                    <div>
                      <p className="text-gray-400 text-xl flex py-10 text-justify">
                        {cards[1].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 px-2 py-6 shadow-lg mr-20 bg-gray-900 ">
            <h2 className="text-4xl text-white flex font-bold mb-2">
              My Education 🎓🎓
            </h2>
            <br />
            <div
              className="col-span-2 px-12 py-6 shadow-lg bg-gray-800 rounded-xl"
              style={{ boxShadow: " 10px 10px 8px black" }}
            >
              <h3 className="text-gray-200 py-2 text-3xl">
                {" "}
                Bachelor Degree's <h4 className="text-2xl">(2022-2026)</h4>
              </h3>
              <hr />
              <p className="text-gray-300  py-3 text-2xl text-justify">
                Bachelor of Technology in Computer Science and Engineering
              </p>

              <li className="list-none px-5">
                {" "}
                <p className="text-gray-400 text-sm">
                  {" "}
                  1st year International Institute of Information Technology
                  Bhubaneshwar
                  <li className="list-none px-5">---> CGPA: 8.10</li>
                </p>
              </li>
              <li className="list-none px-5">
                <p className="text-gray-400 text-sm">
                  {" "}
                  2nd year International Institute of Information Technology
                  Bhubaneshwar
                  <li className="list-none px-5">---> CGPA: 8.42</li>
                </p>
              </li>
              <br />
              <h3 className="text-gray-200 py-2 text-3xl">
                {" "}
                Heigher Secondary Education
              </h3>
              <hr />
              <p className="text-gray-300  py-3 text-2xl text-justify">
                P.K Patel & J.B Patel Heigher secondery school
              </p>

              <li className="list-none px-5">
                {" "}
                <p className="text-gray-400 text-sm">
                  {" "}
                  <li className="list-none px-5">12th Standard (2021-2022)</li>
                  <li className="list-none px-5">10th Standard (2019-2020)</li>
                </p>
              </li>

              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
