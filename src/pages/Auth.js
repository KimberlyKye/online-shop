import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Container>
        <h2 style={{ textAlign: 'center', width: '100%' }}>
          {isLogin ? 'Log in Melanie Store' : 'Welcome to Melanie Store!'}
        </h2>
        <Container className='d-flex justify-content-center align-items-center p-3'>
          <Card style={{ width: 600 }} className='p-3'>
            <Form className='d-flex flex-column'>
              <Form.Control className='mt-2' placeholder='Enter your e-mail' />
              <Form.Control
                className='mt-2'
                placeholder='Enter your password'
              />
              <Button className='mt-3' variant={'outline-success'}>
                {isLogin ? 'Log in' : 'Create new account'}
              </Button>
            </Form>
            {isLogin ? (
              <div className='mt-2'>
                Haven't account yet?{' '}
                <NavLink to={REGISTRATION_ROUTE}>Sign up</NavLink>
              </div>
            ) : (
              <div className='mt-2'>
                Already have an account?{' '}
                <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
              </div>
            )}
          </Card>
        </Container>
      </Container>
    </Container>
  )
}

export default Auth
