import React, { useEffect, useState } from "react";
import "./Inicio.css";
import Portada from "../portada/Portada";
import Contactos from '../contactos/Contactos'
import { traerContactos } from "../../service/serviceBackend/ServiceBackend";



function Inicio() {

  const [data,setdata]=useState([])

  useEffect(() => {
    traerContactos(setdata);
  }, [])
  


  return (
    <div className="inicio_contenedor container">
      <div className="inicio_portada">
        <Portada />
      </div>
      <div className="inicio_contacto ">
        {
          data!=[]&&data!=undefined
          ?
          data.map((res,i)=>{
            return <Contactos key={i} data={res} />
          }) 
          :
          <p>cargando</p>
        }
      </div>
    </div>
  );
}

export default Inicio;
