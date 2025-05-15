import React, { useState } from 'react'
import Footer from '../../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import SidebarAdmin from '../components/SidebarAdmin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquareArrowUpRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'

function AdminCareers() {
  const [jobpostStatus, setjobpostStatus] = useState(true)
  const [viewapplicantStatus, setviewapplicantStatus] = useState(false)
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <HeaderAdmin />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div className='bg-blue-100 flex flex-col items-center p-5'>
          <SidebarAdmin />
        </div>
        <div>
          <h1 className='text-3xl font-bold text-center my-5'>Careers</h1>
          {/* tab */}
          <div className='flex justify-center items-center my-5'>
            <p onClick={() => { setjobpostStatus(true), setviewapplicantStatus(false) }} className={jobpostStatus ? 'p-4 text-black rounded border-t border-r border-gray-200 cursor-pointer' : 'p-4 text-blue-600 rounded border-t border-r border-gray-200 cursor-pointer'}>Job Post</p>
            <p onClick={() => { setjobpostStatus(false), setviewapplicantStatus(true) }} className={viewapplicantStatus ? 'p-4 text-black rounded border-b border-l border-gray-200 cursor-pointer' : 'p-4 text-blue-600 rounded border-b border-l border-gray-200 cursor-pointer'}>View Applicant</p>
          </div>
          {jobpostStatus &&
            <div>
              <div className='flex justify-between md:px-10 py-5 p-5'>
                <div className='flex justify-center items-center my-5'>
                  <input placeholder='Job Title' className='border border-gray-400 px-5 py-2 md:w-96 w-40 placeholder-gray-400' type="text" />
                  <button className='bg-green-800 text-white px-5 py-2 border border-green-800 hover:bg-white hover:text-green-800'>Search</button>
                </div>
                <div>
                  <button className='border border-blue-900 bg-white text-blue-900 px-5 py-2 hover:bg-blue-900 hover:text-white my-5'>Add Job</button>
                </div>
              </div>
              <div className='md:px-10 py-5 p-5'>
                <div className='shadow border border-gray-500'>
                  <div className="md:grid grid-cols-[8fr_1fr] p-5">
                    <div>
                      <h1 className='mb-3'>Job Title</h1>
                      <hr />
                      <p className='mt-3'><FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-3' />Kochi</p>
                      <p className='mt-3'> Job Type:</p>
                      <p className='mt-3'> Salary:</p>
                      <p className='mt-3'> Qualification:</p>
                      <p className='mt-3'> Experience:</p>
                      <p className='text-justify'>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore quas in ad quidem aperiam nesciunt laborum incidunt itaque aliquid maxime blanditiis sequi, sed suscipit dolores illo reiciendis doloribus quod.Aliquam rem in, omnis voluptas aut nihil placeat autem dolores dignissimos reprehenderit atque velit, similique veritatis fugit quod? Rerum eligendi beatae dicta eos, molestiae omnis accusantium repellendus reiciendis iure! Voluptatem? At, nulla temporibus! Cum incidunt delectus velit praesentium pariatur libero quibusdam numquam. Eligendi, natus blanditiis. Ipsum, cupiditate at sit doloremque suscipit sint, ad necessitatibus incidunt qui enim laudantium, quibusdam esse.</p>
                    </div>
                    <div className='flex md:justify-center items-start justify-end'>
                      <button onClick={() => setModalStatus(true)} className='bg-red-800 text-white px-3 py-2 border border-red-800 hover:bg-white hover:text-red-800  rounded ms-3 md:mt-0 mt-5'> Delete <FontAwesomeIcon icon={faTrashCan} /></button>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          }

          {viewapplicantStatus &&
            <div>
              <div className='flex justify-between md:px-10 py-5 p-5'>
                <div className='flex justify-center items-center my-5'>
                  <input placeholder='Job Title' className='border border-gray-400 px-5 py-2 md:w-96 w-40 placeholder-gray-400' type="text" />
                  <button className='bg-green-800 text-white px-5 py-2 border border-green-800 hover:bg-white hover:text-green-800'>Search</button>
                </div>
              </div>
              <div className='overflow-x-auto'>
                <table className='border border-gray-200 mx-auto'>
                  <thead>
                    <tr className='bg-blue-600 text-white font-medium'>
                      <th className="py-2 px-6 border-r border-gray-200">Sl.No.</th>
                      <th className="py-2 px-6 border-r border-gray-200">Job Title</th>
                      <th className="py-2 px-6 border-r border-gray-200">Name</th>
                      <th className="py-2 px-6 border-r border-gray-200">Qualification</th>
                      <th className="py-2 px-6 border-r border-gray-200">Email</th>
                      <th className="py-2 px-6 border-r border-gray-200">Phone</th>
                      <th className="py-2 px-6 border-r border-gray-200">Cover Letter</th>
                      <th className="py-2 px-6 ">Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr className='border border-gray-200'>
                      <th className="py-2 px-4 border-r border-gray-200">Sl.No.</th>
                      <th className="py-2 px-4 border-r border-gray-200">Job Title</th>
                      <th className="py-2 px-4 border-r border-gray-200">Name</th>
                      <th className="py-2 px-4 border-r border-gray-200">Qualification</th>
                      <th className="py-2 px-4 border-r border-gray-200">Email</th>
                      <th className="py-2 px-4 border-r border-gray-200">Phone</th>
                      <th className="py-2 px-4 border-r border-gray-200">Cover Letter</th>
                      <th className="py-2 px-4">Resume</th>
                    </tr>

                  </tbody>
                </table>
              </div>


            </div>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminCareers