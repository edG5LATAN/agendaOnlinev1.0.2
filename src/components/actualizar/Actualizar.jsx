import React from 'react'

function Actualizar() {
  return (
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
            />
            <label for="floatingnombre">Nombre</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingTelefono"
              placeholder="ingree el telefono"
            />
            <label for="floatingTelefono">Telefono</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingImagen"
              placeholder="ingree url imagen"
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
            />
            <label for="floatingCiudad">Ciudad</label>
          </div>

          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingColonia"
              placeholder="ingree su colonia"
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
            />
            <label for="floatingFacebook">Facebook</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingWhatsaap"
              placeholder="ingree el telefono"
            />
            <label for="floatingWhatsaap">Whatsapp</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingInstagran"
              placeholder="ingree el telefono"
            />
            <label for="floatingInstagran">Instagran</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingTikTok"
              placeholder="ingree el telefono"
            />
            <label for="floatingTikTok">TikTok</label>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-primary'>Actualizar</button>
        </div>
      </div>
    </div>
  )
}

export default Actualizar
