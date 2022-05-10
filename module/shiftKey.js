import stateKeyboard from './classKeyboardStation.js';
import { dataEn, dataRu } from './data.js';

function isShiftClicked() {
  const isShiftState = (state) => {
    let data;
    if (stateKeyboard.state.currentLang === 'en') {
      data = dataEn;
    } else {
      data = dataRu;
    }

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

  document.addEventListener('mousedown', (e) => {
    if (e.target.innerText === 'Shift') {
      isShiftState(true);
    }
  });

  document.addEventListener('mouseup', (e) => {
    if (e.target.innerText === 'Shift') {
      isShiftState(false);
    }
  });
}

export default isShiftClicked;
