import React from 'react'
import iphoneblack from '../assets/iphone black.png'
import iphoneblue from '../assets/iphone blue.png'
import iphonefront from '../assets/iphone front.png'
import pod from '../assets/singlepod.png'
import men from '../assets/men.jpeg'
import watch from '../assets/watch.png'
import { FaArrowRight, FaTag } from 'react-icons/fa'
import iphonelightblue from '../assets/iphone lightblue.png'
import {  FaStar } from 'react-icons/fa'
import { Fadein} from '../variants'
import { motion} from "framer-motion"
const Newarrival = () => {
  return (
    <>
    <motion.h1
    variants={Fadein('left' , 0.2)}
    initial = 'hidden'
    whileInView={'show'}
    viewport={ {once : true , amount : 0.7}}
    className='text-4xl font-bold m-8 sm:text-center md:text-start'>New Arrivals</motion.h1>


    {/* section 1 start-------------------------------- */}

    <div className="grid md:grid-cols-2 md:place-items-center lg:grid-cols-4 sm:place-items-center sm:grid-cols-1 gap-5 m-20">
        <motion.div
        variants={Fadein('up' , 0.2)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className="bg-white h-[21rem] w-[18rem]  rounded-2xl shadow-3xl">
          <img className='m-auto h-[12rem] hover:scale-110 duration-700' src={iphoneblue} alt="" />
         <div className="flex gap-14">
         <h1 className=' ml-5 text-xl'>James smith</h1>
         <i  className='flex mt-1 text-red'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></i>
         </div>

         <h1 className='ml-5 text-gray-600'>Headphones come with <br /> a variety of features</h1>
         <div className="flex gap-28 mt-2">
           <p className='text-2xl font-bold text-red ml-5 mt-2'>49$</p>
           <button className='bg-transparent text-red p-2 border-2 border-red rounded-xl hover:bg-red hover:text-white duration-700'>Add to cart</button>
         </div>
        </motion.div>






        <motion.div
        variants={Fadein('up' , 0.4)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className="bg-white h-[21rem] w-[18rem]  rounded-2xl shadow-3xl">
        <img className='m-auto h-[12rem] hover:scale-110 duration-700' src={iphoneblack} alt="" />
        <div className="flex gap-20">
         <h1 className=' ml-5 text-xl'>John lara</h1>
         <i  className='flex mt-1 text-red'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></i>
         </div>

         <h1 className='ml-5 text-gray-600'>Headphones come with <br /> a variety of features</h1>
         <div className="flex gap-28 mt-2">
           <p className='text-2xl font-bold text-red ml-5 mt-2'>59$</p>
           <button className='bg-transparent text-red p-2 border-2 border-red rounded-xl hover:bg-red hover:text-white duration-700'>Add to cart</button>
         </div>
        </motion.div>





        <motion.div 
        variants={Fadein('up' , 0.6)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className="bg-white h-[21rem] w-[18rem]  rounded-2xl shadow-3xl">
        <img className='m-auto h-[12rem]  hover:scale-110 duration-700' src={iphonefront} alt="" />
        <div className="flex gap-20">
         <h1 className=' ml-5 text-xl'>Miss zara</h1>
         <i  className='flex mt-1 text-red'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></i>
         </div>

         <h1 className='ml-5 text-gray-600'>Headphones come with <br /> a variety of features</h1>
         <div className="flex gap-28 mt-2">
           <p className='text-2xl font-bold text-red ml-5 mt-2'>39$</p>
           <button className='bg-transparent text-red p-2 border-2 border-red rounded-xl hover:bg-red hover:text-white duration-700'>Add to cart</button>
         </div>
        </motion.div>





        <motion.div
        variants={Fadein('up' , 0.8)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className="bg-white h-[21rem] w-[18rem]  rounded-2xl shadow-3xl">
        <img className='m-auto h-[12rem] hover:scale-110 duration-700' src={iphonelightblue} alt="" />
        <div className="flex gap-28">
         <h1 className=' ml-5 text-xl'>Lauren</h1>
         <i  className='flex mt-1 text-red'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></i>
         </div>

         <h1 className='ml-5 text-gray-600'>Headphones come with <br /> a variety of features</h1>
         <div className="flex gap-28 mt-2">
           <p className='text-2xl font-bold text-red ml-5 mt-2'>69$</p>
           <button className='bg-transparent text-red p-2 border-2 border-red rounded-xl hover:bg-red hover:text-white duration-700'>Add to cart</button>
         </div>
        </motion.div>
     </div>

     {/* section 1 ends---------------------------- */}





     {/* section 2 start---------------------------- */}
    <motion.div 
    variants={Fadein('up' , 0.1)}
    initial = 'hidden'
    whileInView={'show'}
    viewport={ {once : true , amount : 0.7}}
    className="grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:m-20 sm:m-5 md:place-items-center gap-10 lg:gap-20">
    <div className="bg-lightblue md:h-[25rem] lg:w-[35rem] md:w-[40rem] sm:w-full sm:h-[15rem] rounded-[2rem] ">
      <div className="flex">
      <img className='md:h-[21rem] md:mt-7 -ml-12 hover:scale-110 duration-700 sm:h-[15rem] ' src={pod} alt="" />
      <div className="flex flex-col md:mt-16 md:-ml-0 lg:-ml-12 sm:-ml-10 sm:mt-5">
        <h1 className='md:text-5xl sm:text-3xl font-bold'>Awesome </h1>
        <h1 className='md:text-5xl sm:text-3xl font-bold md:mb-5 '>Airpods</h1>
        <p className='text-gray-600 text-nowrap'>These have large ear cup<br />encompass the ears <br />good sound</p>
        <button className='flex absolute md:mt-52 sm:mt-40 bg-red p-3 rounded-xl text-white md:font-bold hover:bg-gray-700 duration-700 '>Shop Now <i className='mt-1 ml-4'><FaArrowRight/></i></button>
      </div>
      </div>
    </div>
    <div className="bg-lightblue sm:h-[15rem] md:h-[25rem] md:w-[41rem] rounded-[2rem] ">

    <div className="flex  md:flex-row-reverse">
      <img className='md:h-[25rem] md:mt-2 hover:scale-110 duration-700 sm:h-[15rem] md:-ml-0 sm:-ml-10 ' src={watch} alt="" />
      <div className="flex flex-col md:mt-16 sm:mt-8 sm:-ml-10 md:-ml-0">
        <h1 className='md:text-5xl sm:text-3xl font-bold'>Smart </h1>
        <h1 className='md:text-5xl sm:text-3xl font-bold mb-5'>Watches</h1>
        <button className='flex sm:mt-7 sm:p-2 md:mt-10 bg-red md:p-3 rounded-xl text-white md:font-bold hover:bg-gray-700 duration-700'>Shop Now <i className='mt-1 md:ml-14 sm:ml-5'><FaArrowRight/></i></button>
      </div>
      </div>
    </div>
    </motion.div>

    {/* section 2 ends---------------------------- */}




    {/* section 3 start---------------------------- */}
    <motion.div
    variants={Fadein('up' , 0.2)}
    initial = 'hidden'
    whileInView={'show'}
    viewport={ {once : true , amount : 0.7}}
    className="bg-lightblue md:h-[10rem] sm:h-[5rem] w-full  mb-10 ">
      <h1 className=' lg:text-5xl sm:ml-14 sm:mt-7 sm:text-xl  md:text-[2.50rem] font-bold lg:mt-12 lg:ml-[20rem] md:ml-20 md:mt-16 mm:ml-[10rem] absolute'>10% off when playing debit card</h1>
      <i className='md:text-6xl sm:text-3xl sm:ml-1   lg:ml-[84rem] sm:mt-7 md:mt-14 absolute md:ml-[44rem] mm:ml-[60rem]'><FaTag/></i>
    </motion.div>

    <div className="flex mb-20 ">
      <div className="flex flex-col m-10">
        <motion.h1
        variants={Fadein('left' , 0.2)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className='lg:text-4xl md:text-3xl text-red  font-bold sm:text-2xl'>Comment Level</motion.h1>
        <motion.h1
        variants={Fadein('left' , 0.4)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={ {once : true , amount : 0.7}}
        className='md:text-6xl sm:text-3xl  font-bold '>A new style in your <br />Ear</motion.h1>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10 sm:place-items-center">
          <motion.div
           variants={Fadein('up' , 0.2)}
           initial = 'hidden'
           whileInView={'show'}
           viewport={ {once : true , amount : 0.7}}
          className="bg-lightblue h-[13rem] w-[20rem] rounded-[2rem] shadow-3xl hover:scale-110 duration-700">
            <h1 className='text-[4rem] font-bold text-red text-center mt-5 '>4M+</h1>
            <h1 className='text-5xl text-gray-700 font-bold ml-20'>User’s</h1>
          </motion.div>


          <motion.div
           variants={Fadein('up' , 0.4)}
           initial = 'hidden'
           whileInView={'show'}
           viewport={ {once : true , amount : 0.7}}
          className="bg-lightblue h-[13rem] w-[20rem]  rounded-[2rem] shadow-3xl hover:scale-110 duration-700">
          <h1 className='text-[4rem] font-bold text-red text-center mt-5 '>153k</h1>
          <h1 className='text-5xl text-gray-700 font-bold ml-16'>Purchaser</h1>
          </motion.div>




          <motion.div 
           variants={Fadein('up' , 0.2)}
           initial = 'hidden'
           whileInView={'show'}
           viewport={ {once : true , amount : 0.7}}
          className="bg-lightblue h-[13rem] w-[20rem] rounded-[2rem] shadow-3xl hover:scale-110 duration-700">
          <h1 className='text-[4rem] font-bold text-red text-center mt-5 '>53k</h1>
          <h1 className='text-5xl text-gray-700 font-bold ml-20'>Gallery</h1>
          </motion.div>



          <motion.div
           variants={Fadein('up' , 0.4)}
           initial = 'hidden'
           whileInView={'show'}
           viewport={ {once : true , amount : 0.7}}
          className="bg-lightblue h-[13rem] w-[20rem] rounded-[2rem] shadow-3xl hover:scale-110 duration-700">
          <h1 className='text-[4rem] font-bold text-red text-center mt-5 '>2M+</h1>
          <h1 className='text-5xl text-gray-700 font-bold ml-16'> Feedback</h1>
          </motion.div>
        </div>
      </div>

      <img className='h-[35rem] mt-40 lg:block md:hiddenn sm:hidden' src={men} alt="" />
    </div>
    {/* section 3 ends---------------------------- */}





    </>
  )
}

export default Newarrival
