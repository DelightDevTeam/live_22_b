import React, { useState } from 'react'
import home from '../assets/images/home.png'
import slot from '../assets/images/slot.png'
import fish from '../assets/images/fishing.png'
import casino from '../assets/images/casino.png'
import arcade from '../assets/images/arcade.png'
import sport from '../assets/images/sport.png'
import table from '../assets/images/table.png'
import '../assets/css/games.css'
import GameHeading from './GameHeading'
import { casinoProviders, fishProviders, hotCasino, hotFishing, hotSlots, slotProviders, sports } from '../consts/games'
import { useNavigate, useSearchParams } from 'react-router-dom'

const GameTabs = () => {
    const [selectedTab,setSelectedTab]=useState('all');
    const navigate=useNavigate();
    const [searchParams]=useSearchParams();
    const gameType=searchParams.get('type');
    const gameProvider=searchParams.get('provider');
    const tabs=[
        {img:home,name:'All ',value:'all'},
        {img:slot,name:'Slots',value:'slot'},
        {img:fish,name:'Fishing',value:'fishing'},
        {img:casino,name:'Live Casino',value:'casino'},
        // {img:arcade,name:'Arcade',value:'arcade'},
        {img:sport,name:'Sports',value:'sport'},
        // {img:table,name:'Table',value:'table'},
    ]
  return (
    <div className="px-1 py-2 p-sm-3 p-lg-4 " >
        <div className='d-flex  align-items-start justify-content-start flex-lg-column gap-2' style={{height:'100%'}}>
        <div className="gameTab1 pt-0 mt-0" style={{height:'100%'}}>
            <div style={{height:'100%'}} className='d-flex flex-column flex-lg-row align-items-center justify-content-center   gap-3'>
           {tabs.map((tab,index)=>{
                return <div onClick={()=>{
                    setSelectedTab(tab.value)
                    navigate('/')
                 }} key={index} className={`py-2 gameTab cursor-pointer rounded-3 d-flex flex-column align-items-center justify-content-center  ${tab.value===selectedTab ? 'bgActive':  'bg-gradient'} `}>
                    <img src={tab.img} className='gameTabImg' />
                    <p className="gameText  ">{tab.name}</p>
                </div>
            })}
           </div>
        </div>
        <div className='gameTab2 ps-3 bg-waring'>
        {selectedTab=='all' && <AllTab/> }
            {selectedTab=='slot' && <SlotTab/> }
            {selectedTab=='fishing' && <FishingTab/> }
            {selectedTab=='casino' && <CasinoTab/> }
            {selectedTab=='sport' && <SportTab/> }
        </div>
    </div>
    </div>
  )
}

export default GameTabs

const AllTab=()=>{
    return <>
    <GameHeading title={'Hot Slots'} />
            <div className="row">
            {hotSlots.map((game,index)=>{
                return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-1 px-md-3  mb-2 mb-sm-4 cursor-pointer' >
                    <div className="gameCard p-1 rounded-3">
                    <img src={game.img} className='img-fluid rounded-3' />
                    <img src={game.providerImg} className='  gameProviderImg' />
                    </div>
                </div>
            })}
            </div>
            <GameHeading title={'Hot Fishing'} />
            <div className="row">
            {hotFishing.map((game,index)=>{
                return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-1 px-md-3  mb-2 mb-sm-4 cursor-pointer' >
                    <div className="gameCard p-1 rounded-3">
                    <img src={game.img} className='img-fluid rounded-3' />
                    <img src={game.providerImg} className='  gameProviderImg' />
                    </div>
                </div>
            })}
            </div>
            <GameHeading title={'Hot Live Casino'} />
            <div className="row">
            {hotCasino.map((game,index)=>{
                return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-1 px-md-3  mb-2 mb-sm-4 cursor-pointer' >
                    <div className="gameCard p-1 rounded-3">
                    <img src={game.img} className='img-fluid rounded-3' />
                    <img src={game.providerImg} className='  gameProviderImg' />
                    </div>
                </div>
            })}
            </div>
            <GameHeading title={'Hot Sports'} />
            <div className="row">
            {sports.map((game,index)=>{
                return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-1 px-md-3  mb-2 mb-sm-4 cursor-pointer' >
                    <div className="gameCard p-1 rounded-3">
                    <img src={game.img} className='img-fluid rounded-3' />
                    <img src={game.providerImg} className='  gameProviderImg' />
                    </div>
                </div>
            })}
            </div>
    </>
}

const SlotTab=()=>{
    const [searchParams]=useSearchParams();
    const gameType=searchParams.get('type');
    const gameProvider=searchParams.get('provider');
    const navigate=useNavigate();
    const filteredGames=slotProviders.filter((slots)=>slots.value===gameProvider)[0] 
    console.log('filteredGames',filteredGames)
    return <>
    { !gameType && !gameProvider  && <>
            <div className="row mt-4">
            {slotProviders.map((item,index)=>{
                return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-2 mb-2 mb-sm-4 cursor-pointer  ' >
                    <div onClick={()=>navigate('?type=slot&provider='+item.value)} className=" bg-gradient p-1 rounded-3 d-flex flex-column align-items-center">
                    <img src={item.img} className='mt-2 providerGame rounded-3' />
                    <img src={item.providerImg} className='providerImg' />
                    </div>
                </div>
            })}
            </div>
             <GameHeading title={'Hot Slots'} />
            <div className="row">
            {hotSlots.map((game,index)=>{
                return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-1 px-md-3  mb-2 mb-sm-4 cursor-pointer' >
                    <div className="gameCard p-1 rounded-3">
                    <img src={game.img} className='img-fluid rounded-3' />
                    <img src={game.providerImg} className='  gameProviderImg' />
                    </div>
                </div>
            })}
            </div>
            </>}
    {gameType &&  gameProvider && <>
        <h4 className="text-white fw-bold my-2">{gameType.toUpperCase()} {gameProvider.toUpperCase()} GAMES</h4>
        <div className="row">
         {filteredGames?.games?.map((game,index)=>{
            return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-1 px-md-3  mb-2 mb-sm-4 cursor-pointer' >
                <div className="gameCard p-1 rounded-3">
                <img src={game.img} className='img-fluid rounded-3' />
                <img src={filteredGames.providerImg} className='  gameProviderImg' />
                </div>
            </div>
        })}
        </div>
        </>  }
        </>
}
const FishingTab=()=>{
    const [searchParams]=useSearchParams();
    const gameType=searchParams.get('type');
    const gameProvider=searchParams.get('provider');
    const navigate=useNavigate();
    const filteredGames=fishProviders.filter((games)=>games.value===gameProvider)[0] 
    console.log('filteredGames',filteredGames)
    return <>
    { !gameType && !gameProvider  && <>
            <div className="row mt-4">
            {fishProviders.map((item,index)=>{
                return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-2 mb-2 mb-sm-4 cursor-pointer  ' >
                    <div onClick={()=>navigate('?type=fishing&provider='+item.value)} className=" bg-gradient p-1 rounded-3 d-flex flex-column align-items-center">
                    <img src={item.img} className='mt-2 providerGame rounded-3' />
                    <img src={item.providerImg} className='providerImg' />
                    </div>
                </div>
            })}
            </div>
             <GameHeading title={'Hot Fishing'} />
            <div className="row">
            {hotFishing.map((game,index)=>{
                return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-1 px-md-3  mb-2 mb-sm-4 cursor-pointer' >
                    <div className="gameCard p-1 rounded-3">
                    <img src={game.img} className='img-fluid rounded-3' />
                    <img src={game.providerImg} className='  gameProviderImg' />
                    </div>
                </div>
            })}
            </div>
            </>}
    {gameType &&  gameProvider && <>
        <h4 className="text-white fw-bold my-2">{gameType.toUpperCase()} {gameProvider.toUpperCase()} GAMES</h4>
        <div className="row">
         {filteredGames?.games?.map((game,index)=>{
            return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-1 px-md-3  mb-2 mb-sm-4 cursor-pointer' >
                <div className="gameCard p-1 rounded-3">
                <img src={game.img} className='img-fluid rounded-3' />
                <img src={filteredGames.providerImg} className='  gameProviderImg' />
                </div>
            </div>
        })}
        </div>
        </>  }
        </>
}

const CasinoTab=()=>{
    const [searchParams]=useSearchParams();
    const gameType=searchParams.get('type');
    const gameProvider=searchParams.get('provider');
    const navigate=useNavigate();
    const filteredGames=casinoProviders.filter((games)=>games.value===gameProvider)[0] 
    console.log('filteredGames',filteredGames)
    return <>
    { !gameType && !gameProvider  && <>
            <div className="row mt-4">
            {casinoProviders.map((item,index)=>{
                return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-2 mb-2 mb-sm-4 cursor-pointer  ' >
                    <div onClick={()=>navigate('?type=casino&provider='+item.value)} className=" bg-gradient p-1 rounded-3 d-flex flex-column align-items-center">
                    <img src={item.img} className='mt-2 providerGame rounded-3' />
                    <img src={item.providerImg} className='providerImg' />
                    </div>
                </div>
            })}
            </div>
             <GameHeading title={'Hot Casino'} />
            <div className="row">
            {hotCasino.map((game,index)=>{
                return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-1 px-md-3  mb-2 mb-sm-4 cursor-pointer' >
                    <div className="gameCard p-1 rounded-3">
                    <img src={game.img} className='img-fluid rounded-3' />
                    <img src={game.providerImg} className='  gameProviderImg' />
                    </div>
                </div>
            })}
            </div>
            </>}
    {gameType &&  gameProvider && <>
        <h4 className="text-white fw-bold my-2">{gameType.toUpperCase()} {gameProvider.toUpperCase()} GAMES</h4>
        <div className="row">
         {filteredGames?.games?.map((game,index)=>{
            return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-1 px-md-3  mb-2 mb-sm-4 cursor-pointer' >
                <div className="gameCard p-1 rounded-3">
                <img src={game.img} className='img-fluid rounded-3' />
                <img src={filteredGames.providerImg} className='  gameProviderImg' />
                </div>
            </div>
        })}
        </div>
        </>  }
        </>
}

const SportTab=()=>{
    return  <>
    <h4 className="text-white fw-bold my-2">Sport GAMES</h4>
    <div className="row">
     {sports?.map((game,index)=>{
        return <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 px-1 px-md-3  mb-2 mb-sm-4 cursor-pointer' >
            <div className="gameCard p-1 rounded-3">
            <img src={game.img} className='img-fluid rounded-3' />
            {/* <img src={filteredGames.providerImg} className='  gameProviderImg' /> */}
            </div>
        </div>
    })}
    </div>
    </>
}