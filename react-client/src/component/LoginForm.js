import React, { useEffect, useState } from 'react'
import { Button, FormCheck, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { loginFomrCss } from '../stores/css/LoginFormCss';
import { validateMessage } from '../stores/data/LoginValidateMessage';
import { regularExpression } from '../stores/data/RegularExpression';
import '../assets/css.css';

export const LoginForm = () => {

  // cursor css
  const cursorWait = 'cursor-wait ';

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
    document.body.style.setProperty('cursor', 'wait', 'important');
    console.log(submitFlag);
    const err = await testPromise(39);
    document.body.style.cursor = 'auto';

    if (err) {
      controlFlag();
      setValidation(message.nonExistentAccount);
    }
    
    // 성공 시 jwt 사용 예정
    console.log(saveLogin);
    console.log(emailAccount);

    // 메인 페이지로 리다이렉트

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
      <FormGroup className="mb-3" controlId="formBasicEmail" >
        <FormLabel bsPrefix={submitFlag ? cursorWait + 'label' : 'label'}>
          Email address
        </FormLabel>
        <FormControl type="email" maxLength={20}
          placeholder="Enter email"
          onChange={changeEmailValue}
          disabled={submitFlag}
          bsPrefix={submitFlag ? cursorWait + 'form-control' : 'form-control'} />
      </FormGroup>

      <FormGroup className="mb-3" controlId="formBasicPassword">
        <FormLabel bsPrefix={submitFlag ? cursorWait + 'label' : 'label'}>
          Password
        </FormLabel>
        <FormControl type="password"
          maxLength={20} placeholder="Password"
          onChange={changePassword} 
          disabled={submitFlag}
          bsPrefix={submitFlag ? cursorWait + 'form-control' : 'form-control'}/>
      </FormGroup>

      <FormGroup controlId="formBasicCheckbox" >
        <FormCheck type="checkbox" label="Save account"
          onChange={changeSaveLogin} 
          disabled={submitFlag}
          bsPrefix={submitFlag ? cursorWait + 'form-check' : 'form-check'}
        />
      </FormGroup>

      <div
        className={css.validateContainerStyle.map((style) => style).join(' ')}
        style={css.validateContainerSize}
      >
        <FormText className={submitFlag ? css.progressLogin : css.failedLogin}>
          { validation }
        </FormText>

      </div>

      <Button onClick={submit} 
        disabled={submitFlag}>
        Login
      </Button>
    </div>
  )
}