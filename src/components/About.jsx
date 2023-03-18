import React from 'react'
import giphy from "../assets/giphy.gif";


function About() {
  return (
    <div name="about" className="max-w-[1320px] h-[35.25rem]
     md:py-[80] py-10 flex mx-auto  sm:flex-row flex-col ">
        <div className="basis-[45%]  w-full relative ">
          <img className="w-full " src={giphy} alt="nope" />
        </div>
        <div className="basis-[45%] px-10">
            <h1 className='text-5xl font-bold'>About me</h1>
            <p className="py-3">
            Results-driven computer science student from Skn sinhgad institute of technology and science ,lonavala , passionate about developing user-friendly Web applications, websites. Excellent problem-solving skills and ability to perform well in a team. Seeking to work as a Web developer, as well as grow and develop my own skills as a coder.
            </p>
            <p className="py-3">
            I am developing this portfolio using react and tailwand css to shhowcase my abilities of react and tailwans css .
                I can also work in java. i have developed some projects using java. for the backend i can work well in php also have done some projects and a internship in laravel. 
            </p>
        </div>
    </div>
  )
}

export default About