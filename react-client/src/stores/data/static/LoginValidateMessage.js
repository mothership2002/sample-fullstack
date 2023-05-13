import { atom } from "recoil";

export const validateMessage = atom({
  key: 'validateMessage',
  default: {
    nonExistentAccount: 'Wrong Account, Check your Email or Password',
    invalidEmail: 'Invalid Email, Check your Email Form',
    invalidPassword: 'Invalid Password, Check your Password Form',
    progressLogin: 'Login in progress...'
  }
});