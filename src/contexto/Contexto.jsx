import { createContext, useState } from "react";

export const Contexto = createContext();

export const Datos=({children})=>{
   const [user,setuser]=useState("")
   const [login,setlogin]=useState(false)
   const [data,setdata]=useState([])
   const [update,setupdate]=useState(true)
   const [usuarioId,setUsuarioId]=useState("")
   

   return (
    <Contexto.Provider value={{user,setuser,login,setlogin,data,setdata,update,setupdate,usuarioId,setUsuarioId}} >
        {children}
    </Contexto.Provider>
   )

}