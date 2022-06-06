import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const CreateBrand = ({ show, onHide }) => {
  return (
    <Modal size='lg' centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add new brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={'Enter brand name'} />
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

export default CreateBrand
