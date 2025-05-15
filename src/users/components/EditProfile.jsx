import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'

function EditProfile() {
  const [offcanvasStatus, setoffcanvasStatus] = useState(false)
  return (
    <>
      <div className='flex justify-end mt-5 md:mt-0'><button onClick={() => setoffcanvasStatus(true)} className='text-blue-600 border border-blue-600 rounded p-3 hover:bg-blue-600 hover:text-white'> <FontAwesomeIcon icon={faPenToSquare} />Edit</button></div>


      {offcanvasStatus && <div>
        {/* to make background light */}
        <div onClick={() => setoffcanvasStatus(false)} className='fixed inset-0 bg-gray-500/75 transition-opacity'></div>
        {/* offcavas content */}
        <div className='bg-white h-full w-90 z-50 fixed top-0 left-0'>
          {/* title od offcanvas */}
          <div className='bg-gray-900 text-white text-2xl px-3 py-4 flex justify-between'>
            <h1>Edit User Profile</h1>
            <FontAwesomeIcon onClick={() => setoffcanvasStatus(false)} icon={faXmark} />
          </div>
          <div className='flex justify-center items-center flex-col'>
            <label htmlFor="profilefile" className='mt-5'>
              <input id='profilefile' type="file" style={{ display: 'none' }} />
              <img className='z-52' src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no image" style={{ width: '150px', height: '150px'}} />
            <div className='bg-yellow-300 text-white z-53 fixed rounded py-2 px-3' style={{marginLeft:'120px', marginTop:'-50px'}}><FontAwesomeIcon icon={faPenToSquare}/></div>
            </label>

            <div className="mb-3 mt-5 w-full px-5">
              <input type="text" placeholder='Username' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
            </div>
            <div className="mb-3 mt-5 w-full px-5">
              <input type="text" placeholder='Password' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
            </div>
            <div className="mb-3 mt-5 w-full px-5">
              <input type="text" placeholder='Confirm Password' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
            </div>
            <div className="mb-3 mt-5 w-full px-5">
              <textarea type="text" placeholder='Bio' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
            </div>

            <div className="flex justify-end w-full px-5 mt-5">
              <button className='bg-amber-600 text-black rounded px-3 py-2 hover:border hover:border-amber-600 hover:bg-white hover:text-amber-700'>Reset</button>
              <button className='bg-green-600 text-white rounded px-3 py-2 hover:border hover:border-green-600 hover:bg-white hover:text-green-700 ms-4'>Update</button>
            </div>

          </div>
        </div>
      </div>}
    </>
  )
}

export default EditProfile