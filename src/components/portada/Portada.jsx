import React from "react";
import './Portada.css'
import { listaLogin } from "../../service/serviceCarrucel/Service";


function Portada() {

  
  return (
    <>
    {
      listaLogin.map((res,i)=>{
        return<div className="d-flex flex-column justify-content-center portada_contenedor">
        <div className="portada_imagen">
          <img
            className="w-100 h-100 portada_img"
            src={res.imagen}
            alt=""
          />
        </div>
        <div className="portada_textos">
          <h2>{res.usuario}</h2>
          <h4>{res.telefono}</h4>
          <p>
            {res.direccion}
          </p>
          <p>
            {res.correo}
          </p>
        </div>
      </div>
      })
    }
    </>
    // <div className="d-flex flex-column justify-content-center portada_contenedor">
    //   <div className="portada_imagen">
    //     <img
    //       className="w-100 h-100"
    //       src="https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2014/09/01/140901154302_urano_planeta_624x351_spl.jpg.webp"
    //       alt=""
    //     />
    //   </div>
    //   <div className="portada_textos">
    //     <h2>titulo</h2>
    //     <h4>subtitulo</h4>
    //     <p>
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ea,
    //       sunt animi magni sit repudiandae.
    //     </p>
    //   </div>
    // </div>
  );
}

export default Portada;
