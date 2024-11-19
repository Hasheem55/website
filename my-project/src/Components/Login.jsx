import React from 'react'
import { FaAngleDown, FaApple ,FaArrowRight } from "react-icons/fa";
import accessories from '../assets/accessories.png'
import google from '../assets/google.jpeg'
import Footer from './Footer';
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import { motion } from "framer-motion"
import { Fadein} from '../variants'

const Login = () => {
  return (
    <>
    <motion.div  animate={{opacity:1}}  className="bg-lightblue opacity-0 md:h-[40rem] mm:h-[50rem] lg:h-[60rem] w-full mb-1 sm:h-[38rem]">
      <div className="absolute bg-white md:h-[35rem] md:w-[45rem] md:mt-10 lg:h-[50rem] mm:h-[40rem] lg:w-[80rem] mm:w-[60rem] lg:m-20 mm:m-10 mm:ml-20 md:ml-7 rounded-[3rem] sm:h-[33rem] sm:w-[22rem] sm:mt-6 sm:ml-3 xs:w-[24rem] xs:ml-5">
      <Navbar/>
    <div className="flex lg:-mt-20 ">
       <motion.div
        variants={Fadein('up' , 0.2)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
       className="lg:mt-60 mm:mt-32 flex lg:gap-40 mm:gap-20 lg:ml-20 mm:ml-10 md:ml-5 md:mt-16 md:gap-8 sm:ml-7 sm:mt-9 sm:gap-16 xs:gap-24">
       <h1 className='text-red text-4xl font-bold '>SignIn</h1>
       <h1 className='text-gray-600 text-4xl font-bold'>SignUp</h1>
       </motion.div>


       <motion.div
        variants={Fadein('up' , 0.3)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}} 
       className="flex flex-col gap-5 lg:mt-80 mm:mt-48 lg:-ml-[24.5rem] mm:-ml-[19.5rem] md:mt-32 md:-ml-[16.5rem] lg:w-[24rem] md:w-[17rem]  mm:w-[19rem] sm:mt-24 sm:-ml-[19rem] xs:-ml-[21rem] sm:mr-4">
        <input className='border-2 border-red p-3   rounded-xl text-2xl' placeholder='UserName' type="text" />
        <input className='border-2 border-red p-3 rounded-xl text-2xl' placeholder='Password' type="password" name="" id="" />
        

       <div className="">
       <h1>Forgot Password</h1>
       <button className=' mm:ml-[11.5rem] lg:ml-56 bg-red p-2 -mt-28 shadow-3xl mm:px-7 lg:px-10 text-2xl rounded-xl text-white font-bold hover:bg-gray-700 duration-700 md:ml-40 md:px-7 sm:ml-[12rem] sm:px-8 xs:ml-[14rem]'>Login</button>
       </div>
        <img src={google} alt="" />
       </motion.div>

       <motion.img
        variants={Fadein('left' , 0.2)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
       className='md:block sm:hidden lg:mt-40 absolute lg:ml-[36rem] mm:ml-[25.5rem] lg:h-[35rem] mm:h-[28rem] mm:mt-[5rem] md:h-[20rem] md:mt-[4rem] md:ml-[20rem]' src={accessories} alt="" />
    </div>
      </div>
    </motion.div>
    <Footer/>
    </>
  )
}

export default Login
