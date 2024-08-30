import React from 'react'
import  p1 from '../assets/images/p1.png'
import  p2 from '../assets/images/p2.png'
import  p3 from '../assets/images/p3.png'
import  p4 from '../assets/images/p4.png'
import  p5 from '../assets/images/p5.png'
import  p6 from '../assets/images/p6.png'
import  p8 from '../assets/images/p8.png'
import  p9 from '../assets/images/p9.png'
import  p10 from '../assets/images/p10.png'
import  p11 from '../assets/images/p11.png'
import  p12 from '../assets/images/p12.png'
import  p13 from '../assets/images/p13.png'
import  p14 from '../assets/images/p14.png'
import  p15 from '../assets/images/p15.png'
import  p16 from '../assets/images/p16.png'
import  p18 from '../assets/images/p18.png'
import  p19 from '../assets/images/p19.png'
import  p20 from '../assets/images/p20.png'
import  p21 from '../assets/images/p21.png'
import  p22 from '../assets/images/p22.png'
import  p23 from '../assets/images/p23.png'

import Marquee from 'react-fast-marquee'
 
const FooterProviders = () => {
     const providers=[p1,p2,p3,p4,p5,p6,p8,p9,p10,p11,p12,p13,p14,p15,p16,p18,p19,p20,p21,p22,p23]
    return (
    <div style={{background:'#0D0D0D'}} className='py-5' >
       <small className='d-block text-center'>Best viewed by Google Chrome 72.0 or higher. Best viewed at a resolution of 1280x1024 or higher</small>
       <small className="d-block text-center my-4">m9 Asia Copyright © 2019 . All rights reserved.</small>
      <div className='mt-3 d-flex flex-wrap align-items-center justify-content-center gap-3 px-2 px-sm-4  mb-5 mb-sm-0'>
         {providers.map((img,index)=>{
            return <img src={img} className='providerImg ' key={index} />
        })}
        </div>
    </div>
  )
}

export default FooterProviders
