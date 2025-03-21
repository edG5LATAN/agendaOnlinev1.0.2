import { useContext } from "react";
import { Contexto } from "../../contexto/Contexto";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouted =({children})=>{
    const {login}=useContext(Contexto)
    if(!login){
        return <Navigate to="/" />
    }

    return <Outlet />

}