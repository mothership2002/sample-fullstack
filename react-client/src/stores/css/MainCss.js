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
      'width-100'
    ],

    navLinkStyle: [
      'hover-nav-link',
      'bg-primary-subtle',
      'rounded-3',
      'min-width-75px',
      'text-wrap',
    ],

    navLinkStyleHover: [
      'bg-primary',
      'text-white',
      'min-width-75px',
      'rounded-3',
    ],

    navStyle: [
      'width-100',
      'justify-content-md-between',
      'p-4',
      'rounded-3',
      'bg-gradient',
    ],

    addAccountNavStyle: [
      'hover-under-line',
      'text-primary-emphasis',
      'nav-link',
    ],

    navLinkElement: [
      'nav-link',
    ],

    navDropdownMenuStyle: [
      // 'bg-primary-subtle',
      'rounded-3',
    ]

  }
});