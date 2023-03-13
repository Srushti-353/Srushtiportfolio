import React from "react";
import arrayDestruct from "../assets/logo-full.png";
import navbar from "../assets/Farming.png";
import reactParallax from "../assets/arihant.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      url : 'https://verifyinternshipcertificate.bisjhintus.com/',
    },
    {
      id: 2,
      src: reactParallax,
      url:'https://arihantsalescorp.co.in/',
    },
    {
      id: 3,
      src: navbar,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-[68%]">
        <div className="sm:mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 py-12 sm:mt-20 sm:px-0 ">
          {portfolios.map(({ id, src, url }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-tr-3xl rounded-bl-3xl">
              <img
                src={src}
                alt=""
                className=" duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={url} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> Demo</a>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;