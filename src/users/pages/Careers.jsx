import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquareArrowUpRight, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { addApplicationApi, getAllJobsApi } from '../../services/allApis'
import { toast, ToastContainer } from 'react-toastify'

function Careers() {
    const [modalStatus, setModalStatus] = useState(false)
    const [allJobs, setAllJobs] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [applicantDetails, setApplicantDetails] = useState({
        fullname: "",
        email: "",
        phone: "",
        qualification: "",
        coverletter: "",
        resume: ""
    })
    const [jobtitle, setJobTitle] = useState("")
    const [token, setToken] = useState('')


    //console.log(applicantDetails);
    const openModal = (jobtitle) => {
        if (token) {
            setModalStatus(true)
            setJobTitle(jobtitle)
        } else {
            toast.warning("Pls login to apply")

        }

    }

    //function to reset the form value
    const handleReset = () => {
        setApplicantDetails({
            fullname: "",
            email: "",
            phone: "",
            qualification: "",
            coverletter: "",
            resume: ""
        })
        document.getElementById('fileinput').value = ""
    }

    //function to handle modal close
    const closeModal = () => {
        setModalStatus(false)
        setApplicantDetails({
            fullname: "",
            email: "",
            phone: "",
            qualification: "",
            coverletter: "",
            resume: ""
        })
        document.getElementById('fileinput').value = ""
    }

    // to submit an application
    const handleSubmit = async () => {
            const { fullname, email, phone, qualification, coverletter, resume } = applicantDetails
            if (!fullname || !email || !phone || !qualification || !coverletter || !resume) {
                toast.info("Pls fill all fields")
            } else {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }
                const reqBody = new FormData()
                for (let key in applicantDetails) {
                    reqBody.append(key, applicantDetails[key])
                }
                reqBody.append("jobtitle", jobtitle)
                const result = await addApplicationApi(reqBody, reqHeader)
                if (result.status == 200) {
                    toast.success("Job application submitted successfully")
                    closeModal()
                } else if (result.status == 400) {
                    toast.warning(result.response.data)
                    handleReset()
                } else if (result.status == 500) {
                    toast.error("Something went wrong")
                    closeModal()
                }
            }
    }


    const getAllJobs = async (searchKey) => {
        const result = await getAllJobsApi(searchKey)
        //console.log(result);
        if (result.status == 200) {
            setAllJobs(result.data)
        }
    }
    //console.log(allJobs);

    useEffect(() => {
        getAllJobs(searchKey)
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    }, [searchKey])
    return (
        <>
            <Header />
            <div className='flex flex-col justify-center items-center md:px-40 px-10'>
                <h1 className='font-bold text-2xl my-5'>Careers</h1>
                <p className='md:text-center text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quod tempore incidunt inventore voluptatem aspernatur unde, quibusdam, qui dolor a nulla debitis, voluptas quas! Quisquam veritatis ullam officia ratione earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat animi velit, rerum eaque vero beatae. Reiciendis expedita, nam totam, voluptatum pariatur nemo et vel eius consequatur nostrum omnis exercitationem?</p>
            </div>

            <div className='md:px-20 p-5 '>
                <h1 className='text-2xl'>Current Openings</h1>
                <div className='flex justify-center items-center m-5'>
                    <input placeholder='Job Title' value={searchKey} onChange={(e) => setSearchKey(e.target.value)} className='border border-gray-400 px-5 py-2 w-96 placeholder-gray-400' type="text" />
                    <button className='bg-green-800 text-white px-5 py-2 border border-green-800 hover:bg-white hover:text-green-800'>Search</button>
                </div>
            </div>

            <div className='md:px-20 py-5 p-5'>
                {allJobs?.length > 0 ?
                    allJobs?.map((item, index) => (
                        <div className='shadow border border-gray-500 mt-4' key={index}>
                            <div className="md:grid grid-cols-[8fr_1fr] p-5">
                                <div>
                                    <h1 className='mb-3'>{item?.title}</h1>
                                    <hr />
                                    <p className='mt-3'><FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-3' />{item?.location}</p>
                                    <p className='mt-3'> Job Type: {item?.jType}</p>
                                    <p className='mt-3'> Salary: {item?.salary}</p>
                                    <p className='mt-3'> Qualification: {item?.qualification}</p>
                                    <p className='mt-3'> Experience: {item?.experience}</p>
                                    <p className='text-justify'>Description : {item?.description}</p>
                                </div>
                                <div className='flex md:justify-center items-start justify-end'>
                                    <button onClick={() => openModal(item?.title)} className='bg-blue-800 text-white px-5 py-2 border border-blue-800 hover:bg-white hover:text-blue-800 p-3 rounded ms-3 md:mt-0 mt-5'> Apply <FontAwesomeIcon icon={faSquareArrowUpRight} /></button>
                                </div>

                            </div>
                        </div>
                    )) :
                    <p>No Job Openings</p>
                }

            </div>

            {modalStatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                            {/* title of modal */}
                            <div className="bg-gray-900 p-4 flex justify-between sm:px-6">
                                <h1 className='text-white text-2xl'>Application Form</h1>
                                <FontAwesomeIcon onClick={closeModal} className='text-white fa-2x' icon={faSquareXmark} />


                            </div>
                            {/* boby of modal */}
                            <div className="bg-white px-4 pt-3 pb-4 sm:p-6 sm:pb-4">
                                <div className="grid grid-cols-2 ">
                                    <div className='p-3 '>
                                        <div className="mb-3">
                                            <input type="text" value={applicantDetails.fullname} onChange={(e) => setApplicantDetails({ ...applicantDetails, fullname: e.target.value })} className='p-2 border border-gray-400 rounded w-full ' placeholder='Full Name' name="" id="" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" value={applicantDetails.email} onChange={(e) => setApplicantDetails({ ...applicantDetails, email: e.target.value })} className='p-2 border border-gray-400 rounded  w-full ' placeholder='Email Id' name="" id="" />

                                        </div>
                                    </div>
                                    <div className='p-3 '>
                                        <div className="mb-3">
                                            <input type="text" value={applicantDetails.qualification} onChange={(e) => setApplicantDetails({ ...applicantDetails, qualification: e.target.value })} className='p-2 border border-gray-400 rounded  w-full ' placeholder='Qualification' name="" id="" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" value={applicantDetails.phone} onChange={(e) => setApplicantDetails({ ...applicantDetails, phone: e.target.value })} className='p-2 border border-gray-400 rounded  w-full ' placeholder='Phone Number' name="" id="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 px-3 w-full">
                                    <textarea placeholder='Cover letter' value={applicantDetails.coverletter} onChange={(e) => setApplicantDetails({ ...applicantDetails, coverletter: e.target.value })} className='p-2 border border-gray-400 rounded w-full' name="" id=""></textarea>
                                </div>
                                <div className="mb-3 px-3 w-full">
                                    <p className='text-gray-400'>Resume</p>
                                    <input type="file" id='fileinput' onChange={(e) => setApplicantDetails({ ...applicantDetails, resume: e.target.files[0] })} className='border border-gray-400 rounded w-full file:bg-gray-600 file:p-2 file:text-white' />
                                </div>
                            </div>
                            {/* footer of modal */}
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" onClick={handleSubmit} className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold ring-1  ring-green-600 ring-inset text-white shadow-xs hover:bg-white hover:text-green-600  sm:ml-3 sm:w-auto">Submit</button>
                                <button type="button" onClick={handleReset} className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 hover:text-orange-500 hover:ring-orange-500 sm:mt-0 sm:w-auto">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}


            <ToastContainer theme='colored' position='top-center' autoClose={2000} />

            <Footer />



        </>
    )
}

export default Careers