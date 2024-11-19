import React from 'react'
import Navbar from './Navbar'
import headphone from '../assets/headphone.jpeg'
import { FaArrowRight } from 'react-icons/fa'
import Category from './Category'
import Features from './Features'
import Topproducts from './Topproducts'
import Shopproducts from './Shopproducts'
import Newarrival from './Newarrival'
import Footer from './Footer'


import { Fadein} from '../variants'
import { motion  , useScroll ,useSpring  } from "framer-motion"



const Home = () => {
  const { scrollYProgress } = useScroll();


  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  
  return (
    <>


<motion.div className='progress-bar' style={{ scaleX }} />

<div className="">
<Navbar/>
    <motion.div animate={{opacity:1 }}  className=" bg-lightblue -mt-16 md:w-[28rem] opacity-0 py-[20rem] lg:w-[45rem] rounded-e-[12rem] 
     ">
   
    <div className="m-28 absolute">
      <motion.img className='-mt-80 lg:h-[25rem] md:h-[20rem] md:-ml-[6rem] lg:-ml-[0rem] lg:w-[25rem] sm:hidden md:block lg:block'
        variants={Fadein('left' , 0.2)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
      src={headphone} alt="" />
      <div className="lg:ml-[50rem] md:ml-[24rem]  md:-mt-64 lg:-mt-80 sm:-ml-[5rem] sm:-mt-[12rem] ">
      <motion.h1
        variants={Fadein('up' , 0.2)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
      className='text-red mb-2 font-semibold' >In the spotlight</motion.h1>


      <motion.h1
        variants={Fadein('up' , 0.3)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
      className='lg:text-4xl md:text-2xl font-bold mb-2 sm:text-3xl'>Your sound best <br />for your life</motion.h1>


      <motion.h1
      
      variants={Fadein('up' , 0.4)}
      initial = 'hidden'
      whileInView={'show'}
      viewport={ {once : true , amount : 0.7}}
      className='text-gray-500 md:text-nowrap lg:text-wrap sm:text-sm'>These have large ear cups that  <br /> ears, providing good sound isolation <br />and often better sound quality.</motion.h1>


      <motion.button 
        variants={Fadein('up' , 0.2)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
      className='flex bg-red p-3 rounded-xl text-white font-bold lg:mt-28 md:mt-28 sm:mt-20 hover:bg-gray-700 duration-700'>Shop Now <i className='mt-1 ml-4'><FaArrowRight/></i></motion.button>
      </div>

      <div className="bg-red h-5 w-5 mt-48 m-auto rounded-full"></div>
      <div className="bg-rose-400 h-4 w-10 rounded-full -mt-[1.2rem] lg:ml-[35rem] md:ml-[21rem] sm:ml-[5.5rem] "></div> 
    </div>
  </motion.div>

  <div className="h-[1px] w-full bg-black  mt-40 mb-10"></div>


  </div>
 <Features/>
  <Category/>
  <Topproducts/>
  <Shopproducts/>
  <Newarrival/>
  <Footer/> 
    </>
  )
}

export default Home
