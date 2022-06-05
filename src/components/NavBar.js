import React, { useContext } from 'react'
import { Context } from '..'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  return (
    <Navbar bg='info' variant='light'>
      <Container>
        <Navbar.Brand style={{ color: 'white' }} href={SHOP_ROUTE}>
          Melanie Store
        </Navbar.Brand>
        {user.isAuth ? (
          <Nav className='ml-auto'>
            <Button variant={'outline-light'}>Admin panel</Button>
            <Button
              variant={'outline-light'}
              onClick={() => {
                user.setIsAuth(false)
              }}
              className='ms-4'
            >
              Log out
            </Button>
          </Nav>
        ) : (
          <Nav className='ml-auto'>
            <Button
              variant={'outline-light'}
              onClick={() => {
                user.setIsAuth(true)
              }}
            >
              Log in
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
})

export default NavBar
