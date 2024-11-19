import React from 'react'
import accessories from '../assets/accessories.png'
import women from '../assets/women.jpeg'
import hands from '../assets/hands.jpeg'
import Navbar from './Navbar';
import { motion } from "framer-motion"
import { Fadein} from '../variants'
import quotes from '../assets/top-blockquote.svg'
import {reviews} from './reviews.js'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'

const About = () => {
  return (
    <>
    <motion.div  animate={{opacity:1}}  className="opacity-0">
      <Navbar/>
    {/* section 1 starts */}

    <motion.div
     variants={Fadein('up' , 0.2)}
     initial = 'hidden'
     whileInView={'show'}
     viewport={ {once : true , amount : 0.7}}
    className="bg-lightblue h-[4rem] w-full absolute mt-10">
      <h1 className='md:text-xl sm:text-sm sm:font-semibold text-center mt-4'>Are you university or school for an online partnership?</h1>
    </motion.div>
    {/* section 1 ends */}



    {/* section 2 starts */}
    <div className="flex ">
      <motion.div
       variants={Fadein('left' , 0.4)}
       initial = 'hidden'
       whileInView={'show'}
       viewport={ {once : true , amount : 0.7}}
      className="flex flex-col lg:mt-[20rem] mm:mt-[10rem] lg:ml-20 mm:ml-12 md:gap-5 sm:gap-2  md:mt-[9rem] md:ml-5 sm:mt-[10rem]">
        <h1 className='mm:text-5xl md:text-4xl font-bold sm:text-xl'>Open a Mobile <br />Accessories Store <br />Online</h1>
        <p className='mm:text-3xl md:text-2xl text-gray-800 sm:text-sm'>Best Tips to Start an Online <br />Business</p>
        <button className='absolute shadow-3xl mm:mt-[16rem] md:mt-[14rem] bg-red p-2 px-10 text-2xl rounded-xl text-white hover:bg-gray-700 duration-700 sm:hidden'>Shop Now</button>
        
      </motion.div>
      <motion.img
       variants={Fadein('up' , 0.5)}
       initial = 'hidden'
       whileInView={'show'}
       viewport={ {once : true , amount : 0.7}}
      className='lg:mt-[17rem] lg:ml-[15rem] md:ml-6 mm:ml-0 mt-[8rem] mm:h-[506px] mm:w-[582px] md:h-[350px] md:w-[420px] sm:h-[200px] sm:w-[250px] sm:mt-[10rem]' src={accessories} alt="" />
    </div>
    {/* section 2 ends */}



    {/* section 3 starts */}
    <div className="bg-gray-200 pb-6 mb-20 ">
    <motion.div
     variants={Fadein('up' , 0.2)}
     initial = 'hidden'
     whileInView={'show'}
     viewport={ {once : true , amount : 0.7}}
    className="bg-lightblue md:h-[7rem] sm:h-[5rem] w-full mt-32 mb-20">
      <div className="flex lg:gap-10 sm:gap-8 md:gap-0 xs:gap-10">
        <div className="flex flex-col lg:ml-[10rem] mm:ml-[1rem] md:ml-[4rem] mt-5 xs:ml-4">
          <h1 className='mm:text-5xl md:text-4xl font-bold sm:text-2xl'>870</h1>
          <p className='md:text-xl sm:text-sm'>Shops</p>
        </div>


        <div className="flex flex-col mm:ml-[10rem] md:ml-[5rem]  mt-5">
          <h1 className='mm:text-5xl md:text-4xl font-bold sm:text-2xl'>20,000+</h1>
          <p className='md:text-xl sm:text-sm'>Users</p>
        </div>


        <div className="flex flex-col mm:ml-[10rem] md:ml-[5rem] mt-5">
          <h1 className='mm:text-5xl md:text-4xl  font-bold sm:text-2xl'>260</h1>
          <p className='md:text-xl sm:text-sm'>Subscribes</p>
        </div>



        <div className="flex flex-col mm:ml-[10rem] md:ml-[5rem] mt-5">
          <h1 className='mm:text-5xl md:text-4xl font-bold sm:text-2xl'>73,990</h1>
          <p className='md:text-xl sm:text-sm'>Active</p>
        </div>

        
      </div>
    </motion.div>
    {/* section 3 ends */}




    {/* section 4 starts */}
    <motion.p
     variants={Fadein('up' , 0.2)}
     initial = 'hidden'
     whileInView={'show'}
     viewport={ {once : true , amount : 0.7}}
    className='text-xl text-red text-center mb-7 '>Why choose us</motion.p>


    <motion.h1
    
    variants={Fadein('up' , 0.4)}
    initial = 'hidden'
    whileInView={'show'}
    viewport={ {once : true , amount : 0.7}}
    className='text-5xl font-bold text-center'>Benifits of online buying </motion.h1>


    <motion.h1
     variants={Fadein('up' , 0.5)}
     initial = 'hidden'
     whileInView={'show'}
     viewport={ {once : true , amount : 0.7}}
    className='text-5xl font-bold text-center mb-32'>service with us</motion.h1>

    <div className="grid md:grid-cols-2  lg:grid-cols-4 lg:mx-10 gap-16 mb-28 ">
      <motion.div
       variants={Fadein('up' , 0.2)}
       initial = 'hidden'
       whileInView={'show'}
       viewport={ {once : true , amount : 0.7}}
      className="bg-gray-300 h-[15rem] w-[20rem] rounded-3xl shadow-3xl hover:scale-110 duration-700 m-auto">
        <div className="flex flex-col mt-16 ml-5 gap-3">
          <h1 className='text-2xl font-bold'>Choose teaching</h1>
          <p className='text-gray-700'>simply dummy text of the <br />printing and typesetting <br />industry. Lorem Ipsum has been <br />the industry's</p>
        </div>
      </motion.div>

      <motion.div
       variants={Fadein('up' , 0.4)}
       initial = 'hidden'
       whileInView={'show'}
       viewport={ {once : true , amount : 0.7}}
      className="bg-gray-300 h-[15rem] w-[20rem] rounded-3xl shadow-3xl hover:scale-110 duration-700  m-auto">
        <div className="flex flex-col mt-16 ml-5 gap-3">
          <h1 className='text-2xl font-bold'>24/7 available </h1>
          <p className='text-gray-700'>simply dummy text of the <br />printing and typesetting <br />industry. Lorem Ipsum has been <br />the industry's</p>
        </div>
      </motion.div>


      <motion.div
       variants={Fadein('up' , 0.6)}
       initial = 'hidden'
       whileInView={'show'}
       viewport={ {once : true , amount : 0.7}}
      className="bg-gray-300 h-[15rem] w-[20rem] rounded-3xl shadow-3xl hover:scale-110 duration-700  m-auto">
        <div className="flex flex-col mt-16 ml-5 gap-3">
          <h1 className='text-2xl font-bold'>Whiteboard</h1>
          <p className='text-gray-700'>simply dummy text of the <br />printing and typesetting <br />industry. Lorem Ipsum has been <br />the industry's</p>
        </div>
      </motion.div>


      <motion.div
       variants={Fadein('up' , 0.8)}
       initial = 'hidden'
       whileInView={'show'}
       viewport={ {once : true , amount : 0.7}}
      className="bg-gray-300 h-[15rem] w-[20rem] rounded-3xl shadow-3xl hover:scale-110 duration-700  m-auto">
        <div className="flex flex-col mt-16 ml-5 gap-3">
          <h1 className='text-2xl font-bold'>Afterable price</h1>
          <p className='text-gray-700'>simply dummy text of the <br />printing and typesetting <br />industry. Lorem Ipsum has been <br />the industry's</p>
        </div>
      </motion.div>
    </div>

    <div className="md:flex mm:ml-20 lg:gap-32 mm:gap-10 mb-40 md:ml-3 md:gap-5 sm:block">
      <motion.img 
       variants={Fadein('left' , 0.2)}
       initial = 'hidden'
       whileInView={'show'}
       viewport={ {once : true , amount : 0.7}} className='xs:ml-12 sm:ml-8'
      src={women} alt="" />
     <motion.div
      variants={Fadein('up' , 0.4)}
      initial = 'hidden'
      whileInView={'show'}
      viewport={ {once : true , amount : 0.7}}
     className=" flex-col sm:text-center md:text-left ">
      <h1 className='text-xl text-red mb-5'>Customer your product us</h1>
      <h1 className='mm:text-4xl md:text-2xl font-bold mb-3 sm:text-2xl'>Personilized profeissional <br />online buying on your schedule</h1>
      <p className=' md:text-xs mm:text-sm '>s simply dummy text of the printing and typesetting industry. Lorem Ipsum <br />has been the industry's standard dummy text ever since the 1500s, when <br />an unknown printer took a galley of type and scrambled it to make a type<br/>specimen book.</p>
      <button className='shadow-3xl bg-red p-2 px-10 text-2xl rounded-xl text-white hover:bg-gray-700 duration-700 mt-10'>Get Started</button>
     </motion.div>
    </div>





    <div className="md:flex flex-row-reverse lg:gap-20  mb-20 lg:mr-20 mm:ml-12 md:ml-6 sm:block">
      <motion.img
       variants={Fadein('up' , 0.4)}
       initial = 'hidden'
       whileInView={'show'}
       viewport={ {once : true , amount : 0.7}}  className='xs:ml-4 sm:ml-2'
      src={hands} alt="" />
     <motion.div
      variants={Fadein('up' , 0.2)}
      initial = 'hidden'
      whileInView={'show'}
      viewport={ {once : true , amount : 0.7}}
     className="flex-col lg:mr-56 mm:mr-5 sm:text-center md:text-left ">
      <h1 className='text-xl text-red mb-5 '>Customer your product us</h1>
      <h1 className='mm:text-4xl font-bold mb-3 md:text-2xl'>Personilized profeissional <br />online buying on your schedule</h1>
      <p className='md:text-xs mm:text-sm'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum <br />has been the industry's standard dummy text ever since the 1500s, when <br />an unknown printer took a galley of type and scrambled it to make a type<br/>specimen book.</p>
      <button className=' shadow-3xl bg-red p-2 px-10 text-2xl rounded-xl text-white hover:bg-gray-700 duration-700 mt-10'>Get Started</button>
     </motion.div>
    </div>

    </div>



    


    {/* section 4 ends */}




    {/* section 5 starts */}
    <motion.section
     variants={Fadein('up' , 0.2)}
     initial = 'hidden'
     whileInView={'show'}
     viewport={ {once : true , amount : 0.7}}
    className='testimonial-container '>
      <div className="title ">
        <h1 >Testimonials</h1>
        <p>What Our User Saying ?</p>

      </div>




      <div className="slider-container ">
        <blockquote>
          <img src={quotes} className='quote quote-top' alt="" />
          <img src={quotes} className='quote quote-bottom' alt="" />
        </blockquote>


        <Splide options ={{perPage : 1}}   >
          {reviews.map((review) =>(
            <SplideSlide className='sm:flex-col flex md:flex-row' key={review.id}>
              <img src={review.image} className='review-img' alt="" />

              <div className="content">
                <p className="text">{review.text}</p>


                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </motion.section>
    {/* section 5 ends */}




   






    </motion.div>
    </>
  )
}

export default About
