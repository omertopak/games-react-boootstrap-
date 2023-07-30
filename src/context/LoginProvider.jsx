import React, { createContext } from 'react'
import { useState } from 'react';
import { useContext } from "react"




export const memory=createContext() //1 hafza olusturuldu

//console.log(memory);



const LoginProvider = ({children}) => { //3 children buradan geliyor
    const [user, setUser] = useState({email:"",password:""})  //4 heryerden veri akisini saglamak icin degisken
  return (
    <memory.Provider value={{user,setUser}}>{children}</memory.Provider> //2provider yapisi ile memory i sarmallayici yaptik ve icine childrenlari sarmalattik

    //5 user setuser a her yerden ulasilabilir artik
  )
}
export const useLoginContext = () => {
  return useContext(memory)
}

export default LoginProvider