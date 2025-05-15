import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <>
            <Header />
            <div className='flex flex-col justify-center items-center md:px-40 px-10 mb-3'>
                <h1 className='font-bold text-2xl my-5'>Contact</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quod tempore incidunt inventore voluptatem aspernatur unde, quibusdam, qui dolor a nulla debitis, voluptas quas! Quisquam veritatis ullam officia ratione earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat animi velit, rerum eaque vero beatae. Reiciendis expedita, nam totam, voluptatum pariatur nemo et vel eius consequatur nostrum omnis exercitationem?</p>
            </div>
            <div className='md:grid grid-cols-3'>
                <div className='flex justify-center items-center my-5'>
                    <div className='bg-gray-200 rounded-full' style={{height:"50px",width:"50px"}}>
                        <FontAwesomeIcon icon={faLocationDot} className='p-3 text-2xl text-center ms-1' />
                    </div>
                    <div className='ms-2'>
                        <p>123 Main Street, Apt 4B,</p>
                        <p>AnyTown, CA, 91234</p>
                    </div>
                </div>
                <div className='flex justify-center items-center my-5'>
                <div className='bg-gray-200 rounded-full' style={{height:"50px",width:"50px"}}>
                        <FontAwesomeIcon icon={faLocationDot} className='p-3 text-2xl text-center ms-1' />
                    </div>
                    <div className='ms-2'>
                        <p>123 Main Street, Apt 4B,</p>
                        <p>AnyTown, CA, 91234</p>
                    </div>
                </div>
                <div className='flex justify-center items-center my-5'>
                <div className='bg-gray-200 rounded-full' style={{height:"50px",width:"50px"}}>
                        <FontAwesomeIcon icon={faLocationDot} className='p-3 text-2xl text-center ms-1' />
                    </div>
                    <div className='ms-2'>
                        <p>123 Main Street, Apt 4B,</p>
                        <p>AnyTown, CA, 91234</p>
                    </div>
                </div>
            </div>
            <div className='md:grid grid-cols-2 p-10'>
                <div>
                    <form action="" className='bg-gray-300 md:mx-10 mx-5 rounded flex flex-col justify-center items-center'>
                        <h1 className='text-center text-2xl font-bold my-5'>Send me a message</h1>
                        <div>
                            <input type="text" placeholder='Name' className='bg-white placeholder-gray-600 w-96 mb-3 rounded p-2' />
                        </div>
                        <div>
                            <input type="text" placeholder='Email id' className='bg-white placeholder-gray-600 w-96 mb-3 rounded p-2' />
                        </div>
                        <div>
                            <textarea rows="6" type="text" placeholder='Message' className='bg-white placeholder-gray-600 w-96 mb-5 rounded p-2' />
                        </div>
                        <div>
                            <button className='bg-gray-800 text-white w-96 mb-5 rounded p-2'>Send <FontAwesomeIcon icon={faPaperPlane} /></button>
                        </div>

                    
                    </form>
                </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.992744212417!2d76.34582577348722!3d10.017007493175788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab!5e0!3m2!1sen!2sin!4v1745477561180!5m2!1sen!2sin" width="600" height="450" className='w-full ' style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact