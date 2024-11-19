import React from 'react'
import headphone1 from '../assets/headphone1.jpeg'
import speaker from '../assets/speaker.jpeg'
import iphone from '../assets/iphone black.png'
import tablet from '../assets/tablet.jpeg'
import laptop1 from '../assets/laptop1.jpeg'
import camera from '../assets/camera.png'
import { FaArrowRight } from 'react-icons/fa'
import tab from '../assets/tab.png'
import { Fadein} from '../variants'
import { motion} from "framer-motion"
const Category = () => {
  return (
    <>
    <motion.h1
    variants={Fadein('up' , 0.2)}
    initial = 'hidden'
    whileInView={'show'}
    viewport={ {once : true , amount : 0.7}}
    
    className='text-4xl font-bold text-red text-center mb-8'>Category</motion.h1>


    <motion.h1
    
    variants={Fadein('up' , 0.2)}
   initial = 'hidden'
   whileInView={'show'}
   viewport={ {once : true , amount : 0.7}}
    
    className='text-4xl font-bold text-center mb-8'>Can we help you pick a headphone</motion.h1>


     <div className="grid xl:grid-cols-5 mm:grid-cols-3 sm:grid-cols-1 sm:m-20 md:grid-cols-2  gap-10 ">
        <motion.div 
        variants={Fadein('up' , 0.2)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}

       
        
        className="bg-white h-[21rem] w-[15rem]  rounded-2xl shadow-3xl">
          <img className='m-auto hover:scale-110 duration-700' src={iphone} alt="" />
          <h1 className='text-2xl font-bold text-center m-3'>Iphone</h1>
        </motion.div>






        <motion.div
        
        variants={Fadein('up' , 0.4)}
   initial = 'hidden'
   whileInView={'show'}
   viewport={ {once : true , amount : 0.7}}
        
        className="bg-white h-[21rem] w-[15rem]  rounded-2xl shadow-3xl">
        <img className='m-auto mt-10  hover:scale-110 duration-700' src={speaker} alt="" />
        <h1 className='text-2xl font-bold text-center mt-20'>Speaker</h1>
        </motion.div>








        <motion.div 
        variants={Fadein('up' , 0.6)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        
        
        
        className="bg-white h-[21rem] w-[15rem]  rounded-2xl shadow-3xl ">
        <img className='m-auto mt-10  hover:scale-110 duration-700' src={tablet} alt="" />
        <h1 className='text-2xl font-bold text-center mt-10'>Tablet</h1>
        </motion.div>





        <motion.div 
        variants={Fadein('up' , 0.8)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        
        
        className="bg-white h-[21rem] w-[15rem]  rounded-2xl shadow-3xl">
        <img className='m-auto mt-14  hover:scale-110 duration-700' src={laptop1} alt="" />
        <h1 className='text-2xl font-bold text-center mt-14'>Laptop</h1>
        </motion.div>





        <motion.div
        variants={Fadein('up' , 1)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        
        
        className="bg-white h-[21rem] w-[15rem]  rounded-2xl shadow-3xl">
        <img className='m-auto mt-10  hover:scale-110 duration-700' src={headphone1} alt="" />
        <h1 className='text-2xl font-bold text-center mt-10'>Headphone</h1>
        </motion.div>
     </div>

     <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:place-items-center md:gap-x-32 xl:gap-1 gap-y-10 m-10  md:-mt-0 sm:-mt-12">
      <motion.div
      variants={Fadein('up' , 0.2)}
      initial = 'hidden'
      whileInView={'show'}
      viewport={ {once : true , amount : 0.7}}
      
      
      className="bg-white shadow-3xl md:h-[30rem] md:w-[40rem] sm:w-[20rem] rounded-3xl">
       <div className="flex">
       <img className='md:w-[23rem] sm:w-[10rem] md:mb-0 sm:mb-10 -rotate-[55deg] mt-12 hover:scale-110 duration-700' src={camera} alt="" />
        <div className="flex flex-col">
       <h1 className='font-bold md:text-4xl md:mt-[9rem] sm:text-2xl sm:mt-[4rem] ml-[1.5rem] md:mb-5'>25% off</h1>
       <h1 className='md:text-[1.7rem]'>Catch hotest <span className=' font-bold'>Deals</span> in <br />Cameras category</h1>
       <button className='flex absolute md:mt-80 bg-red sm:mt-40 sm:p-2 md:p-3 rounded-xl text-white font-bold hover:bg-gray-700 duration-700'>Shop Now <i className='mt-1 ml-4'><FaArrowRight/></i></button>
       </div> 
       </div>
      </motion.div>









      <motion.div
      variants={Fadein('up' , 0.2)}
      initial = 'hidden'
      whileInView={'show'}
      viewport={ {once : true , amount : 0.7}}
      
      
      className="bg-white shadow-3xl md:h-[30rem] md:w-[40rem] sm:w-[20rem] rounded-3xl md:mb-0 sm:mb-10">
       <div className="flex">
       <img className='hover:scale-110 duration-700 md:h-[26rem] m-10 sm:h-[9rem]' src={tab} alt="" />
        <div className="flex flex-col">
       <h1 className='font-bold md:text-4xl md:mt-[9rem] sm:text-2xl sm:mt-[4rem] ml-[1.5rem] md:mb-5'>25% off</h1>
       <h1 className='md:text-[1.7rem]'>Tablets smartphone <br /><span className='font-bold'>and more</span></h1>
       <button className='flex absolute md:mt-80 bg-red sm:mt-40 sm:p-2 md:p-3 rounded-xl text-white font-bold hover:bg-gray-700 duration-700'>Shop Now <i className='mt-1 ml-4'><FaArrowRight/></i></button>
       </div> 
       </div>
      </motion.div>
     </div>
    </>
  )
}

export default Category
