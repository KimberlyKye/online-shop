import { Modal, Button, Form } from 'react-bootstrap'
import React from 'react'

const CreateType = ({ show, onHide }) => {
  return (
    <Modal size='lg' centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add new type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={'Enter type name'} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant={'outline-danger'}>
          Close
        </Button>
        <Button onClick={onHide} variant={'outline-success'}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateType
