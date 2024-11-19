import React from 'react'
import iphone1 from '../assets/iphone1.png'
import { FaArrowRight } from 'react-icons/fa'
import { Fadein} from '../variants'
import { motion} from "framer-motion"
const Shopproducts = () => {
  return (
    <>
      <motion.h1
      variants={Fadein('left' , 0.2)}
      initial = 'hidden'
      whileInView={'show'}
      viewport={ {once : true , amount : 0.7}}
      className='text-4xl font-bold m-8 sm:mt-10'>Shop Product By</motion.h1>
     
     <div className=" bg-lightblue sm:h-[12rem] mm:m-auto mm:w-[54rem] sm:mx-5 md:h-[27rem] lg:w-[75rem] md:w-[47rem] lg:mx-28 mb-20 rounded-[3rem] ">
    
      
       <motion.img className='hover:rotate-12 duration-700 absolute md:-ml-10 lg:-ml-0 md:h-[500px] md:w-[500px] sm:w-[220px] sm:-ml-5' src={iphone1} alt="" />
       <div className="flex flex-col lg:ml-[33rem] md:ml-[26rem] mt-28 absolute ">
       <motion.h1
       variants={Fadein('up' , 0.2)}
       initial = 'hidden'
       whileInView={'show'}
       viewport={ {once : true , amount : 0.7}}
       className='lg:text-4xl md:text-3xl font-bold mb-5 sm:text-[1rem] md:ml-0 md:-mt-0 sm:ml-[12rem] sm:-mt-[6rem]'>Define yourslf be <br />different</motion.h1>
       <motion.p 
       variants={Fadein('up' , 0.4)}
       initial = 'hidden'
       whileInView={'show'}
       viewport={ {once : true , amount : 0.7}}
       className='text-gray-600 md:text-xl md:ml-0 sm:text-xs sm:ml-[10rem] sm:text-nowrap md:-mt-0 sm:-mt-3'>These have large ear cups that  <br />the ears, providing good sound  <br />and often better sound quality</motion.p> 
       <motion.button
       variants={Fadein('up' , 0.4)}
       initial = 'hidden'
       whileInView={'show'}
       viewport={ {once : true , amount : 0.7}}
       className='flex absolute bg-red md:p-3 md:mt-48 md:ml-0 sm:ml-[10rem] sm:mt-8 sm:p-[7px] rounded-xl text-white md:font-bold hover:bg-gray-700 duration-700 '>Shop Now <i className='mt-1 ml-4'><FaArrowRight/></i></motion.button>
       </div>
      </div>
    </>
  )
}

export default Shopproducts
