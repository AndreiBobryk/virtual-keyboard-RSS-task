import { code } from './data.js';

function animationPressedKey() {
  document.addEventListener('keydown', (e) => {
    if (code.includes(e.code)) {
      document.querySelector(`[data="${e.code}"]`).classList.add('key_pressed');
    }
  });
  document.addEventListener('keyup', (e) => {
    if (code.includes(e.code)) {
      document.querySelector(`[data="${e.code}"]`).classList.remove('key_pressed');
    }
  });
}

export default animationPressedKey;
