import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrandsBar from '../components/BrandsBar'
import DeviceList from '../components/DeviceList'
import TypeBar from '../components/TypeBar'

const Shop = () => {
  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandsBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  )
}

export default Shop
