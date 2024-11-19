import React from 'react'
import heading from '../assets/headings.jpeg'
import { motion} from "framer-motion"
import { Fadein} from '../variants'


const Features = () => {
  return (
    <>
   <motion.div 
   
   
   className="">
   <motion.h1 
   variants={Fadein('up' , 0.2)}
   initial = 'hidden'
   whileInView={'show'}
   viewport={ {once : true , amount : 0.7}}
   className='text-center md:m-14 text-3xl font-bold sm:m-5'>Feature’s</motion.h1>
      <motion.div
      variants={Fadein('up' , 0.2)}
      initial = 'hidden'
      whileInView={'show'}
      viewport={ {once : true , amount : 0.7}}
      className="bg-lightblue md:h-[30rem] w-full sm:h-[15rem] mb-20 sm:w-full">
        <img  className='absolute ml-14 md:h-[478px] md:w-[400px] lg:h-[478px] lg:w-[410px] sm:h-[12rem] md:-ml-0 md:mt-0 sm:-ml-0 sm:mt-5' src={heading} alt="" />

        <div className="flex flex-col md:ml-[28rem] sm:ml-48">
            <h1 className='md:text-3xl font-bold md:mt-8 sm:mt-2 sm:text-xl'>Amazing feature</h1>
           
                 <h1 className='font-bold md:mt-7 sm:text-sm md:text-xl sm:mt-1'>Touch Controls</h1>
                <p className='text-sm text-gray-700 text-nowrap'>Some headphones have  <br />sensitive surfaces for control <br />playback.</p>

                <h1 className=' font-bold md:mt-7 sm:mt-1'>Sound Quality</h1>
                <p className='text-sm text-gray-700 text-nowrap'>Some headphones have  <br />sensitive surfaces for control <br />playback.</p>

                <h1 className=' font-bold mt-7 md:block sm:hidden'>Microphone</h1>
                <p className='text-sm text-gray-700 md:block sm:hidden'>Some headphones have touch- <br />sensitive surfaces for controlling <br />playback.</p> 
           
        </div>
      </motion.div>
   </motion.div>
    </>
  )
}

export default Features
