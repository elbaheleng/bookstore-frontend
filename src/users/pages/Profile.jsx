import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import EditProfile from '../components/EditProfile'
import { toast, ToastContainer } from 'react-toastify'
import { uploadBookApi } from '../../services/allApis'



function Profile() {
  const [sellstatus, setsellstatus] = useState(true)
  const [bookstatus, setbookstatus] = useState(false)
  const [purchaseStatus, setpurchaseStatus] = useState(false)
  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", noofpages: "", imageurl: "", price: "", dprice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadedImages: []
  })
  const [preview, setPreview] = useState("")
  const [previewList, setPreviewList] = useState([])
  const [token, setToken] = useState('')

  //console.log(bookDetails);
  const handleUpload = (e) => {
    // console.log(e.target.files[0]);

    const fileArray = bookDetails.uploadedImages
    fileArray.push(e.target.files[0])
    setBookDetails({ ...bookDetails, uploadedImages: fileArray })
    const url = URL.createObjectURL(e.target.files[0])
    //console.log(url);
    setPreview(url)
    const newArray = previewList
    newArray.push(url)
    setPreviewList(newArray)

  }
  const handleReset = () => {
    setBookDetails({
      title: "", author: "", noofpages: "", imageurl: "", price: "", dprice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadedImages: []
    })
    setPreview("")
    setPreviewList([])
  }
  const handleSubmit = async () => {
    const { title, author, noofpages, imageurl, price, dprice, abstract, publisher, language, isbn, category, uploadedImages } = bookDetails
    if (!title || !author || !noofpages || !imageurl || !price || !dprice || !abstract || !publisher || !language || !isbn || !category || uploadedImages.length == 0) {
      toast.info("Pls fill the fields completely")
    }
    else {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const reqBody = new FormData()
      for (let key in bookDetails){
        if (key != 'uploadedImages'){
        reqBody.append(key, bookDetails[key])
        } else {
          bookDetails.uploadedImages.forEach((item) => {
            reqBody.append("uploadedImages", item)
          })
        }
      }
      const result = await uploadBookApi(reqBody,reqHeader)
      console.log(result);
      if(result.status == 200){
        toast.success("Book added successfully")
        handleReset()
      } 
      else if(result.status == 401){
        toast.warning(result.response.data)
        handleReset()
      } else {
        toast.error("Something went wrong")
        handleReset()
      }
      
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  return (
    <>
      <Header />
      <div className='bg-gray-900 h-32'>
      </div>
      <div><img className='rounded-full border-10 border-white' style={{ height: '200px', width: '200px', marginTop: "-100px", marginLeft: "40px" }} src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="" /></div>

      <div className="md:flex justify-between px-14">
        <p className='md:text-3xl text-2xl'>Elba Helen George <span className='ms-3 text-blue-400 text-xl'><FontAwesomeIcon icon={faCircleCheck} /></span></p>
        <EditProfile />
      </div>
      <p className='md:px-20 px-5 my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatem at a quis magnam quos? Iste voluptatibus maxime consequatur explicabo nihil at doloribus a accusantium alias ratione! Nobis, voluptate dolorem!</p>

      <div className='md:px-40'>
        {/* tab */}
        <div className='flex justify-center items-center my-5'>
          <p onClick={() => { setsellstatus(true), setbookstatus(false), setpurchaseStatus(false) }} className={sellstatus ? 'p-4 text-blue-600 rounded border-t border-r border-l border-gray-200 cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>Sell Book</p>
          <p onClick={() => { setsellstatus(false), setbookstatus(true), setpurchaseStatus(false) }} className={bookstatus ? 'p-4 text-blue-600 rounded border-t border-r border-l border-gray-200 cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>Book Status</p>
          <p onClick={() => { setsellstatus(false), setbookstatus(false), setpurchaseStatus(true) }} className={purchaseStatus ? 'p-4 text-blue-600 rounded border-t border-r border-l border-gray-200 cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>Purchase History</p>
        </div>
        {/* content */}
        {sellstatus &&
          <div>
            <div className='bg-gray-300 p-5 mt-20 rounded my-20'>
              <h1 className='text-center text-2xl font-medium my-5'>Book Details</h1>
              <div className='md:grid grid-cols-2 mt-10 w-full gap-5'>
                <div>
                  <div className='mb-3'><input type="text" value={bookDetails.title} className='bg-white rounded placeholder-gray-300 w-full p-2' placeholder='Title' name="" id="" onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })} />
                  </div>
                  <div className='mb-3'><input type="text" value={bookDetails.author} className='bg-white rounded w-full p-2 placeholder-gray-300' placeholder='Author' name="" id="" onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })} />
                  </div>
                  <div className='mb-3'><input type="text" value={bookDetails.noofpages} className='bg-white rounded w-full p-2 placeholder-gray-300' placeholder='No of Pages' name="" id="" onChange={(e) => setBookDetails({ ...bookDetails, noofpages: e.target.value })} />
                  </div>
                  <div className='mb-3'><input type="text" value={bookDetails.imageurl} className='bg-white rounded w-full p-2  placeholder-gray-300' placeholder='Image Url' name="" id="" onChange={(e) => setBookDetails({ ...bookDetails, imageurl: e.target.value })} />
                  </div>
                  <div className='mb-3'><input type="text" value={bookDetails.price} className='bg-white rounded w-full p-2 placeholder-gray-300' placeholder='Price' name="" id="" onChange={(e) => setBookDetails({ ...bookDetails, price: e.target.value })} />
                  </div>
                  <div className='mb-3'><input type="text" value={bookDetails.dprice} className='bg-white rounded w-full p-2  placeholder-gray-300' placeholder='Discount Price' name="" id="" onChange={(e) => setBookDetails({ ...bookDetails, dprice: e.target.value })} />
                  </div>
                  <div className='mb-3'><textarea rows={5} value={bookDetails.abstract} type="text" className='bg-white rounded w-full p-2 placeholder-gray-300' placeholder='Abstract' name="" id="" onChange={(e) => setBookDetails({ ...bookDetails, abstract: e.target.value })} />
                  </div>
                </div>
                <div>
                  <div className='mb-3'><input type="text" value={bookDetails.publisher} className='bg-white rounded placeholder-gray-300 w-full p-2' placeholder='Publisher' name="" id="" onChange={(e) => setBookDetails({ ...bookDetails, publisher: e.target.value })} />
                  </div>
                  <div className='mb-3'><input type="text" value={bookDetails.language} className='bg-white rounded w-full p-2 placeholder-gray-300' placeholder='Language' name="" id="" onChange={(e) => setBookDetails({ ...bookDetails, language: e.target.value })} />
                  </div>
                  <div className='mb-3'><input type="text" value={bookDetails.isbn} className='bg-white rounded w-full p-2 placeholder-gray-300' placeholder='ISBN' name="" id="" onChange={(e) => setBookDetails({ ...bookDetails, isbn: e.target.value })} />
                  </div>
                  <div className='mb-3'><input type="text" value={bookDetails.category} className='bg-white rounded w-full p-2  placeholder-gray-300' placeholder='Category' name="" id="" onChange={(e) => setBookDetails({ ...bookDetails, category: e.target.value })} />
                  </div>

                  <div className="mb-3 flex justify-center items-center w-full mt-10">
                    {!preview ? <label htmlFor="imagefile">
                      <input type="file" id='imagefile' style={{ display: "none" }} onChange={(e) => handleUpload(e)} />
                      <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="no image" style={{ height: "200px", width: "200px" }} />
                    </label> :
                      <img src={preview} alt="no image" style={{ height: "200px", width: "200px" }} />}


                  </div>

                  {preview && <div className='flex justify-center items-center'>
                    {previewList?.map((item) => (
                      <img src={item} alt="no image" style={{ width: "70px", height: "70px" }} className='mx-3' />
                    )
                    )}
                    {previewList.length < 3 && <label htmlFor="imagefile">
                      <input type="file" id='imagefile' style={{ display: "none" }} onChange={(e) => handleUpload(e)} />
                      <FontAwesomeIcon icon={faSquarePlus} className='fa-2x shadow ms-3 text-gray-500' />
                    </label>}
                  </div>}

                </div>

              </div>
              <div className='flex justify-end items-center mt-3'>
                <button onClick={handleReset} className='bg-amber-600 text-black hover:border hover:border-amber-600 hover:bg-amber-300 hover:text-amber-700 rounded px-3 py-2 mr-3'>Reset</button>
                <button onClick={handleSubmit} className='bg-green-600 text-white hover:border hover:border-green-600 hover:bg-green-300 hover:text-green-700 rounded px-3 py-2'>Submit</button>
              </div>
            </div>

          </div>}



        {bookstatus &&
          <div className='p-10 my-20 shadow rounded'>
            <div className='bg-gray-200 p-4 rounded'>
              <div className='md:grid grid-cols-[3fr_1fr] gap-10'>
                <div>
                  <h1 className='text-3xl'>Harry Potter</h1>
                  <h2>J K Rowling</h2>
                  <h3 className='text-blue-600'> $ 13</h3>
                  <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ad repudiandae accusantium provident harum neque iusto dolorum doloremque tenetur, suscipit, qui laudantium delectus, est ut itaque laborum a. In, exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores officia incidunt laboriosam iusto sint deleniti accusantium quam enim eveniet iste amet reprehenderit minima, autem pariatur repellat dolore quis consequuntur error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit sequi aliquam tempora modi illum, praesentium, perferendis dolor, sed provident nobis? Ex iusto aliquam libero sunt repellendus id obcaecati ullam.</p>
                  <div className='flex'>
                    <img src="https://www.culvereq.com/wp-content/uploads/2024/11/PENDING-STAMP.png" alt="no image" style={{ height: "60px" }} />
                    <img src="https://png.pngtree.com/png-vector/20230604/ourmid/pngtree-approved-stamp-with-green-color-vector-png-image_7120039.png" alt="no image" style={{ height: "60px" }} />
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/021/433/029/small_2x/sold-rubber-stamp-free-png.png" alt="no image" style={{ height: "60px" }} />
                  </div>
                </div>
                <div>
                  <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJqtU6OsrfptDb8ZfEWiyNppWsJiMGXFTygF9mGy9axlV_-tXKHfHPKIZIHWM1sM352Q&usqp=CAU" alt="no image" />
                  <div className='flex justify-end mt-4'>
                    <button className='bg-red-600 text-white px-3 py-2 hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600 rounded'>
                      Delete
                    </button>
                  </div>
                </div>

              </div>

            </div>

            <div className='flex justify-center items-center flex-col'>
              <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" style={{ height: "300px" }} alt="no image" />
              <p className='text-red-600 text-2xl'>No books added yet.</p>
            </div>
          </div>}



        {purchaseStatus && <div>
          <div className='bg-gray-200 p-4 rounded'>
            <div className='md:grid grid-cols-[3fr_1fr] gap-10'>
              <div>
                <h1 className='text-3xl'>Harry Potter</h1>
                <h2>J K Rowling</h2>
                <h3 className='text-blue-600'> $ 13</h3>
                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ad repudiandae accusantium provident harum neque iusto dolorum doloremque tenetur, suscipit, qui laudantium delectus, est ut itaque laborum a. In, exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores officia incidunt laboriosam iusto sint deleniti accusantium quam enim eveniet iste amet reprehenderit minima, autem pariatur repellat dolore quis consequuntur error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit sequi aliquam tempora modi illum, praesentium, perferendis dolor, sed provident nobis? Ex iusto aliquam libero sunt repellendus id obcaecati ullam.</p>
              </div>
              <div>
                <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJqtU6OsrfptDb8ZfEWiyNppWsJiMGXFTygF9mGy9axlV_-tXKHfHPKIZIHWM1sM352Q&usqp=CAU" alt="no image" />

              </div>

            </div>

          </div>

          <div className='flex justify-center items-center flex-col'>
            <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" style={{ height: "300px" }} alt="no image" />
            <p className='text-red-600 text-2xl'>No books purchased yet.</p>
          </div>
        </div>}



      </div>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
      <Footer />
    </>
  )
}

export default Profile