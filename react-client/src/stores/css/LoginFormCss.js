import { atom } from "recoil";

export const loginFomrCss = atom({
  key: 'loginFomrCss',
  default: {

    containerBorderStyle: [
      'd-flex',
      'justify-content-sm-center',
      'flex-column',
      'square',
      'border-5',
      'border',
      'rounded',
      'border-primary'
    ],

    containerSize: {
      minWidth: '480px',
      minHeight: '320px',
      padding: '16px'
    },

    validateContainerStyle : [
      'd-flex',
      'flex-row',
      'justify-content-sm-center',
      'align-items-sm-center',
      'mb-1"',
    ],

    validateContainerSize: {
      minHeight: '25px',
      marginBottom: '.75rem'
    },

    failedLogin: [
      'text-danger',
    ],

    progressLogin: [
      'text-success'
    ]
  }
  
});