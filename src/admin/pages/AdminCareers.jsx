import React, { useState } from 'react'
import Footer from '../../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import SidebarAdmin from '../components/SidebarAdmin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquareArrowUpRight, faTrashCan, faSquareXmark } from '@fortawesome/free-solid-svg-icons'

function AdminCareers() {
  const [jobpostStatus, setjobpostStatus] = useState(true)
  const [viewapplicantStatus, setviewapplicantStatus] = useState(false)
  const [modalStatus, setModalStatus] = useState(false)
  const [jobPost, setJobPost] = useState({
    title :"", 
    location:"", 
    jType:"", 
    salary:"", 
    qualification:"", 
    experience:"", 
    description:""
  })

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
                  <button onClick={() => setModalStatus(true)} className='border border-blue-900 bg-white text-blue-900 px-5 py-2 hover:bg-blue-900 hover:text-white my-5'>Add Job</button>
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
                      <button className='bg-red-800 text-white px-3 py-2 border border-red-800 hover:bg-white hover:text-red-800  rounded ms-3 md:mt-0 mt-5'> Delete <FontAwesomeIcon icon={faTrashCan} /></button>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          }

          {modalStatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                  {/* title of modal */}
                  <div className="bg-gray-900 p-4 flex justify-between sm:px-6">
                    <h1 className='text-white text-2xl'>Add Job</h1>
                    <FontAwesomeIcon onClick={() => setModalStatus(false)} className='text-white fa-2x' icon={faSquareXmark} />
                  </div>
                  {/* boby of modal */}
                  <div className="bg-white px-4 pt-3 pb-4 sm:p-6 sm:pb-4">
                    <div className="mb-3">
                      <input type="text" className='p-2 border border-gray-400 rounded  w-full ' placeholder='Title' name="" id="" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className='p-2 border border-gray-400 rounded  w-full ' placeholder='Location' name="" id="" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className='p-2 border border-gray-400 rounded  w-full ' placeholder='Job Type' name="" id="" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className='p-2 border border-gray-400 rounded  w-full ' placeholder='Salary' name="" id="" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className='p-2 border border-gray-400 rounded  w-full ' placeholder='Qualification' name="" id="" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className='p-2 border border-gray-400 rounded  w-full ' placeholder='Experience' name="" id="" />
                    </div>
                    <div className="mb-3">
                      <textarea type="text" className='p-2 border border-gray-400 rounded  w-full ' placeholder='Description' name="" id="" />
                    </div>

                  </div>
                  {/* footer of modal */}
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold ring-1  ring-green-600 ring-inset text-white shadow-xs hover:bg-white hover:text-green-600  sm:ml-3 sm:w-auto">Submit</button>
                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 hover:text-orange-500 hover:ring-orange-500 sm:mt-0 sm:w-auto">Reset</button>
                  </div>
                </div>
              </div>
            </div>
          </div>}

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