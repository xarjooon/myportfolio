import React from 'react'
import counter from "../assets/counter.jpg";
import mediaplayer from "../assets/mediaplayer.jpg";
import netflix from "../assets/netflix.jpg";
import { FaLink } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import foodcircle from "../assets/foodcircle.png";


function MyProjects() {
  const myProjects=[
    {
      id: 1,
      src: counter,
      githubLink:'https://github.com/xarjooon/counterRedux',
      liveDemoLink:'https://counter-redux-rosy.vercel.app/'
    },
    {
      id: 2,
      src: mediaplayer,
      githubLink:'https://github.com/xarjooon/media-player-frontend',
      liveDemoLink:'https://media-player-frontend-rho-ebon.vercel.app/'
    },
    {
      id: 3,
      src: netflix,
    //   githubLink:
      liveDemoLink:'https://silver-bunny-412bb1.netlify.app', 
    },
    {
        id: 4,
        src: foodcircle ,
        githubLink:'https://github.com/xarjooon/foodCircle',
        liveDemoLink:'https://food-circle-one.vercel.app/'
    }
  ]
  const handleGithubClick = (link) => {
    window.open(link, '_blank');
  };

  const handleLiveDemoClick = (link) => {
    window.open(link, '_blank');
  };
  return (
    <div name="myProjects"
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className=' pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>MY Projects</p>
          <p className='py-6'>Check Out of some of my work here</p>
        </div>
        
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-20'>
        {
          myProjects.map(({id , src , githubLink , liveDemoLink})=>(
            <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>

            <img src={src} alt=""  className=' rounded-md hover:scale-105 duration-300 '/>
            
            <div className=' flex items-center justify-center '>
             
                
            <button onClick={() => handleGithubClick(githubLink)} className='w-1/2  px-6 py-3 m-4 hover:scale-105 duration-200'  ><FaGithub size={25} /></button>
            <button  onClick={() => handleLiveDemoClick(liveDemoLink)} className='w-1/2  px-6 py-3 m-4 hover:scale-105 duration-200'><FaLink  size={25}/></button>
            </div>
            
           </div>

          ))
        }

         

        </div>
      </div>
    </div>
  )
}

export default MyProjects