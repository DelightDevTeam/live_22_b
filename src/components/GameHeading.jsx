import React from 'react'

const GameHeading = ({title}) => {
  return (
    <div className='row mt-sm-4 mb-3'>
      <h4 className="font-bold col-lg-1 text-nowrap gameHeading ">{title}</h4>
      <div className='col-11 pt-sm-3 ps-lg-5'>
        <div className="gameHeadingLine"></div>
      </div>
    </div>
  )
}

export default GameHeading
