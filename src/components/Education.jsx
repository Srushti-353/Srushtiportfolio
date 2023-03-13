import React from 'react'

function Education() {
  return (
    <div className="max-w-screen-lg p-4 mx-auto mb-12 flex flex-col justify-center w-full h-full">
         <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            Education
          </p>
          <p className="py-6">Check out education here !</p>
        </div>
    <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
    <div className="col-span-4 w-full h-full ">
        <div className="w-full h-full bg-gradient-to-r from-black to-gray-500 rounded-md p-2 md:pl-4">
            <h1 className="text-white text-xl font-medium py-2">Skn Sinhgad institute of technology and science </h1>
            <p className="text-gray-100 sm:text-sm text-xs">8.89 cgpa <br />BE in computer Engineering <br />2024</p>
        </div>
    </div>
    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-gradient-to-r from-black to-gray-500"></div>
        <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-black to-gray-500 z-10 text-white text-center">1</div>
    </div>
    <div className="col-span-4 w-full h-full"></div>

    <div className="col-span-4 w-full h-full"></div>
    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-gradient-to-r from-gray-500 to-black"></div>
        <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-gray-500 to-black z-10 text-white text-center">2</div>
    </div>
    <div className="col-span-4 w-full h-full ">
        <div className="w-full h-full bg-gradient-to-r from-gray-500 to-black rounded-md p-2 md:pl-4">
            <h1 className="text-white text-xl font-medium py-2">Government Polytechnic Ahmednagar</h1>
            <p className="text-gray-100 sm:text-sm text-xs">91% <br /> Diploma in Computer Technology <br /> 2021</p>
        </div>
    </div>

    <div className="col-span-4 w-full h-full ">
        <div className="w-full h-full bg-gradient-to-r from-black to-gray-500 rounded-md p-2 md:pl-4">
            <h1 className="text-white text-xl font-medium py-2">S.B.T.K.M.V.RAHURI</h1>
            <p className="text-gray-100 sm:text-sm text-xs">87.88% <br /> SSC <br /> 2018</p>
        </div>
    </div>
    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-gradient-to-r from-black to-gray-500"></div>
        <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-black to-gray-500 z-10 text-white text-center">3</div>
    </div>
    <div className="col-span-4 w-full h-full"></div>
</div>
</div>

  )
}

export default Education