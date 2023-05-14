import React, { useEffect, useState } from 'react'
import { Container, Nav } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { mainCss } from '../stores/css/MainCss';
import Utils from '../common/Utils';

const Main = () => {

  // utils
  const utils = new Utils();
  
  // recoil
  const css = useRecoilValue(mainCss);

  // variable
  const [user, setUser] = useState(false);

  useEffect(() => {
    const user = null;
    
  }, []);
  

  const toggleClass = (e) => {
    const classList = e.target.classList;
    css.navLinkStyle.forEach((style) => {
      style !== 'hover-nav-link' && style !== 'rounded-3' ? classList.toggle(style) : null
    });
    css.navLinkStyleHover.forEach((style) => classList.toggle(style));
  }

  const loginBox = (user) => {
    if (!user) {
      return (
        <>
          <Nav.Item>
            <Nav.Link bsPrefix={utils.returnCssClassArray(css.addAccountNavStyle)} href='#'>
              Don&apos;t you have Account?
            </Nav.Link> 
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/login" className={css.navLinkStyle}
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
    <Container className={utils.returnCssClassArray(css.mainContainerStyle)}>
        <Nav className={utils.returnCssClassArray(css.navStyle)} activeKey="/home">
          <div>
            <Nav.Item>
              <Nav.Link href='#' bsPrefix={utils.returnCssClassArray(css.navLinkElement)}>Post Blog</Nav.Link>
            </Nav.Item>
          </div>
          <div className='d-flex'>
            {loginBox(user)}
          </div>
        </Nav>
    </Container>
    
  )
}

export default Main;
