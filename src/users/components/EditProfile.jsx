import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { updateUserProfileApi } from '../../services/allApis'
import { userProfileUpdateStatusContext } from '../../context/Contexttoshare'

function EditProfile() {
  const [offcanvasStatus, setoffcanvasStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    cpassword: "",
    bio: "",
    profile: ""
  })
  const [preview, setPreview] = useState("")
  const [token, setToken] = useState('')
  const [existingProfile, setExistingProfile] = useState("")
  //console.log(userDetails);
  const {setUserProfileUpdateStatus} = useContext(userProfileUpdateStatusContext)
  
  //to add/change profile photo
  const handleFileAdd = (e) => {
    setUserDetails({ ...userDetails, profile: e.target.files[0] })
    if (e.target.files[0] != "") {
      const url = URL.createObjectURL(e.target.files[0])
      setPreview(url)
    }
  }

  //console.log(userDetails);

  const handleUpdate = async () => {
    const { username, password, cpassword, bio, profile } = userDetails
    //console.log(username, password, cpassword, profile);
    if (!username || !password || !cpassword || !bio) {
      toast.info("Pls fill all fields")
    } else {
      if (password != cpassword) {
        toast.info("Passwords doesnot match")
      } else {
        if (preview != "") {
          const reqBody = new FormData()
          for (let key in userDetails) {
            reqBody.append(key, userDetails[key])
          }
          const reqHeader = {
            "Authorization": `Bearer ${token}`
          }
          const result = await updateUserProfileApi(reqBody, reqHeader)
          //console.log(result);
          if (result.status == 200) {
            toast.success("Profile updated successfully")
            sessionStorage.setItem("existingUser", JSON.stringify(result.data))
            // setUpdateStatus(result.data)
            // setAdminProfileUpdateStatus(result.data)
          } else {
            toast.success("Something went wrong")
            // setUpdateStatus(result)
          }

        }
        else {
          const reqHeader = {
            "Authorization": `Bearer ${token}`
          }
          const result = await updateUserProfileApi({ username, password, bio, profile: existingProfile }, reqHeader)
          //console.log(result);
          if (result.status == 200) {
            toast.success("Profile updated successfully")
            sessionStorage.setItem("existingUser", JSON.stringify(result.data))
            // setUpdateStatus(result.data)
            // setAdminProfileUpdateStatus(result.data)

          } else {
            toast.success("Something went wrong")
            // setUpdateStatus(result)
          }
        }
      }
    }

  }
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      setUserDetails({ username: user.username, password: user.password, cpassword: user.password, bio: user.bio })
      setExistingProfile(user.profile)
    }
  }, [])

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
              <input onChange={(e) => handleFileAdd(e)} id='profilefile' type="file" style={{ display: 'none' }} />
              {existingProfile == "" ? <img className='z-52' src={preview ? preview : "https://cdn-icons-png.freepik.com/512/8742/8742495.png"} alt="no image" style={{ width: '100px', height: '100px', borderRadius: "50%" }} /> :
                <img className='z-52' src={preview ? preview : `${serverurl}/upload/${existingProfile}`} alt="no image" style={{ width: '100px', height: '100px', borderRadius: "50%" }} />}
              {/* <img className='z-52' src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no image" style={{ width: '150px', height: '150px' }} /> */}
              <div className='bg-yellow-300 text-white z-53 fixed rounded py-2 px-3' style={{ marginLeft: '120px', marginTop: '-50px' }}><FontAwesomeIcon icon={faPenToSquare} /></div>
            </label>

            <div className="mb-3 mt-5 w-full px-5">
              <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='Username' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
            </div>
            <div className="mb-3 mt-5 w-full px-5">
              <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type="text" placeholder='Password' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
            </div>
            <div className="mb-3 mt-5 w-full px-5">
              <input value={userDetails.cpassword} onChange={(e) => setUserDetails({ ...userDetails, cpassword: e.target.value })} type="text" placeholder='Confirm Password' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
            </div>
            <div className="mb-3 mt-5 w-full px-5">
              <textarea value={userDetails.bio} onChange={(e) => setUserDetails({ ...userDetails, bio: e.target.value })} type="text" placeholder='Bio' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
            </div>

            <div className="flex justify-end w-full px-5 mt-5">
              <button className='bg-amber-600 text-black rounded px-3 py-2 hover:border hover:border-amber-600 hover:bg-white hover:text-amber-700'>Reset</button>
              <button onClick={handleUpdate} className='bg-green-600 text-white rounded px-3 py-2 hover:border hover:border-green-600 hover:bg-white hover:text-green-700 ms-4'>Update</button>
            </div>

          </div>
        </div>
      </div>}
    </>
  )
}

export default EditProfile