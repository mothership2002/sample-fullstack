import { selectorFamily } from 'recoil'
import { loginFormCss } from '../css/LoginFormCss'
import { mainCss } from '../css/MainCss';

const cssClassArray = selectorFamily({
  key: 'cssClassArray',
  get: (cssKey) => () => {

    const loginFormCssState = get(loginFormCss);
    const mainCssState = get(mainCss);

    let object = null

    // switch (componentName) {
    //   case 'loginFormCss': object = loginFormCssState;
    //     break;
    //   case 'mainCss': object = mainCssState;
    //     break;
    //   default: throw new Error('정신차려');
    // }
    
    // return object[key].map((style) => style).join(' ');
    console.log(get);
    console.log(loginFormCssState);
    console.log(mainCssState);

    return 'test';
  }
});

export default cssClassArray;
