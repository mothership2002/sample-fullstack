import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { LoginForm } from './LoginForm';

const Main = () => {
  const mainSize = {
    minHeight: '800px',
  }

  const mainContainerStyle = [
    'd-flex', 
    'flex-column', 
    'justify-content-sm-center', 
    'align-items-sm-center',
  ]

  return (
    <Container className={mainContainerStyle.map((item) => item).join(' ')}
      fluid='sm' style={mainSize}>
      <LoginForm/>
    </Container>
  )
}

export default Main;
