import { dataEn, dataRu } from './data.js';
import stateKeyboard from './classKeyboardStation.js';
import isCapsLockPressed from './capsLock.js';

function shiftKey() {
  let data;
  let flagShift = false;

  const checkLang = () => {
    const { currentLang } = stateKeyboard.state;
    if (currentLang === 'en') {
      data = dataRu;
      stateKeyboard.state.currentLang = 'ru';
    } else {
      data = dataEn;
      stateKeyboard.state.currentLang = 'en';
    }

    localStorage.setItem('lang', stateKeyboard.state.currentLang);
  };

  const isKeyShiftPressed = (state) => {
    let regUp;
    let regDown;
    if (state) {
      regUp = 1;
      regDown = 0;
    } else {
      regUp = 0;
      regDown = 1;
    }

    if (!stateKeyboard.state.capsLock) {
      document.querySelectorAll('.key').forEach((key, index) => {
        const item = key;
        item.innerText = data[index][regUp];
      });
    } else {
      document.querySelectorAll('.key').forEach((key, index) => {
        const item = key;
        if (
          index === 0
        || (index >= 15 && index <= 26)
        || (index >= 30 && index <= 40)
        || (index >= 43 && index <= 51)
        ) {
          item.innerText = data[index][regDown];
        } else {
          item.innerText = data[index][regUp];
        }
      });
    }
  };

  checkLang();
  let flag = false;

  document.addEventListener('keydown', (event) => {
    if (event.shiftKey) {
      flagShift = true;

      isKeyShiftPressed(true);

      flag = true;
      if (flag && event.altKey) {
        flag = false;

        checkLang();
        document.querySelectorAll('.key').forEach((key, index) => {
          const item = key;
          item.innerText = data[index][0];
        });
      }
    }

    if (event.code === 'CapsLock') {
      isCapsLockPressed();
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.shiftKey !== true && flagShift) {
      flagShift = false;
      isKeyShiftPressed(false);
    }
  });
}

export default shiftKey;
