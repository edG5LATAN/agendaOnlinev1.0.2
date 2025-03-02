import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function BtnOpciones(props) {
   
  const {icono,color,mensaje,titulo} = props

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
          <Button variant={color}>{titulo}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BtnOpciones;
