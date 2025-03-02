import React from "react";
import "./Inicio.css";
import Portada from "../portada/Portada";
import Contactos from '../contactos/Contactos'



function Inicio() {
  return (
    <div className="inicio_contenedor container">
      <div className="inicio_portada">
        <Portada />
      </div>
      <div className="inicio_contacto ">
      <Contactos />
      <Contactos />
      <Contactos />
      <Contactos />
      <Contactos />
      <Contactos />
      <Contactos />
      <Contactos />
      <Contactos />
      <Contactos />
      <Contactos />
      <Contactos />
      <Contactos />
      </div>
    </div>
  );
}

export default Inicio;
