import React, { createContext, useState } from 'react'
export const searchKeyContext = createContext('')
export const adminProfileUpdateStatusContext = createContext('')
export const userProfileUpdateStatusContext = createContext('')


function Contexttoshare({ children }) {
    const [searchKey, setsearchKey] = useState('')
    const [adminProfileUpdateStatus, setAdminProfileUpdateStatus] = useState({})
    const [userProfileUpdateStatus, setUserProfileUpdateStatus] = useState({})

    return (
        <userProfileUpdateStatusContext.Provider  value={{userProfileUpdateStatus, setUserProfileUpdateStatus}}>
            <adminProfileUpdateStatusContext.Provider value={{adminProfileUpdateStatus, setAdminProfileUpdateStatus}}>
                <searchKeyContext.Provider value={{searchKey, setsearchKey}}>
                    {
                        children
                    }
                </searchKeyContext.Provider>
            </adminProfileUpdateStatusContext.Provider>
        </userProfileUpdateStatusContext.Provider>
    )
}

export default Contexttoshare