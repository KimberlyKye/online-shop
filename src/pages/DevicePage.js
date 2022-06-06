import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'iPhone 13 Pro',
    price: 120000,
    rating: 5,
    img: `https://avatars.mds.yandex.net/get-mpic/5313128/img_id8729390340339016423.jpeg/orig`,
  }

  const description = [
    { id: 1, title: 'Display', description: '6.8"' },
    { id: 2, title: 'RAM size', description: '5 Gb' },
    { id: 3, title: 'Camera', description: '25 Mpx' },
    { id: 4, title: 'CPU Type', description: 'Intel Core I5' },
    { id: 5, title: 'Core count', description: '2' },
    { id: 6, title: 'Battery', description: '4000' },
    { id: 7, title: 'OS', description: 'iOS' },
  ]
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2 style={{ textAlign: 'center' }}>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{
                background: `url('https://www.seekpng.com/png/full/1-15598_objects-star-png.png') no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid #7de9ff65',
            }}
          >
            <h3>From {device.price} ₽</h3>
            <Button variant={'outline-info'}>Add to the cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Specificationss</h1>

        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? '#7de9ff50' : 'transpanent',
              fontSize: 20,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  )
}

export default DevicePage
