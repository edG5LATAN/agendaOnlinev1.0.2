import React from "react";
import "./Contactos.css";
import BtnOpciones from "../btnOpciones/BtnOpciones";

function Contactos() {
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
          className="w-100 h-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVi6K_o9-qFCKHa6cATG2zRlrW1ua3md9F1M8z-thSW_vTKFjInyuDnz-Nrg6S368zCXY&usqp=CAU"
          alt="imagen de contactos"
        />
      </div>
      <div className="w-75 px-3">
        <h2>nombre</h2>
        <h4>telefono</h4>
        <div className="">
          <p className="text-center" htmlFor="direccion">
            Direccion
          </p>
          <p>ciudad</p>
          <p>colonia</p>
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
