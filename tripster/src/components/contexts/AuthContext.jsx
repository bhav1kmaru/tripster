import { createContext, useState } from "react";

export const AuthContext=createContext()

export default function AuthContextProvider({children}){
    
    const [isAuth,setIsAuth]=useState(false)
    const [newUser,setNewUser]=useState(false)
    
    return(<AuthContext.Provider value={{isAuth,setIsAuth,newUser,setNewUser}}>{children}</AuthContext.Provider>)
}