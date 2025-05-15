import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faGear, faHouse, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'



function SidebarAdmin() {
    const [HomeStatus, setHomeStatus] = useState(false)
    const [BookStatus, setBookStatus] = useState(false)
    const [CareersStatus, setCareerStatus] = useState(false)
    const [SettingsStatus, setSettingsStatus] = useState(false)
    const [SidebarStatus, setSidebarsStatus] = useState(false)
    

    const navigate = useNavigate()
    const filter = (data) => {
        if (data == 'home') {
            navigate('/admin-home')
        }
        else if (data == 'books') {
            navigate('/admin-books')
        }
        else if (data == 'careers') {
            navigate('/admin-careers')
        }
        else if (data == 'settings') {
            navigate('/admin-settings')
        }
        else {
            navigate('/*')
        }
    }

    useEffect(() => {

        // console.log(location.pathname);
        if (location.pathname == '/admin-home') {
            setHomeStatus(true)
        }
        else if (location.pathname == '/admin-books') {
            setBookStatus(true)
        }
        else if (location.pathname == '/admin-careers') {
            setCareerStatus(true)
        }
        else if (location.pathname == '/admin-settings') {
            setSettingsStatus(true)
        }
        else {
            console.log('Page not found');
        }
    }, [])
    return (
        <>
            <div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no image" style={{ height: "150px", width: "150px" }} />
                    <h3 className='text-xl mt-5'>Username</h3>
                    <div className='md:hidden'><FontAwesomeIcon onClick={()=>setSidebarsStatus(!SidebarStatus)} icon={faBars} className='fa-2x mt-3 text-blue-600 ' /></div>
                </div>
                <div className={SidebarStatus ?'my-5':'my-5 hidden md:block'}>
                    <div className='mb-3'>
                        <input type="radio" id='home' name='filter' readOnly checked={HomeStatus} />
                        <label htmlFor="home" className='ms-3' onClick={() => filter('home')}> <FontAwesomeIcon icon={faHouse} className='me-2' />Home</label>
                    </div>
                    <div className='mb-3'>
                        <input type="radio" id='allbooks' name='filter' readOnly checked={BookStatus} />
                        <label htmlFor="allbooks" className='ms-3' onClick={() => filter('books')}> <FontAwesomeIcon icon={faBook} className='me-2' />All Books</label>
                    </div>
                    <div className='mb-3'>
                        <input type="radio" id='careers' name='filter' readOnly checked={CareersStatus} />
                        <label htmlFor="careers" className='ms-3' onClick={() => filter('careers')}> <FontAwesomeIcon icon={faShoppingBag} className='me-2' />Careers</label>
                    </div>
                    <div className='mb-3'>
                        <input type="radio" id='settings' name='filter' readOnly checked={SettingsStatus} />
                        <label htmlFor="settings" className='ms-3' onClick={() => filter('settings')}> <FontAwesomeIcon icon={faGear} className='me-2' />Settings</label>
                    </div>
                </div>


            </div>
        </>
    )
}

export default SidebarAdmin