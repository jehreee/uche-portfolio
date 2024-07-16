import React from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function page() {
  return (
    <div className=' bg-gray-950 w-full h-screen'>
        <div className=" max-w-screen-lg mx-auto flex flex-col items-center w-full h-full px-4 ">
            <div className='mt-44 md:mt-24'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-gray-700 text-4xl md:text-6xl -tracking-widest'>404</h1>
                </div>
                <div className='flex flex-col relative items-center'>
                    
                    <h1 className='text-gray-500 text-7xl md:text-9xl tracking-widest'>OOPS!!</h1>
                    <div  className='capitalize text-gray-400 absolute text-xs md:text-sm top-14 md:top-24 rounded-lg bg-gray-950'>
                        <p className='p-1'>Sorry, this project have not been hosted yet.. </p>
                    </div>
                    
                </div>

                <div className='flex flex-col mt-36 md:mt-16 items-center'>
                    <p className='text-gray-400 text-sm'>You can still check out the source-code though!</p>
                    <div className='flex flex-row relative text-gray-400 mt-5 h-24 w-full '>
                        <div className='absolute left-0'>
                            <a href='/projects'>
                                <button className='flex flex-row'>
                                    <FaLongArrowAltLeft size={25} /> <span className=' underline'>Back to projects</span>
                                </button>
                            </a>
                        </div>

                        <div  className='absolute right-0'>
                            <a href='https://github.com/uche09'>
                                <button className='flex flex-row p-1 bg-gray-700 text-gray-400 rounded-md'>
                                <span className=''>Code</span> <IoIosArrowForward size={23} className='ml-1'/>
                                </button>
                            </a>
                        </div>

                    </div>
                    
                </div>
            </div>


        </div>
    </div>
  )
}
