import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_contenedor d-flex fixed-top bg-body-tertiary pb-2 bg-opacity-75">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <Link
            className="link-success nav-link active"
            aria-current="page"
            to={"/"}
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
            <li>
              <Link className="dropdown-item" to={"/actualizar"}>
                Actualizar
              </Link>
            </li>
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
                <form className="d-flex justify-content-between" role="search">
                  <input
                    className="form-control me-1 w-100"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </li>

          </ul>
        </li>
      </ul>
      <div className="position-absolute top-0 end-0">
        <button class="m-1 btn btn-outline-danger" type="button">
          LogOut
        </button>
      </div>
    </div>
  );
}

export default Header;
