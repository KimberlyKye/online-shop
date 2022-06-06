import React, { useContext, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from '../..'

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context)
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }

  const removeInfo = (number) => {
    setInfo(info.filter((el) => el.number !== number))
  }

  return (
    <Modal size='lg' centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mt-3'>
            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-3'>
            <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control placeholder={'Enter device name'} className='mt-3' />
          <Form.Control
            placeholder={'Enter device price'}
            type='number'
            className='mt-3'
          />
          <Form.Label className='mt-3'>Load the picture of device</Form.Label>
          <Form.Control type='file' />
          <hr />
          <Button variant={'outline-primary'} onClick={addInfo}>
            Add new specification
          </Button>
          {info.map((el) => (
            <Row className='mt-3' key={el.number}>
              <Col md={4}>
                <Form.Control placeholder={'Enter type of specification'} />
              </Col>
              <Col md={4}>
                <Form.Control placeholder={'Enter the specification'} />
              </Col>
              <Col md={4}>
                <Button
                  variant={'outline-danger'}
                  onClick={() => removeInfo(el.number)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
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

export default CreateDevice
