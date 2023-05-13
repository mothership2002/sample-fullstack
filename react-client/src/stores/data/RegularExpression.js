import { atom } from "recoil";


export const regularExpression = atom({
  key: 'regularExpression',
  default: {
    email: '^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$',
    password: '',
  }
})