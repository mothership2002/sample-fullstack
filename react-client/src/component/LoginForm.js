import React, { useEffect, useState } from 'react'
import { Alert, Button, Container, Form, Nav } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { loginFormCss } from '../stores/css/LoginFormCss';
import { validateMessage } from '../stores/data/static/LoginValidateMessage';
import { regularExpression } from '../stores/data/static/RegularExpression';
import { useNavigate } from "react-router-dom";

import Utils from '../common/Utils';

const LoginForm = () => {

  // cursor css
  const utils = new Utils();

  // store
  const css = useRecoilValue(loginFormCss);
  const message = useRecoilValue(validateMessage);
  const regExpStr = useRecoilValue(regularExpression)

  //navigate
  const navigate = useNavigate();

  // onMounted
  useEffect(() => {
    console.log(' 여기서 로컬 스토리지 확인하는 로직 들어갈 예정');
  }, [])

  // use variable
  const [validation, setValidation] = useState(null);
  const [submitFlag, setSubmitFlag] = useState(false);
  const [findAccountLinkFlag, setFindAccountLinkFlag] = useState(false);
  const [alertFlag, setAlertFlag] = useState(false);
  const [alertColor, setAlertColor] = useState('info')
  
  const [emailAccount, setEmailAccount] = useState('');
  const [password, setPassword] = useState('');
  const [saveLogin, setSaveLogin] = useState(false);

  const regExp = new RegExp(regExpStr.email);
  
  const changeEmailValue = (e) => {
    setEmailAccount(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }

  const changeSaveLogin = () => {
    setSaveLogin(prev => !prev);
  }
  
  const submit = async () => {
    // if (!regExp.test(emailAccount)) {
    //   setValidation(message.invalidEmail);
    //   return;
    // }

    // if (password.length < 8) {
    //   setValidation(message.invalidPassword);
    //   return;
    // }

    beforeConnectApi();
    // 조회 api

    setAlertFlag(true);
    setAlertColor('info')
    utils.controlCursorShape('wait');
    const err = await testPromise(4000);
    utils.controlCursorShape('auto');
    
    if (err) {
      setAlertColor('danger');
      setFindAccountLinkFlag(true);
      toggleFlag();
      setValidation(message.nonExistentAccount);
    }
    
    // 성공 시 jwt 사용 예정
    console.log('save', saveLogin);
    console.log('email', emailAccount);

    // 로컬 스토리지에 저장 되는 로직
    if (saveLogin) {
      console.log('it is true');
    }

    // 메인 페이지로 이동
    // navigate('/main');
  }

  //api 
  const testPromise = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, ms)
    });
  }

  const beforeConnectApi = () => {
    toggleFlag();
    setValidation(message.progressLogin);
  }
  
  const toggleFlag = () => {
    setSubmitFlag(prevSubmitFlag => !prevSubmitFlag);
  }

  const findAccountLink = () => {
    if (findAccountLinkFlag) {
      return (
        <Nav activeKey="/"
          bsPrefix={utils.returnCssClassArray(css.findAccountLinkCss)}
          style={css.navStyle}>
          <div className='font-letter-spacing'>
            Forgot your &nbsp;
          </div>
          <Nav.Item>
            <Nav.Link href="/find/email" disabled={submitFlag}
              bsPrefix={utils.returnCssClassArray(css.navClassName)}>
              Email
            </Nav.Link>
          </Nav.Item>
          <div className='font-letter-spacing'>
            &nbsp; or &nbsp;
          </div>
          <Nav.Item>
            <Nav.Link href='/find/password' disabled={submitFlag}
              bsPrefix={utils.returnCssClassArray(css.navClassName)}>
              Password
            </Nav.Link>
          </Nav.Item>
          <div className='font-letter-spacing'>
            &nbsp; ?
          </div>
        </Nav>
      )
    }
    else {
      return (
        <div className={utils.returnCssClassArray(css.findAccountLinkCss)}
        style={css.navStyle}>
        </div>
      )
    }
  }

  return (
    <Container
      className={utils.returnCssClassArray(css.mainContainerStyle)}
      fluid='sm'>
      <div className={utils.returnCssClassArray(css.containerBorderStyle)}
        style={css.containerSize}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label bsPrefix={utils.showWaitingCursorCss(submitFlag, 'label')}>
            Email address
          </Form.Label>
          <Form.Control type="email" maxLength={20}
            placeholder="Enter email"
            onChange={changeEmailValue}
            disabled={submitFlag}
            bsPrefix={utils.showWaitingCursorCss(submitFlag, 'form-control')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label bsPrefix={utils.showWaitingCursorCss(submitFlag, 'label')}>
            Password
          </Form.Label>
          <Form.Control type="password"
            maxLength={20} placeholder="Password"
            onChange={changePassword} 
            disabled={submitFlag}
            bsPrefix={utils.showWaitingCursorCss(submitFlag, 'form-control')}/>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox" >
          <Form.Check
            bsPrefix={utils.showWaitingCursorCss(submitFlag, 'form-check')}
          >
            <Form.Check.Input type="checkbox"
              onChange={changeSaveLogin}
              disabled={submitFlag}
              bsPrefix={utils.showWaitingCursorCss(submitFlag, 'form-check-input')}
            />
            <Form.Check.Label
              bsPrefix={utils.showWaitingCursorCss(submitFlag, 'form-check-label')} >
              Save account
            </Form.Check.Label>
          </Form.Check>
        </Form.Group>

        <div
          className={utils.returnCssClassArray(css.validateContainerStyle)}
          style={css.validateContainerSize}>
          <Alert show={alertFlag} variant={alertColor} key={alertColor}>
            {validation}
          </Alert>
        </div>

        {findAccountLink()}

        <Button onClick={submit} 
          disabled={submitFlag}>
          Login
        </Button>
      </div>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/" disabled={submitFlag}>Go to Main Page</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  )
}

export default LoginForm;