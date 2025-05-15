import React from 'react'
import Footer from '../../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import SidebarAdmin from '../components/SidebarAdmin'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie'

function AdminHome() {
  return (
    <>
      <HeaderAdmin />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div className='bg-blue-100 flex flex-col items-center p-5'>
          <SidebarAdmin />
        </div>
        <div className='p-10'>
          <div className='md:grid grid-cols-3'>
            <div className=' px-5'>
              <div className='bg-blue-900 p-3 flex justify-evenly text-white rounded mb-3'>
                <FontAwesomeIcon icon={faBook} className='fa-3x' />
                <div className='text-center px-3'>
                  <h1 className='text-md'>Total Number of Books</h1>
                  <h1 className='text-3xl'>100+</h1>
                </div>
              </div>
            </div>
            <div className=' px-5'>
              <div className='bg-green-900 p-3 flex justify-evenly text-white rounded mb-3'>
                <FontAwesomeIcon icon={faUsers} className='fa-3x' />
                <div className='text-center px-3'>
                  <h1 className='text-md'>Total Number of Users</h1>
                  <h1 className='text-3xl'>100+</h1>
                </div>
              </div>
            </div>
            <div className=' px-5'>
              <div className='bg-amber-900 p-3 flex justify-evenly text-white rounded mb-3'>
                <FontAwesomeIcon icon={faUserTie} className='fa-3x' />
                <div className='text-center px-3'>
                  <h1 className='text-md'>Total Number of Employees</h1>
                  <h1 className='text-3xl'>100+</h1>
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

export default AdminHome