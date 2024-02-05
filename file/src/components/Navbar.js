import React from 'react'
import Dribble from  "../components/img/Dribble.png"
import Search from './Search'

const Navbar = () => {
  	return (
      	<nav class="flex justify-between h-full">
        	<div class="flex p-4">
				<a href="https://dribblee-clone.vercel.app/" class="flex items-center space-x-1 rtl:space-x-reverse pr-7">
					<img src={Dribble} class="h-11" text-center alt="Flowbite Logo"/>
					<span class="pl-2 text-2xl py-2 font-bold text-italic px-7 text-center dark:text-black">Dribblee</span>
				</a>
				<div class="items-center ml-5 mt-2  justify-between hidden w-full md:flex md:w-auto md:order-1">
					<ul class="flex flex-col font-medium p-5 md:p-0 mt-[5cm] border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
						<li>
						<a href="#" class="text-[18px]  text-center font-bold py-3 px-2 md:p-0 text-white hover:underline bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
						</li>
						<li>
						<a href="#" class="text-[18px] text-center font-bold py-3 px-2 md:p-0 text-gray-900 hover:underline rounded md:hover:text-blue-700 md:dark:hover:text-blue-">About</a>
						</li>
						<li>
						<a href="#" class="text-[18px] text-center font-bold py-3 px-2 md:p-0 text-gray-900 hover:underline rounded md:hover:text-blue-700 md:dark:hover:text-blue-">Services</a>
						</li>
						<li>
						<a href="#" class="text-[18px] text-center font-bold py-3 px-2 md:p-0 text-gray-900 hover:underline rounded md:hover:text-blue-700 md:dark:hover:text-blue-">Contact</a>
						</li>
					</ul>
        		</div>
			</div>
			<div className="my-3 ml-9"><Search/></div>
			<div class="flex m-2 p-1">
				<button className="dark:bg-pink-500 px-4 py-2 text-[15 px] m-1 font-bold text-white rounded-md hover:bg-pink-400">Start a free project</button>
				<button class="text-white bg-blue-700 hover:bg-blue-400 font-bold rounded-md text-[15px] px-3 py-2 m-1">Sign in / Sign Up</button>
        	</div>            
      	</nav>
  	)
}

export default Navbar