import React, { useEffect, useState } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { mainCss } from '../stores/css/MainCss';
import Utils from '../common/Utils';
import NavComponent from './NavBar/NavComponent';
import api from '../common/ConnectAPI';

const Main = () => {

  // variable
  const [user, setUser] = useState(true);
  const [username, setUsername] = useState('username');

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    // 대충 유저 정보 정제하는 로직
    // const userJsonData = '짜잔';
    // api.post('/login', userJsonData)
  }, []);
  
  return (
    <NavComponent user={user} username={username} />
   )
}

export default Main;