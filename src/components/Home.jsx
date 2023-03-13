import React from 'react'
import myimage from "../assets/myimage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 '>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
                <div className="flex flex-col justify-center h-[256px]">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I love to work on Web applications using technologies like React, Tailwand, html, css and laravel
                    </p>
                    <div>
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-pink-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} />
                            </span>

                        </button>
                    </div>
                </div>
                <div >
                    <img src={myimage} alt="my profile" className="rounded-tr-3xl rounded-bl-3xl w-2/3  mx-auto md:w-full" />
                </div>
            </div>
        </div>
    )
}

export default Home