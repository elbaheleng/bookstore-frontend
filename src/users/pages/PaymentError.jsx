import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward} from '@fortawesome/free-solid-svg-icons'

function PaymentError() {
  return (
    <>
     <Header/>
        <div className='container my-10'>
            <div className='md:grid grid-cols-2 px-20 '>
                <div className='flex justify-center items-start flex-col'>
                    <h1 className='text-4xl text-red-600'>Sorry! Your Payment is unsuccessfull.</h1>
                    <p className='text-2xl my-2'>We apologize for the inconvenience caused and appreciate your vist to Bookstore again.</p>
                    <Link to={'/all-Books'}><button className='bg-blue-800 text-white px-5 py-2 border border-blue-800 hover:bg-white hover:text-blue-800 p-3 rounded  mt-5 mb-3'>Explore More Books <FontAwesomeIcon icon={faBackward} /></button></Link>
                </div>
                <div className='flex justify-center items-center md:m-20 m-5'>
                    <img src="https://assets-v2.lottiefiles.com/a/49e16c26-3b66-11ef-80a5-0bef9e517567/93M2IqVm7P.gif" alt="no image" />
                </div>
            </div>
        </div>
        <Footer/></>
  )
}

export default PaymentError