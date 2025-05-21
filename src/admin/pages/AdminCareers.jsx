import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import SidebarAdmin from '../components/SidebarAdmin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquareArrowUpRight, faTrashCan, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { addJobApi, deleteJobApi, getAllJobsApi } from '../../services/allApis'

function AdminCareers() {
  const [jobpostStatus, setjobpostStatus] = useState(true)
  const [viewapplicantStatus, setviewapplicantStatus] = useState(false)
  const [modalStatus, setModalStatus] = useState(false)
  const [jobPost, setJobPost] = useState({
    title: "",
    location: "",
    jType: "",
    salary: "",
    qualification: "",
    experience: "",
    description: ""
  })
  const [allJobs, setAllJobs] = useState([])
  const [addJobStatus, setaddJobStatus] = useState({})//used for add status and delete status
  const [searchKey, setSearchKey] = useState("")
  //console.log(jobPost);
  const handleReset = () => {
    setJobPost({
      title: "",
      location: "",
      jType: "",
      salary: "",
      qualification: "",
      experience: "",
      description: ""
    })
  }
  const handleClose = () => {
    setModalStatus(false)
    setJobPost({
      title: "",
      location: "",
      jType: "",
      salary: "",
      qualification: "",
      experience: "",
      description: ""
    })
  }
  const handleJobPost = async () => {
    const { title, location, jType, salary, qualification, experience, description } = jobPost
    if (!title || !location || !jType || !salary || !qualification || !experience || !description) {
      toast.info("Pls fill all fields")
    } else {
      const result = await addJobApi({ title, location, jType, salary, qualification, experience, description })
      //console.log(result);
      if (result.status == 200) {
        toast.success("Job posted successfully")
        setaddJobStatus(result.data)
      } else if (result.status == 400) {
        toast.info(result.response.data)
      } else if (result.status == 500) {
        toast.error("Something went wrong")
      }
      handleClose()
    }
  }

  const getAllJobs = async (searchKey) => {
    const result = await getAllJobsApi(searchKey)
    //console.log(result.data);
    if (result.status == 200) {
      setAllJobs(result.data)
    } else {
      toast.error("Something went wrong")
    }
  }
  //console.log(allJobs);
  const deleteJob = async (id) => {
    const result = await deleteJobApi(id)
    //console.log(result);
    if (result.status == 200) {
      setaddJobStatus("")
    }
    else {
      toast.error("Something went wrong")
    }
  }
  useEffect(() => {
    getAllJobs(searchKey)
  }, [addJobStatus, searchKey])
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
                  <input placeholder='Job Title' value={searchKey} onChange={(e) => setSearchKey(e.target.value)} className='border border-gray-400 px-5 py-2 md:w-96 w-40 placeholder-gray-400' type="text" />
                  <button className='bg-green-800 text-white px-5 py-2 border border-green-800 hover:bg-white hover:text-green-800'>Search</button>
                </div>
                <div>
                  <button onClick={() => setModalStatus(true)} className='border border-blue-900 bg-white text-blue-900 px-5 py-2 hover:bg-blue-900 hover:text-white my-5'>Add Job</button>
                </div>
              </div>
              <div className='md:px-10 py-5 p-5'>
                {allJobs?.length > 0 ?
                  allJobs?.map((item, index) => (
                    <div className='shadow border border-gray-500 mt-4' key={index}>
                      <div className="md:grid grid-cols-[8fr_1fr] p-5">
                        <div>
                          <h1 className='mb-3 text-xl font-semibold'>{item?.title}</h1>
                          <hr />
                          <p className='mt-3'><FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-3' />{item?.location}</p>
                          <p className='mt-3'> Job Type: {item?.jType}</p>
                          <p className='mt-3'> Salary: {item?.salary}</p>
                          <p className='mt-3'> Qualification: {item?.qualification}</p>
                          <p className='mt-3'> Experience: {item?.experience}</p>
                          <p className='text-justify mt-3'>Description : {item?.description}</p>
                        </div>
                        <div className='flex md:justify-center items-start justify-end'>
                          <button onClick={() => deleteJob(item?._id)} className='bg-red-800 text-white px-3 py-2 border border-red-800 hover:bg-white hover:text-red-800  rounded ms-3 md:mt-0 mt-5'> Delete <FontAwesomeIcon icon={faTrashCan} /></button>
                        </div>

                      </div>
                    </div>
                  )) :
                  <p>No Jobs</p>
                }

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
                    <FontAwesomeIcon onClick={handleClose} className='text-white fa-2x' icon={faSquareXmark} />
                  </div>
                  {/* boby of modal */}
                  <div className="bg-white px-4 pt-3 pb-4 sm:p-6 sm:pb-4">
                    <div className="mb-3">
                      <input type="text" value={jobPost.title} onChange={(e) => setJobPost({ ...jobPost, title: e.target.value })} className='p-2 border border-gray-400 rounded  w-full ' placeholder='Title' name="" id="" />
                    </div>
                    <div className="mb-3">
                      <input type="text" value={jobPost.location} onChange={(e) => setJobPost({ ...jobPost, location: e.target.value })} className='p-2 border border-gray-400 rounded  w-full ' placeholder='Location' name="" id="" />
                    </div>
                    <div className="mb-3">
                      <input type="text" value={jobPost.jType} onChange={(e) => setJobPost({ ...jobPost, jType: e.target.value })} className='p-2 border border-gray-400 rounded  w-full ' placeholder='Job Type' name="" id="" />
                    </div>
                    <div className="mb-3">
                      <input type="text" value={jobPost.salary} onChange={(e) => setJobPost({ ...jobPost, salary: e.target.value })} className='p-2 border border-gray-400 rounded  w-full ' placeholder='Salary' name="" id="" />
                    </div>
                    <div className="mb-3">
                      <input type="text" value={jobPost.qualification} onChange={(e) => setJobPost({ ...jobPost, qualification: e.target.value })} className='p-2 border border-gray-400 rounded  w-full ' placeholder='Qualification' name="" id="" />
                    </div>
                    <div className="mb-3">
                      <input type="text" value={jobPost.experience} onChange={(e) => setJobPost({ ...jobPost, experience: e.target.value })} className='p-2 border border-gray-400 rounded  w-full ' placeholder='Experience' name="" id="" />
                    </div>
                    <div className="mb-3">
                      <textarea type="text" value={jobPost.description} onChange={(e) => setJobPost({ ...jobPost, description: e.target.value })} className='p-2 border border-gray-400 rounded  w-full ' placeholder='Description' name="" id="" />
                    </div>

                  </div>
                  {/* footer of modal */}
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" onClick={handleJobPost} className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold ring-1  ring-green-600 ring-inset text-white shadow-xs hover:bg-white hover:text-green-600  sm:ml-3 sm:w-auto">Submit</button>
                    <button type="button" onClick={handleReset} className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 hover:text-orange-500 hover:ring-orange-500 sm:mt-0 sm:w-auto">Reset</button>
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

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />

      <Footer />
    </>
  )
}

export default AdminCareers