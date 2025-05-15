import React from 'react'
import { Link } from 'react-router-dom'

function PagenotFound() {
  return (
    <>
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <div className='md:grid grid-cols-3'>
        <div></div>
        <div className='flex flex-col justify-center items-center p-5 md:p-0'>
        <img src="https://cdn.dribbble.com/userupload/24278108/file/original-78d5a175341b5698c5e82e902ff801a6.gif" alt="page not found" />
      <p>Oh No!</p>
      <h1 className='md:text-4xl text-3xl mt-2 font-bold'>Looks Like You're Lost</h1>
      <h5 className='mt-2'>The page you are looking for is not available</h5>
      <Link to={'/'}><button className='btn bg-blue-800 text-white px-3 py-2 mt-5 rounded hover:border hover:border-blue-800 hover:bg-white hover:text-blue-800'>BACK HOME</button></Link>
        </div>
        <div></div>

      </div>
     
    </div>
    </>
  )
}

export default PagenotFound