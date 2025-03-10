import { listaContactos } from "../serviceCarrucel/Service"


export const traerContactos=(setdata)=>{
  setdata(listaContactos)
}

export const nuevoContacto=(setdata,datos)=>{

  setdata([...listaContactos,...datos])

}