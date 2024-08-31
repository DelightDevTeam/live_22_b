import React, { useState } from 'react'
import slot from '../assets/images/slot.png'
import g1 from '../assets/images/g1.png'
import g2 from '../assets/images/g2.png'
import g3 from '../assets/images/g3.png'
import g4 from '../assets/images/g4.png'
import g5 from '../assets/images/g5.png'
import g6 from '../assets/images/g6.png'
import g7 from '../assets/images/g7.png'
import g8 from '../assets/images/g8.png'
import g9 from '../assets/images/g9.png'
import g10 from '../assets/images/g10.png'
import g11 from '../assets/images/g11.png'
import g12 from '../assets/images/g12.png'
import g13 from '../assets/images/g13.png'
import g14 from '../assets/images/g14.png'
import g15 from '../assets/images/g15.png'
import g16 from '../assets/images/g16.png'
import g17 from '../assets/images/g17.png'
import g18 from '../assets/images/g18.png'
import g19 from '../assets/images/g19.png'
import g20 from '../assets/images/g20.png'
import g21 from '../assets/images/g21.png'
import g22 from '../assets/images/g22.png'
import g23 from '../assets/images/g23.png'
import g24 from '../assets/images/g24.png'
import g25 from '../assets/images/g25.png'
import g26 from '../assets/images/g26.png'
import g27 from '../assets/images/g27.png'
import g28 from '../assets/images/g28.png'
import g29 from '../assets/images/g29.png'
import g30 from '../assets/images/g30.png'
import g31 from '../assets/images/g31.png'
import g32 from '../assets/images/g32.png'
import g33 from '../assets/images/g33.png'
import g34 from '../assets/images/g34.png'
import g35 from '../assets/images/g35.png'
import g36 from '../assets/images/g36.png'
import g37 from '../assets/images/g37.png'
import g38 from '../assets/images/g38.png'
import '../assets/css/games.css'
import GameHeading from './GameHeading'
import { casinoProviders, fishProviders, hotCasino, hotFishing, hotSlots, slotProviders, sports } from '../consts/games'
import { useNavigate, useSearchParams } from 'react-router-dom'

const GameTabs = () => {
    const [selectedTab,setSelectedTab]=useState('slot');
    const navigate=useNavigate();
  
    const tabs=[
         {img:slot,name:'Live22 Slots',value:'slot'},
        
    ]
  return (
    <div className="px-1 py-2 p-sm-3 p-lg-4 " >
        <div className='d-flex  align-items-start justify-content-start 
        flex-column gap-2' style={{height:'100%'}}>
        <div className="gameTab1 pt-0 mt-0" style={{height:'100%'}}>
            <div style={{height:'100%'}} className='d-flex flex-column flex-lg-row align-items-center justify-content-center   gap-3'>
           {tabs.map((tab,index)=>{
                return <div onClick={()=>{
                    setSelectedTab(tab.value)
                    navigate('/')
                 }} key={index} className={`py-2 px-3 px-sm-4 gameTab cursor-pointer rounded-3 d-flex flex-column align-items-center justify-content-center  ${tab.value===selectedTab ? 'bgActive':  'bg-gradient'} `}>
                    <img src={tab.img} className='gameTabImg' />
                    <p className="gameText  ">{tab.name}</p>
                </div>
            })}
           </div>
        </div>
        <div className='px-2'>
             {selectedTab=='slot' && <SlotTab/> }
          
        </div>
    </div>
    </div>
  )
}

export default GameTabs
 

const SlotTab=()=>{
   const games=[
    {img:g1,name:'Fortune Dance'}, 
    {img:g2,name:"Queen Femida"}, 
    {img:g3,name:"Axie Universe"}, 
    {img:g4,name:'Snowie'}, 
    {img:g5,name:'Nixie'}, 
    {img:g6,name:'Kraken Queen'}, 
    {img:g7,name:'The Great Sorcery'},
    {img:g8,name:'Dragon FAFAFA'}, {img:g9,name:'Ashley'},
      {img:g10,name:'Fiery Lady'},
    {img:g11,name:'Panda Realm'}, {img:g12,name:'Dragon Wish'}, 
    {img:g13,name:'Candy Bomb'}, {img:g14,name:'Princess and Evil Witch'},
     {img:g15,name:'Crypto Coin'}, {img:g16,name:'Dragon Treasure'},
      {img:g17,name:'Mask of Truth'}, {img:g18,name:'Apes Squad'}, {img:g19,name:'Mobox Olympia'}, {img:g20,name:'Meta Space'},
    {img:g21,name:'Classic Diamond'}, 
    {img:g22,name:'Oni Cosmics'}, {img:g23,name:'llluvium Master'}, {img:g24,name:'Fortune Realm'}, {img:g25,name:'BlackPink'}, {img:g26,name:'Mahjong Style'}, {img:g27,name:'Jarvis'}, {img:g28,name:'Block Buster'},
     {img:g29,name:'Sanctum of Savanah'}, {img:g30,name:'Bloodmoon'},
    {img:g31,name:'Santa Payday'}, {img:g32,name:'Advent of Dragon'}, {img:g33,name:'Kingdom of Luck'}, {img:g34,name:'God Gambit'}, {img:g35,name:'Goal Rush'}, {img:g36,name:'Shipwrecked'}, {img:g37,name:'God Gambit'}, {img:g38,name:'Quantum of Giza'}
  ]
  const navigate=useNavigate();
  const onGameClick=()=>{
    navigate('/games')
  }
    return <>
          {/* <h4 className="text-white fw-bold my-2">SLOT GAMES</h4> */}
        <div className="row mt-4">
         {games?.map((game,index)=>{
            return <div onClick={onGameClick} key={index} className='col-4 col-md-3 col-lg-2 px-1 px-md-3   mb-sm-4 cursor-pointer' >
                <div className=" p-1 rounded-3">
                <img src={game.img} className='img-fluid gameImg rounded-3' />
                <p className='gameName'>{game.name}</p>
                 </div>
            </div>
        })}
        </div>
         </>
}
