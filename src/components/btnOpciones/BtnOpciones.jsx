import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function BtnOpciones(props) {

  const cokieNavigate=useNavigate()
   
  const {icono,color,mensaje,titulo,enviar} = props

  const enviarOpcion=()=>{
    if(enviar==null||enviar==""){
      return
    }else{
      cokieNavigate(`/${enviar}`)
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
