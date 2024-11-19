import React, {useState} from 'react'
import { FaAngleDown, FaApple, FaBars, FaTimes , } from "react-icons/fa";
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  const[open , setOpen ] = useState(false);
  const handlemenu= ()=>{
    setOpen((prev)=> !prev);
    console.log(open)
  }
  return (
    <>
    <div className="">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            
          <i className='text-4xl  text-black '><FaApple /></i>
          </div>
          <div className="hidden md:block">
          <div className="ml-10 items-baseline flex space-x-4">
          <NavLink  className={(e)=>{return e.isActive?'red':""}} to="/"><li className='transition-all duration-700 list-none  hover:bg-gray-600  hover:text-white px-3 py-2 rounded-md text-md font-medium'>Home </li></NavLink>


         <NavLink className={(e)=>{return e.isActive?'red':""}} to="/Contact"><li className='transition-all duration-700  list-none  hover:bg-gray-600  hover:text-white px-3 py-2 rounded-md text-md font-medium'>Contacts </li></NavLink>

         <NavLink  className={(e)=>{return e.isActive?'red':""}} to="/About"><li className='transition-all duration-700  list-none  hover:bg-gray-600  hover:text-white px-3 py-2 rounded-md text-md font-medium'>AboutUs</li></NavLink>

         <NavLink  className={(e)=>{return e.isActive?'red':""}} to="/Login"><li className='transition-all duration-700  list-none  hover:bg-gray-600  hover:text-white px-3 py-2 rounded-md text-md font-medium'>Login</li></NavLink>
          </div>
          </div>
          {/* hamburger */}
          <div className="flex md:hidden">
            <button type='button ' onClick={ handlemenu} className='inline-flex items-center justify-center p-2 text-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white '> <span className='sr-only'>Open Main Menu</span>
            {open === true ? <FaTimes/> : <FaBars/>}
            </button>
          </div>
          
        </div>
      </div>

      {/* mobile menu */}
      {open ? (
        <div className='md-hiden'>
          <div className="ox-2 md:pt-2 pb-3  md:space-y-1 sm:px-3 absolute z-50 sm:flex">
          <NavLink  className={(e)=>{return e.isActive?'red':""}} to="/"><li className=' hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Home </li></NavLink>


         <NavLink className={(e)=>{return e.isActive?'red':""}} to="/Contact"><li className=' hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium' >Contacts </li></NavLink>

         <NavLink  className={(e)=>{return e.isActive?'red':""}} to="/About"><li className=' hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>AboutUs</li></NavLink>

        <NavLink  className={(e)=>{return e.isActive?'red':""}} to="/Login"><li className=' hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium' >Login</li></NavLink>
          </div>
        </div>
      ): null}
    </div>


    </>
  )
}

export default Navbar
