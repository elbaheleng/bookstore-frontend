import React from 'react'
import Footer from '../../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import SidebarAdmin from '../components/SidebarAdmin'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function AdminSettings() {
  return (
    <>
      <HeaderAdmin />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div className='bg-blue-100 flex flex-col items-center p-5'>
          <SidebarAdmin />
        </div>
        <div>
          <h1 className='text-3xl font-bold text-center my-5'>Settings</h1>
          <div className='md:grid grid-cols-2'>
            <div className='p-5'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum assumenda reiciendis quaerat ad cupiditate dolorum in sapiente, libero architecto beatae natus eligendi magnam blanditiis reprehenderit odio ipsa mollitia autem.</p>
              <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam amet cupiditate quis blanditiis qui deleniti magni repudiandae quaerat, dolorum ducimus, voluptate reiciendis provident enim corrupti eos ad consequuntur tenetur! Dolores.</p>
            </div>
            <div>
              <div className='bg-blue-200 rounded mx-10 mb-5'>
                <div className='flex justify-center items-center flex-col'>
                  <label htmlFor="profilefile" className='my-5'>
                    <input id='profilefile' type="file" style={{ display: 'none' }} />
                    <img className='z-52' src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no image" style={{ width: '100px', height: '100px' }} />
                    <div className='bg-yellow-300 text-white relative z-53 rounded px-2 py-1' style={{ marginLeft: '80px', marginTop: '-30px' }}><FontAwesomeIcon icon={faPenToSquare} /></div>
                  </label>

                  <div className="mb-3 w-full px-5">
                    <input type="text" placeholder='Username' className='w-full border bg-white border-gray-300 placeholder-gray-400 p-2 rounded' />
                  </div>
                  <div className="mb-3 w-full px-5">
                    <input type="text" placeholder='Password' className='w-full border  bg-white border-gray-300 placeholder-gray-300 p-2 rounded' />
                  </div>
                  <div className="mb-3 w-full px-5">
                    <input type="text" placeholder='Confirm Password' className='w-full border  bg-white border-gray-300 placeholder-gray-300 p-2 rounded' />
                  </div>
                  <div className="mb-3 mt-5 w-full px-5 flex">
                  <button className='bg-amber-600 text-black w-1/2 rounded px-3 py-2 hover:border hover:border-amber-600 hover:bg-white hover:text-amber-700'>Reset</button>
                    <button className='bg-green-600 text-white rounded w-1/2 px-3 py-2 hover:border hover:border-green-600 hover:bg-white hover:text-green-700 ms-4'>Update</button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminSettings