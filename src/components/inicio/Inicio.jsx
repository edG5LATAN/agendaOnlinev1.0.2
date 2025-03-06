import React from "react";
import "./Inicio.css";
import Portada from "../portada/Portada";
import Contactos from '../contactos/Contactos'
import { listaContactos } from "../../service/serviceCarrucel/Service";



function Inicio() {




  return (
    <div className="inicio_contenedor container">
      <div className="inicio_portada">
        <Portada />
      </div>
      <div className="inicio_contacto ">
        {
          listaContactos.map((res,i)=>{
            return <Contactos key={i} data={res} />
          })
        }
      </div>
    </div>
  );
}

export default Inicio;
