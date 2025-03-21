import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { actualizarContactoUnidad, contactoPorUnidad } from '../../service/serviceBackend/ServiceBackend'

function Actualizar() {

  const { id } = useParams()
  const urlRe=useNavigate()
  const [data, setdata] = useState([])
  const [nombre, setnombre] = useState("")
  const [telefono, settelefono] = useState("")
  const [imagen, setimagen] = useState("")
  const [ciudad, setciudad] = useState("")
  const [colonia, setcolonia] = useState("")
  const [facebook, setfacebook] = useState("")
  const [whatsapp, setwhatsapp] = useState("")
  const [instagran, setinstagran] = useState("")
  const [tiktok, settiktok] = useState("")

  useEffect(() => {
    contactoPorUnidad(setdata, id);
  }, [id]);

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      convertirInformacion();
    }
  }, [data]);


  const convertirInformacion = () => {
    setnombre(data.contacto)
    settelefono(data.telefono)
    setimagen(data.imagen)
    setciudad(data.direccion.ciudad)
    setcolonia(data.direccion.colonia)
    setwhatsapp(data.redes.whatsapp)
    setfacebook(data.redes.facebook)
    setinstagran(data.redes.instagran)
    settiktok(data.redes.tiktok)
  }

  const limpiar = () => {
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

  const actualizarContacto = () => {
    if (id!=""&&id!=null) {
      let datos = {
        "contacto": nombre,
        "telefono": telefono,
        "imagen": imagen,
        "direccion": {
          "ciudad": ciudad,
          "colonia": colonia,
        },
        "redes": {
          "whatsapp": whatsapp,
          "facebook": facebook,
          "instagran": instagran,
          "tiktok": tiktok,
        },
        "usuario": "admin"
      }
      actualizarContactoUnidad(datos,id,urlRe)
      limpiar()
    } else {
      return
    }
  }

  return (
    <>
      {
        data != null || data != undefined
          ?
          <div className="crear_contenedor container d-flex justify-content-center align-items-center">
            <div className="crear_tabla">
              <div className="bg-success-subtle p-2 rounded-4 mb-2">
                <h3 className="text-center p-3 text-uppercase">Actualizar Contacto</h3>
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingnombre"
                    placeholder="Ingrese nombre"
                    onChange={(e) => setnombre(e.target.value)}
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
                    onChange={(e) => settelefono(e.target.value)}
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
                    onChange={(e) => setimagen(e.target.value)}
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
                    onChange={(e) => setciudad(e.target.value)}
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
                    onChange={(e) => setcolonia(e.target.value)}
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
                    onChange={(e) => setfacebook(e.target.value)}
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
                    onChange={(e) => setwhatsapp(e.target.value)}
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
                    onChange={(e) => setinstagran(e.target.value)}
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
                    onChange={(e) => settiktok(e.target.value)}
                    value={tiktok}
                  />
                  <label for="floatingTikTok">TikTok</label>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <button onClick={actualizarContacto} className='btn btn-primary'>Actualizar</button>
              </div>
            </div>
          </div>
          :
          <div>
            <p>cargando</p>
          </div>
      }
    </>

  )
}

export default Actualizar
