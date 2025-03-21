import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import {borrarContacto} from '../../service/serviceBackend/ServiceBackend.js'

function BtnOpciones(props) {

  const cokieNavigate=useNavigate()
   
  const {icono,color,mensaje,titulo,enviar,id,setupdate,update} = props

  const enviarOpcion=()=>{
    if(titulo=="borrar"){
      borrarContacto(id,setupdate,update)
      handleClose()
    }
    if(titulo=="actualizar"){
      cokieNavigate(`/${enviar}/${id}`)
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="link" className="fs-5" onClick={handleShow} >
          <i class={icono}></i>
        </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-uppercase">{titulo} contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mensaje}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button onClick={enviarOpcion} variant={color}>{titulo}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BtnOpciones;
