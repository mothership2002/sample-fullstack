export default class Utils {
  constructor() {
  }
  
  showWaitingCursorCss(flag, str) {
    const cursorWait = 'cursor-wait ';

    if (flag) {
      return cursorWait + str;
    }
    return str
  }

  controlCursorShape(shape) {
    document.body.style.cursor = shape;
  }
  
}


