import React from 'react';
import { Modal, Button } from "react-bootstrap";

const ModalPopup =(props)=>(
    <div>
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{props.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
            <Button onClick={props.handleClose}>OK</Button>
        </Modal.Footer>

    </Modal>
    </div>
)

export default ModalPopup;