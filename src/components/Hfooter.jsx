import React from 'react'
import svg from "../assets/svg.png";

function Hfooter() {
  return (
    <div className="flex mt-[-110px] h-1/6 w-full justify-center overflow-hidden">
        <div className="w-full h-full max-w-screen-2xl">
            <img src={svg} alt="no" className="max-w-full h-32" />
        </div>
    </div>
  )
}

export default Hfooter