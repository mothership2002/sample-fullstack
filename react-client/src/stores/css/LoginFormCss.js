import { atom } from "recoil";

export const loginFomrCss = atom({
  key: 'loginFomrCss',
  default: {
    mainSize: {
      minHeight: '800px',
    },

    mainContainerStyle: [
      'd-flex', 
      'flex-column', 
      'justify-content-sm-center', 
      'align-items-sm-center',
    ],

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
      padding: '16px',
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
    ],

    findAccountLinkCss: [
      'd-flex',
      'mb-2',
      'justify-content-sm-center',
      'align-items-sm-center',
    ],

    navStyle: {
      fontSize: '13px',
      minHeight: '19.5px'
    },

    navClassName: [
      'font-weight-bolder',
      'text-primary',
    ]
  }
  
});