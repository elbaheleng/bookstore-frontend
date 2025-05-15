import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'



function HeaderAdmin() {
  return (
    <>
      <div className='flex justify-between md:px-20 px-5 my-2'>
        <div className='flex justify-center items-center'>
          <img src="https://cdn-icons-png.flaticon.com/512/8983/8983117.png" alt="logo" width={'50px'} />
          <h1 className='text-2xl font-bold ms-2'>BOOKSTORE</h1>
        </div>
        <div className='px-4 py-3 border border-black rounded hover:bg-black hover:text-white'>
          <button ><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>
        </div>
      </div>
      <marquee behavior="" className='mb-0 p-3 bg-gray-900 text-white' direction="left">
        <p>Welcome, Admin! You are all set to manage and monitor the system.</p>
      </marquee>
    </>
  )
}

export default HeaderAdmin