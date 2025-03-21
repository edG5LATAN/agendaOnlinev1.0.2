import axios from "axios"


const urlBack="http://localhost:8080/v1/"

axios.defaults.withCredentials=true;

export const traerContactos=(setdata,usuarioId)=>{
  axios.get(urlBack+"contacto/buscarPorUsuario/"+usuarioId)
  .then(res=>{
    setdata(res.data)
  })
  .catch(error=>{
    console.log(error)
  })
}

export const traerUsuario=(setuser,id)=>{
  axios.get(urlBack+"usuario/unidad/"+id)
  .then(res=>{
    setuser(res.data)
  })
  .catch(error=>{
    console.log(error)
  })
}

export const crearNuevoContacto=(datos,urlRe)=>{
  axios.post(urlBack+"contacto/crear",datos)
  .then(res=>{
    urlRe("/inicio")
    console.log(res.status)})
  .catch(error=>console.log(error))
}

export const borrarContacto=(id,setupdate,update)=>{
  axios.delete(urlBack+"contacto/borrar/"+id)
  .then(res=>{
    setupdate(!update)
    console.log(res.status)})
  .catch(error=>console.log(error))
}

export const contactoPorUnidad=(setdata,id)=>{
  axios.get(urlBack+"contacto/unidad/"+id)
  .then(res=>{
    setdata(res.data)})
  .catch(error=>console.log(error))
}

export const actualizarContactoUnidad=(data,id,urlRe)=>{
  axios.put(urlBack+"contacto/actualizar/"+id,data)
  .then(res=>{
    urlRe("/inicio")
  })
  .catch(error=console.log(error))
}

export const buscarContactoPorNombre=(nombre,setdata)=>{
   axios.get(urlBack+"contacto/buscarPorNombre/"+nombre)
   .then(res=>{
     setdata(res.data)
   })
   .catch(error=>console.log(error))
}

export const loguearse=(data,page,alertOk,alertInvalido,setlogin,setUsuarioId)=>{
  axios.post(urlBack+"login/loguearse",data)
  .then(res=>{
    setUsuarioId(res.data)
    setlogin(true)
    alertOk()
    page("/inicio")
  })
  .catch(error=>{
    alertInvalido()
  })
}

export const logout=(setlogin)=>{
  axios.post(urlBack+"login/logout")
  .then(res=>{
    setlogin(false)
    console.log(res.status)})
  .catch(error=>console.log(error))
}