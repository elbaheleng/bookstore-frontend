import React from 'react'
import Footer from '../../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import SidebarAdmin from '../components/SidebarAdmin'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie'
import { toast, ToastContainer } from 'react-toastify'
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


function AdminHome() {
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ]
  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ]

  return (
    <>
      <HeaderAdmin />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div className='bg-blue-100 flex flex-col items-center p-5'>
          <SidebarAdmin />
        </div>
        <div className='p-10'>
          <div className='md:grid grid-cols-3'>
            <div className=' px-5'>
              <div className='bg-blue-900 p-3 flex justify-evenly text-white rounded mb-3'>
                <FontAwesomeIcon icon={faBook} className='fa-3x' />
                <div className='text-center px-3'>
                  <h1 className='text-md'>Total Number of Books</h1>
                  <h1 className='text-3xl'>100+</h1>
                </div>
              </div>
            </div>
            <div className=' px-5'>
              <div className='bg-green-900 p-3 flex justify-evenly text-white rounded mb-3'>
                <FontAwesomeIcon icon={faUsers} className='fa-3x' />
                <div className='text-center px-3'>
                  <h1 className='text-md'>Total Number of Users</h1>
                  <h1 className='text-3xl'>100+</h1>
                </div>
              </div>
            </div>
            <div className=' px-5'>
              <div className='bg-amber-900 p-3 flex justify-evenly text-white rounded mb-3'>
                <FontAwesomeIcon icon={faUserTie} className='fa-3x' />
                <div className='text-center px-3'>
                  <h1 className='text-md'>Total Number of Employees</h1>
                  <h1 className='text-3xl'>100+</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='md:grid grid-cols-2 mt-10'>
            <div className='w-full h-80'>
              <ResponsiveContainer width={"100%"} height={"100%"}>  {/* to make chart responsive wrt parent tag */}
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />  {/*grid using dashes 3px thick 3 px gap */}
                  <XAxis dataKey="name" />  {/* displays label based on dataKey value */}
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" /> {/*dataKey value is taken to display the bar, color is given in fill */}
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className='w-full h-80'>
              <ResponsiveContainer width={"100%"} height={"100%"}>
                <PieChart>
                  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> {/*cx,cy - to place horizontally and vertically center */}
                  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>

      </div>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
      <Footer />
    </>
  )
}

export default AdminHome