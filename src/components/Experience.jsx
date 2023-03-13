import React from "react";

import html from "../assets/logo-full.png";
import css from "../assets/arihant.png";
import javascript from "../assets/transtech.jpeg";
import reactImage from "../assets/internshala.jpeg";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "Bisjhintus Private Limited",
      duration:"Duration : 29/08/2022 - 29/10/2022",
      style: "shadow-sky-400",
    },
    {
      id: 2,
      src: css,
      title: "Arihant Private Limited",
      duration:"Duration : 29/08/2022 - 29/10/2022",
      style: "shadow-blue-700",
    },
    {
      id: 3,
      src: javascript,
      title: "Transtech Solutions",
      duration:"Duration : 22/06/2020 - 26/07/2020",
      style: "shadow-red-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "Intershala Student Program",
      duration:"Duration : Nov 2020 - Jan 2021",
      style: "shadow-blue-600",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="sm:mt-10">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the Companies I've worked with</p>
        </div>

        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-5 sm:px-0">
          {techs.map(({ id, src, title,duration, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-25 h-20 mx-auto" />
              <p className="mt-4">{title}</p>
              <p className="mt-4">{duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;