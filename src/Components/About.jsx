import React from 'react'

function About() {
  return (
    <div 
      name = "about"
       className='w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h2  className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h2>
            </div>
            <p className='text-xl mt-20'> I'am <br /> A passionate full-stack developer with a knack for building scalable and user-friendly web applications.
My journey into full-stack development began with a curiosity to understand how things work behind the scenes.  I've honed my skills in front-end technologies like React, as well as back-end frameworks like Node.js and Express.
What motivates me as a developer is the opportunity to tackle complex challenges and transform ideas into reality. I'm dedicated to delivering solutions that exceed expectations.
 I'm always eager to connect with fellow developers, designers, and innovators to exchange ideas and explore new opportunities.</p>

 <br />
        
        </div>
    </div>
  )
}

export default About