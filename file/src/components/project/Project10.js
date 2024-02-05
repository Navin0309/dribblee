import React from 'react'
import image10 from '../img/image6.png'
import { HeartIcon } from "@heroicons/react/solid"
import { EyeIcon } from "@heroicons/react/solid"

const Project = () => {
  return (
    <div className="w-[350px] h-[370px] rounded-xl mb-5">
        <img className="rounded-xl" src={image10} alt="" />
        <div className="flex justify-between p-2">
            <div className="flex items-center">
                <h3 className="font-bold text-black text-[15px]">Palladadesign</h3>
                <h3 className="bg-gray-300 text-white p-[2px] text-xs font-bold rounded-md ml-2">TEAM</h3>
            </div>
            <div className="flex space-x-2">
                <div className="flex items-center">
                    <HeartIcon className="h-3 w-3 text-gray-500"/>
                    <h2 className="text-sm">22</h2>
                </div>
                <div className="flex items-center">
                    <EyeIcon className="h-3 w-3 text-gray-500"/>
                    <h2 className="text-sm"> 30.4k</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project