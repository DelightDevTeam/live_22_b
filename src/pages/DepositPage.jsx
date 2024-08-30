import React, { useState } from 'react'
import kpay from '../assets/images/kpay.png';
import wave from '../assets/images/wave.png';
import cb from '../assets/images/cb.png';
import aya from '../assets/images/aya.png';
import { Form } from 'react-bootstrap';

const DepositPage = () => {
    const [ selectedBank,setSelectedBank]=useState({img:kpay,value:'kpay',name:'Kpay'});
    const  banks=[
        {img:kpay,value:'kpay',name:'Kpay'},
        {img:wave,value:'wave',name:'Wave'},
        {img:cb,value:'cb',name:'CB'},
        {img:aya,value:'aya',name:'AYA'},
    ]
  return (
    <div className='py-4 px-2 px-sm-4'>
        <h3 className=" mb-4 fw-semibold  text-center">  Deposit </h3>
        <div>
            <h5 className='  mb-3'>Choose Payment Method </h5>
            <div className="d-flex align-items-center gap-2">
                {banks.map((bank,index)=>{
                    return <div className='cursor-pointer' onClick={()=>setSelectedBank(bank)} key={index} >
                        <img src={bank.img}  className={`${selectedBank.value===bank.value ? 'border border-3 border-warning' : '' } rounded-4 bankImg`} />
                        <p className=' text-center'>{bank.name}</p>
                    </div>
                })}
            </div>
            <Form className='my-4'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name*</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone*</Form.Label>
        <Form.Control type="text" placeholder="Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Amount*</Form.Label>
        <Form.Control type="text" placeholder="Amount" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Payment Method*</Form.Label>
       <Form.Select >
        {banks.map((item,index)=>{
          return  <option selected={selectedBank.name===item.name} key={index} value={item.value}>{item.name}</option>
        })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{selectedBank.name} Phone*</Form.Label>
        <Form.Control type="text" placeholder={selectedBank.name+ " Phone"}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Screenshot*</Form.Label>
        <Form.Control type="file"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your note</Form.Label>
        <Form.Control as="textarea" placeholder='Write here...' rows={3} />
      </Form.Group>
      <button className="bg-gradient w-full py-2 rounded-5">
        <h5 className="fw-semibold">Submit</h5>
      </button>
      </Form>
        </div>
    </div>
  )
}

export default DepositPage
