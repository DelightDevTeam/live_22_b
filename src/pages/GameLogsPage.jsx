import React, { useState } from 'react'
import { Table } from 'react-bootstrap';

const GameLogsPage = () => {
    const [duration,setDuration]=useState('today');
    const times=[
        {name:'Today',value:'today'},
        {name:'Yesterday',value:'yesterday'},
        {name:'This Week',value:'thisWeek'},
        {name:'Last Week',value:'lastWeek'},
    ]
  return (
    <div className='p-2 py-4 px-sm-4 px-lg-5 mb-5' style={{height:'60vh'}}>
        <h2 className=" mb-4 fw-bold text-center">  Game Logs   </h2>
        <div className="d-flex align-items-center  flex-wrap gap-2 gap-sm-3">
            {times.map((time,index)=>{
                return <div className={`me-1 me-sm-0 cursor-pointer pb-2 ${duration===time.value ? 'tableActive' : ''} `} onClick={()=>setDuration(time.value)} key={index}>
                    <p className="duration fw-semibold text-nowrap">{time.name}</p>
                </div>
            })}
        </div>
        <Table className='mt-4 tableText'   bordered hover>
      <thead> 
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Game</th>
          <th>Win/Lose</th>
        </tr>
      </thead>
      <tbody>
        <tr className='bg-white'>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  )
}

export default GameLogsPage
