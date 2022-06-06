import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Context } from '..'

const BrandsBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <Row className='d-flex'>
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: 'pointer', width: 'auto' }}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          key={brand.id}
          className='p-3'
          onClick={() => {
            device.setSelectedBrand(brand)
          }}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  )
})

export default BrandsBar
