import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward} from '@fortawesome/free-solid-svg-icons'



function PaymentSuccess() {
  return (
    <>
    <Header/>
        <div className='container my-10'>
            <div className='md:grid grid-cols-2 px-20 '>
                <div className='flex justify-center items-start flex-col'>
                    <h1 className='text-4xl text-blue-600'>Congratulations!</h1>
                    <p className='text-2xl my-2'>Thankyou for shopping with Bookstore. Hope you had a good time with us.</p>
                    <Link to={'/all-Books'}><button className='bg-blue-800 text-white px-5 py-2 border border-blue-800 hover:bg-white hover:text-blue-800 p-3 rounded  mt-5 mb-3'>Explore More Books <FontAwesomeIcon icon={faBackward} /></button></Link>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif" alt="no image" />
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default PaymentSuccess