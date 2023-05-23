import React, { useEffect, useState } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { useRecoilValue } from 'recoil';
import { accountBox } from '../../stores/css/AccountBoxCss';
import Utils from '../../common/Utils';

const AccountBox = (prop) => {

  // utils
  const utils = new Utils();
  // css
  const css = useRecoilValue(accountBox);
  
  const [user, setUser] = useState();
  const [username, setUsername] = useState('username');

  useEffect(() => {
    setUser(prop.user);
    setUsername(prop.username);
    console.log(prop.username);
    console.log(username);
  }, [username])

  const toggleClass = (e) => {
    const classList = e.target.classList;
    css.navLinkStyle.forEach((style) => {
      style !== 'hover-nav-link' ? classList.toggle(style) : null
    });
    css.navLinkStyleHover.forEach((style) => classList.toggle(style));
  }

  if (!username) {
    return (
      <>
        <Nav.Item>
          <Nav.Link
            bsPrefix={utils.returnCssClassArray(css.addAccountNavStyle)} href='#'
          >
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
        <NavDropdown 
          title={username}
          id='nav-dropdown'
        >
          <NavDropdown.Item href='#'>
            My info
          </NavDropdown.Item>
          <NavDropdown.Item href='#'>
            My Post
          </NavDropdown.Item>
          <NavDropdown.Item href='#'>
            My Reply
          </NavDropdown.Item>
        </NavDropdown>
      </>
    )
  }
}

export default AccountBox;