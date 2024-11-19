import React from 'react'
import { FaApple, FaArrowAltCircleRight, FaFacebook, FaLinkedin, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
     <footer>
        <div className="flex flex-col ">
           <div className="bg-lightblue sm:h-[3rem] md:h-[5rem] mm:h-[6rem]  w-full mb-1">
           <div className="flex lg:gap-52 mm:gap-10 sm:gap-4 md:gap-0">
              
               <h1 className='mm:text-3xl md:text-2xl mm:m-7  md:m-5 sm:text-sm sm:mt-3 '>Your Gateway to Success Start</h1>
                <div className="flex text-gray-700 lg:text-3xl mm:m-7 lg:gap-28 mm:text-2xl mm:gap-16 md:text-xl md:m-5 md:gap-12
                sm:text-sm sm:mt-3 sm:gap-5">
                <p>Pages</p>
                <p>Other</p>
                <p>Utility</p>
                <p className='md:block sm:hidden'>Help</p>
                </div>
            
            </div>

           
           </div>

           <div className="bg-lightblue md:h-[20rem] mm:h-[30rem] sm:h-[13rem]">
            <div className="flex">
                <div className="flex flex-col mm:m-7 mm:gap-3 md:m-5 md:gap-2">
                    <p className='lg:text-3xl mm:text-2xl'>Here!</p>
                    <p className='flex lg:text-2xl md:text-xl md:gap-2 mm:gap-4 sm:text-sm'><FaArrowAltCircleRight className='md:text-2xl mm:text-3xl text-orange-500 mt-[2px]'/> Hasheemalam@gmail.com</p>
                </div>

                <div className="flex absolute lg:m-7 lg:mt-96 mm:mt-96 sm:mt-44 sm:text-2xl sm:gap-2 md:mt-[18rem] md:text-2xl md:gap-2 lg:text-5xl mm:text-4xl mm:gap-4 text-gray-700 lg:gap-5">
                    <FaFacebook className='hover:text-orange-600'/>
                    <FaLinkedin className='hover:text-orange-600'/>
                    <FaTwitter className='hover:text-orange-600'/>
                    <FaYoutube className='hover:text-orange-600'/>
                </div>
            </div>

            <div className="flex lg:ml-[43rem] mm:ml-[32rem] mm:-mt-[6rem] lg:-mt-[6rem] lg:text-2xl sm:text-xs sm:ml-[12.5rem] md:text-xl md:-mt-[4rem] md:ml-[23.3rem] sm:-mt-[2rem]">
            <div className="flex flex-col lg:gap-3 mm:gap-1 text-gray-600 ">
                <p>Demo</p>
                <p>Home</p>
                <p>Services</p>
                <p>About</p>
                <p>Blog</p>
                <p>Work</p>
                <p>Shop</p>
            </div>

            <div className="flex flex-col lg:gap-3 sm:ml-3 mm:gap-1 text-gray-600 lg:ml-28 mm:ml-16 md:ml-8">
                <p>404</p>
                <p>Password</p>
                <p>CheckOut</p>
                <p>Blog Details</p>
                <p>Work Details</p>
                <p>Shop Details</p>
            </div>


            <div className="flex flex-col lg:gap-3  mm:gap-1 text-gray-600 mm:ml-2 md:ml-3  lg:ml-12">
                <p>Style Guide </p>
                <p>Licencing</p>
                <p>Change log</p>
                <p>Instructions</p>
                
            </div>



            <div className="flex flex-col lg:gap-3 md:ml-4  mm:gap-1 text-gray-600 mm:ml-6 lg:ml-[4rem] md:block sm:hidden">
                <p>All Templates</p>
                <p>Supports</p>
                
            </div>
            </div>
           </div>



           <div className="bg-lightblue md:h-[5rem] mt-1 sm:h-[3rem]">
            <div className="flex mm:gap-40 lg:gap-60 md:gap-20 sm:gap-14">
                <FaApple className='md:text-6xl md:m-3 sm:text-4xl sm:m-2'/>
                <p className='lg:text-3xl mm:text-2xl text-gray-700 mm:m-6 lg:m-5 md:text-xl md:m-7'>ALL RIGHTS RESERVED || Hasheemalam@gmail.com</p>
            </div>
           </div>
        </div>
     </footer>
    </>
  )
}

export default Footer
