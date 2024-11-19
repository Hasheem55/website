import React from 'react'
import headphone from '../assets/headphone.jpeg'
import airpods from '../assets/airpods.png'
import lcd from '../assets/lcd.png'
import laptop from '../assets/laptop.png'
import stand from '../assets/holder.png'
import adapter from '../assets/adapter.png'
import camera from '../assets/camera.png'
import tab from '../assets/tab.png'
import { FaHeart } from 'react-icons/fa'
import { Fadein} from '../variants'
import { motion} from "framer-motion"

const Topproducts = () => {
  return (
    <>
      <motion.h1
      variants={Fadein('up' , 0.2)}
      initial = 'hidden'
      whileInView={'show'}
      viewport={ {once : true , amount : 0.7}}
      
      className='md:text-4xl sm:text-3xl font-bold text-center m-10'>Top Rated Products</motion.h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 sm:place-items-center lg:m-10 md:m-16  gap-5">
        <motion.div
        variants={Fadein('up' , 0.2)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className="bg-white shadow-3xl h-[23rem] w-[20rem] rounded-2xl">
          <div className="flex absolute gap-48 m-5">
          <h1 className='' >Top rated</h1>
          <i><FaHeart/></i>
          </div>
         <img className='mt-14 w-[18rem] m-auto hover:scale-110 duration-700' src={lcd} alt="" />
        <h1 className='ml-14 text-xl'>LED 4k smart TV expo</h1>
        <h1 className='ml-14 text-xl' >White/Gray/Black</h1>
        <p className=' ml-14 text-red text-2xl font-bold mt-2'>$499</p>
        </motion.div>


        <motion.div
        variants={Fadein('up' , 0.4)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className="bg-white shadow-3xl h-[23rem] w-[20rem] rounded-2xl">
        <div className="flex absolute gap-48 m-5">
          <h1 className='' >Top rated</h1>
          <i><FaHeart/></i>
          </div>
         <img className='mt-5 m-auto hover:scale-110 duration-700' src={airpods} alt="" />
        <h1 className='ml-14 text-xl'>GM-2345 clossed back </h1>
        <h1 className='ml-14 text-xl' >wireless Airpods</h1>
        <p className=' ml-14 text-red text-2xl font-bold mt-2'>$199</p>
        </motion.div>



        <motion.div
        variants={Fadein('up' , 0.6)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className="bg-white shadow-3xl h-[23rem] w-[20rem] rounded-2xl">
        <div className="flex absolute gap-48 m-5">
          <h1 className='' >Top rated</h1>
          <i><FaHeart/></i>
          </div>
         <img className='mt-5 h-[15rem] m-auto hover:scale-110 duration-700' src={headphone} alt="" />
        <h1 className='ml-14 text-xl'>GM-2345 clossed back</h1>
        <h1 className='ml-14 text-xl' >wireless Headphones</h1>
        <p className=' ml-14 text-red text-2xl font-bold mt-2'>$299</p>
        </motion.div>



        <motion.div
        variants={Fadein('up' , 0.8)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className="bg-white shadow-3xl h-[23rem] w-[20rem] rounded-2xl">
        <div className="flex absolute gap-48 m-5">
          <h1 className='' >Top rated</h1>
          <i><FaHeart/></i>
          </div>
         <img className='mt-14 w-[18rem] m-auto hover:scale-110 duration-700' src={laptop} alt="" />
        <h1 className='ml-14 text-xl'>Laptop 4k smart TV expo</h1>
        <h1 className='ml-14 text-xl' >White/Gray/Black</h1>
        <p className=' ml-14 text-red text-2xl font-bold mt-2'>$799</p>
        </motion.div>



        <motion.div
        variants={Fadein('up' , 0.2)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className="bg-white shadow-3xl h-[23rem] w-[20rem] rounded-2xl">
        <div className="flex absolute gap-48 m-5">
          <h1 className='' >Top rated</h1>
          <i><FaHeart/></i>
          </div>
         <img className='mt-14 h-[12rem] m-auto hover:scale-110 duration-700' src={stand} alt="" />
        <h1 className='ml-14 text-xl'>Mobile phone accessories</h1>
        <p className=' ml-14 text-red text-2xl font-bold mt-6'>$99</p>
        </motion.div>



        <motion.div
        variants={Fadein('up' , 0.4)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className="bg-white shadow-3xl h-[23rem] w-[20rem] rounded-2xl">
        <div className="flex absolute gap-48 m-5">
          <h1 className='' >Top rated</h1>
          <i><FaHeart/></i>
          </div>
         <img className='mt-14 m-auto hover:scale-110 duration-700' src={adapter} alt="" />
        <h1 className='ml-14 text-xl'>Accessories for mobile </h1>
        <h1 className='ml-14 text-xl' >phone used USB</h1>
        <p className=' ml-14 text-red text-2xl font-bold mt-2'>$199</p>
        </motion.div>



        <motion.div
        variants={Fadein('up' , 0.8)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className="bg-white shadow-3xl h-[23rem] w-[20rem] rounded-2xl">
        <div className="flex absolute gap-48 m-5">
          <h1 className='' >Top rated</h1>
          <i><FaHeart/></i>
          </div>
         <img className='mt-14 w-[15rem] m-auto hover:scale-110 duration-700' src={camera} alt="" />
        <h1 className='ml-14 text-xl'>GM-2345 clossed back </h1>
        <h1 className='ml-14 text-xl' >Camera</h1>
        <p className=' ml-14 text-red text-2xl font-bold mt-2'>$299</p>
        </motion.div>



        <motion.div
        variants={Fadein('up' , 1)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className="bg-white shadow-3xl h-[23rem] w-[20rem] rounded-2xl">
        <div className="flex absolute gap-48 m-5">
          <h1 className='' >Top rated</h1>
          <i><FaHeart/></i>
          </div>
         <img className='mt-14 h-[12rem]  m-auto hover:scale-110 duration-700' src={tab} alt="" />
        <h1 className='ml-14 text-xl'>Tablet 4k smart expo</h1>
        <h1 className='ml-14 text-xl' >White/Gray/Black</h1>
        <p className=' ml-14 text-red text-2xl font-bold mt-2'>$399</p>
        </motion.div>
      </div>
    </>
  )
}

export default Topproducts
