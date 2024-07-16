import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

export default function page() {

    const socials = [
        {
            id: 1,
            child:(
                <>
                    <HiOutlineMail size={20} className='ml-3'/>
                </>
            ),
            href: "mailto:ucheomesu@gmail.com"
        },
        {
            id: 2,
            child:(
                <>
                    <FaWhatsapp size={20} className='ml-3'/>
                </>
            ),
            href: "https://wa.me/2348135267189"
        },
        {
            id: 3,
            child:(
                <>
                    <FaGithub size={20} className='ml-3'/>
                </>
            ),
            href: "https://github.com/uche09"
        },
        {
            id: 4,
            child: (
                <>
                    <FaXTwitter size={20} className='ml-3'/>
                </>
            ),
            href: "https://x.com/Uche__09"
        }
    ]
  return (
    <div className='w-full h-screen md:h-full bg-gray-950'>
        <div className='max-w-screen-lg flex flex-col items-center md:justify-center p-4 mx-auto w-full h-full'>

            
            <div className='bg-white/5 flex flex-col items-center md:justify-center mx-auto w-full h-full md:w-3/4 rounded-xl'>
                <h1 className='text-gray-300 flex justify-center mt-10 font-bold text-lg md:text-3xl'>Contact</h1>
                <div className='flex flex-row justify-center gap-4 mt-7 md:mt-10'>
                    {
                        socials.map(({id, child, href}) => (
                            <ul key={id} className=' text-gray-300 py-4 hover:scale-125 duration-300'>
                                <a href={href}>
                                    <li className='px-2 md:px-4'>{child}</li>
                                </a>
                            </ul>
                        ))
                    }
                </div>

                <div className="flex flex-row items-center w-2/4">
                    <div className="flex-grow h-px bg-gray-400"></div>
                    <p className="text-gray-300 flex-grow-0 px-3">or</p>
                    <div className=" flex-grow h-px bg-gray-400"></div>
                </div>

                <div className='flex flex-col justify-center items-center my-7 w-2/3 md:w-2/4'>
                    <div className='mb-2'>
                        <p className=' text-xs text-gray-500'>* Fill and submit the form bellow *</p>
                    </div>
                    <form action="https://getform.io/f/bxojyjea" method='POST' className='flex flex-col w-full'>
                        <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                        <input type='text' name='email' placeholder='Enter your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                        <textarea name='message' placeholder='Enter your message' rows={8} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='text-white bg-sky-400 px-5 py-2 my-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button>
                    </form>
                </div>
            </div>

            

        </div>
    </div>
  )
}
