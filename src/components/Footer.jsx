import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faXTwitter, faSquareFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
      <div className='md:grid grid-cols-3 bg-gray-900 text-white p-2'>
        <div>
          <h1 className='my-3'>ABOUT US</h1>
          <p className='mb-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos est cum dignissimos, reiciendis voluptates cumque, dicta ipsum velit hic in ratione deserunt doloribus eum enim. Fugit iste expedita dignissimos!</p>
        </div>
        <div className='flex flex-col mx-auto mt-3 md:mt-0'>
          <h1 className='my-3'>NEWSLETTER</h1>
          <p className='mb-2'>Stay updated with our latest trends</p>
          <span><input className='bg-white px-2 py-1' type="text" /><button className='bg-amber-400 text-black px-2 py-1'><FontAwesomeIcon icon={faArrowRight} /></button></span>
        </div>
      
      <div className='flex flex-col mx-auto mt-3 md:mt-0'>
      <h1 className='my-3'>FOLLOW US</h1>
      <p className='mb-2'>Let us be social!</p>
      <div className='text-2xl'>
      <FontAwesomeIcon className='me-2' icon={faInstagram} />
      <FontAwesomeIcon className='me-2' icon={faXTwitter} />
      <FontAwesomeIcon className='me-2' icon={faSquareFacebook} />
      <FontAwesomeIcon className='me-2' icon={faLinkedin} />
      </div>
      </div>
    </div >
    <div className='bg-black text-center p-3'>
      <p className='text-white'>Copyright © 2025 All rights reserved | This website is made with love by Elba Helen George</p>
    </div>
      </>
  )
}

export default Footer