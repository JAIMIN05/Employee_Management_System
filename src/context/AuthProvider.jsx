import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // localStorage.clear()
    const [userData, setUserData] = useState(null);

    useEffect(() => {
       const {employees} = getLocalStorage()
       setUserData(employees) 
    }, [])
    
    // Add a new useEffect to update localStorage when userData changes
   useEffect(() => {
    if (userData) {
        localStorage.setItem('employees', JSON.stringify(userData))
    }
}, [userData])
    
    return (
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;