import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { LoginForm } from './LoginForm';
import { Link, redirect, useNavigate } from 'react-router-dom';

const Main = () => {
  
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = null;
    // checkInfo(user);
    
  }, []);
  

  const loginBox = (user) => {
    if (!user) {
      return (
        <Button>
          login
        </Button>
      )
    }
    else {
      return (
        <div>
          <Button>
            My info
          </Button>
          <Button>
            My Post
          </Button>
          <Button>
            My Reply
          </Button>
        </div>
      )
    }
  }

  return (
    <div>
      hello
      {loginBox(user)}
    </div>
    
  )
}

export default Main;
