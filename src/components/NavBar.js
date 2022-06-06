import React, { useContext } from 'react'
import { Context } from '..'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  const navigate = useNavigate()
  return (
    <Navbar bg='info' variant='light'>
      <Container>
        <Navbar.Brand style={{ color: 'white' }} href={SHOP_ROUTE}>
          Melanie Store
        </Navbar.Brand>
        {user.isAuth ? (
          <Nav className='ml-auto'>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin panel
            </Button>
            <Button variant={'outline-light'} className='ms-3'>
              Log out
            </Button>
          </Nav>
        ) : (
          <Nav className='ml-auto'>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(LOGIN_ROUTE)}
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
