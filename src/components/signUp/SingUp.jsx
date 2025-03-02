import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function SingUp() {
  const [nombre, setnombre] = useState("");
  const [imagen, setimagen] = useState("");
  const [correo, setcorreo] = useState("");
  const [pass1, setpass1] = useState("");
  const [pass2, setpass2] = useState("");
  const [msj, setmsj] = useState("");

  const guardarUsuario = () => {
    if (
      nombre != "" &&
      imagen != "" &&
      correo != "" &&
      pass1 != "" &&
      pass2 != ""
    ) {

      setmsj("lucias")
      if (pass1 === pass2&&pass1!=""&&pass2!="") {
        setmsj("informacion copiada")
        alertOk()
        limpiar()
        return;
      } else {
        setmsj("error de msj")
        alertError()
        limpiar()
        return;
      }
    }else{
      alertVacio()
    }
  };

  const limpiar = () => {
    setnombre("");
    setimagen("");
    setcorreo("");
    setmsj("");
  };

  const alertOk = () => {
    Swal.fire({
      title: "Creado Correctamente!",
      icon: "success",
      draggable: true,
    });
  };

  const alertError=()=>{
    Swal.fire({
      icon: "error",
      title: "Revisa...",
      text: "no coinciden las claves.!",
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
  }

  const alertVacio=()=>{
    Swal.fire({
      icon: "error",
      title: "Falla...",
      text: "rellena todo los campos!",
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
  }

  return (
    <div className="login_component">
      <div>
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="user_card">
              <div className="d-flex justify-content-center">
                <div className="brand_logo_container">
                  <img
                    src="https://st1.uvnimg.com/dims4/default/49d4acd/2147483647/thumbnail/1024x576/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fl%2Fla_luna_es_mas_joven_de_lo_que_se_pensaba.jpg"
                    className="brand_logo object-fit-cover"
                    alt="Logo"
                  />
                </div>
              </div>
              <div className="mt-5">
                <form className="mt-5 ">
                  <div className="form-floating mb-2">
                    <input
                      aria-required
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="ingrese su nombre"
                      value={nombre}
                      onChange={(e) => setnombre(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Nombre</label>
                  </div>
                  <div className="form-floating mb-2">
                    <input
                      required
                      type="imagen"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Ingresa url imagen"
                      value={imagen}
                      onChange={(e) => setimagen(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Ingresa url img</label>
                  </div>
                  <div className="form-floating mb-2">
                    <input
                      required
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={correo}
                      onChange={(e) => setcorreo(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Ingresa Correo</label>
                  </div>
                  <div className="mb-2">
                    <div className="form-floating mb-1">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword2"
                        placeholder="Password1"
                        value={pass1}
                        onChange={(e) => setpass1(e.target.value)}
                      />
                      <label htmlFor="floatingPassword2">Password</label>
                    </div>
                    <div className="form-floating ">
                      <input
                        required
                        type="password"
                        className="form-control"
                        id="floatingPassword2"
                        placeholder="Password2"
                        value={pass2}
                        onChange={(e) => setpass2(e.target.value)}
                      />
                      <label htmlFor="floatingPassword2">Verificar Password</label>
                    </div>
                    {/* mensaje de error */}
                    <small className="fs-italic text-warning-emphasis text-center pt-0 pb-0 mb-0 mt-0 ">
                      {msj}
                    </small>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      onClick={guardarUsuario}
                      className="btn btn-success"
                    >
                      Sing Up
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-2 ">
                <div className="d-flex justify-content-center links">
                  Go to ,{" "}
                  <Link
                    to={"/"}
                    className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    LogIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
