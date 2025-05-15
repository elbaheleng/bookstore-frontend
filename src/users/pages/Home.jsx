import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Home() {
  const [index, setindex] = useState(0)
  const authorimages = [
    "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?semt=ais_hybrid&w=740",
    "https://img.freepik.com/premium-photo/photo-smiley-businesswoman-posing-outdoor-with-arms-crossed_198067-26977.jpg",
    "https://img.freepik.com/premium-photo/photo-smiley-businessman-posing-outdoor-with-arms-crossed-copy-space_198067-19086.jpg",
  ];
  const prev = () =>{
    if (index == 0){
      setindex(authorimages.length-1)
    } else {
      setindex(index-1)
    }
  }
  const next = () =>{
    if (index == authorimages.length-1){
      setindex(0)
    } else {
      setindex(index+1)
    }
  }


  return (
    <div>
      <Header />
      <header className='flex justify-center items-center'>
        <div id='main' className='flex justify-center items-center w-full'>
          <div className='md:grid grid-cols-3 w-full'>
            <div></div>
            <div className='text-white flex justify-center items-center flex-col px-5'>
              <h1 className='text-5xl'>Wonderful Gifts</h1>
              <p>Give your family and friends a book</p>
              <div className='flex mt-10 w-full'>
                <input className='p-2 bg-white placeholder-gray-500 rounded-3xl w-full mr-1 ml-1' type="text" placeholder='Search Books' />
                <FontAwesomeIcon className='text-blue-800' icon={faMagnifyingGlass} style={{ marginTop: '13px', marginLeft: '-35px' }} />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </header>
      {/* New Arrivals */}
      <section>
        <div className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5 '>
          <h2 className='text-center mt-5'>NEW ARRIVALS</h2>
          <p className='text-center mb-5'>Explore Our Latest Collection</p>
          <div className='md:grid grid-cols-4 w-full gap-15'>
            <div className='p-3 shadow-md'>
              <img src="https://m.media-amazon.com/images/I/71y4X5150dL.jpg" alt="book image" style={{ width: '100%', height: "250px" }} />
              <div className='flex justify-center items-center mt-3 flex-col'>
                <p className='text-blue-700'>Dan Brown</p>
                <h3>The Da Vinci Code</h3>
                <p> $18</p>
              </div>
            </div>
            <div className='p-3 shadow'>
              <img src="https://m.media-amazon.com/images/I/71y4X5150dL.jpg" alt="book image" style={{ width: '100%', height: "250px" }} />
              <div className='flex justify-center items-center mt-3 flex-col'>
                <p className='text-blue-700'>Dan Brown</p>
                <h3>The Da Vinci Code</h3>
                <p> $18</p>
              </div>
            </div>
            <div className='p-3 shadow'>
              <img src="https://m.media-amazon.com/images/I/71y4X5150dL.jpg" alt="book image" style={{ width: '100%', height: "250px" }} />
              <div className='flex justify-center items-center mt-3 flex-col'>
                <p className='text-blue-700'>Dan Brown</p>
                <h3>The Da Vinci Code</h3>
                <p> $18</p>
              </div>
            </div>
            <div className='p-3 shadow'>
              <img src="https://m.media-amazon.com/images/I/71y4X5150dL.jpg" alt="book image" style={{ width: '100%', height: "250px" }} />
              <div className='flex justify-center items-center mt-3 flex-col'>
                <p className='text-blue-700'>Dan Brown</p>
                <h3>The Da Vinci Code</h3>
                <p> $18</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center my-5'>
            <Link to={'/all-Books'}><button className='bg-blue-900 text-white px-3 py-2 hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Explore More</button></Link>
          </div>
        </div>
      </section>
      {/* Featured Authors */}
      <section>
        <div className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5 '>
          <div className='md:grid grid-cols-2 w-full'>
            <div className='flex flex-col justify-center items-center'>
              <h4>FEATURED AUTHORS</h4>
              <h3 className='text-2xl'>Captivates with every word</h3>
              <p className='mt-6 text-justify'>Authors in a bookstore application are the visionaries behind the books that fill the shelves, each contributing their own unique voice, creativity, and perspective to the world of literature. Whether writing fiction, non-fiction, poetry, or educational works, authors bring stories, ideas, and knowledge to life in ways that resonate with readers of all backgrounds.
              </p>
              <p className='mt-5 text-justify'>
                Their work spans a wide array of genres, from thrilling mysteries and heartwarming romances to thought-provoking memoirs and insightful self-help books. Through their words, authors not only entertain and inform but also inspire and challenge readers to think deeply, reflect, and grow. In a bookstore application, authors' works become accessible to readers everywhere, offering a diverse and rich tapestry of voices and experiences, all of which contribute to the evolving landscape of modern literature.</p>

            </div>
            <div className='px-10 pt-8 flex justify-center items-center'>
            <FontAwesomeIcon onClick={prev} className='me-2' icon={faChevronLeft} />
              <img className='w-full' src={authorimages[index]} alt="no image" />
              <FontAwesomeIcon onClick={next} className='ms-2' icon={faChevronRight} />

            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div  className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5 '>
        <h4>TESTIMONIALS</h4>
        <h3 className='text-2xl'>See What Others Are Saying</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2q83JcZgPQfNlAnwAJkBJ-eS9OK7UUzJ5Q&s" className='mt-3' alt="no image" style={{width:"150px", height:"150px",borderRadius:"50%"}} />
        <p className='mt-3'>Treesa Joseph</p>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur in nisi veniam a recusandae aliquam autem consectetur commodi voluptatem corporis, ipsam, delectus, repellendus laboriosam temporibus expedita dolores labore ut inventore!</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home