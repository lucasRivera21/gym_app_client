import React, { createContext, useState } from 'react'

export const TokenContext = createContext()

export function TokenContexProvider({ children }) {

    const [token, setToken] = useState("")
    const [auth, setAuth] = useState(false)
    return (
        <TokenContext.Provider value={{ token, setToken, auth, setAuth }} >
            {children}
        </TokenContext.Provider>
    )
}
