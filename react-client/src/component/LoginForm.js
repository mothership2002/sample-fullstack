import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import { useRecoilValue } from 'recoil'
import { loginFomrCss } from '../stores/css/LoginFormCss';
import { validateMessage } from '../stores/data/LoginValidateMessage';
import { regularExpression } from '../stores/data/RegularExpression';

export const LoginForm = () => {

  // store
  const css = useRecoilValue(loginFomrCss);
  const message = useRecoilValue(validateMessage);
  const regExpStr = useRecoilValue(regularExpression)

  // onMounted
  useEffect(() => {
    console.log(' 여기서 로컬 스토리지 확인하는 로직 들어갈 예정');
  }, [])

  // use variable
  const [validation, setValidation] = useState(null);
  const [submitFlag, setSubmitFlag] = useState(false);

  const [emailAccount, setEmailAccount] = useState('');
  const [password, setPassword] = useState('');

  const regExp = new RegExp(regExpStr.email);
  
  const changeEmailValue = (e) => {
    setEmailAccount(e.target.value);
  }
  const changePassword = (e) => {
    setPassword(e.target.value);
  }
  
  const submit = async () => {
    if (!regExp.test(emailAccount)) {
      setValidation(message.invalidEmail);
      return;
    }

    if (password.length < 8) {
      setValidation(message.invalidPassword);
      return;
    }

    beforeConnectApi();

    // 조회 api
    const err = await testPromise(3000);
    if (err) {
      controlFlag();
      setValidation(message.nonExistentAccount);
    }
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
    controlFlag();
    setValidation(message.progressLogin);
  }
  
  const controlFlag = () => {
    setSubmitFlag(prevSubmitFlag => !prevSubmitFlag);
  }
  return (
    <div className={css.containerBorderStyle.map((style) => style).join(' ')}
      style={css.containerSize}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" maxLength={20} placeholder="Enter email" onChange={changeEmailValue} readOnly={submitFlag} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" maxLength={20} placeholder="Password" onChange={changePassword} readOnly={submitFlag} />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Save account" />
      </Form.Group>

      <div
        className={css.validateContainerStyle.map((style) => style).join(' ')}
        style={css.validateContainerSize}
      >
        <Form.Text className={submitFlag ? css.progressLogin : css.failedLogin}>
          { validation }
        </Form.Text>

      </div>

      <Button onClick={submit}>
        Login
      </Button>
    </div>
  )
}