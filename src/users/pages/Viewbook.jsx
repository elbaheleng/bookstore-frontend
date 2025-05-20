import React, { useEffect, useState } from 'react'
import { viewABookApi } from '../../services/allApis'
import { useParams } from 'react-router-dom'
import { faBackward, faEye, faSquareArrowUpRight, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { serverurl } from '../../services/serverurl'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Viewbook() {
  const [modalStatus, setModalStatus] = useState(false)

  const [viewBookDetails, setViewBookDetails] = useState({})
  const { id } = useParams()
  //console.log(id);

  const viewBook = async (id) => {
    const result = await viewABookApi(id)
    //console.log(result);
    if (result.status == 200) {
      setViewBookDetails(result.data)
      console.log(result.data);

    }

  }

  useEffect(() => {
    viewBook(id)
  }, [])
  return (
    <>
      <Header />
      <div className='shadow-xl/20 m-5'>
        <div className='md:grid grid-cols-[1fr_3fr]'>
          <div>
            <img className='p-10' src={viewBookDetails?.imageurl} height={"200px"} alt="no image" />
          </div>
          <div>
            <div className='text-end'><FontAwesomeIcon  onClick={() => setModalStatus(true)} className='text-gray-600 pe-5' icon={faEye} /></div>
            <div className='text-center'>
              <h1 className='text-3xl'>{viewBookDetails?.title}</h1>
              <p className='text-blue-700'>{viewBookDetails?.author}</p>
            </div>
            <div className='md:grid grid-cols-3 m-5 p-5'>
              <div>
                <p className='mb-3'>Publisher:{viewBookDetails?.publisher}</p>
                <p className='mb-3'>Seller Mail:{viewBookDetails?.userMail}</p>
              </div>
              <div>
                <p className='mb-3'>Language:{viewBookDetails?.language}</p>
                <p className='mb-3'>Real Price:${viewBookDetails?.price}</p>
              </div>
              <div>
                <p className='mb-3'>No. of pages:{viewBookDetails?.noofpages}</p>
                <p className='mb-3'>ISBN:{viewBookDetails?.isbn}</p>
              </div>
            </div>
             <div>
                <p className='mx-5 px-5 md:m-5 md:p-5 text-justify'>{viewBookDetails?.abstract}</p>
              </div>
              <div className='flex mb-5 me-5 justify-center md:justify-end'>
                <Link to={'/all-Books'} ><button className='bg-blue-800 text-white px-5 py-2 border border-blue-800 hover:bg-white hover:text-blue-800 p-3 rounded ms-3 md:mt-0 mt-5 mb-3'> Back <FontAwesomeIcon icon={faBackward} /></button></Link>
                <button className='bg-green-800 text-white px-5 py-2 border border-green-800 hover:bg-white hover:text-green-800 p-3 rounded ms-3 md:mt-0 mt-5 mb-3'> Buy ${viewBookDetails?.dprice}</button>
              </div>
          </div>

        </div>
      </div>
      {modalStatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              {/* title of modal */}
              <div className="bg-gray-900 p-4 flex justify-between sm:px-6">
                <h1 className='text-white text-2xl'>Uploaded Images</h1>
                <FontAwesomeIcon onClick={() => setModalStatus(false)} className='text-white fa-2x' icon={faSquareXmark} />
              </div>
              {/* boby of modal */}
              <div className="bg-white px-4 pt-3 pb-4 sm:p-6 sm:pb-4">
                <p>Camera Click of the book </p>
                <div className="grid grid-cols-3">
                  {viewBookDetails?.uploadedImage.map((item) => (
                    <div className='p-3 '>
                      <img src={`${serverurl}/upload/${item}`} alt="" />
                    </div>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
      <Footer />
    </>
  )
}

export default Viewbook