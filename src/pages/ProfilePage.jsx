import React from 'react'
import user from '../assets/images/user.png'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ProfilePage = () => {
  return (
    <div className='customForm mt-3 mb-5 border-0 p-3 p-sm-4 rounded-4'>
       <div className=" py-2 text-center">
      <img src={user} className='profileImg' />
      </div>
      <h3 className="gradient-text mb-4 fw-bold text-center">My Profile</h3>

      <div className=''>
            <div className="mb-4">
                <p className="customInputTitle mb-1 fw-semibold">User Name</p>
                <input value={'user123'} type="text" className='p-2 rounded-5 w-full customInput' />
            </div>
            <div className="mb-4">
                <p className="customInputTitle  mb-1 fw-semibold">Phone Number</p>
                <input value={'0912345689'} type="text" className='p-2 rounded-5 w-full customInput' />
            </div>
            <button className="mt-2 py-2 text-white bg-gradient w-full rounded-5">
                <h5 className="fw-semibold">Save</h5>
            </button>
            <Link to={'/change-password'}>
            <Button variant="outline-danger" className='mt-3 mb-5 rounded-5 py-2 px-5 w-full text-center'><h5 style={{textWrap:'nowrap'}} className="fw-semibold py-1 mb-0">Change Password</h5></Button>
            </Link>
      </div>
    </div>
  )
}

export default ProfilePage
