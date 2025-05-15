import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import{ FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function AllBooks() {
    const [status, setStatus] = useState(false)
  return (
    <>
    <Header/>
    {/* when the user is logged in */}
    <div>
        <h1 className='text-center text-2xl font-bold mt-5'>Collections</h1>
        <div className='flex justify-center items-center m-5'>
            <input placeholder='Search by Title' className='border border-gray-400 px-5 py-2 w-96 placeholder-gray-400' type="text" />
            <button className='bg-blue-800 text-white px-5 py-2 border border-blue-800 hover:bg-white hover:text-blue-800'>Search</button>
        </div>
        <div className='md:grid grid-cols-[1fr_4fr] md:py-10 md:px-20 p-5'>
            <div>
                <div className='flex justify-between'>
                    <h3 className='mb-3 text-2xl'>Filters</h3>
                    <span  className='md:hidden' onClick={()=>setStatus(!status)}><FontAwesomeIcon icon={faBars} /></span>
                </div>
               <div className={status ? 'md:block' : 'md:block  justify-center hidden'}>
                    <div className='mb-2'>
                        <input type="radio" id='Literary' name='filter'/>
                        <label htmlFor="Literary" className='ms-3'>Literary Fiction</label>
                    </div>
                    <div className='mb-2'>
                        <input type="radio" id='Philosophy' name='filter'/>
                        <label htmlFor="Philosophy" className='ms-3'>Philosophy</label>
                    </div>
                    <div className='mb-2'>
                        <input type="radio" id='Romance' name='filter'/>
                        <label htmlFor="Romance" className='ms-3'>Romance</label>
                    </div>
                    <div className='mb-2'>
                        <input type="radio" id='Mystery' name='filter'/>
                        <label htmlFor="Mystery" className='ms-3'>Mystery/Thriller</label>
                    </div>
                    <div className='mb-2'>
                        <input type="radio" id='Horror' name='filter'/>
                        <label htmlFor="Horror" className='ms-3'>Horror</label>
                    </div>
                    <div className='mb-2'>
                        <input type="radio" id='Biography' name='filter'/>
                        <label htmlFor="Biography" className='ms-3'>Auto/Biography</label>
                    </div>
                    <div className='mb-2'>
                        <input type="radio" id='Self-Help' name='filter'/>
                        <label htmlFor="Self-Help" className='ms-3'>Self-Help</label>
                    </div>
                    <div className='mb-2'>
                        <input type="radio" id='Politics' name='filter'/>
                        <label htmlFor="Politics" className='ms-3'>Politics</label>
                    </div>
               </div>
            </div>
            <div>
    
            <div className='md:grid grid-cols-4 w-full gap-10'>
                <div className='p-3 shadow-md'>
                  <img src="https://m.media-amazon.com/images/I/71y4X5150dL.jpg" alt="book image" style={{ width: '100%', height: "250px" }} />
                  <div className='flex justify-center items-center mt-3 flex-col'>
                    <p className='text-blue-700'>Dan Brown</p>
                    <h3>The Da Vinci Code</h3>
                    <button className=' w-full  mt-3 bg-blue-900 text-white px-3 py-2 hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Buy - $18</button>
                  </div>
                </div>
                <div className='p-3 shadow-md'>
                  <img src="https://m.media-amazon.com/images/I/71y4X5150dL.jpg" alt="book image" style={{ width: '100%', height: "250px" }} />
                  <div className='flex justify-center items-center mt-3 flex-col'>
                    <p className='text-blue-700'>Dan Brown</p>
                    <h3>The Da Vinci Code</h3>
                    <button className=' w-full  mt-3 bg-blue-900 text-white px-3 py-2 hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Buy - $18</button>
                  </div>
                </div>
                <div className='p-3 shadow-md'>
                  <img src="https://m.media-amazon.com/images/I/71y4X5150dL.jpg" alt="book image" style={{ width: '100%', height: "250px" }} />
                  <div className='flex justify-center items-center mt-3 flex-col'>
                    <p className='text-blue-700'>Dan Brown</p>
                    <h3>The Da Vinci Code</h3>
                    <button className=' w-full  mt-3 bg-blue-900 text-white px-3 py-2 hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Buy - $18</button>
                  </div>
                </div>
                <div className='p-3 shadow-md'>
                  <img src="https://m.media-amazon.com/images/I/71y4X5150dL.jpg" alt="book image" style={{ width: '100%', height: "250px" }} />
                  <div className='flex justify-center items-center mt-3 flex-col'>
                    <p className='text-blue-700'>Dan Brown</p>
                    <h3>The Da Vinci Code</h3>
                    <button className=' w-full  mt-3 bg-blue-900 text-white px-3 py-2 hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Buy - $18</button>
                  </div>
                </div>
              </div>
    
    
    
            </div>
    
        </div>
    </div>
    {/* not logged in */}
    <div className='md:grid grid-cols-3 mb-5'>
        <div></div>
        <div className='flex justify-center items-center flex-col w-full'>
            <img src="https://assets-v2.lottiefiles.com/a/790b2fc0-1171-11ee-afd8-87913996c05d/D74t1SWF5f.gif"  alt="locked" />
            <p className='text-3xl'>Please <Link to={'/login'} className='text-blue-900 underline'>Login</Link> to explore more!</p>
        </div>
        <div></div>

    </div>
    <Footer/>
    </>
  )
}

export default AllBooks