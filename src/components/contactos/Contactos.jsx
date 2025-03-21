import React from "react";
import "./Contactos.css";
import BtnOpciones from "../btnOpciones/BtnOpciones";

function Contactos({data, update, setupdate}) {
  return (
    <div className="contactos_contenedor mt-2 overflow-hidden d-flex w-100 border border-dark-subtle rounded-5">
      <div className="contactos_opciones">
        <BtnOpciones
          icono={"bi bi-trash text-danger"}
          mensaje={"si desea borrar este contacto precione aceptar"}
          titulo={"borrar"}
          color={"danger"}
          id={data.id}
          enviar={"/"}
          update={update}
          setupdate={setupdate}
        />
        <BtnOpciones
          icono={"bi bi-pencil-square text-warning"}
          mensaje={"si desea actualizar este contacto precione aceptar"}
          titulo={"actualizar"}
          color={"warning"}
          enviar={"actualizar"}
          id={data.id}
        />
      </div>
      <div className="w-50 contactos_contenedor_imagen">
        <img
          className="w-100 h-100 "
          src={data.imagen}
          alt="imagen de contactos"
        />
      </div>
      <div className="w-75 px-3 contacto_datos_nuevo">
        <h3>{data.contacto}</h3>
        <h5>Tel: {data.telefono}</h5>
        <div className="">
          <p className="text-center p-0 m-0 fw-bold" htmlFor="direccion">
            Direccion
          </p>
          <p className="p-0 m-0">ciudad: {data.direccion.ciudad}</p>
          <p className="p-0 m-0">colonia: {data.direccion.colonia}</p>
        </div>
        <div className="mt-4 d-flex justify-content-around p-1">
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
