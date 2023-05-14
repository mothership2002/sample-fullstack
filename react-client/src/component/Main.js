import React, { useEffect, useState } from 'react'
import { Container, Nav } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { mainCss } from '../stores/css/MainCss';

const Main = () => {
  
  // recoil
  const css = useRecoilValue(mainCss);

  // variable
  const [user, setUser] = useState(false);

  useEffect(() => {
    const user = null;
    
  }, []);
  

  const toggleClass = (e) => {
    const classList = e.target.classList;
    css.NavLinkStyle.forEach((style) => {
      style !== 'hover-nav-link' && style !== 'rounded-3' ? classList.toggle(style) : null
    });
    css.NavLinkStyleHover.forEach((style) => classList.toggle(style));
  }

  const loginBox = (user) => {
    if (!user) {
      return (
        <>
          <Nav.Item>
            <Nav.Link bsPrefix={css.addAccountNavStyle.map((style) => style).join(' ')} href='#'>
              Don&apos;t you have Account?
            </Nav.Link> 
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/login" className={css.NavLinkStyle}
              onMouseEnter={toggleClass}
              onMouseLeave={toggleClass}>
              Login
            </Nav.Link>
          </Nav.Item>
        </>
      )
    }
    else {
      return (
        <>
          <Nav.Item>
            <Nav.Link href="/home">My info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">My Post</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">My Reply</Nav.Link>
          </Nav.Item>
        </>
      )
    }
  }

  return (
    <Container className={css.mainContainerStyle.map((style) => style).join(' ')}>
      <div className={css.headerStyle.map((style) => style).join(' ')}>
        <div>
          title
        </div>
        <div className='d-flex'>
          <Nav className="justify-content-end" activeKey="/home">
            {loginBox(user)}
          </Nav>
        </div>
      </div>
    </Container>
    
  )
}

export default Main;
