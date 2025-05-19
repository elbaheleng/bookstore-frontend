import React, { createContext, useState } from 'react'
export const searchKeyContext = createContext('')

function Contexttoshare({ children }) {
    const [searchKey, setsearchKey] = useState('')
    return (
        <searchKeyContext.Provider value={{searchKey, setsearchKey}}>
            {
                children
            }
        </searchKeyContext.Provider>
    )
}

export default Contexttoshare