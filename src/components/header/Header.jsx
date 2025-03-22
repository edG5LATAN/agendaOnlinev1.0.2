import React, { useContext, useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { Contexto } from "../../contexto/Contexto";
import { buscarContactoPorNombre, logout } from "../../service/serviceBackend/ServiceBackend";

function Header() {

  const [nombre,setnombre]=useState("")
  const {data,setlogin,setdata,update,setupdate,setUsuarioId} = useContext(Contexto);
  
  const buscarContacto=()=>{
    if(nombre!=null&&nombre!=""){
      buscarContactoPorNombre(nombre,setdata,data,setupdate,update) 
      limpiar()
      return
    }else{
      return
    }
  }

  const cerrarCesion=()=>{
   logout(setlogin,setUsuarioId,setdata)
  }

  const limpiar=()=>{
    setnombre("")
  }

  return (
    <div className="header_contenedor d-flex fixed-top bg-body-tertiary pb-2 bg-opacity-75">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <Link
            onClick={()=>setupdate(!update)}
            className="link-success nav-link active"
            aria-current="page"
            to={"/inicio"}
          >
            <small className="fst-italic">EDTecnology.com</small>
          </Link>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            AgendaOnline
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to={"/crear"} className="dropdown-item">
                Crear
              </Link>
            </li>
            {/* <li>
              <Link className="dropdown-item" to={"/actualizar"}>
                Actualizar
              </Link>
            </li> */}
            <li>
              <Link className="dropdown-item" to={"/informacion"}>
                Infomacion
              </Link>
            </li>
            
            <li>
              <hr />
            </li>
            <li>
              <div style={{width:"250px"}} className="p-1">
                <div className="d-flex justify-content-between" role="search">
                  <input
                    className="form-control me-1 w-100"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={nombre}
                    onChange={(e)=>setnombre(e.target.value)}
                  />
                  <button onClick={buscarContacto} className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </li>

          </ul>
        </li>
      </ul>
      <div className="position-absolute top-0 end-0">
        <button onClick={cerrarCesion} class="m-1 btn btn-outline-danger" type="button">
          LogOut
        </button>
      </div>
    </div>
  );
}

export default Header;
