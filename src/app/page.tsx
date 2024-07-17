import TransitionLink from "./components/TransitionLink";
import { IoIosArrowForward } from "react-icons/io";
import mainAvi from "../assets/UCHE.png";


export default function page() {


  return (
    <div>
      <section id="home">
        <div className=" bg-gray-950 md:bg-bgImage md:bg-cover w-full h-full md:h-screen p-4 ">
          <div className= "md:bg-black/70  bg-gray-950 md:w-full h-full">
            <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full py-11 px-4 md:flex-row">
              <div className="flex flex-col justify-center h-full">
                <h1 className="text-4xl font-bold text-center text-gray-300">Uchechukwu Omesu</h1>
                <div className="flex flex-row items-center">
                  <div className="flex-grow h-px bg-gray-500"></div>
                  <p className="text-gray-400 flex-grow-0 px-3">Backend Developer</p>
                  <div className=" flex-grow h-px bg-gray-600"></div>
                </div>
                <p className="text-gray-500 py-6 max-w-md">
                  <span className="">
                    Hi, My name is Uche, a <span className="font-bold">Backend Developer.</span>
                    <br />
                    With my laptop on my desk, passion in my heart, and a plate of jollof by the side, I have been able to build a 
                    lot of great stuff, ranging from cutting-edge software solutions that make a positive impact to quirky bathroom ideas.
                    <br/>
                  </span>
                  
                  <span className=" flex text-sm mt-7">You can check them out by clicking on the Projects link bellow!!</span>
                </p>
                <a href="/projects" className="">
                  
                  <div className="group md:animate-bounce duration-700 text-sky-400 w-fit px-4 md:px-6 py-2 md:py-3 my-2 items-center flex rounded-full cursor-pointer border-2 border-sky-400 hover:border-sky-600">
                      Projects <IoIosArrowForward size={25} className=" ml-2  group-hover:scale-90 duration-300"/>
                  </div>
                  
                </a>
              </div>

              <div className="mx-auto mt-20 md:mt-0 w-2/3 md:w-80 border-4 border-sky-800 bg-sky-800">
                <img src={mainAvi.src} alt='Uche Omesu Profile Image' className="  object-contain transform translate-x-5 translate-y-5"/>
              </div>


            </div>
          </div>
        </div>

      </section>
      
    </div>
    
    
  )
}
