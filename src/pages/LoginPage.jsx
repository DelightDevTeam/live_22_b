import React from 'react'
import { Form } from 'react-bootstrap'
import logo from '../assets/images/logo.png'

const LoginPage = () => {
  return (
    <div className="pt-4 pb-5 ">
      <div className='customForm rounded-4 p-4 pb-5 mb-5'>
      <div className="text-center">
      <img src={logo} className='logo' />
      </div>
      <h3 className="gradient-text mb-4 fw-bold text-center">Welcome to M9</h3>
      <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className=' fw-semibold'>Login Name</Form.Label>
        <Form.Control className='rounded-5 p-2' type="text" placeholder="Enter Name" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className=' fw-semibold'>Password</Form.Label>
        <Form.Control className='rounded-5 p-2' type="password" placeholder="Enter Password" />
       </Form.Group>
    </Form>
      <button className="bg-gradient rounded-4 py-2 fw-semibold px-5 w-full text-center">
        <h5 className='m-0  py-1'>Login</h5>
      </button>
    </div>
    </div>
  )
}

export default LoginPage
