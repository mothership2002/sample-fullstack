import React, { useEffect, useState } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { mainCss } from '../stores/css/MainCss';
import Utils from '../common/Utils';
import NavComponent from './NavBar/NavComponent';

const Main = () => {

  // variable
  const [user, setUser] = useState(true);
  const [username, setUsername] = useState('username');

  useEffect(() => {
    
  }, []);
  
  return (
    <NavComponent user={user} username={username} />
   )
}

export default Main;