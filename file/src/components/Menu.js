import React from 'react'

const Menu = () => {
  return (
    <div className="flex items-center text-[12px] justify-evenly w-full mt-8 text-gray-600">
        <button className="border border-gray-400 rounded-md h-6 w-20 text-center">Popular</button>
        <div className="w-[800px]">
            <ul className="flex justify-between">
                <li className="hover:text-black curser-pointer hover:font-bold hover:underline">All</li>
                <li className="hover:text-black curser-pointer hover:font-bold hover:underline">Animation</li>
                <li className="hover:text-black curser-pointer hover:font-bold hover:underline">Branding</li>
                <li className="hover:text-black curser-pointer hover:font-bold hover:underline">Illustration</li>
                <li className="hover:text-black curser-pointer hover:font-bold hover:underline">Mobile</li>
                <li className="hover:text-black curser-pointer hover:font-bold hover:underline">Print</li>
                <li className="hover:text-black curser-pointer hover:font-bold hover:underline">Product Design</li>
                <li className="hover:text-black curser-pointer hover:font-bold hover:underline">Typography</li>
                <li className="hover:text-black curser-pointer hover:font-bold hover:underline">Web Design</li>
            </ul>
        </div>
        <button>
            Filters
        </button>
    </div>
  )
}

export default Menu