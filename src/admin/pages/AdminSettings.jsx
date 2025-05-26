import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import SidebarAdmin from '../components/SidebarAdmin'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { updateAdminProfileApi } from '../../services/allApis'
import { serverurl } from '../../services/serverurl'
import { adminProfileUpdateStatusContext } from '../../context/Contexttoshare'


function AdminSettings() {
  const [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
    cpassword: "",
    profile: ""
  })
  const [preview, setPreview] = useState("")
  const [token, setToken] = useState('')
  const [existingProfile, setExistingProfile] = useState("")
  const [updateStatus, setUpdateStatus] = useState({})
  const {setAdminProfileUpdateStatus} = useContext(adminProfileUpdateStatusContext)


  // console.log(adminDetails);

  //to add/change profile photo
  const handleFileAdd = (e) => {
    setAdminDetails({ ...adminDetails, profile: e.target.files[0] })
    if (e.target.files[0] != "") {
      const url = URL.createObjectURL(e.target.files[0])
      setPreview(url)
    }
  }
  //console.log(preview);
  const handleReset = () => {
    if (sessionStorage.getItem("token")) {
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      setAdminDetails({ username: user.username, password: user.password, cpassword: user.password })
      setExistingProfile(user.profile)
    }
    setPreview("")
  }
  //function to update
  const handleAdd = async () => {
    const { username, password, cpassword, profile } = adminDetails
    //console.log(username, password, cpassword, profile);
    if (!username || !password || !cpassword) {
      toast.info("Pls fill all fields")
    } else {
      if (password != cpassword) {
        toast.info("Passwords doesnot match")
      } else {
        if (preview != "") {
          const reqBody = new FormData()
          for (let key in adminDetails) {
            reqBody.append(key, adminDetails[key])
          }
          const reqHeader = {
            "Authorization": `Bearer ${token}`
          }
          const result = await updateAdminProfileApi(reqBody, reqHeader)
          //console.log(result);
          if(result.status == 200){
            toast.success("Profile updated successfully")
            sessionStorage.setItem("existingUser", JSON.stringify(result.data))
            setUpdateStatus(result.data)
            setAdminProfileUpdateStatus(result.data)
          } else {
            toast.success("Something went wrong")
            setUpdateStatus(result)
          }

        }
        else {
          const reqHeader = {
            "Authorization": `Bearer ${token}`
          }
          const result = await updateAdminProfileApi({ username, password, profile: existingProfile }, reqHeader)
          //console.log(result);
          if(result.status == 200){
            toast.success("Profile updated successfully")
            sessionStorage.setItem("existingUser", JSON.stringify(result.data))
            setUpdateStatus(result.data)
            setAdminProfileUpdateStatus(result.data)

          } else {
            toast.success("Something went wrong")
            setUpdateStatus(result)
          }
        }
      }
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      setAdminDetails({ username: user.username, password: user.password, cpassword: user.password })
      setExistingProfile(user.profile)
    }
  }, [updateStatus])
  return (
    <>
      <HeaderAdmin />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div className='bg-blue-100 flex flex-col items-center p-5'>
          <SidebarAdmin />
        </div>
        <div>
          <h1 className='text-3xl font-bold text-center my-5'>Settings</h1>
          <div className='md:grid grid-cols-2'>
            <div className='p-5'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum assumenda reiciendis quaerat ad cupiditate dolorum in sapiente, libero architecto beatae natus eligendi magnam blanditiis reprehenderit odio ipsa mollitia autem.</p>
              <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam amet cupiditate quis blanditiis qui deleniti magni repudiandae quaerat, dolorum ducimus, voluptate reiciendis provident enim corrupti eos ad consequuntur tenetur! Dolores.</p>
            </div>
            <div>
              <div className='bg-blue-200 rounded mx-10 mb-5'>
                <div className='flex justify-center items-center flex-col'>
                  <label htmlFor="profilefile" className='my-5'>
                    <input onChange={(e) => handleFileAdd(e)} id='profilefile' type="file" style={{ display: 'none' }} />
                    {existingProfile == "" ? <img className='z-52' src={preview ? preview : "https://cdn-icons-png.freepik.com/512/8742/8742495.png"} alt="no image" style={{ width: '100px', height: '100px', borderRadius: "50%" }} /> :
                      <img className='z-52' src={preview ? preview : `${serverurl}/upload/${existingProfile}`} alt="no image" style={{ width: '100px', height: '100px', borderRadius: "50%" }} />}
                    <div className='bg-yellow-300 text-white relative z-53 rounded px-2 py-1' style={{ marginLeft: '80px', marginTop: '-30px' }}><FontAwesomeIcon icon={faPenToSquare} /></div>
                  </label>

                  <div className="mb-3 w-full px-5">
                    <input type="text" value={adminDetails.username} onChange={(e) => setAdminDetails({ ...adminDetails, username: e.target.value })} placeholder='Username' className='w-full border bg-white border-gray-300 placeholder-gray-400 p-2 rounded' />
                  </div>
                  <div className="mb-3 w-full px-5">
                    <input type="text" value={adminDetails.password} onChange={(e) => setAdminDetails({ ...adminDetails, password: e.target.value })} placeholder='Password' className='w-full border  bg-white border-gray-300 placeholder-gray-300 p-2 rounded' />
                  </div>
                  <div className="mb-3 w-full px-5">
                    <input type="text" value={adminDetails.cpassword} onChange={(e) => setAdminDetails({ ...adminDetails, cpassword: e.target.value })} placeholder='Confirm Password' className='w-full border  bg-white border-gray-300 placeholder-gray-300 p-2 rounded' />
                  </div>
                  <div className="mb-3 mt-5 w-full px-5 flex">
                    <button type='button' onClick={handleReset} className='bg-amber-600 text-black w-1/2 rounded px-3 py-2 hover:border hover:border-amber-600 hover:bg-white hover:text-amber-700'>Reset</button>
                    <button type='button' onClick={handleAdd} className='bg-green-600 text-white rounded w-1/2 px-3 py-2 hover:border hover:border-green-600 hover:bg-white hover:text-green-700 ms-4'>Update</button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
      <Footer />
    </>
  )
}

export default AdminSettings