import React, { useEffect, useState } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import AccountBox from './AccountBox';

const NavComponent = (prop) => {

  const [user, setUser] = useState();
  const [username, setUsername] = useState();

  useEffect(() => {
    setUser(prop.user);
    setUsername(prop.username);
  }, [])

  return (
    <Navbar bg='light' sticky='top'>
      <Container >
        <Navbar.Brand href="#home">Post Blog</Navbar.Brand>
        <Nav className='me-auto'>
          {/* 
          <Nav.Link href="#home">Hot Post</Nav.Link>
          <Nav.Link href="#features">New Post</Nav.Link> 
          */}
          <Nav.Link href="/" active>Post</Nav.Link>
        </Nav>
        <Nav>
          {/* user는 스토어 처리 해야할지도 */}
          {/* utils을 selector 사용 가능할거 같은데 */}
          {/* user정보는 결국 스토어 써야함  */}
          <AccountBox user={user} username={username} />
        </Nav>
      </Container>
    </Navbar>
   )
}

export default NavComponent;
