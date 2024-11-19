import React from 'react'
import { FaAngleDown, FaApple, FaEnvelope, FaPhone } from "react-icons/fa";
import Footer from './Footer';
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import { motion } from "framer-motion"
import { Fadein} from '../variants'
const Contact = () => {
  return (
    <>
  <motion.div animate={{opacity:1}}  className="bg-gray-300 opacity-0 h-[65rem] w-full sm:justify-center md:-mb-60 mm:-mb-20 sm:-mb-[20rem] ">

      <div className="bg-[#abc0d8] mm:h-[50rem] md:h-[40rem] lg:w-[82rem] sm:my-14 md:my-28  mm:my-16 absolute lg:ml-20 rounded-[3rem] mm:ml-10 mm:w-[59rem] md:w-[45rem] md:ml-6 sm:h-[39rem] sm:w-[22rem] xs:w-[25rem] sm:m-3 xs:ml-3 ">
      <Navbar/>
  <div className="flex flex-col gap-5 lg:ml-16 mm:ml-5 mm:mt-20 lg:mt-40 md:mt-20 md:ml-5 sm:text-center md:text-left sm:mt-7">
            <motion.h1
             variants={Fadein('up' , 0.2)}
             initial = 'hidden'
             whileInView={'show'}
             viewport={ {once : true , amount : 0.7}}
            className='lg:text-5xl mm:text-4xl font-bold md:text-3xl sm:text-3xl'>Contact us</motion.h1>
            <motion.p 
              variants={Fadein('up' , 0.4)}
              initial = 'hidden'
              whileInView={'show'}
              viewport={ {once : true , amount : 0.7}}
            className='text-gray-600 font-semibold mm:text-sm md:text-xs md:block sm:hidden'>s simply dummy text of the printing <br />typesetting industry. Lorem Ipsum  <br />the industry's standard dummy text  <br />since the 1500s, when an unknown  <br />took a galley of type and scrambled  <br />make a type specimen book</motion.p>
            <motion.p
              variants={Fadein('up' , 0.5)}
              initial = 'hidden'
              whileInView={'show'}
              viewport={ {once : true , amount : 0.7}}
            className=' mm:text-xl gap-3 text-gray-800 md:text-sm md:block sm:hidden'><i className='mt-1'><FaEnvelope/></i>Hasheemalam@gmail.com</motion.p>
            <motion.p
              variants={Fadein('up' , 0.6)}
              initial = 'hidden'
              whileInView={'show'}
              viewport={ {once : true , amount : 0.7}}
            className=' mm:text-xl gap-3 text-gray-800 md:text-sm md:block sm:hidden'><i className='mt-1 '><FaPhone/></i>+92 1234 56789</motion.p>
          </div>


 

        <motion.div
          variants={Fadein('left' , 0.2)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={ {once : true , amount : 0.7}}
        className="bg-white mm:h-[41rem] md:h-[33rem] lg:w-[46rem] mm:w-[38rem] md:m-32 sm:m-4 absolute rounded-[2rem] lg:ml-[33rem] lg:-mt-[28rem] mm:-mt-[24rem] mm:ml-[20rem] md:w-[30rem] md:-mt-[21rem] md:ml-[14rem] sm:mt-3 sm:h-[29rem] sm:w-[20rem] xs:w-[23rem]">
          <div className="lg:text-4xl mm:text-3xl md:text-xl font-bold mm:m-8 md:m-4 sm:m-3">
          <h1>We’d love to hear from you! </h1>
          <h1>Lets get in touch</h1>
          </div>

          <div className="grid lg:grid-cols-2 mm:grid-cols-2 sm:grid-cols-2 md:gap-5 sm:gap-2 md:grid-cols-2 md:m-0 sm:m-3">
            <div className="flex flex-col mm:ml-8 md:ml-4">
              <label htmlFor="">Name</label>
              <input className='border-2 border-red p-2 mm:w-[17rem] md:w-[14rem] rounded-[.6rem]' type="text" />
            </div>


            <div className="flex flex-col lg:ml-16  ">
              <label htmlFor="">User</label>
              <input className='border-2 border-red p-2 md:w-[14rem] mm:w-[17rem] rounded-[.6rem]' type="text" />
            </div>



            <div className="flex flex-col md:ml-4 mm:ml-8 ">
              <label htmlFor="">E-Mail</label>
              <input className='border-2 border-red p-2 md:w-[14rem] mm:w-[17rem] rounded-[.6rem]' type="email" />
            </div>



            <div className="flex flex-col lg:ml-16 ">
              <label htmlFor="">Phone Number</label>
              <input className='border-2 border-red p-2 md:w-[14rem] mm:w-[17rem] rounded-[.6rem]' type="number" />
            </div>



            <div className="flex flex-col md:ml-4 mm:ml-8 ">
              <label htmlFor="">Password</label>
              <input className='border-2 border-red p-2 md:w-[14rem] mm:w-[17rem] rounded-[.6rem]' type="password" />
            </div>



          </div>
          
          <div className="flex flex-col md:ml-4 mm:ml-8 mt-5 sm:m-3  ">
              <label htmlFor="">Type text</label>
              <textarea className='border-2 border-red p-2 lg:w-[40rem] mm:w-[35rem] md:w-[27rem] sm:w-[18rem] mm:h-32 rounded-[.6rem] xs:w-[21rem]' placeholder='Type Here' name="" id=""></textarea>
            </div>
          <button className=' bg-red md:p-3 sm:p-2 rounded-xl text-white font-bold hover:bg-gray-700 duration-700 md:m-4 mm:m-8 shadow-3xl md:px-8  sm:px-5 sm:ml-3'>Send Message</button>
        </motion.div>
      </div>
   </motion.div>
   <Footer/>
    </>
  )
}

export default Contact
