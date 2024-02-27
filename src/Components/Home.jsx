import React from 'react'
import myimg from "../assets/myImage.jpg"
import { MdKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
     <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'am a Web Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>
            A passionate full-stack developer with a knack for building scalable and user-friendly web applications.
{/* My journey into full-stack development began with a curiosity to understand how things work behind the scenes.  I've honed my skills in front-end technologies like React, as well as back-end frameworks like Node.js and Express.
What motivates me as a developer is the opportunity to tackle complex challenges and transform ideas into reality. I'm dedicated to delivering solutions that exceed expectations.
 I'm always eager to connect with fellow developers, designers, and innovators to exchange ideas and explore new opportunities. */}
            </p >
            <div>
                <button className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-cyan-500 to-blue-600 cursor-pointer'>
                    Portfolio  <span className='group-hover:rotate-90 duration-300 '><MdKeyboardArrowRight size={25} className='ml-1' /></span>

                </button>
            </div>
        </div>
        <div>
            <img src={myimg} alt=""  className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
     </div>
    </div>
  )
}

export default Home