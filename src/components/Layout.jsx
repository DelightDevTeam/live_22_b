import React from 'react'
import {Outlet} from 'react-router-dom'
import Marquee from './Marquee'
import Navbar from './Navbar'
import FixedBottom from './FixedBottom'
import FooterProviders from './FooterProviders'
import { Toaster } from 'react-hot-toast'
const Layout = () => {
  return (
    <div className='site-background'>
       <Toaster />
      <Marquee/>
      <Navbar/>
      <Outlet/>
      <FooterProviders/>
       <FixedBottom/>
     </div>
  )
}

export default Layout
