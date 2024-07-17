import React from 'react'
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import python from "../../assets/python.png";
import flask from "../../assets/flask.png";
import mysql from "../../assets/mySQL.png";
import sqlite from "../../assets/SQlite.png";
import github from "../../assets/github.png";

const AboutPage = () => {

  const experiences = [
    {
        id: 1,
        title: "HTML",
        src: html,
        style: "shadow-orange-500"
    },
    {
        id: 2,
        title: "CSS",
        src: css,
        style: "shadow-blue-500"
    },
    {
        id: 3,
        title: "Python",
        src: python,
        style: "shadow-amber-500"
    },
    {
        id: 4,
        title: "Flask",
        src: flask,
        style: "shadow-white"
    },
    {
        id: 5,
        title: "MySQL",
        src: mysql,
        style: "shadow-cyan-800"
    },
    {
        id: 6,
        title: "SQLite",
        src: sqlite,
        style: "shadow-cyan-400"
    },
    {
        id: 7,
        title: "GitHub",
        src: github,
        style: "shadow-gray-400"
    },
  ]
  return (
    <div >
        
        <section id="experiences">
        <div className=" bg-gray-950 w-full h-full ">
          
          <div className=" max-w-screen-lg flex flex-col mx-auto pt-20 sm:pt-12 p-4 justify-center h-fit w-full text-gray-300">
            
            <div className='pb-8 mb-6'>
              <div className='pb-8'>
                <p className="text-4xl text-gray-300 font-extrabold inline border-b-4 border-gray-500 text-center mt-10">About</p>
              </div>
                
                <p className='text-gray-500 md:text-lg'>
                  Hello! I&lsquo;m Uche Omesu, a backend developer. I specialize in making sure everything runs smoothly behind the scenes.
                  Whether it&lsquo;s optimizing databases to perform like a finely tuned sports car or crafting APIs so slick they put butter to shame, I&lsquo;ve got your back.
                  <br />
                  And when I&lsquo;m not wrestling with code, you might catch me watching movies or listening to music. 
                </p>
            </div>

            <div>
              <p className=" text-2xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
              <p className="py-6 text-gray-500">These are the technologies i&lsquo;ve worked with.</p>
            </div>

            <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {experiences.map(({id, title, src, style}) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                  <img src={src.src} alt="my experiences" className=" w-20 mx-auto"></img>
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
