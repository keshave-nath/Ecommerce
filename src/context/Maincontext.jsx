import React, { createContext, useState } from 'react'

export const cartContext=createContext()

export default function Maincontext({children}) {
    const[wishh,setwishh]=useState([])
    const[cartt,setcartt]=useState([])
  return (
    <cartContext.Provider value={{wishh,setwishh,cartt,setcartt}}>
        {children}
    </cartContext.Provider>
  )
}
