import React, { useContext, useEffect, useState } from "react";
import "./Inicio.css";
import Portada from "../portada/Portada";
import Contactos from '../contactos/Contactos'
import { traerContactos, traerUsuario } from "../../service/serviceBackend/ServiceBackend";
import { Contexto } from "../../contexto/Contexto";



function Inicio() {

  const {data,setdata,update,setupdate,usuarioId}= useContext(Contexto)
  const [user,setuser]=useState([])

  useEffect(() => {
    traerUsuario(setuser,usuarioId)
  }, [])

  useEffect(()=>{
    traerContactos(setdata,usuarioId);
  },[update])


  return (
    <div className="inicio_contenedor container">
      <div className="inicio_portada">
        {
          user!=null&&user!=""
          ?
          <Portada user={user} />
          :
          <div>
            cargando..
          </div>
          }
      </div>
      <div className="inicio_contacto hid">
        {
          data!=[]||data!=undefined
          ?
          data.map((res,i)=>{
            return <Contactos key={i} data={res} setupdate={setupdate} update={update} />
          }) 
          :
          <p>cargando</p>
        }
      </div>
    </div>
  );
}

export default Inicio;
