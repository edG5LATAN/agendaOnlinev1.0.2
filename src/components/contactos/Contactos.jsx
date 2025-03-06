import React from "react";
import "./Contactos.css";
import BtnOpciones from "../btnOpciones/BtnOpciones";

function Contactos({data}) {
  return (
    <div className="contactos_contenedor mt-2 overflow-hidden d-flex w-100 border border-dark-subtle rounded-5">
      <div className="contactos_opciones">
        <BtnOpciones
          icono={"bi bi-trash text-danger"}
          mensaje={"si desea borrar este contacto precione aceptar"}
          titulo={"borrar"}
          color={"danger"}
        />
        <BtnOpciones
          icono={"bi bi-pencil-square text-warning"}
          mensaje={"si desea actualizar este contacto precione aceptar"}
          titulo={"actualizar"}
          color={"warning"}
          enviar={"actualizar"}
        />
      </div>
      <div className="w-50">
        <img
          className="w-100 h-100 object-fit-fill"
          src={data.imagen}
          alt="imagen de contactos"
        />
      </div>
      <div className="w-75 px-3">
        <h2>{data.nombre}</h2>
        <h4>Tel: {data.telefono}</h4>
        <div className="">
          <p className="text-center p-0 m-0" htmlFor="direccion">
            Direccion
          </p>
          <p className="p-0 m-0">{data.direccion.ciudad}</p>
          <p className="p-0 m-0">{data.direccion.colonia}</p>
        </div>
        <div className="d-flex justify-content-around p-1">
          <a href="#" className="contactos_iconos">
            <i class="fs-4 bi bi-facebook"></i>
          </a>
          <a href="#" className="contactos_iconos">
            <i class="fs-4 bi bi-whatsapp text-success contactos_iconos"></i>
          </a>
          <a href="#" className="contactos_iconos">
            <i class="fs-4 bi bi-instagram text-danger contactos_iconos"></i>
          </a>
          <a href="#" className="contactos_iconos">
            <i class="fs-4 bi bi-tiktok text-black contactos_iconos"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contactos;
