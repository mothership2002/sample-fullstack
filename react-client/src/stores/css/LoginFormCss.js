import { atom } from "recoil";

export const loginFomrCss = atom({
  key: 'loginFomrCss',
  default: {
    // 공통 처리 해야함
    mainContainerStyle: [
      'd-flex', 
      'flex-column', 
      'justify-content-sm-center', 
      'align-items-sm-center',
      'min-height'
    ],

    containerBorderStyle: [
      'd-flex',
      'justify-content-sm-center',
      'flex-column',
      'square',
      'border-4',
      'border',
      'rounded-4',
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
    ],

    validateContainerSize: {
      marginTop: '1rem',
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