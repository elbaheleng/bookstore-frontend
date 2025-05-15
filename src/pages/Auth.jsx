import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { googleLoginApi, loginApi, registerApi } from '../services/allApis';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'

function Auth({ register }) {
  const navigate = useNavigate()
  const [userDetails, setuserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [hiddenpasswd, sethiddenpasswd] = useState("password")
  //console.log(userDetails);
  const handleRegister = async () => {

    const { username, email, password } = userDetails

    if (!username || !email || !password) {
      toast.error("Pls fill all the fields.")
    } else {
      const result = await registerApi({ username, email, password }) // the keys should be same as that of backend, key value pair same, so only one
      if (result.status == 200) {
        toast.success("Registration Successful")
        setuserDetails({
          username: "",
          email: "",
          password: ""
        })
        navigate('/login')
      } else if (result.status == 409) {
        toast.warning(result.response.data) // respose data is in backed as ""
        setuserDetails({
          username: "",
          email: "",
          password: ""
        })
      } else {
        toast.error("Something went wrong!")
        setuserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
    }
  }

  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.error("Pls fill all the fields.")
    } else {
      const result = await loginApi({ email, password })
      console.log(result);
      if (result.status == 200) {
        toast.success("Login Successful")
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)

        setTimeout(() => {
          if (result.data.existingUser.email == 'bookstoreadmin@gmail.com') {
            navigate('/admin-home')
          } else {
            navigate('/')
          }
        }, 2500)
      } else if (result.status == 404 || result.status == 401) {
        toast.warning(result.response.data) // respose data is in backed as ""
        setuserDetails({
          username: "",
          email: "",
          password: ""
        })
      } else {
        toast.error("Something went wrong!")
        setuserDetails({
          username: "",
          email: "",
          password: ""
        })
      }

    }
  }

  const handleGoogleLogin = async (credentialResponse) => {
    const details = jwtDecode(credentialResponse.credential)
    //console.log(details); 
    const result = await googleLoginApi({ username: details.name, email: details.email, password: "googlepswd", photo: details.picture })
    console.log(result);
    
    if (result.status == 200) {
      toast.success("Login Successful")
      //check
      if (result.data.existingUser){
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
      } else {
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.newUser))
      }
      sessionStorage.setItem("token", result.data.token)

      setTimeout(() => {
        if (result.data.existingUser.email == 'bookstoreadmin@gmail.com') {
          navigate('/admin-home')
        } else {
          navigate('/')
        }
      }, 2500)
    } else {
      toast.error("Something went wrong!")
    }
  }

  return (
    <>
      <div id='loginpage'>
        <div className='md:grid grid-cols-3'>
          <div></div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl mb-5 font-bold text-white md:text-black mt-3'>BOOKSTORE</h1>

            <form action="" className='w-full mx-5 p-10 bg-gray-900 flex flex-col justify-center items-center'>
              <div style={{ width: '70px', height: '70px', borderRadius: "50%" }} className='border border-white flex justify-center items-center'>
                <FontAwesomeIcon className='text-white fa-2x' icon={faUser} />
              </div>
              {!register ? <h1 className='text-white mt-5 text-3xl mb-8'>Login</h1>
                : <h1 className='text-white mt-5 text-3xl mb-8'>Register</h1>}
              {register && <div className='mb-5 w-full'>
                <input type="text" value={userDetails.username} onChange={(e) => setuserDetails({ ...userDetails, username: e.target.value })} placeholder='Username' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
              </div>}
              <div className='mb-5 w-full'>
                <input type="text" value={userDetails.email} onChange={(e) => setuserDetails({ ...userDetails, email: e.target.value })} placeholder='Email Id' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
              </div>
              <div className='mb-5 w-full'>
                <input type={hiddenpasswd} value={userDetails.password} onChange={(e) => setuserDetails({ ...userDetails, password: e.target.value })} placeholder='Password' className='p-2 rounded placeholder-gray-600 bg-white w-full' />{hiddenpasswd == "password" ? <FontAwesomeIcon onClick={()=> sethiddenpasswd("text")} icon={faEye} style={{marginLeft:"-30px"}} /> :<FontAwesomeIcon onClick={()=> sethiddenpasswd("password")}  icon={faEyeSlash} style={{marginLeft:"-30px"}} />}
              </div>
              <div className='mb-5 w-full flex justify-between'>
                <p className='text-amber-300' style={{ fontSize: '10px' }}>*Never share the password with others</p>
                {!register && <p className='text-white underline' style={{ fontSize: '10px' }}>Forgot password</p>}
              </div>
              {register ? <div className='mb-3 w-full'>
                <button type='button' onClick={handleRegister} className='bg-green-800 text-white w-full p-3 rounded'>Register</button>
              </div> :
                <div className='mb-3 w-full'>
                  <button type='button' onClick={handleLogin} className='bg-green-800 text-white w-full p-3 rounded'>Login</button>
                </div>}
              {!register && <p className='text-white'>-----------------------or-----------------------</p>}
              {!register && <div className='my-3 w-full'>
                {/* <button className='bg-white w-full p-3 rounded'>Sign In with Google</button> */}
                <GoogleLogin width={'350px'}
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    handleGoogleLogin(credentialResponse)
                  }}
                  onError={() => {
                    toast.error("Login Failed")
                  }}
                />;
              </div>}
              {register ? <p className='text-white'>Are you already a user? <Link to={'/login'} className='text-blue-400 underline ms-2'>Login</Link></p> :
                <p className='text-white'>Are you a new user? <Link to={'/register'} className='text-blue-400 underline ms-2'>Register</Link></p>}
            </form>


          </div>
          <div></div>
        </div>

      </div>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
  )
}

export default Auth