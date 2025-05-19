import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faUser, faBars, faAngleDown, faAddressCard, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Header() {
    const [status, setStatus] = useState(false)
    const [dropdownStatus, setDropdownStatus] = useState(false)
    const [token, settoken] = useState("")
    //console.log(token);
    

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            settoken(token)
        }
    })
    return (
        <>
            <div className='grid grid-cols-3 p-3'>
                <div className='flex items-center'>
                    <img src="https://cdn-icons-png.flaticon.com/512/8983/8983117.png" alt="logo" width={'50px'} />
                    <h1 className='text-2xl md:hidden font-bold ms-2'>BOOKSTORE</h1>
                </div>
                <div className='md:flex justify-center items-center hidden'>
                    <h1 className='text-2xl font-bold'>BOOKSTORE</h1>
                </div>
                <div className='md:flex justify-end items-center hidden'>
                    <FontAwesomeIcon className='me-2 text-2xl' icon={faInstagram} />
                    <FontAwesomeIcon className='me-2 text-2xl' icon={faTwitter} />
                    <FontAwesomeIcon className='me-4 text-2xl' icon={faFacebook} />
                    { !token  ? <Link to={'/login'}>
                        <button className='border border-black rounded px-3 py-2'><FontAwesomeIcon className='me-2' icon={faUser} />
                            Login</button>
                    </Link> :

                    
                    <div className="relative inline-block text-left">
                        <div>
                            <button type="button" onClick={() => setDropdownStatus(!dropdownStatus)} className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" className='mx-2' style={{ width: "40px" }} alt="" />
                            </button>
                        </div>


                        {dropdownStatus && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div className="py-1" role="none">
                                <Link to={'/profile'}><p className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0"><FontAwesomeIcon className='me-2' icon={faAddressCard} />Profile</p></Link>
                                <button className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1"><FontAwesomeIcon className='me-2' icon={faPowerOff} />Logout</button>
                            </div>
                        </div>}
                    </div>}





                </div>
            </div>
            <nav className='p-3 w-full bg-gray-900 text-white md:flex justify-center'>
                <div className='flex items-center justify-between px-3 md:hidden'>
                    <span onClick={() => setStatus(!status)} className='text-2xl mt-1'><FontAwesomeIcon icon={faBars} /></span>
                    {!token ? <Link to={'/login'}>
                        <button className='border border-white rounded px-3 py-2'><FontAwesomeIcon className='me-2' icon={faUser} />
                            Login</button>
                    </Link>
                    :
                    <div className="relative inline-block text-left">
                        <div>
                            <button type="button" onClick={() => setDropdownStatus(!dropdownStatus)} className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" className='mx-2' style={{ width: "40px" }} alt="" />
                            </button>
                        </div>


                        {dropdownStatus && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div className="py-1" role="none">
                                <Link to={'/profile'}><p className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"><FontAwesomeIcon className='me-2' icon={faAddressCard} />Profile</p></Link>
                                <button className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1"><FontAwesomeIcon className='me-2' icon={faPowerOff} />Logout</button>
                            </div>
                        </div>}
                    </div>}
                </div>
                <ul className={status ? 'md:flex' : 'md:flex justify-center hidden'}>
                    <Link to={'/'}><li className='mx-4 mt-2'>Home</li></Link>
                    <Link to={'/all-Books'}><li className='mx-4 mt-2'>Books</li></Link>
                    <Link to={'/careers'}><li className='mx-4 mt-2'>Careers</li></Link>
                    <Link to={'/contact'}><li className='mx-4 mt-2'>Contact</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Header