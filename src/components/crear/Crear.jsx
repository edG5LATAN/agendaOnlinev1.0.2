import React, { useState } from "react";
import "./Crear.css";
import { crearNuevoContacto } from "../../service/serviceBackend/ServiceBackend";
import { useNavigate } from "react-router-dom";

function Crear() {

  const urlRe=useNavigate()
  const [nombre,setnombre]=useState("")
  const [telefono,settelefono]=useState("")
  const [imagen,setimagen]=useState("")
  const [ciudad,setciudad]=useState("")
  const [colonia,setcolonia]=useState("")
  const [facebook,setfacebook]=useState("")
  const [whatsapp,setwhatsapp]=useState("")
  const [instagran,setinstagran]=useState("")
  const [tiktok,settiktok]=useState("")

  const guardarContacto=()=>{
    if(verificarData()){
      let datos={
        "contacto":nombre,
        "telefono":telefono,
        "imagen":imagen,
        "direccion":{
          "ciudad":ciudad,
          "colonia":colonia,
        },
        "redes":{
          "whatsapp":whatsapp,
          "facebook":facebook,
          "instagran":instagran,
          "tiktok":tiktok,
        },
        "usuario":"admin"
      }
     crearNuevoContacto(datos,urlRe)
     limpiar()
    }else{
      return
    }

  }

  const verificarData=()=>{
    if(nombre!=""&&telefono!=""&&imagen!=""&&ciudad!=""&&colonia!=""&&facebook!=""&&whatsapp!=""&&instagran!=""&&tiktok!=""){
     return true;
    }else{
      alert("rellene todos los campos")
      return false
    }
  }

  const limpiar=()=>{
    setnombre("")
    settelefono("")
    setimagen("")
    setciudad("")
    setcolonia("")
    setwhatsapp("")
    setfacebook("")
    setinstagran("")
    settiktok("")
  }


  return (
    <div className="crear_contenedor container d-flex justify-content-center align-items-center">
      <div className="crear_tabla">
        <div className="bg-success-subtle p-2 rounded-4 mb-2">
          <h3 className="text-center p-3 text-uppercase">Crear Contacto</h3>
          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingnombre"
              placeholder="Ingrese nombre"
              onChange={(e)=>setnombre(e.target.value)}
              value={nombre}
            />
            <label for="floatingnombre">Nombre</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingTelefono"
              placeholder="ingree el telefono"
              onChange={(e)=>settelefono(e.target.value)}
              value={telefono}
            />
            <label for="floatingTelefono">Telefono</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingImagen"
              placeholder="ingree url imagen"
              onChange={(e)=>setimagen(e.target.value)}
              value={imagen}
            />
            <label for="floatingImagen">Url-Imagen</label>
          </div>
        </div>
        <div className="bg-dark-subtle p-2 rounded-4 mb-2">
          <h3 className="text-center pb-2 pt-3">Direccion</h3>
          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingCiudad"
              placeholder="ingrese su ciudad"
              onChange={(e)=>setciudad(e.target.value)}
              value={ciudad}
            />
            <label for="floatingCiudad">Ciudad</label>
          </div>

          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingColonia"
              placeholder="ingree su colonia"
              onChange={(e)=>setcolonia(e.target.value)}
              value={colonia}
            />
            <label for="floatingColonia">Colonia</label>
          </div>
        </div>

        <div className="bg-danger-subtle p-2 rounded-4 mb-2">
          <h3 className="text-center pb-2 pt-3">Redes sociales</h3>
          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingFacebook"
              placeholder="Facebook"
              onChange={(e)=>setfacebook(e.target.value)}
              value={facebook}
            />
            <label for="floatingFacebook">Facebook</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingWhatsaap"
              placeholder="ingree el telefono"
              onChange={(e)=>setwhatsapp(e.target.value)}
              value={whatsapp}
            />
            <label for="floatingWhatsaap">Whatsapp</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingInstagran"
              placeholder="ingree el telefono"
              onChange={(e)=>setinstagran(e.target.value)}
              value={instagran}
            />
            <label for="floatingInstagran">Instagran</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingTikTok"
              placeholder="ingree el telefono"
              onChange={(e)=>settiktok(e.target.value)}
              value={tiktok}
            />
            <label for="floatingTikTok">TikTok</label>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <button onClick={guardarContacto} className='btn btn-success'>Crear</button>
        </div>
      </div>
    </div>
  );
}

export default Crear;
