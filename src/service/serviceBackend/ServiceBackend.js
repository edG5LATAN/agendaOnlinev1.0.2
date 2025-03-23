import axios from "axios"


const urlBack=import.meta.env.VITE_API_BACKEND

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

export const actualizarContactoUnidad=(datos,id,urlRe)=>{
  axios.put(urlBack+"contacto/actualizar/"+id,datos)
  .then(res=>{
    urlRe("/inicio")
  })
  .catch(error=>{
    console.log(error)
  })
}

export const buscarContactoPorNombre=(nombre,setdata,data,setupdate,update)=>{
  const resultado = data.filter(item => item.contacto.toLowerCase().includes(nombre.toLowerCase()));  if(resultado!=[]){
      setdata(resultado)
      console.log(data)
  }
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

export const logout=(setlogin,setUsuarioId,setdata)=>{
  axios.post(urlBack+"login/logout")
  .then(res=>{
    setlogin(false)
    setUsuarioId("")
    setdata([])
  })
  .catch(error=>console.log(error))
}

export const crearUsuario=(datos,alertOk)=>{
  axios.post(urlBack+"usuario/crear",datos)
  .then(res=>{
    alertOk()
  })
  .catch(error=>{
    console.log(error)
  })
}
