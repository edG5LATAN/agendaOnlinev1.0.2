import React from "react";
import './Portada.css'


function Portada({ user }) {


  return (
    <>
      {
        user != "" || user != undefined
          ?
          <div>
            <div className="d-flex flex-column justify-content-center portada_contenedor">
              <div className="portada_imagen">
                <img
                  className="w-100 h-100 portada_img"
                  src={user.imagen}
                  alt=""
                />
              </div>
              <div className="portada_textos">
                <h2>{user.user}</h2>
                <h4>{user.telefono}</h4>
                <p>
                  {user.correo}
                </p>
                <p className="text-justify">
                  {user.direccion}
                </p>
              </div>
            </div>
          </div>

          :
          <p>cargando</p>
      }
    </>
  );
}

export default Portada;
