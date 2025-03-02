import React, { useState } from "react";
import "./Login.css";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const page = useNavigate();
  const [correo,setcorreo]=useState("")
  const [clave,setclave]=useState("")

  const guardar=()=>{
     if(correo!=""&&clave!=""){
       alertOk();
       return
     }else{
        alertInvalido()
       return 
     }
  }

    const alertOk = () => {
      Swal.fire({
        title: "Login Correctamente!",
        icon: "success",
        draggable: true,
      });
    };
  
    const alertInvalido=()=>{
      Swal.fire({
        icon: "error",
        title: "Falla...",
        text: "correo o usuario Invalido!",
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
              <div className="login_formulario">
                <form className="p-0 m-0 ">
                  <div className="input-group flex-nowrap p-0 mb-3">
                    <span className=" input-group-text" id="addon-wrapping">
                      <i class="bi bi-envelope-at-fill p-0 m-0 "></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Correo"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                      value={correo}
                      onChange={(e)=>setcorreo(e.target.value)}
                    />
                  </div>
                  <div className="input-group flex-nowrap mb-3">
                    <span className=" input-group-text" id="addon-wrapping">
                      <i class="bi bi-unlock-fill"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="addon-wrapping"
                      value={clave}
                      onChange={(e)=>setclave(e.target.value)}   
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-success" onClick={guardar}>Login</button>                  
                  </div>
                </form>
              </div>

              <div className="mt-4 ">
                <div className="d-flex justify-content-center links">
                  Don't have an account? .
                  <Link
                    to={"/singnup"}
                    className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    Sign Up
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

export default Login;
