import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import Contact from './Components/Contact'
import Electronics from './Components/Electronics'
import Features from './Components/Features'
import Category from './Components/Category'
import Topproducts from './Components/Topproducts'
import Shopproducts from './Components/Shopproducts'
import Newarrival from './Components/Newarrival'
import Footer from './Components/Footer'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

const All = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'Login',
      element:<Login/>

    },
    {
      path:'About',
      element:<About/>

    },
    {
      path:'Contact',
      element:<Contact/>

    }
  ])
  return (
    <>
   <RouterProvider router={router}/>
   
   
    </>
  )
}

export default All