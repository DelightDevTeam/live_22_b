import React from 'react'
 const ChangePasswordPage = () => {
  return (
    <div className='customForm mt-4 mb-5 border-0 p-2 p-sm-4 rounded-4'>
       
      <h3 className="gradient-text my-4 fw-bold text-center">Change Password</h3>

      <div className=''>
            <div className="mb-4">
                <p className="  mb-1 fw-semibold">Old Password</p>
                <input  type="password" className='p-2 rounded-5 w-full  ' />
            </div>
            <div className="mb-4">
                <p className="  mb-1 fw-semibold">New Password</p>
                <input  type="password" className='p-2 rounded-5 w-full  ' />
            </div>
            <div className="mb-4">
                <p className="  mb-1 fw-semibold">Confirm Password</p>
                <input  type="password" className='p-2 rounded-5 w-full  ' />
            </div>
            <button className="mt-2 py-2 text-white bg-gradient w-full rounded-5">
                <h5 className="fw-semibold">Save</h5>
            </button>
            
      </div>
    </div>
  )
}

export default ChangePasswordPage
