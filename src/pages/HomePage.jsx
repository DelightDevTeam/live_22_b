import React from 'react'
import '../../src/index.css'
import '../assets/css/home.css'
import Banners from '../components/Banners'
import GameTabs from '../components/GameTabs'

const HomePage = () => {
  return (
    <div className='pt-4 px-2 px-sm-3 mb-5 pb-5'  >
      <Banners/>
      <GameTabs/>
    </div>
  )
}

export default HomePage
