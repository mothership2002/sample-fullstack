import { atom } from "recoil";

export const mainCss = atom({
  key: 'mainCss',
  default: {
    // 공통 처리 해야함
    mainContainerStyle: [
      'd-flex', 
      'flex-column', 
      'justify-content-sm-center', 
      'align-items-sm-center',
      'min-height'
    ],

    NavLinkStyle: [
      'hover-nav-link',
      'bg-primary-subtle',
      'rounded-3',
    ],

    NavLinkStyleHover: [
      'bg-primary',
      'text-white',
    ],

    addAccountNavStyle: [
      'hover-under-line',
      'text-primary-emphasis',
      'nav-link'
    ],

    headerStyle: [
      'd-flex',
    ]
  }
});