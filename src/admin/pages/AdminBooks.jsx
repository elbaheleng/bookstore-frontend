import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import SidebarAdmin from '../components/SidebarAdmin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { approveBookApi, getAllBookAdminApi } from '../../services/allApis'
import { toast } from 'react-toastify'

function AdminBooks() {
  const [bookliststatus, setbookliststatus] = useState(true)
  const [usersstatus, setusersstatus] = useState(false)
  const [bookDetails, setBookDetails] = useState([])
  const [token, setToken] = useState("")
  const [approveStatus, setApproveStatus] = useState(false)

  const getAllBooksAdmin = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getAllBookAdminApi(reqHeader)
    //console.log(result);
    if (result.status == 200) {
      setBookDetails(result.data)
    }
  }

  //console.log(bookDetails);
  const approveBook = async (data) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await approveBookApi(data, reqHeader)
    //console.log(result);
    if (result.status == 200) {
      setApproveStatus(!approveStatus)
    } else {
      toast.error("Something went wrong")
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)
      getAllBooksAdmin(token)
    }
  }, [approveStatus])
  return (
    <>
      <HeaderAdmin />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div className='bg-blue-100 flex flex-col items-center p-5'>
          <SidebarAdmin />
        </div>
        <div>
          <h1 className='text-3xl font-bold text-center my-5'>All Books</h1>
          {/* tab */}
          <div className='flex justify-center items-center my-5'>
            <p onClick={() => { setbookliststatus(true), setusersstatus(false) }} className={bookliststatus ? 'p-4 text-blue-600 rounded border-t border-r border-gray-200 cursor-pointer' : 'p-4 text-black rounded border-t border-r border-gray-200 cursor-pointer'}>Book List</p>
            <p onClick={() => { setbookliststatus(false), setusersstatus(true) }} className={usersstatus ? 'p-4 text-blue-600 rounded border-b border-l border-gray-200 cursor-pointer' : 'p-4 text-black rounded border-b border-l border-gray-200 cursor-pointer'}>Users</p>
          </div>
          {bookliststatus &&
            <div className='md:grid grid-cols-4 gap-5 md:mx-20 mx-5 mb-5'>
              {bookDetails?.length > 0 ?
                bookDetails?.map((item, index) => (
                  <div className={item?.status == 'sold' ? 'p-3 m-5 md:m-0 shadow-lg bg-gray-400 opacity-25' : 'p-3 m-5  md:m-0 shadow-lg'} key={index}>
                    <img src={item?.imageurl} alt="book image" style={{ width: '100%', height: "150px" }} />
                    <div className='flex justify-center items-center flex-col'>
                      <p className='text-blue-700 text-sm'>{item?.author}</p>
                      <h3>{item?.title.slice(0, 20)}...</h3>
                      <p className='text-xs text-red-700 mb-1'>{item?.userMail}</p>
                      {item?.status == 'pending' && <button onClick={() => approveBook(item)} className='bg-green-600 text-white w-full hover:border hover:border-green-600 hover:bg-white hover:text-green-700'>Approve</button>}
                      {item?.status == 'approved' && <FontAwesomeIcon className='text-green-700 place-self-end fa-2x' icon={faCircleCheck} />}
                      {item?.status == 'sold' && <FontAwesomeIcon className='text-green-700 place-self-end fa-2x' icon={faCircleCheck} />}
                    </div>
                  </div>
                )) :
                <p>No Books</p>
              }
            </div>
          }

          {usersstatus &&
            <div className='md:grid grid-cols-3 gap-5 mx-10'>
              <div className='bg-gray-300 rounded p-3 mb-5'>
                <p className='text-red-600 mb-2'>ID: 6adn9skfjbkjn788nlkwdsn</p>
                <div className='flex gap-5'>
                  <div>
                    <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no image" style={{ height: "50px" }} />
                  </div>
                  <div className='ms-3'>
                    <h3 className='text-blue-600 text-xl'>Jennifer Steve</h3>
                    <p>jennifer@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='bg-gray-300 rounded p-3 mb-5'>
                <p className='text-red-600 mb-2'>ID: 6adn9skfjbkjn788nlkwdsn</p>
                <div className='flex gap-5'>
                  <div>
                    <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no image" style={{ height: "50px" }} />
                  </div>
                  <div className='ms-3'>
                    <h3 className='text-blue-600 text-xl'>Jennifer Steve</h3>
                    <p>jennifer@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='bg-gray-300 rounded p-3 mb-5'>
                <p className='text-red-600 mb-2'>ID: 6adn9skfjbkjn788nlkwdsn</p>
                <div className='flex gap-5'>
                  <div>
                    <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no image" style={{ height: "50px" }} />
                  </div>
                  <div className='ms-3'>
                    <h3 className='text-blue-600 text-xl'>Jennifer Steve</h3>
                    <p>jennifer@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='bg-gray-300 rounded p-3 mb-5'>
                <p className='text-red-600 mb-2'>ID: 6adn9skfjbkjn788nlkwdsn</p>
                <div className='flex gap-5'>
                  <div>
                    <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no image" style={{ height: "50px" }} />
                  </div>
                  <div className='ms-3'>
                    <h3 className='text-blue-600 text-xl'>Jennifer Steve</h3>
                    <p>jennifer@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='bg-gray-300 rounded p-3 mb-5'>
                <p className='text-red-600 mb-2'>ID: 6adn9skfjbkjn788nlkwdsn</p>
                <div className='flex gap-5'>
                  <div>
                    <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no image" style={{ height: "50px" }} />
                  </div>
                  <div className='ms-3'>
                    <h3 className='text-blue-600 text-xl'>Jennifer Steve</h3>
                    <p>jennifer@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='bg-gray-300 rounded p-3 mb-5'>
                <p className='text-red-600 mb-2'>ID: 6adn9skfjbkjn788nlkwdsn</p>
                <div className='flex gap-5'>
                  <div>
                    <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no image" style={{ height: "50px" }} />
                  </div>
                  <div className='ms-3'>
                    <h3 className='text-blue-600 text-xl'>Jennifer Steve</h3>
                    <p>jennifer@gmail.com</p>
                  </div>
                </div>
              </div>


            </div>}

        </div>


      </div>
      <Footer />
    </>
  )
}

export default AdminBooks