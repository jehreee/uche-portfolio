"use client"
import React, { useState } from 'react'
import TransitionLink from './TransitionLink';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { LiaTimesSolid } from "react-icons/lia";
import { TbHexagonLetterUFilled } from "react-icons/tb";

export default function Navigation() {
  const [nav, setNav] = useState(false)


  return (
    <nav className='w-full p-2 md:p-4 md:px-8 flex flex-row place-items-center justify-between bg-gray-900'>
        <a href='/'>
          <TbHexagonLetterUFilled href='/' className='text-gray-200' size={30}/>
        </a>
        
        <h5 className='text-gray-500 text-xs md:text-base'>*Open for offers and collaborations*</h5>
        <div className=' gap-16 hidden md:flex'>
            <TransitionLink href="/" label="Home" />
            <TransitionLink href="/projects" label="Projects" />
            <TransitionLink href="/contact" label="Contact" />
            <TransitionLink href="/about" label="About" />
        </div>
        <div onClick={() => {setNav(!nav)}} className=' text-gray-200 z-20 cursor-pointer pr-4 md:hidden'>
          {nav ? <LiaTimesSolid size={30}/> : <HiBars3BottomRight size={30}/>}
        </div>

        {
          nav && (
            
            <ul className='flex flex-col items-center justify-center absolute top-0 right-0 z-10 w-2/3 h-2/4 bg-gray-900 text-gray-400'>
              <li onClick={ () => setNav(!nav)} className='px-4 cursor-pointer capitalize py-3 text-4xl'>
                <TransitionLink href="/" label="Home" />
              </li>
              <li onClick={ () => setNav(!nav)} className='px-4 cursor-pointer capitalize py-3 text-4xl'>
                <TransitionLink href="/projects" label="Projects" />
              </li>
              <li onClick={ () => setNav(!nav)} className='px-4 cursor-pointer capitalize py-3 text-4xl'>
                <TransitionLink href="/contact" label="Contact" />
              </li>
              <li onClick={ () => setNav(!nav)} className='px-4 cursor-pointer capitalize py-3 text-4xl'>
                <TransitionLink href="/about" label="About" />
              </li>
              
            </ul>
            

          )
        }
        
    </nav>
  )
}
