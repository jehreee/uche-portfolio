"use client"

import React, { useState } from 'react';
import arrayDistruct from "../../assets/projects/arrayDestruct.jpg";
import reactWeather from "../../assets/projects/reactWeather.jpg";
import { LiaTimesSolid } from "react-icons/lia";
import { StaticImageData } from 'next/image';


const Projects = () => {
  const projects = [
    {
      id: 1,
      src: arrayDistruct,
      demo: "noDemo",
      gitCode: "https://www.github.com/" ,
      description: "This is a simple Javascript array distruct",
      date: "2024",
      technologies: "Python, Flask",

    },
    {
      id: 2,
      src: reactWeather,
      demo: "noDemo",
      gitCode: "https://www.github.com/",
      description: "This is a simple weather App",
      date: "2024",
      technologies: "Python, MySQL"
    }
  ]


  interface Data {
    id: number;
    src: StaticImageData;
    demo: string;
    gitCode: string;
    description: string;
    date: string;
    technologies: string;
  }

  const [file, setFile] = useState<Array<Data>>([]);
  


  return (
    <div className=' bg-gray-950 w-full h-screen'>
      <div className=' max-w-screen-lg p-4  mx-auto flex flex-col justify-center'>
        <div className=' pb-8 mt-12'>
          <h1 className='text-4xl text-gray-300 font-extrabold inline border-b-4 border-gray-500 text-center mt-10'>Projects</h1>
          <p className="py-6 text-gray-500">Check out some of my works right here.</p>
        </div>
        
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            projects.map((file) => (
              <div key={file.id} className='shadow-md shadow-gray-600 rounded-lg'>
                <div></div>
                <img src={file.src.src} alt='' className='rounded-md duration-200 hover:scale-105' onClick={() => setFile([file])}></img>

                <div className="flex items-center justify-center text-gray-500">
                  <a href={file.demo === "noDemo" ? "/error" : file.demo}>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                  </a>
                  <a href={file.gitCode}>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                  </a>
                </div>

              </div>
            ))
          }
        </div>

        <div className='pop-up fixed left-0 top-0 bg-black/[.8] w-screen h-screen' onClick={() => setFile([])} style={{display: file.length === 1 ? "block" : "none"}}>
          <span
            onClick={() => setFile([])}
            className=" absolute top-14 sm:top-5 right-5 md:right-44 font-extrabold text-5xl z-100 cursor-pointer text-white select-none white"
          >
            <LiaTimesSolid />
          </span>
          
          <div className="flex justify-center items-center h-full w-full  ">
            {
              file.map((popup, index) => (
                <div key={index} className='flex flex-col md:flex-row w-3/4 p-5' onClick={(ev) => ev.stopPropagation()}>
                  <img src={popup.src.src} alt="" className=" w-full md:w-1/2 border-4 border-white md:mb-0 " />
                  <div className='bg-white/15'>
                    <div className='flex flex-col  items-center'>
                      <div className='flex flex-col items-start gap-1 sm:gap-2 px-10 py-5'>
                        <p className='text-gray-400 '><span className=' font-bold text-gray-300'>Description : </span>{popup.description}</p>
                        <p className='text-gray-400 '><span className=' font-bold text-gray-300'>Date : </span>{popup.date}</p>
                        <p className='text-gray-400'><span className=' font-bold text-gray-300'>Created Using : </span>{popup.technologies}</p>
                      </div>


                      <div className='flex flex-row w-4/5 border-2 border-blue-300 bg-blue-300 rounded-md items-center justify-center m-10'>
                        <a href={popup.demo === "noDemo" ? "/error" : popup.demo} className="w-1/2 border-r-0 rounded-lg flex justify-center bg-blue-500 hover:bg-sky-500">
                          <button className="p-2">Demo</button>
                        </a>
                        <a href={popup.gitCode} className="w-1/2 flex justify-center hover:bg-sky-300">
                          <button className="p-2">Code</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  

                </div>
              ))
            }
            
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects