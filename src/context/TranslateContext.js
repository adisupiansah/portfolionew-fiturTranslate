'use client'
import { createContext, useState, useContext } from "react";

const LanguangeContext = createContext();

export const LanguangeProvider = ({ children }) => {
    const [language, setLanguage] = useState()

    return (
        <LanguangeContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguangeContext.Provider>
    )
}

export const useLanguange = () => useContext(LanguangeContext);
