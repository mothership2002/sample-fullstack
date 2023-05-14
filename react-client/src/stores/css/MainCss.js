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

    navLinkStyle: [
      'hover-nav-link',
      'bg-primary-subtle',
      'rounded-3',
    ],

    navLinkStyleHover: [
      'bg-primary',
      'text-white',
    ],

    navStyle: [
      'width-100',
      'justify-content-md-between',
      'p-4',
      'rounded-3',
      'bg-gradient',
      'bg-light',
    ],

    addAccountNavStyle: [
      'hover-under-line',
      'text-primary-emphasis',
      'nav-link',
    ],

    navLinkElement: [
      'nav-link',

    ]

  }
});